<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration.
  let volume = $state(50)
  // Mirror the progress fill into the WebKit track (Firefox fills it natively).
  const progress = $derived(`--ow-range-progress: ${volume}%`)
</script>

<!-- Mandatory headline demonstration — a real, working range slider. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="hero-volume">Volume — {volume}</label>
    <input
      type="range"
      id="hero-volume"
      min="0"
      max="100"
      step="1"
      bind:value={volume}
      style={progress}
      aria-label="Volume"
    />
  </div>
</div>

<p>
  A slider lets the user choose a value from a continuous range. It is a native
  <code>&lt;input type="range"&gt;</code> that Orangewind styles automatically — the
  track fills up to the current value and the thumb gains a focus outline when tabbed
  to.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  Set <code>min</code>, <code>max</code> and <code>step</code> to define the
  range. Always provide a label or <code>aria-label</code> so the control is announced.
</p>
<Example
  block
  code={`<div class="ow-form ow-form-stacked">
  <label for="amount">Amount</label>
  <input type="range" id="amount" min="0" max="100" value="50" step="1" />
</div>`}
>
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="amount">Amount</label>
    <input
      type="range"
      id="amount"
      min="0"
      max="100"
      value="50"
      step="1"
      style="--ow-range-progress: 50%"
    />
  </div>
</Example>

<h2 id="disabled" class="ow-heading-2">Disabled</h2>
<p>Add the <code>disabled</code> attribute to prevent interaction.</p>
<Example
  block
  code={`<div class="ow-form ow-form-stacked">
  <label for="amount-disabled">Disabled</label>
  <input
    type="range"
    id="amount-disabled"
    min="0"
    max="100"
    value="30"
    step="1"
    disabled
  />
</div>`}
>
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="amount-disabled">Disabled</label>
    <input
      type="range"
      id="amount-disabled"
      min="0"
      max="100"
      value="30"
      step="1"
      disabled
      style="--ow-range-progress: 30%"
    />
  </div>
</Example>

<h2 id="with-number-input" class="ow-heading-2">With a number input</h2>
<p>
  Wrap the range in <code>ow-slider</code> alongside a
  <code>&lt;input type="number"&gt;</code> carrying
  <code>ow-slider-input</code> to show and edit the exact value. Bind both controls
  to the same value so they stay in sync.
</p>
<Example
  block
  code={`<div class="ow-slider">
  <input type="range" min="0" max="100" value="50" step="1" id="amount-2" aria-label="Amount" />
  <input type="number" class="ow-slider-input" value="50" aria-label="Amount value" />
</div>`}
>
  <div class="ow-slider w-full max-w-md">
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      id="amount-2"
      aria-label="Amount"
      bind:value={volume}
      style={progress}
    />
    <input
      type="number"
      class="ow-slider-input"
      aria-label="Amount value"
      bind:value={volume}
    />
  </div>
</Example>
