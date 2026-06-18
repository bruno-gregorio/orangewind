<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // The shared illustrative icon used across the heading-icon examples.
  const icon = 'https://assets.ubuntu.com/v1/425efe3a-lxd.svg'
</script>

<!-- Mandatory headline demonstration: the component shown working, in context. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="ow-heading-icon">
    <div class="ow-heading-icon-header">
      <img class="ow-heading-icon-img" src={icon} alt="" />
      <h3 class="ow-heading-icon-title ow-heading-3">
        LXD — system containers
      </h3>
    </div>
    <p>
      LXD merges the speed and density of containers with the manageability of
      traditional virtual machines.
    </p>
  </div>
</div>

<p>
  These two typographic patterns add emphasis or context to a heading. A
  <strong>heading icon</strong> pairs an image with a heading; a
  <strong>muted heading</strong> is a small, subdued eyebrow that introduces the content
  that follows.
</p>

<h2 id="heading-icon" class="ow-heading-2">Heading icon</h2>
<p>
  Wrap the icon and heading in <code>ow-heading-icon-header</code>: the
  <code>&lt;img&gt;</code> takes <code>ow-heading-icon-img</code> and the
  heading keeps its usual <code>ow-heading-*</code> class. By default the icon and
  text sit on one row, vertically centred.
</p>
<Example
  block
  code={`<div class="ow-heading-icon">
  <div class="ow-heading-icon-header">
    <img class="ow-heading-icon-img" src="/lxd.svg" alt="" />
    <h3 class="ow-heading-icon-title ow-heading-3">LXD — system containers</h3>
  </div>
  <p>LXD, the Linux container hypervisor.</p>
</div>`}
>
  <div class="ow-heading-icon">
    <div class="ow-heading-icon-header">
      <img class="ow-heading-icon-img" src={icon} alt="" />
      <h3 class="ow-heading-icon-title ow-heading-3">
        LXD — system containers
      </h3>
    </div>
    <p>LXD, the Linux container hypervisor.</p>
  </div>
</Example>

<h2 id="small" class="ow-heading-2">Small</h2>
<p>
  Add <code>ow-heading-icon-small</code> to the wrapper to render the icon at a smaller
  size for tighter or secondary contexts.
</p>
<Example
  block
  code={`<div class="ow-heading-icon-small">
  <div class="ow-heading-icon-header">
    <img class="ow-heading-icon-img" src="/lxd.svg" alt="" />
    <h3 class="ow-heading-icon-title ow-heading-3">LXD — system containers</h3>
  </div>
</div>`}
>
  <div class="ow-heading-icon-small">
    <div class="ow-heading-icon-header">
      <img class="ow-heading-icon-img" src={icon} alt="" />
      <h3 class="ow-heading-icon-title ow-heading-3">
        LXD — system containers
      </h3>
    </div>
  </div>
</Example>

<h2 id="stacked" class="ow-heading-2">Stacked</h2>
<p>
  Add <code>ow-is-stacked</code> to the header to place the icon above the text instead
  of beside it.
</p>
<Example
  block
  code={`<div class="ow-heading-icon">
  <div class="ow-heading-icon-header ow-is-stacked">
    <img class="ow-heading-icon-img" src="/lxd.svg" alt="" />
    <h3 class="ow-heading-icon-title ow-heading-3">LXD — system containers</h3>
  </div>
</div>`}
>
  <div class="ow-heading-icon">
    <div class="ow-heading-icon-header ow-is-stacked">
      <img class="ow-heading-icon-img" src={icon} alt="" />
      <h3 class="ow-heading-icon-title ow-heading-3">
        LXD — system containers
      </h3>
    </div>
  </div>
</Example>

<h2 id="muted-heading" class="ow-heading-2">Muted heading</h2>
<p>
  Use <code>ow-muted-heading</code> for a small-caps eyebrow that gives quiet context
  above a main heading without competing with it for attention.
</p>
<Example
  block
  code={`<span class="ow-muted-heading">Latest news</span>
<h2 class="ow-heading-2">Canonical expands its AI portfolio</h2>`}
>
  <div>
    <span class="ow-muted-heading">Latest news</span>
    <h2 class="ow-heading-2">Canonical expands its AI portfolio</h2>
  </div>
</Example>
