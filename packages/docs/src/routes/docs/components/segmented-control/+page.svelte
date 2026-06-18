<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration.
  let selected = $state(0)
  const segments = ['OLM', 'SDK', 'Charmhub']
</script>

<!-- Mandatory headline demonstration — a real, working segmented control. -->
<div
  class="flex flex-wrap items-center gap-3 rounded border border-ow-surface-border p-8"
>
  <div class="ow-segmented-control">
    <div class="ow-segmented-control-list" role="tablist">
      {#each segments as label, index (label)}
        <button
          class="ow-segmented-control-button"
          role="tab"
          aria-selected={selected === index}
          onclick={() => (selected = index)}
        >
          {label}
        </button>
      {/each}
    </div>
  </div>
</div>

<p>
  A segmented control lets the user pick one option from a small set of related
  choices, like a row of joined buttons. Mark the selected button with
  <code>aria-selected="true"</code>; the control highlights it and draws the
  dividers between segments.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  Wrap the buttons in an <code>ow-segmented-control-list</code> with
  <code>role="tablist"</code>, and give each
  <code>ow-segmented-control-button</code> <code>role="tab"</code>. The button
  whose <code>aria-selected</code> is <code>true</code> appears active.
</p>
<Example
  code={`<div class="ow-segmented-control">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">OLM</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">SDK</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">Charmhub</button>
  </div>
</div>`}
>
  <div class="ow-segmented-control">
    <div class="ow-segmented-control-list" role="tablist">
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="true">OLM</button
      >
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false">SDK</button
      >
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false">Charmhub</button
      >
    </div>
  </div>
</Example>

<h2 id="dense" class="ow-heading-2">Dense</h2>
<p>
  Add <code>ow-is-dense</code> to the <code>ow-segmented-control</code> for a shorter
  control with reduced vertical padding, useful in tight toolbars.
</p>
<Example
  code={`<div class="ow-segmented-control ow-is-dense">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">OLM</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">SDK</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">Charmhub</button>
  </div>
</div>`}
>
  <div class="ow-segmented-control ow-is-dense">
    <div class="ow-segmented-control-list" role="tablist">
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="true">OLM</button
      >
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false">SDK</button
      >
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false">Charmhub</button
      >
    </div>
  </div>
</Example>

<h2 id="with-icons" class="ow-heading-2">With icons</h2>
<p>
  Place an <code>&lt;i&gt;</code> icon element before the label inside a button; the
  control spaces the icon and text automatically.
</p>
<Example
  code={`<div class="ow-segmented-control">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">
      <i class="ow-icon-plus"></i> Add
    </button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">
      <i class="ow-icon-edit"></i> Edit
    </button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">
      <i class="ow-icon-delete"></i> Delete
    </button>
  </div>
</div>`}
>
  <div class="ow-segmented-control">
    <div class="ow-segmented-control-list" role="tablist">
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="true"
      >
        <i class="ow-icon-plus"></i> Add
      </button>
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false"
      >
        <i class="ow-icon-edit"></i> Edit
      </button>
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false"
      >
        <i class="ow-icon-delete"></i> Delete
      </button>
    </div>
  </div>
</Example>

<h2 id="disabled" class="ow-heading-2">Disabled segment</h2>
<p>
  Add the <code>disabled</code> attribute to a button to make a single segment unavailable
  while leaving the rest interactive.
</p>
<Example
  code={`<div class="ow-segmented-control">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">Day</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">Week</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false" disabled>Month</button>
  </div>
</div>`}
>
  <div class="ow-segmented-control">
    <div class="ow-segmented-control-list" role="tablist">
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="true">Day</button
      >
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false">Week</button
      >
      <button
        class="ow-segmented-control-button"
        role="tab"
        aria-selected="false"
        disabled>Month</button
      >
    </div>
  </div>
</Example>
