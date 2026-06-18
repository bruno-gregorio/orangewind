<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="flex flex-wrap items-center gap-3 rounded border border-ow-surface-border p-8"
>
  <span class="ow-chip"><span class="ow-chip-value">All</span></span>
  <span class="ow-chip-positive"><span class="ow-chip-value">Stable</span></span
  >
  <span class="ow-chip-caution"><span class="ow-chip-value">Beta</span></span>
  <span class="ow-chip">
    <span class="ow-chip-lead">Owner</span>
    <span class="ow-chip-value">canonical</span>
  </span>
</div>

<p>
  Chips represent attributes, filters or tags. A chip wraps its text in a
  <code>ow-chip-value</code>, and may include a <code>ow-chip-lead</code> to label
  the value.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>The default chip suits neutral tags and filters.</p>
<Example
  code={'<span class="ow-chip"><span class="ow-chip-value">Default</span></span>'}
>
  <span class="ow-chip"><span class="ow-chip-value">Default</span></span>
</Example>

<h2 id="variants" class="ow-heading-2">Status variants</h2>
<p>
  Coloured chips communicate status. Use them sparingly so the colour keeps its
  meaning.
</p>
<Example
  code={`<span class="ow-chip-positive"><span class="ow-chip-value">Positive</span></span>
<span class="ow-chip-negative"><span class="ow-chip-value">Negative</span></span>
<span class="ow-chip-caution"><span class="ow-chip-value">Caution</span></span>
<span class="ow-chip-information"><span class="ow-chip-value">Information</span></span>`}
>
  <span class="ow-chip-positive"
    ><span class="ow-chip-value">Positive</span></span
  >
  <span class="ow-chip-negative"
    ><span class="ow-chip-value">Negative</span></span
  >
  <span class="ow-chip-caution"><span class="ow-chip-value">Caution</span></span
  >
  <span class="ow-chip-information"
    ><span class="ow-chip-value">Information</span></span
  >
</Example>

<h2 id="lead" class="ow-heading-2">Lead and value</h2>
<p>Add a lead to label the value, for key–value style tags.</p>
<Example
  code={`<span class="ow-chip">
  <span class="ow-chip-lead">Owner</span>
  <span class="ow-chip-value">canonical</span>
</span>`}
>
  <span class="ow-chip">
    <span class="ow-chip-lead">Owner</span>
    <span class="ow-chip-value">canonical</span>
  </span>
</Example>

<h2 id="readonly" class="ow-heading-2">Read-only</h2>
<p>
  Add <code>ow-is-readonly</code> for chips that display information but cannot be
  interacted with.
</p>
<Example
  code={'<span class="ow-chip ow-is-readonly"><span class="ow-chip-value">Read-only</span></span>'}
>
  <span class="ow-chip ow-is-readonly"
    ><span class="ow-chip-value">Read-only</span></span
  >
</Example>
