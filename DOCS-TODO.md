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

- [x] Create `packages/docs` as a Bun workspace package (it is already globbed by root
      `workspaces: ["packages/*"]`). Add `package.json` (`name: "docs"`, `private: true`,
      `type: "module"`, scripts `dev`/`build`/`preview`/`check`).
- [x] Scaffold SvelteKit + Vite + Svelte 5, mirroring `packages/test-bench`
      (`svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `src/app.html`, `src/app.d.ts`).
- [x] Add `@tailwindcss/vite` and wire Tailwind v4 (same as test-bench `vite.config.ts`).
- [x] Add `orangewind: "workspace:orangewind"` dependency.
- [x] Create the global stylesheet: `@import 'tailwindcss'` + `@import 'orangewind/src/index.css'`,
      imported from the root `+layout.svelte`. **Do not** add the class-based
      `@custom-variant dark` override that test-bench uses — leaving it out lets Tailwind's default
      `dark` variant (`prefers-color-scheme: dark`) drive theming, so Orangewind's internal
      `@variant dark` rules follow the OS preference automatically.
- [x] Choose an adapter: use `@sveltejs/adapter-static` (prerendered static docs site) with
      `export const prerender = true`. Confirm `bun run --cwd packages/docs dev` serves a page.
- [x] Verify lint/format pass under the monorepo `eslint`/`prettier` config.

---

## Phase 1: Docs Shell & Reusable Primitives (built with Orangewind)

_The chrome every page shares + the doc-authoring building blocks. All built from existing
Orangewind components — no new framework CSS._

- [x] **Global navigation header** using `navigation.css` (logo, links, GitHub link, search slot).
      _Done: `Navigation.svelte`, branding + links from `$lib/site`. Search slot still TODO._
- [x] **Three-column docs layout** using `docs.css` (left side-nav, center content, right TOC).
      _Done: `routes/docs/+layout.svelte` wires the six `ow-docs-*` grid slots._
- [ ] **Side navigation** using `side-navigation.css`: grouped, collapsible component index
      (mirror the phase grouping from `TODO.md`). Highlight the active route. Drawer behaviour
      on mobile (`is-drawer-expanded/collapsed`).
      _Partial: `SideNav.svelte` now uses `ow-side-navigation-accordion` — collapsible groups
      (active group auto-opens) + active highlight + dark-aware theming. Still TODO: mobile drawer._
- [x] **In-page navigation / Table of Contents** using `table-of-contents.css`:
      auto-generated from the page's `<h2>`/`<h3>` anchors, with scroll-spy active state.
      _Done: `Toc.svelte` (client-side; static prerender ships an empty TOC that hydrates)._
- [ ] **Dark mode** — no toggle. Rely on Tailwind's default `prefers-color-scheme` handling so the
      site follows the OS theme. Just verify both themes render correctly (light/dark) across the
      shell and `<Example>` previews.
      _Fixed: added `color-scheme: light dark` (Orangewind never styles the document, so the
      browser canvas/scrollbars/native controls weren't theming) and moved all chrome onto
      themed `ow-surface-border` + `ow-side-navigation`. Still wants a final visual pass._
- [x] **`<Example>` primitive** — the core doc component (mirrors Vanilla's `embedded-example`):
      renders a live preview of the markup **and** the source. Built from `code-snippet.css`
      (copy-to-clipboard button, language label). Decide preview isolation (iframe vs inline).
      _Done: `Example.svelte`, inline preview + copy button. Syntax highlighting still TODO below._
- [x] **Syntax highlighting** for code blocks, themed for light/dark.
      _Done with **Prism** (as the original Vanilla docs used), tokenised at prerender so the
      static HTML ships highlighted. Token theme is a faithful port of Vanilla's
      `_base_syntax-highlighting.scss` onto Orangewind palette variables, shipped as an opt-in
      `orangewind/src/prism.css` (not bundled in `index.css`). `Code.svelte` is the tokenizer;
      `<Example>` uses it. Dark mode rides the framework variables (tokens lightened via
      `color-mix`)._
- [ ] **Auto-anchored headings** (slugged `id`s + hover anchor links) feeding the TOC.
      _Currently `id`s are hand-authored on each `<h2>`; auto-slugging + anchor links still TODO._
- [x] **Footer** (license LGPL-3.0, links to repo, version).
      _Done: `Footer.svelte`, links from `$lib/site`._

---

## Phase 2: Content Pipeline & Routing

_Decide how pages are authored and structured._

- [ ] Adopt **mdsvex** so component pages can be Markdown with embedded `<Example>` Svelte
      components (closest analogue to Vanilla's `index.md` + embedded examples).
- [x] Define route structure: `/` (home), `/docs/get-started`, `/docs/markup-patterns`,
      `/docs/ui-patterns`, and `/docs/components/[component]`.
      _Done: all routes exist. Component pages are individual static routes rather than a
      dynamic `[component]` route, driven by the manifest._
- [x] Create a shared `+layout.svelte` for `/docs/*` that mounts the shell from Phase 1 and
      builds side-nav + TOC from a central manifest.
      _Done: `routes/docs/+layout.svelte` + a `/docs/components` index page._
- [x] Create a **component manifest** (single source of truth: slug, title, group, status) that
      drives the side-nav, routing, and "next/prev" pagination (`pagination.css`).
      _Done: `$lib/manifest.ts` (drives side-nav + title; pagination still TODO). Site links live
      in `$lib/site.ts`._

---

## Phase 3: Guide Pages

- [x] **Home / landing** page: `hero` + `suru` background, short pitch, what Orangewind is
      (Vanilla re-implemented as a Tailwind v4 plugin), quick links.
      _Done: `routes/+page.svelte` — standalone page mounting `Navigation`/`Footer`, an
      `ow-suru-25-75` hero with CTAs, a "Why Orangewind" feature grid, and quick-link cards._
- [x] **Get started / Installation** — _STUB ONLY (skip real install steps until published to
      npm)._ Add a notification banner: "Not yet published — install instructions coming soon."
      Leave the npm/import snippet structure ready to fill in later.
      _Done: `routes/docs/get-started/+page.svelte` — caution banner + placeholder install/import
      snippets ready to fill in._
- [x] **Markup patterns guide**: how to author Orangewind markup — the single-dash kebab-case
      class convention, state classes (`is-*`), how component classes nest, common pitfalls
      (e.g. don't combine multiple button classes), and how it composes with raw Tailwind utilities.
      _Done: `routes/docs/markup-patterns/+page.svelte`._
- [x] **Overall UI patterns guide**: theming via CSS variables/colors, dark mode usage, the
      `@variant dark` rule, breakpoints (`sm/md/lg/xl`), spacing philosophy (padding/gap over
      margins), and Tailwind preflight interplay.
      _Done: `routes/docs/ui-patterns/+page.svelte`._

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

_All per-component pages below are built and live: each has the mandatory
headline demo, an intro, and per-variant `<Example>`s. Markup is sourced
verbatim from the verified Storybook stories / component CSS. The whole set
prerenders (static build), and `eslint` + `prettier` + `svelte-check` are clean._

### Foundations & Utilities

- [x] Typography
- [x] Colors / Theme
- [x] Animations
- [x] Icons (incl. 2025/2026 additions)
- [x] Baseline Grid & Font Metrics
- [x] Links
- [x] Divider

### Basic Elements

- [x] Buttons (all variants + `is-inline/dense/small/icon`)
- [x] Badge
- [x] Status Label
- [x] Chip
- [x] Heading Icon & Muted Heading

### Forms & Inputs

- [x] Forms (inputs, textareas, checkboxes, radios, validation)
- [x] Switch
- [x] Slider
- [x] Segmented Control
- [x] Search Box
- [x] Search and Filter

### Intermediate Components

- [x] Notifications
- [x] Tooltips
- [x] Tabs
- [x] Breadcrumbs
- [x] Accordion
- [x] Pagination (incl. article pagination)
- [x] Code Snippet

### Complex Content Blocks

- [x] Lists & List Tree (rich / tiered / stepped)
- [x] Tables
- [x] Matrix
- [x] Card
- [x] Content Card
- [x] Media Object / Image
- [x] Quotes & Pull Quotes

### Layout Components & Patterns

- [x] Strip & Section
- [x] Divided Section
- [x] Modal
- [x] Contextual Menu
- [x] In-Page Navigation & Table of Contents
- [x] Feature Blocks (Pricing, Resources, Logo Section, CTA, Data Spotlight, Newsletter Signup)
- [x] Blog & Article
- [x] Hero, Tab Section, Text Spotlight, Equal Height Row

### Application Scaffolding

- [x] Navigation
- [x] Application Layout & Panels
- [x] Side Navigation
- [x] Docs Layout
- [x] Brochure Site
- [x] Suru
- [x] Grid 8 & Fluid Breakout

---

## Phase 5: Polish & Ship

- [ ] Responsive pass (mobile drawer nav, collapsing TOC) across `sm/md/lg/xl` breakpoints.
- [ ] Accessibility pass (landmarks, focus order, skip-link, keyboard nav, contrast in both themes).
- [ ] Optional: client-side **search** over the component manifest (reuse `search-box.css`).
- [ ] `404` page using Orangewind components.
- [ ] Build static output (`adapter-static`) and verify all routes prerender.
- [x] Add a root `package.json` script (e.g. `docs`) to run the site, alongside `storybook`.
- [ ] README for `packages/docs` (how to run/build, how to add a component page).
