<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration.
  let enabled = $state(true)
</script>

<!-- Mandatory headline demonstration — a real, working switch. -->
<div
  class="flex flex-wrap items-center gap-6 rounded border border-ow-surface-border p-8"
>
  <label class="ow-switch">
    <input
      type="checkbox"
      class="ow-switch-input"
      role="switch"
      bind:checked={enabled}
    />
    <span class="ow-switch-slider"></span>
    <span class="ow-switch-label">
      Notifications {enabled ? 'on' : 'off'}
    </span>
  </label>
</div>

<p>
  A switch toggles a single setting on or off, taking effect immediately. It is
  built on a native checkbox with <code>role="switch"</code> for accessibility.
</p>

<h2 id="default" class="ow-heading-2">Off</h2>
<p>An unchecked switch represents the off state.</p>
<Example
  code={`<label class="ow-switch">
  <input type="checkbox" class="ow-switch-input" role="switch" />
  <span class="ow-switch-slider"></span>
  <span class="ow-switch-label">Off</span>
</label>`}
>
  <label class="ow-switch">
    <input type="checkbox" class="ow-switch-input" role="switch" />
    <span class="ow-switch-slider"></span>
    <span class="ow-switch-label">Off</span>
  </label>
</Example>

<h2 id="on" class="ow-heading-2">On</h2>
<p>Add the <code>checked</code> attribute to start in the on state.</p>
<Example
  code={`<label class="ow-switch">
  <input type="checkbox" class="ow-switch-input" role="switch" checked />
  <span class="ow-switch-slider"></span>
  <span class="ow-switch-label">On</span>
</label>`}
>
  <label class="ow-switch">
    <input type="checkbox" class="ow-switch-input" role="switch" checked />
    <span class="ow-switch-slider"></span>
    <span class="ow-switch-label">On</span>
  </label>
</Example>

<h2 id="disabled" class="ow-heading-2">Disabled</h2>
<p>Add the <code>disabled</code> attribute to prevent interaction.</p>
<Example
  code={`<label class="ow-switch">
  <input type="checkbox" class="ow-switch-input" role="switch" disabled />
  <span class="ow-switch-slider"></span>
  <span class="ow-switch-label">Disabled</span>
</label>`}
>
  <label class="ow-switch">
    <input type="checkbox" class="ow-switch-input" role="switch" disabled />
    <span class="ow-switch-slider"></span>
    <span class="ow-switch-label">Disabled</span>
  </label>
</Example>
