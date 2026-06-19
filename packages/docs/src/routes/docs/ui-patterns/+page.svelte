<script lang="ts">
  // Overall UI patterns guide (DOCS-TODO Phase 3): theming via CSS variables,
  // dark mode and the @variant dark rule, breakpoints, the spacing philosophy
  // (padding/gap over margins), and Tailwind preflight interplay.
  import Example from '$lib/components/Example.svelte'
  import Code from '$lib/components/Code.svelte'
</script>

<p>
  Orangewind layers component classes on top of Tailwind v4 and leans on
  Tailwind's own primitives — its theme, its <code>dark</code> variant, its breakpoints,
  its preflight — rather than re-inventing them. This guide explains the conventions
  that span every component so the framework behaves predictably as you compose it.
</p>

<h2 id="theming" class="ow-heading-2">Theming with CSS variables</h2>
<p>
  Every colour, shadow and breakpoint Orangewind uses is declared as a CSS
  variable in a Tailwind <code>@theme</code> block. The palette mirrors Vanilla Framework
  — base greys, a brand and accent colour, and semantic colours for positive / negative
  / caution / information.
</p>
<Code
  lang="css"
  code={`@theme {
  --color-ow-brand: #e95420;
  --color-ow-accent: #0f95a1;
  --color-ow-positive: #0e8420;
  --color-ow-negative: #c7162b;
  /* …text, border, surface and background tokens */
}`}
/>
<p>
  Because they are Tailwind theme colours, each <code>--color-ow-*</code> token
  is also a utility. You can reach the framework's palette directly from your
  own markup — <code>text-ow-text-default</code>,
  <code>bg-ow-background-alt</code>, <code>border-ow-surface-border</code> — which
  is exactly how this site's chrome is built.
</p>
<Example
  block
  code={`<div class="bg-ow-background-alt text-ow-text-default border border-ow-surface-border rounded p-4">
  Surface painted from Orangewind's theme tokens.
</div>`}
>
  <div
    class="bg-ow-background-alt text-ow-text-default w-full rounded border border-ow-surface-border p-4"
  >
    Surface painted from Orangewind's theme tokens.
  </div>
</Example>
<p>
  To re-skin the framework, override the tokens — set
  <code>--color-ow-brand</code> (and friends) in your own
  <code>@theme</code> or on <code>:root</code>, and every component that uses
  them updates at once.
</p>

<h2 id="dark-mode" class="ow-heading-2">
  Dark mode and <code>@variant dark</code>
</h2>
<p>
  Orangewind never styles the document itself — it only flips its own CSS
  variables for dark mode. The semantic tokens (text, border, surface,
  background) are redefined inside a <code>@variant dark</code> block on
  <code>:root</code>, so when the <code>dark</code> variant is active every component
  re-themes from those tokens automatically. There is no per-component dark styling
  and no toggle to wire up.
</p>
<Code
  lang="css"
  code={`:root {
  @variant dark {
    --color-ow-background-default: var(--color-ow-dark);
    --color-ow-text-default: var(--color-ow-x-light);
    --color-ow-surface-border: var(--color-ow-surface-border-dark);
    /* … */
  }
}`}
/>
<p>
  By default Tailwind's <code>dark</code> variant is driven by the OS via
  <code>prefers-color-scheme: dark</code>, so out of the box the framework
  follows the operating-system theme — this is what these docs do. If you want a
  manual toggle instead, opt into Tailwind's class-based dark variant in your
  stylesheet and the same <code>@variant dark</code> tokens will follow a
  <code>.dark</code> class on an ancestor:
</p>
<Code
  lang="css"
  code={`@import 'tailwindcss';
@import 'orangewind/src/index.css';

/* drive dark mode from a class instead of the OS preference */
@custom-variant dark (&:where(.dark, .dark *));`}
/>
<p>
  One extra step helps the rest of the page keep up: because Orangewind only
  themes its own elements, set <code>color-scheme</code> so the browser themes the
  canvas, scrollbars and native form controls to match.
</p>
<Code lang="css" code={':root {\n  color-scheme: light dark;\n}'} />

<h2 id="breakpoints" class="ow-heading-2">Breakpoints</h2>
<p>
  Orangewind redefines Tailwind's breakpoints to match Vanilla's responsive
  scale, so the familiar <code>sm:</code> / <code>md:</code> / <code>lg:</code>
  /
  <code>xl:</code> prefixes map onto Vanilla's widths. Use them exactly as you would
  any Tailwind variant.
</p>
<Code
  lang="css"
  code={`@theme {
  --breakpoint-sm: 28.75rem;    /* 460px */
  --breakpoint-md: 38.75rem;    /* 620px */
  --breakpoint-lg: 64.75rem;    /* 1036px */
  --breakpoint-xl: 105.0625rem; /* 1681px */
}`}
/>
<Example
  block
  code={`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  <div class="ow-card">One</div>
  <div class="ow-card">Two</div>
  <div class="ow-card">Three</div>
  <div class="ow-card">Four</div>
</div>`}
>
  <div class="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
    <div class="ow-card">One</div>
    <div class="ow-card">Two</div>
    <div class="ow-card">Three</div>
    <div class="ow-card">Four</div>
  </div>
</Example>

<h2 id="spacing" class="ow-heading-2">Spacing: prefer padding and gap</h2>
<p>
  When you lay components out, prefer padding and <code>gap</code> over margins.
  Orangewind's layout components are grid- and flex-based, and a parent
  <code>gap</code> spaces children without the collapsing and last-child quirks margins
  introduce. Reach for a margin only when you genuinely need to nudge a single element
  relative to its siblings.
</p>
<Example
  block
  code={`<!-- prefer: the parent owns the rhythm via gap -->
<div class="grid gap-3">
  <button class="ow-btn-positive">Save</button>
  <button class="ow-btn-base">Cancel</button>
</div>`}
>
  <div class="grid w-full gap-3">
    <button class="ow-btn-positive">Save</button>
    <button class="ow-btn-base">Cancel</button>
  </div>
</Example>
<p>
  The framework's own section primitives follow the same idea: wrappers like
  <code>ow-strip</code> and <code>ow-section</code> carry the vertical rhythm as padding,
  so you compose by nesting them rather than stacking margins.
</p>

<h2 id="preflight" class="ow-heading-2">Tailwind preflight interplay</h2>
<p>
  Orangewind assumes Tailwind's <a href="https://tailwindcss.com/docs/preflight"
    >preflight</a
  >
  reset is in effect — that is what <code>@import 'tailwindcss'</code>
  provides. Components are styled on top of that reset: headings, lists and links
  are deliberately unopinionated until you apply the relevant
  <code>ow-*</code> class.
</p>
<p>
  That means raw HTML elements look reset, not Vanilla-styled, by default. To
  get Vanilla typography on a heading, apply the class (<code>ow-heading-2</code
  >) rather than relying on the bare
  <code>&lt;h2&gt;</code>; to style a link, use the
  <a href="/docs/components/links">link</a> classes. Keep importing Tailwind before
  Orangewind so the reset lands first and the component layers can build on it.
</p>
