<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration — a real, working search box. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <form class="ow-search-box w-full max-w-md" role="search">
    <label for="hero-search" class="sr-only">Search</label>
    <input
      id="hero-search"
      class="ow-search-box-input"
      type="search"
      placeholder="Search..."
      required
    />
    <button type="reset" class="ow-search-box-reset" aria-label="Clear search">
      <i class="ow-icon-close"></i>
    </button>
    <button
      type="submit"
      class="ow-search-box-button"
      aria-label="Submit search"
    >
      <i class="ow-icon-search"></i>
    </button>
  </form>
</div>

<p>
  A search box is a self-contained <code>&lt;form&gt;</code> pairing a search
  input with submit and reset buttons. Give the form <code>ow-search-box</code>
  and <code>role="search"</code>; the reset button only appears once the field
  has a value.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  The input uses <code>ow-search-box-input</code>, the clear button
  <code>ow-search-box-reset</code> and the submit button
  <code>ow-search-box-button</code>. Label the field with a visually hidden
  <code>&lt;label&gt;</code> and the icon buttons with
  <code>aria-label</code>.
</p>
<Example
  block
  code={`<form class="ow-search-box" role="search">
  <label for="search" class="sr-only">Search</label>
  <input id="search" class="ow-search-box-input" type="search" placeholder="Search..." required />
  <button type="reset" class="ow-search-box-reset" aria-label="Clear search">
    <i class="ow-icon-close"></i>
  </button>
  <button type="submit" class="ow-search-box-button" aria-label="Submit search">
    <i class="ow-icon-search"></i>
  </button>
</form>`}
>
  <form class="ow-search-box w-full max-w-md" role="search">
    <label for="search" class="sr-only">Search</label>
    <input
      id="search"
      class="ow-search-box-input"
      type="search"
      placeholder="Search..."
      required
    />
    <button type="reset" class="ow-search-box-reset" aria-label="Clear search">
      <i class="ow-icon-close"></i>
    </button>
    <button
      type="submit"
      class="ow-search-box-button"
      aria-label="Submit search"
    >
      <i class="ow-icon-search"></i>
    </button>
  </form>
</Example>

<h2 id="disabled" class="ow-heading-2">Disabled</h2>
<p>
  Add the <code>disabled</code> attribute to the input and both buttons to make the
  whole search box unavailable.
</p>
<Example
  block
  code={`<form class="ow-search-box" role="search">
  <label for="search-disabled" class="sr-only">Search</label>
  <input id="search-disabled" class="ow-search-box-input" type="search" placeholder="Search..." required disabled />
  <button type="reset" class="ow-search-box-reset" aria-label="Clear search" disabled>
    <i class="ow-icon-close"></i>
  </button>
  <button type="submit" class="ow-search-box-button" aria-label="Submit search" disabled>
    <i class="ow-icon-search"></i>
  </button>
</form>`}
>
  <form class="ow-search-box w-full max-w-md" role="search">
    <label for="search-disabled" class="sr-only">Search</label>
    <input
      id="search-disabled"
      class="ow-search-box-input"
      type="search"
      placeholder="Search..."
      required
      disabled
    />
    <button
      type="reset"
      class="ow-search-box-reset"
      aria-label="Clear search"
      disabled
    >
      <i class="ow-icon-close"></i>
    </button>
    <button
      type="submit"
      class="ow-search-box-button"
      aria-label="Submit search"
      disabled
    >
      <i class="ow-icon-search"></i>
    </button>
  </form>
</Example>
