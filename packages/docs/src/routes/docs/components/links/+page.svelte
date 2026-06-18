<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <p>
    Read the <a href="https://vanillaframework.io/docs">Vanilla documentation</a
    >
    or jump straight to the
    <a
      class="ow-link-soft"
      href="https://vanillaframework.io/docs/patterns/links">links pattern</a
    >.
  </p>
</div>

<p>
  Anchor elements are styled by default. Additional classes adjust their
  emphasis or adapt them to dark backgrounds.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>A standard link needs no class — the base styles apply to every anchor.</p>
<Example code={'<a href="#">A standard link</a>'}>
  <a href="#default">A standard link</a>
</Example>

<h2 id="soft" class="ow-heading-2">Soft</h2>
<p>
  A soft link uses the text colour until hovered, for links that should sit
  quietly within a block of text.
</p>
<Example code={'<a class="ow-link-soft" href="#">A soft link</a>'}>
  <a class="ow-link-soft" href="#soft">A soft link</a>
</Example>

<h2 id="inverted" class="ow-heading-2">Inverted</h2>
<p>Use an inverted link on dark backgrounds so it keeps sufficient contrast.</p>
<Example
  code={`<div class="ow-strip-dark">
  <a class="ow-link-inverted" href="#">An inverted link</a>
</div>`}
>
  <div class="ow-strip-dark w-full rounded p-4">
    <a class="ow-link-inverted" href="#inverted">An inverted link</a>
  </div>
</Example>

<h2 id="skip" class="ow-heading-2">Skip link</h2>
<p>
  A skip link lets keyboard users jump past repeated navigation to the main
  content. It stays hidden until focused — tab to the preview to reveal it.
</p>
<Example
  code={'<a class="ow-link-skip" href="#main-content">Skip to main content</a>'}
>
  <a class="ow-link-skip" href="#main-content">Skip to main content</a>
</Example>
