<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <h1 class="ow-display-heading">Display heading</h1>
  <p class="ow-heading-1">Heading 1</p>
  <p class="ow-heading-2">Heading 2</p>
  <p class="ow-heading-3">Heading 3</p>
  <p class="ow-heading-4">Heading 4</p>
  <p class="ow-heading-5">Heading 5</p>
  <p class="ow-heading-6">Heading 6</p>
</div>

<p>
  Typography utilities set the type scale for the system. Apply a heading class
  to any element to give it heading styling without dictating its semantic
  level, so document structure and visual size stay independent.
</p>

<h2 id="headings" class="ow-heading-2">Headings</h2>
<p>
  Six heading classes, <code>ow-heading-1</code> through
  <code>ow-heading-6</code>, descend in size and weight. Use the class that
  matches the visual hierarchy and choose the heading element that matches the
  document outline.
</p>
<Example
  code={`<h2 class="ow-heading-1">Heading 1</h2>
<h2 class="ow-heading-2">Heading 2</h2>
<h3 class="ow-heading-3">Heading 3</h3>
<h4 class="ow-heading-4">Heading 4</h4>
<h5 class="ow-heading-5">Heading 5</h5>
<h6 class="ow-heading-6">Heading 6</h6>`}
>
  <div class="grid w-full gap-1">
    <h2 class="ow-heading-1">Heading 1</h2>
    <h2 class="ow-heading-2">Heading 2</h2>
    <h3 class="ow-heading-3">Heading 3</h3>
    <h4 class="ow-heading-4">Heading 4</h4>
    <h5 class="ow-heading-5">Heading 5</h5>
    <h6 class="ow-heading-6">Heading 6</h6>
  </div>
</Example>

<h2 id="display-heading" class="ow-heading-2">Display heading</h2>
<p>
  The <code>ow-display-heading</code> class is larger and lighter than the numbered
  headings. Reserve it for the single most prominent title on a page, such as a hero
  or section opener.
</p>
<Example code={'<h1 class="ow-display-heading">Display heading</h1>'}>
  <h1 class="ow-display-heading">Display heading</h1>
</Example>

<h2 id="muted-heading" class="ow-heading-2">Muted heading</h2>
<p>
  A muted heading sets a small-caps eyebrow above a title. Use
  <code>ow-muted-heading</code> to label a section without competing with the heading
  beneath it.
</p>
<Example
  code={`<span class="ow-muted-heading">Latest news</span>
<h2 class="ow-heading-2">Canonical expands AI portfolio</h2>`}
>
  <div class="w-full">
    <span class="ow-muted-heading">Latest news</span>
    <h2 class="ow-heading-2">Canonical expands AI portfolio</h2>
  </div>
</Example>

<h2 id="small-caps" class="ow-heading-2">Small caps</h2>
<p>
  The <code>ow-text-small-caps</code> utility renders a block of text in small caps
  with old-style numerals and slightly looser letter spacing.
</p>
<Example
  code={'<p class="ow-text-small-caps">Small caps utility text block</p>'}
>
  <p class="ow-text-small-caps">Small caps utility text block</p>
</Example>

<h2 id="heading-icon" class="ow-heading-2">Heading with an icon</h2>
<p>
  Pair a heading with an image using <code>ow-heading-icon-header</code>. Add
  <code>ow-is-stacked</code> to place the image above the title, or wrap the
  block in <code>ow-heading-icon-small</code> for a smaller image.
</p>
<Example
  code={`<div class="ow-heading-icon-header">
  <img
    class="ow-heading-icon-img"
    src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
    alt=""
  />
  <h3 class="ow-heading-icon-title ow-heading-3">LXD — system containers</h3>
</div>`}
>
  <div class="ow-heading-icon-header">
    <img
      class="ow-heading-icon-img"
      src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
      alt=""
    />
    <h3 class="ow-heading-icon-title ow-heading-3">LXD — system containers</h3>
  </div>
</Example>
