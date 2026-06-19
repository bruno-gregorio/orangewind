#!/usr/bin/env bash
#
# Build the Orangewind documentation as a static production bundle and publish it
# to GitHub Pages by force-updating the `gh-pages` branch.
#
# The site is a SvelteKit app served from the project sub-path
# https://<user>.github.io/orangewind/, so the build is configured with
# `BASE_PATH=/orangewind` (see packages/docs/svelte.config.js). The branch is
# updated through a throwaway git worktree, so your current checkout and working
# tree are never touched.
#
# Usage:
#   scripts/deploy-docs.sh
#
# Environment overrides:
#   BASE_PATH    sub-path the site is served from   (default: /orangewind)
#   BRANCH       branch GitHub Pages serves          (default: gh-pages)
#   REMOTE       git remote to push to               (default: origin)
#   ALLOW_DIRTY  set to 1 to deploy with a dirty working tree (default: refuse)
#
set -euo pipefail

BASE_PATH="${BASE_PATH:-/orangewind}"
BRANCH="${BRANCH:-gh-pages}"
REMOTE="${REMOTE:-origin}"

# Resolve everything relative to this script so it can be run from any directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCS_DIR="$ROOT_DIR/packages/docs"
BUILD_DIR="$DOCS_DIR/build"

cd "$ROOT_DIR"

# --- preflight ---------------------------------------------------------------
# Publish from a known commit so the deployed site is always reproducible.
if [ "${ALLOW_DIRTY:-0}" != "1" ] && [ -n "$(git status --porcelain)" ]; then
  echo "error: working tree is dirty — commit or stash first, or set ALLOW_DIRTY=1." >&2
  exit 1
fi
SOURCE_REF="$(git rev-parse --short HEAD)"

# --- build -------------------------------------------------------------------
echo "==> Building docs (BASE_PATH=$BASE_PATH)"
BASE_PATH="$BASE_PATH" bun run --cwd "$DOCS_DIR" build

# GitHub Pages runs Jekyll by default, which silently drops files and folders
# whose names start with an underscore — including SvelteKit's `_app/` bundle.
# A `.nojekyll` marker disables that processing so the assets are served as-is.
touch "$BUILD_DIR/.nojekyll"

# --- publish -----------------------------------------------------------------
# Check out the target branch into a temporary worktree, swap in the fresh
# build, commit and push. A trap guarantees the worktree is removed afterwards.
WORKTREE="$(mktemp -d)"
cleanup() {
  git worktree remove --force "$WORKTREE" 2>/dev/null || true
  rm -rf "$WORKTREE"
}
trap cleanup EXIT

if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  # Branch exists locally.
  git worktree add --force "$WORKTREE" "$BRANCH"
elif git ls-remote --exit-code --heads "$REMOTE" "$BRANCH" >/dev/null 2>&1; then
  # Branch exists on the remote but not locally — fetch and track it.
  git fetch "$REMOTE" "$BRANCH"
  git worktree add --force -B "$BRANCH" "$WORKTREE" "$REMOTE/$BRANCH"
else
  # First deploy: start the branch with no history.
  git worktree add --force --orphan -b "$BRANCH" "$WORKTREE"
fi

# Replace the branch contents wholesale with the new build (keep its .git link).
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a "$BUILD_DIR/." "$WORKTREE/"

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "==> No changes to publish — site already up to date."
else
  git -C "$WORKTREE" commit -m "docs: deploy from $SOURCE_REF"
  git -C "$WORKTREE" push "$REMOTE" "$BRANCH"
  echo "==> Published to '$BRANCH' on '$REMOTE'."
fi
