<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration: the component shown working, in context. -->
<div
  class="flex flex-wrap items-center gap-3 rounded border border-ow-surface-border p-8"
>
  <span class="ow-status-label">Default</span>
  <span class="ow-status-label-positive">Positive</span>
  <span class="ow-status-label-caution">Caution</span>
  <span class="ow-status-label-information">Information</span>
  <span class="ow-status-label-negative">Negative</span>
</div>

<p>
  A status label is a small, bold tag that communicates the state of an item at
  a glance, with the colour conveying meaning. It is deprecated in Vanilla
  Framework in favour of the <code>ow-chip</code> component, but remains available
  for backwards compatibility.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  The default status label is neutral and suits a generic or inactive state.
</p>
<Example code={'<span class="ow-status-label">Default</span>'}>
  <span class="ow-status-label">Default</span>
</Example>

<h2 id="positive" class="ow-heading-2">Positive</h2>
<p>Use a positive label for a successful, active or healthy state.</p>
<Example code={'<span class="ow-status-label-positive">Positive</span>'}>
  <span class="ow-status-label-positive">Positive</span>
</Example>

<h2 id="negative" class="ow-heading-2">Negative</h2>
<p>Use a negative label to flag an error, failure or blocked state.</p>
<Example code={'<span class="ow-status-label-negative">Negative</span>'}>
  <span class="ow-status-label-negative">Negative</span>
</Example>

<h2 id="caution" class="ow-heading-2">Caution</h2>
<p>Use a caution label to warn that a state may need attention.</p>
<Example code={'<span class="ow-status-label-caution">Caution</span>'}>
  <span class="ow-status-label-caution">Caution</span>
</Example>

<h2 id="information" class="ow-heading-2">Information</h2>
<p>Use an information label for a neutral, in-progress or contextual state.</p>
<Example code={'<span class="ow-status-label-information">Information</span>'}>
  <span class="ow-status-label-information">Information</span>
</Example>

<h2 id="as-a-link" class="ow-heading-2">As a link</h2>
<p>
  The same classes apply to an <code>&lt;a&gt;</code> element when the label should
  navigate; the underline is removed so it still reads as a tag.
</p>
<Example
  code={`<a href="#" class="ow-status-label-positive">Positive</a>
<a href="#" class="ow-status-label-information">Information</a>`}
>
  <a href="#as-a-link" class="ow-status-label-positive">Positive</a>
  <a href="#as-a-link" class="ow-status-label-information">Information</a>
</Example>
