# Orangewind Documentation Website — Roadmap (TODO)

Goal: a new `packages/docs` package — a **SvelteKit** site that documents Orangewind,
**built using Orangewind itself** (dogfooding the navigation, docs layout, side-navigation,
in-page-navigation, code-snippet, suru, etc.). Use `vanilla-framework/templates/docs` as the
structural reference.

The site must guide the user through:

1. **Installation** — _SKIPPED for now_ (not yet published to npm). Stub the page only.
2. **Markup patterns** — how to write the HTML/class markup Orangewind expects.
3. **Overall UI patterns** — conventions, theming, dark mode, Tailwind interplay.
4. **A section per component.**

Reference the original Vanilla docs in `vanilla-framework/templates/docs/` (each pattern has
`index.md` with prose + section-by-section `embedded-example` live previews — we mirror that).

Follow `AGENTS.md` conventions: Bun, Svelte 5 patterns, no semicolons, single quotes, 2-space
indent, single-dash kebab-case class names, prefer padding/gap over margins. **Do not check off
tasks** — the user does that.

---

## Phase 0: Package Scaffolding

_Stand up an empty but runnable SvelteKit app wired into the monorepo._

- [ ] Create `packages/docs` as a Bun workspace package (it is already globbed by root
      `workspaces: ["packages/*"]`). Add `package.json` (`name: "docs"`, `private: true`,
      `type: "module"`, scripts `dev`/`build`/`preview`/`check`).
