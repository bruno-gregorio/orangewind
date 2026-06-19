<script lang="ts">
  // Get started / Installation — STUB ONLY (DOCS-TODO Phase 3). Orangewind is
  // not yet published to npm, so the real install steps are deferred. The
  // snippet structure below is in place so it can be filled in verbatim once a
  // package is published; until then a caution banner makes the status clear.
  import Code from '$lib/components/Code.svelte'
  import { repoUrl } from '$lib/site'
</script>

<div class="ow-notification-caution" role="status">
  <div class="ow-notification-content">
    <span class="ow-notification-title">Not yet published</span>
    <span class="ow-notification-message">
      Orangewind has not been published to npm yet, so install instructions are
      coming soon. In the meantime you can build it from the
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">repository</a
      >.
    </span>
  </div>
</div>

<p>
  Orangewind is a <a href="https://tailwindcss.com">Tailwind CSS</a> v4 plugin
  that re-implements Canonical's
  <a href="https://vanillaframework.io">Vanilla Framework</a> as a set of
  component classes. You bring Tailwind v4; Orangewind layers its
  <code>ow-*</code> components on top and reuses Tailwind's native utilities rather
  than duplicating them.
</p>

<h2 id="install" class="ow-heading-2">Install</h2>
<p>
  Once published, Orangewind will be installed alongside Tailwind v4 from npm.
  The exact package name is not final, so treat this command as a placeholder.
</p>
<div class="ow-code-snippet ow-is-bordered min-w-0">
  <div class="ow-code-snippet-header">
    <h5 class="ow-code-snippet-title">Terminal</h5>
  </div>
  <Code lang="bash" code={'# coming soon\nbun add orangewind'} />
</div>

<h2 id="import" class="ow-heading-2">Import the stylesheet</h2>
<p>
  Orangewind ships a single CSS entry point. Import Tailwind first, then
  Orangewind, from your global stylesheet — the same wiring this documentation
  site uses.
</p>
<div class="ow-code-snippet ow-is-bordered min-w-0">
  <div class="ow-code-snippet-header">
    <h5 class="ow-code-snippet-title">app.css</h5>
  </div>
  <Code
    lang="css"
    code={"@import 'tailwindcss';\n@import 'orangewind/src/index.css';"}
  />
</div>
<p>
  Syntax highlighting for code blocks (used across these docs) is opt-in via a
  separate stylesheet, so you only pay for it when you need it.
</p>
<div class="ow-code-snippet ow-is-bordered min-w-0">
  <div class="ow-code-snippet-header">
    <h5 class="ow-code-snippet-title">app.css (optional)</h5>
  </div>
  <Code lang="css" code={"@import 'orangewind/src/prism.css';"} />
</div>

<h2 id="dark-mode" class="ow-heading-2">Dark mode</h2>
<p>
  Orangewind only flips its own CSS variables for dark mode — it never styles
  the document itself. By default Tailwind's <code>dark</code> variant follows
  the operating system's <code>prefers-color-scheme</code>, so the framework
  themes itself automatically with no toggle required. See the
  <a href="/docs/ui-patterns">UI patterns</a> guide for how to drive the theme from
  a class instead.
</p>

<h2 id="next" class="ow-heading-2">Next steps</h2>
<p>
  With the stylesheet imported, read the
  <a href="/docs/markup-patterns">Markup patterns</a> guide to learn how to
  author Orangewind class markup, then browse the
  <a href="/docs/components">component reference</a>.
</p>
