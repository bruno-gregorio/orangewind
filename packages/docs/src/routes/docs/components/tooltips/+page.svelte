<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration — hover or focus the button. -->
<div
  class="flex flex-wrap items-center justify-center gap-6 rounded border border-ow-surface-border p-12"
>
  <button
    type="button"
    class="ow-tooltip ow-btn"
    aria-describedby="demo-tooltip"
  >
    Hover me
    <span class="ow-tooltip-message" role="tooltip" id="demo-tooltip">
      Extra context appears in the tooltip.
    </span>
  </button>
</div>

<p>
  Tooltips reveal supplementary text when the user hovers or focuses an element.
  Add a positional <code>ow-tooltip-*</code> class to the trigger and nest a
  <code>ow-tooltip-message</code> with <code>role="tooltip"</code> inside it.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>The base <code>ow-tooltip</code> positions the message above the trigger.</p>
<Example
  code={`<button class="ow-tooltip ow-btn" aria-describedby="t1">
  Hover me
  <span class="ow-tooltip-message" role="tooltip" id="t1">
    A short, helpful message.
  </span>
</button>`}
>
  <button type="button" class="ow-tooltip ow-btn" aria-describedby="t1">
    Hover me
    <span class="ow-tooltip-message" role="tooltip" id="t1">
      A short, helpful message.
    </span>
  </button>
</Example>

<h2 id="positions" class="ow-heading-2">Positions</h2>
<p>
  Position the tooltip with a directional class such as
  <code>ow-tooltip-right</code>, <code>ow-tooltip-left</code> or
  <code>ow-tooltip-btm-center</code>.
</p>
<Example
  code={`<button class="ow-tooltip-right ow-btn" aria-describedby="t2">
  Right
  <span class="ow-tooltip-message" role="tooltip" id="t2">On the right</span>
</button>
<button class="ow-tooltip-btm-center ow-btn" aria-describedby="t3">
  Below
  <span class="ow-tooltip-message" role="tooltip" id="t3">Underneath</span>
</button>`}
>
  <button type="button" class="ow-tooltip-right ow-btn" aria-describedby="t2">
    Right
    <span class="ow-tooltip-message" role="tooltip" id="t2">On the right</span>
  </button>
  <button
    type="button"
    class="ow-tooltip-btm-center ow-btn"
    aria-describedby="t3"
  >
    Below
    <span class="ow-tooltip-message" role="tooltip" id="t3">Underneath</span>
  </button>
</Example>