- [ ] Scaffold SvelteKit + Vite + Svelte 5, mirroring `packages/test-bench`
      (`svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `src/app.html`, `src/app.d.ts`).
- [ ] Add `@tailwindcss/vite` and wire Tailwind v4 (same as test-bench `vite.config.ts`).
- [ ] Add `orangewind: "workspace:orangewind"` dependency.
- [ ] Create the global stylesheet: `@import 'tailwindcss'` + `@import 'orangewind/src/index.css'`,
      imported from the root `+layout.svelte`. **Do not** add the class-based
      `@custom-variant dark` override that test-bench uses — leaving it out lets Tailwind's default
      `dark` variant (`prefers-color-scheme: dark`) drive theming, so Orangewind's internal
      `@variant dark` rules follow the OS preference automatically.
- [ ] Choose an adapter: use `@sveltejs/adapter-static` (prerendered static docs site) with
      `export const prerender = true`. Confirm `bun run --cwd packages/docs dev` serves a blank page.
- [ ] Verify lint/format pass under the monorepo `eslint`/`prettier` config.

---

## Phase 1: Docs Shell & Reusable Primitives (built with Orangewind)

_The chrome every page shares + the doc-authoring building blocks. All built from existing
Orangewind components — no new framework CSS._

- [ ] **Global navigation header** using `navigation.css` (logo, links, GitHub link, search slot).
- [ ] **Three-column docs layout** using `docs.css` (left side-nav, center content, right TOC).
- [ ] **Side navigation** using `side-navigation.css`: grouped, collapsible component index
      (mirror the phase grouping from `TODO.md`). Highlight the active route. Drawer behaviour
      on mobile (`is-drawer-expanded/collapsed`).
- [ ] **In-page navigation / Table of Contents** using `in-page-navigation.css` /
      `table-of-contents.css`: auto-generated from the page's `<h2>`/`<h3>` anchors, with
      scroll-spy active state.
- [ ] **Dark mode** — no toggle. Rely on Tailwind's default `prefers-color-scheme` handling so the
      site follows the OS theme. Just verify both themes render correctly (light/dark) across the
      shell and `<Example>` previews.
- [ ] **`<Example>` primitive** — the core doc component (mirrors Vanilla's `embedded-example`):
      renders a live preview of the markup **and** the source. Built from `code-snippet.css`
      (copy-to-clipboard button, language label). Decide preview isolation (iframe vs inline).
- [ ] **Syntax highlighting** for code blocks (recommend `shiki`), themed for light/dark.
- [ ] **Auto-anchored headings** (slugged `id`s + hover anchor links) feeding the TOC.
- [ ] **Footer** (license LGPL-3.0, links to repo, version).

---

## Phase 2: Content Pipeline & Routing

_Decide how pages are authored and structured._

- [ ] Adopt **mdsvex** so component pages can be Markdown with embedded `<Example>` Svelte
      components (closest analogue to Vanilla's `index.md` + embedded examples).
- [ ] Define route structure: `/` (home), `/docs/get-started`, `/docs/markup-patterns`,
      `/docs/ui-patterns`, and `/docs/components/[component]`.
- [ ] Create a shared `+layout.svelte` for `/docs/*` that mounts the shell from Phase 1 and
      builds side-nav + TOC from a central manifest.
- [ ] Create a **component manifest** (single source of truth: slug, title, group, status) that
      drives the side-nav, routing, and "next/prev" pagination (`pagination.css`).

---

## Phase 3: Guide Pages

- [ ] **Home / landing** page: `hero` + `suru` background, short pitch, what Orangewind is
      (Vanilla re-implemented as a Tailwind v4 plugin), quick links.
- [ ] **Get started / Installation** — _STUB ONLY (skip real install steps until published to
      npm)._ Add a notification banner: "Not yet published — install instructions coming soon."
      Leave the npm/import snippet structure ready to fill in later.
- [ ] **Markup patterns guide**: how to author Orangewind markup — the single-dash kebab-case
      class convention, state classes (`is-*`), how component classes nest, common pitfalls
      (e.g. don't combine multiple button classes), and how it composes with raw Tailwind utilities.
- [ ] **Overall UI patterns guide**: theming via CSS variables/colors, dark mode usage, the
      `@variant dark` rule, breakpoints (`sm/md/lg/xl`), spacing philosophy (padding/gap over
      margins), and Tailwind preflight interplay.

---

## Phase 4: Per-Component Documentation Pages

_One page per component, grouped to match `TODO.md`. Pull section breakdowns and copy from the
matching `vanilla-framework/templates/docs/patterns/<name>/index.md`._

**Every component page MUST include, in this order:**
1. **A live demonstration of the component** at the top — a rendered, working instance (interactive
   where applicable: a real switch toggles, a modal opens, tabs switch) shown in a realistic
   context, not just static markup. This is the headline showcase of the page.
2. A short intro describing the component and when to use it.
3. A section per variant/state, each with an `<Example>` (live preview + markup source + notes).

The Phase 1 `<Example>` primitive is the vehicle for both the headline demo and the per-variant
previews — it always shows the component **rendered and working**, alongside its source.

### Foundations & Utilities
- [ ] Typography
- [ ] Colors / Theme
- [ ] Animations
- [ ] Icons (incl. 2025/2026 additions)
- [ ] Baseline Grid & Font Metrics
- [ ] Links
- [ ] Divider

### Basic Elements
- [ ] Buttons (all variants + `is-inline/dense/small/icon`)
- [ ] Badge
- [ ] Status Label
- [ ] Chip
- [ ] Heading Icon & Muted Heading

### Forms & Inputs
- [ ] Forms (inputs, textareas, checkboxes, radios, validation)
- [ ] Switch
- [ ] Slider
- [ ] Segmented Control
- [ ] Search Box
- [ ] Search and Filter

### Intermediate Components
- [ ] Notifications
- [ ] Tooltips
- [ ] Tabs
- [ ] Breadcrumbs
- [ ] Accordion
- [ ] Pagination (incl. article pagination)
- [ ] Code Snippet

### Complex Content Blocks
- [ ] Lists & List Tree (rich / tiered / stepped)
- [ ] Tables
- [ ] Matrix
- [ ] Card
- [ ] Content Card
- [ ] Media Object / Image
- [ ] Quotes & Pull Quotes

### Layout Components & Patterns
- [ ] Strip & Section
- [ ] Divided Section
- [ ] Modal
- [ ] Contextual Menu
- [ ] In-Page Navigation & Table of Contents
- [ ] Feature Blocks (Pricing, Resources, Logo Section, CTA, Data Spotlight, Newsletter Signup)
- [ ] Blog & Article
- [ ] Hero, Tab Section, Text Spotlight, Equal Height Row

### Application Scaffolding
- [ ] Navigation
- [ ] Application Layout & Panels
- [ ] Side Navigation
- [ ] Docs Layout
- [ ] Brochure Site
- [ ] Suru
- [ ] Grid 8 & Fluid Breakout

---

## Phase 5: Polish & Ship

- [ ] Responsive pass (mobile drawer nav, collapsing TOC) across `sm/md/lg/xl` breakpoints.
- [ ] Accessibility pass (landmarks, focus order, skip-link, keyboard nav, contrast in both themes).
- [ ] Optional: client-side **search** over the component manifest (reuse `search-box.css`).
- [ ] `404` page using Orangewind components.
- [ ] Build static output (`adapter-static`) and verify all routes prerender.
- [ ] Add a root `package.json` script (e.g. `docs`) to run the site, alongside `storybook`.
- [ ] README for `packages/docs` (how to run/build, how to add a component page).
</content>
</invoke>
