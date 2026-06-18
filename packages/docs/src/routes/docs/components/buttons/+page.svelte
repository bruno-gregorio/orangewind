<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration: the component shown working, in context. -->
<div
  class="flex flex-wrap items-center gap-3 rounded border border-ow-surface-border p-8"
>
  <button class="ow-btn-positive">Get started</button>
  <button class="ow-btn">Documentation</button>
  <button class="ow-btn-base">Learn more</button>
  <button class="ow-btn-base ow-has-icon" aria-label="Settings">
    <i class="ow-icon-settings"></i>
  </button>
</div>

<p>
  Buttons are clickable elements used to perform an action. You can apply button
  classes to <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> elements. Do not
  use multiple button classes on a single element.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  A default button indicates a positive action that isn't necessarily the main
  call to action.
</p>
<Example code={'<button class="ow-btn">Default</button>'}>
  <button class="ow-btn">Default</button>
</Example>

<h2 id="positive" class="ow-heading-2">Positive</h2>
<p>A positive button indicates the main, affirmative call to action.</p>
<Example code={'<button class="ow-btn-positive">Positive</button>'}>
  <button class="ow-btn-positive">Positive</button>
</Example>

<h2 id="base" class="ow-heading-2">Base</h2>
<p>A base button discreetly indicates a secondary action.</p>
<Example code={'<button class="ow-btn-base">Base</button>'}>
  <button class="ow-btn-base">Base</button>
</Example>

<h2 id="negative" class="ow-heading-2">Negative</h2>
<p>A negative button indicates a destructive or permanent action.</p>
<Example code={'<button class="ow-btn-negative">Negative</button>'}>
  <button class="ow-btn-negative">Negative</button>
</Example>

<h2 id="link" class="ow-heading-2">Link</h2>
<p>A link button looks visually identical to a link but behaves as a button.</p>
<Example code={'<button class="ow-btn-link">Link</button>'}>
  <button class="ow-btn-link">Link</button>
</Example>

<h2 id="sizes" class="ow-heading-2">Small and dense</h2>
<p>
  Add <code>ow-is-small</code> for small text contexts and
  <code>ow-is-dense</code> for reduced vertical padding. They can be combined.
</p>
<Example
  code={`<button class="ow-btn ow-is-small">Small</button>
<button class="ow-btn ow-is-dense">Dense</button>`}
>
  <button class="ow-btn ow-is-small">Small</button>
  <button class="ow-btn ow-is-dense">Dense</button>
</Example>

<h2 id="icon" class="ow-heading-2">With an icon</h2>
<p>
  Add <code>ow-has-icon</code> to align an icon alongside the label, or use it alone
  for an icon-only button (always provide an accessible label).
</p>
<Example
  code={`<button class="ow-btn-positive ow-has-icon">
  <i class="ow-icon-plus"></i>
  <span>Add</span>
</button>`}
>
  <button class="ow-btn-positive ow-has-icon">
    <i class="ow-icon-plus"></i>
    <span>Add</span>
  </button>
</Example>
