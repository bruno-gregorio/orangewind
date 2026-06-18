<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration — dismissible chips.
  type Chip = { lead: string; value: string }
  let chips = $state<Chip[]>([
    { lead: 'Cloud', value: 'Google' },
    { lead: 'Cloud', value: 'AWS' }
  ])

  function remove(index: number) {
    chips = chips.filter((_, i) => i !== index)
  }
</script>

<!-- Mandatory headline demonstration — a contained search-and-filter field. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8 pb-72">
  <div class="ow-search-and-filter">
    <div
      class="ow-search-and-filter-search-container"
      data-active="true"
      data-empty={chips.length === 0}
    >
      {#each chips as chip, index (chip.lead + chip.value)}
        <span class="ow-chip">
          <span class="ow-chip-lead">{chip.lead}</span>
          <span class="ow-chip-value">{chip.value}</span>
          <button
            type="button"
            class="ow-chip-dismiss"
            aria-label={`Remove ${chip.value}`}
            onclick={() => remove(index)}
          >
            Remove
          </button>
        </span>
      {/each}

      <form class="ow-search-and-filter-box">
        <label class="sr-only" for="hero-saf">Search and filter</label>
        <input
          id="hero-saf"
          class="ow-search-and-filter-input"
          type="search"
          name="search"
          placeholder="Search and filter"
          autocomplete="off"
        />
        <button type="submit" class="ow-search-and-filter-search-button">
          Search
        </button>
      </form>
    </div>

    <div class="ow-search-and-filter-panel" tabindex="-1">
      <div class="ow-filter-panel-section">
        <h5 class="ow-filter-panel-section-heading">Cloud</h5>
        <div class="ow-filter-panel-section-chips">
          <button type="button" class="ow-chip">
            <span class="ow-chip-lead">Cloud</span>
            <span class="ow-chip-value">Azure</span>
          </button>
        </div>
      </div>
      <div class="ow-filter-panel-section">
        <h5 class="ow-filter-panel-section-heading">Owner</h5>
        <div class="ow-filter-panel-section-chips">
          <button type="button" class="ow-chip">
            <span class="ow-chip-lead">Owner</span>
            <span class="ow-chip-value">foo</span>
          </button>
          <button type="button" class="ow-chip">
            <span class="ow-chip-lead">Owner</span>
            <span class="ow-chip-value">bar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<p>
  Search and filter combines a free-text search field with selectable filter
  chips. Selected filters appear as dismissible chips inside the field, and a
  dropdown panel of available filters opens while the field is focused. Focus
  the field above to reveal its panel.
</p>

<h2 id="field" class="ow-heading-2">The field</h2>
<p>
  The root is <code>ow-search-and-filter</code>. Inside,
  <code>ow-search-and-filter-search-container</code> holds the chips and the
  search box, and the dropdown lives in
  <code>ow-search-and-filter-panel</code>. The panel is positioned absolutely
  and reveals itself on <code>:focus-within</code>, so it needs no JavaScript to
  open.
</p>
<Example
  block
  code={`<div class="ow-search-and-filter">
  <div class="ow-search-and-filter-search-container" data-active="true" data-empty="true">
    <form class="ow-search-and-filter-box">
      <label class="sr-only" for="saf">Search and filter</label>
      <input id="saf" class="ow-search-and-filter-input" type="search" placeholder="Search and filter" autocomplete="off" />
      <button type="submit" class="ow-search-and-filter-search-button">Search</button>
    </form>
  </div>
  <div class="ow-search-and-filter-panel" tabindex="-1">
    <!-- filter panel sections -->
  </div>
</div>`}
>
  <div class="w-full pb-56">
    <div class="ow-search-and-filter">
      <div
        class="ow-search-and-filter-search-container"
        data-active="true"
        data-empty="true"
      >
        <form class="ow-search-and-filter-box">
          <label class="sr-only" for="saf">Search and filter</label>
          <input
            id="saf"
            class="ow-search-and-filter-input"
            type="search"
            placeholder="Search and filter"
            autocomplete="off"
          />
          <button type="submit" class="ow-search-and-filter-search-button">
            Search
          </button>
        </form>
      </div>
      <div class="ow-search-and-filter-panel" tabindex="-1">
        <div class="ow-filter-panel-section">
          <h5 class="ow-filter-panel-section-heading">Cloud</h5>
          <div class="ow-filter-panel-section-chips">
            <button type="button" class="ow-chip">
              <span class="ow-chip-lead">Cloud</span>
              <span class="ow-chip-value">Google</span>
            </button>
            <button type="button" class="ow-chip">
              <span class="ow-chip-lead">Cloud</span>
              <span class="ow-chip-value">AWS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Example>

<h2 id="selected-chips" class="ow-heading-2">Selected filters</h2>
<p>
  Each applied filter renders as a dismissible <code>ow-chip</code> before the
  search box, with an <code>ow-chip-lead</code> category, an
  <code>ow-chip-value</code> and an <code>ow-chip-dismiss</code> button. Set
  <code>data-empty="false"</code> on the container when chips are present.
</p>
<Example
  block
  code={`<div class="ow-search-and-filter-search-container" data-active="true" data-empty="false">
  <span class="ow-chip">
    <span class="ow-chip-lead">Cloud</span>
    <span class="ow-chip-value">Google</span>
    <button type="button" class="ow-chip-dismiss" aria-label="Remove Google">Remove</button>
  </span>
  <form class="ow-search-and-filter-box">
    <label class="sr-only" for="saf-selected">Search and filter</label>
    <input id="saf-selected" class="ow-search-and-filter-input" type="search" placeholder="Search and filter" autocomplete="off" />
    <button type="submit" class="ow-search-and-filter-search-button">Search</button>
  </form>
</div>`}
>
  <div class="w-full">
    <div
      class="ow-search-and-filter-search-container"
      data-active="true"
      data-empty="false"
    >
      <span class="ow-chip">
        <span class="ow-chip-lead">Cloud</span>
        <span class="ow-chip-value">Google</span>
        <button
          type="button"
          class="ow-chip-dismiss"
          aria-label="Remove Google"
        >
          Remove
        </button>
      </span>
      <form class="ow-search-and-filter-box">
        <label class="sr-only" for="saf-selected">Search and filter</label>
        <input
          id="saf-selected"
          class="ow-search-and-filter-input"
          type="search"
          placeholder="Search and filter"
          autocomplete="off"
        />
        <button type="submit" class="ow-search-and-filter-search-button">
          Search
        </button>
      </form>
    </div>
  </div>
</Example>

<h2 id="filter-panel" class="ow-heading-2">Filter panel sections</h2>
<p>
  Group the available filters inside the panel with
  <code>ow-filter-panel-section</code>, each carrying an
  <code>ow-filter-panel-section-heading</code> and a
  <code>ow-filter-panel-section-chips</code> row. An optional
  <code>ow-filter-panel-section-counter</code> button can summarise hidden options.
</p>
<Example
  block
  code={`<div class="ow-filter-panel-section">
  <h5 class="ow-filter-panel-section-heading">Region</h5>
  <div class="ow-filter-panel-section-chips">
    <button type="button" class="ow-chip">
      <span class="ow-chip-lead">Region</span>
      <span class="ow-chip-value">us-east1</span>
    </button>
    <button type="button" class="ow-chip">
      <span class="ow-chip-lead">Region</span>
      <span class="ow-chip-value">us-north2</span>
    </button>
    <button type="button" class="ow-filter-panel-section-counter">+4</button>
  </div>
</div>`}
>
  <div class="w-full max-w-md">
    <div class="ow-filter-panel-section">
      <h5 class="ow-filter-panel-section-heading">Region</h5>
      <div class="ow-filter-panel-section-chips">
        <button type="button" class="ow-chip">
          <span class="ow-chip-lead">Region</span>
          <span class="ow-chip-value">us-east1</span>
        </button>
        <button type="button" class="ow-chip">
          <span class="ow-chip-lead">Region</span>
          <span class="ow-chip-value">us-north2</span>
        </button>
        <button type="button" class="ow-filter-panel-section-counter">+4</button
        >
      </div>
    </div>
  </div>
</Example>

<h2 id="overflow" class="ow-heading-2">Overflow counter</h2>
<p>
  When selected chips wrap beyond the collapsed single-row height, an
  <code>ow-search-and-filter-selected-count</code> button pins to the trailing edge
  showing how many are hidden; clicking it expands the field. Toggling visibility
  and counting the overflow is driven in script.
</p>
<Example
  block
  code={`<button type="button" class="ow-search-and-filter-selected-count">+4</button>`}
>
  <div class="w-full max-w-md">
    <button type="button" class="ow-search-and-filter-selected-count">+4</button
    >
  </div>
</Example>
