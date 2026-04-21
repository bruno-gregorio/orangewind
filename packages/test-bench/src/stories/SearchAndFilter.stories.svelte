<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Search and Filter',
    args: {
      dark: false,
      baselineGrid: false
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      },
      baselineGrid: {
        name: 'Baseline grid',
        control: 'boolean'
      }
    }
  })
</script>

<script lang="ts">
  /* global HTMLDivElement, HTMLSpanElement, SubmitEvent, ResizeObserver */
  import { tick } from 'svelte'

  type Chip = {
    lead?: string
    value: string
  }

  type FilterSection = {
    heading: string
    chips: string[]
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const wideSectionClass = 'max-w-4xl space-y-4 pb-72'
  const promptSectionClass = 'max-w-3xl space-y-4 pb-36'
  const searchAndFilterLabel = 'Search and filter'

  const filterSections: FilterSection[] = [
    {
      heading: 'Cloud',
      chips: ['Google', 'AWS', 'Azure']
    },
    {
      heading: 'Region',
      chips: [
        'us-east1',
        'us-north2',
        'us-south3',
        'us-north4',
        'us-east5',
        'us-south6',
        'us-east7',
        'us-east8',
        'us-east9',
        'us-east10'
      ]
    },
    {
      heading: 'Owner',
      chips: ['foo', 'bar', 'baz']
    }
  ]

  const initialSelectedChips: Chip[] = [
    { lead: 'Cloud', value: 'Google' },
    { lead: 'Cloud', value: 'AWS' }
  ]

  const initialOverflowChips: Chip[] = [
    { lead: 'Cloud', value: 'Google' },
    { lead: 'Cloud', value: 'AWS' },
    { lead: 'Cloud', value: 'Azure' },
    { lead: 'Region', value: 'us-east1' },
    { lead: 'Region', value: 'us-north2' },
    { lead: 'Region', value: 'us-south3' },
    { lead: 'Region', value: 'us-north4' },
    { lead: 'Owner', value: 'foo' },
    { lead: 'Owner', value: 'bar' },
    { lead: 'Owner', value: 'baz' }
  ]

  let defaultExpanded = $state(false)
  let chipsExpanded = $state(false)
  let overflowExpanded = $state(false)
  let overflowHiddenCount = $state(0)
  let overflowHiddenIndexes = $state<number[]>([])
  let overflowContainer = $state<HTMLDivElement | null>(null)
  let promptExpanded = $state(true)
  let selectedChips = $state([...initialSelectedChips])
  let overflowChips = $state([...initialOverflowChips])
  let promptChips = $state<Chip[]>([])
  let promptValue = $state('vanilla')
  const promptHasContent = $derived(
    promptChips.length > 0 || promptValue.trim().length > 0
  )

  function removeChip(chips: Chip[], index: number) {
    return chips.filter((_, chipIndex) => chipIndex !== index)
  }

  function chipKey(chip: Chip, index: number) {
    return `${chip.lead ?? 'query'}-${chip.value}-${index}`
  }

  function panelChipKey(section: FilterSection, chip: string) {
    return `${section.heading}-${chip}`
  }

  function addPromptChip() {
    const value = promptValue.trim()

    if (value === '') {
      return
    }

    promptChips = [{ value }, ...promptChips]
    promptValue = ''
    promptExpanded = false
  }

  function preventSubmit(event: SubmitEvent) {
    event.preventDefault()
  }

  function handlePromptSubmit(event: SubmitEvent) {
    event.preventDefault()
    addPromptChip()
  }

  function clearPrompt() {
    promptValue = ''
    promptExpanded = false
  }

  function syncPromptExpanded() {
    promptExpanded = promptValue.trim() !== ''
  }

  function handlePromptBlur() {
    if (promptValue.trim() === '') {
      promptExpanded = false
    }
  }

  function removeSelectedChip(index: number) {
    selectedChips = removeChip(selectedChips, index)
  }

  function removeOverflowChip(index: number) {
    overflowChips = removeChip(overflowChips, index)
  }

  function removePromptChip(index: number) {
    promptChips = removeChip(promptChips, index)
  }

  function isOverflowChipHidden(index: number) {
    return !overflowExpanded && overflowHiddenIndexes.includes(index)
  }

  function resetOverflowState() {
    overflowHiddenCount = 0
    overflowHiddenIndexes = []
  }

  function scheduleOverflowUpdate() {
    tick().then(updateOverflowHiddenCount)
  }

  function updateOverflowHiddenCount() {
    const container = overflowContainer

    if (overflowExpanded || container === null) {
      resetOverflowState()
      return
    }

    const chips = Array.from(container.children).filter(
      (element): element is HTMLSpanElement =>
        element.classList.contains('ow-chip')
    )

    if (chips.length === 0) {
      resetOverflowState()
      return
    }

    const firstRowTop = chips[0].offsetTop
    const hiddenIndexes = chips.flatMap((chip, index) =>
      chip.offsetTop > firstRowTop ? [index] : []
    )
    const nextHiddenCount = hiddenIndexes.length
    const hiddenCountChanged = overflowHiddenCount !== nextHiddenCount

    overflowHiddenIndexes = hiddenIndexes
    overflowHiddenCount = nextHiddenCount

    if (hiddenCountChanged) {
      scheduleOverflowUpdate()
    }
  }

  $effect(() => {
    const container = overflowContainer

    if (container === null) {
      return
    }

    const observer = new ResizeObserver(() => {
      scheduleOverflowUpdate()
    })

    observer.observe(container)
    scheduleOverflowUpdate()

    return () => {
      observer.disconnect()
    }
  })

  $effect(() => {
    if (overflowExpanded) {
      resetOverflowState()
    }

    if (overflowContainer !== null) {
      scheduleOverflowUpdate()
    }
  })
</script>

{#snippet filterPanel(showCounter: boolean)}
  {#each filterSections as section (section.heading)}
    <div class="ow-filter-panel-section">
      <h5 class="ow-filter-panel-section-heading">{section.heading}</h5>
      <div class="ow-filter-panel-section-chips" aria-expanded="false">
        {#each section.chips as chip (panelChipKey(section, chip))}
          <button type="button" class="ow-chip">
            <span class="ow-chip-lead">{section.heading}</span>
            <span class="ow-chip-value">{chip}</span>
          </button>
        {/each}
        {#if showCounter && section.heading === 'Region'}
          <button type="button" class="ow-filter-panel-section-counter">
            +4
          </button>
        {/if}
      </div>
    </div>
  {/each}
{/snippet}

{#snippet dismissibleChip(
  chip: { lead?: string; value: string },
  onRemove: () => void,
  overflowHidden?: boolean
)}
  <span class="ow-chip" data-overflow-hidden={overflowHidden}>
    {#if chip.lead}
      <span class="ow-chip-lead">{chip.lead}</span>
    {/if}
    <span class="ow-chip-value">{chip.value}</span>
    <button
      type="button"
      class="ow-chip-dismiss"
      aria-label={`Remove ${chip.value}`}
      onclick={onRemove}
    >
      Remove
    </button>
  </span>
{/snippet}

{#snippet searchForm({
  id,
  onFocus,
  onBlur,
  overflowing
}: {
  id: string
  onFocus: () => void
  onBlur?: () => void
  overflowing?: boolean
})}
  <form
    class="ow-search-and-filter-box"
    data-overflowing={overflowing}
    onsubmit={preventSubmit}
  >
    <label class="sr-only" for={id}>{searchAndFilterLabel}</label>
    <input
      {id}
      class="ow-search-and-filter-input"
      type="search"
      name="search"
      placeholder={searchAndFilterLabel}
      autocomplete="off"
      onfocus={onFocus}
      onblur={onBlur}
    />
    <button type="submit" class="ow-search-and-filter-search-button">
      Search
    </button>
    <i class="ow-icon-search ow-search-and-filter-search-icon">Search</i>
  </form>
{/snippet}

<Story
  name="Search and Filter"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template({ dark = false, baselineGrid = false })}
    <div
      use:darkMode={dark}
      class={[
        'p-10 space-y-14',
        dark && 'bg-[#111] text-white',
        baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class={wideSectionClass}>
        <p class={sectionTitleClass}>Default search and filter</p>

        <div class="ow-search-and-filter">
          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={defaultExpanded}
            data-active="true"
            data-empty="true"
          >
            {@render searchForm({
              id: 'search-filter-default',
              onFocus: () => (defaultExpanded = true),
              onBlur: () => (defaultExpanded = false)
            })}
          </div>

          <div
            class="ow-search-and-filter-panel"
            aria-hidden={!defaultExpanded}
          >
            {@render filterPanel(false)}
          </div>
        </div>
      </section>

      <section class={wideSectionClass}>
        <p class={sectionTitleClass}>Selected chips</p>

        <div class="ow-search-and-filter">
          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={chipsExpanded}
            data-active="true"
            data-empty={selectedChips.length === 0}
          >
            {#each selectedChips as chip, chipIndex (chipKey(chip, chipIndex))}
              {@render dismissibleChip(
                chip,
                () => removeSelectedChip(chipIndex),
                undefined
              )}
            {/each}

            {@render searchForm({
              id: 'search-filter-selected',
              onFocus: () => (chipsExpanded = true),
              onBlur: () => (chipsExpanded = false)
            })}
          </div>

          <div class="ow-search-and-filter-panel" aria-hidden={!chipsExpanded}>
            {@render filterPanel(false)}
          </div>
        </div>
      </section>

      <section class={wideSectionClass}>
        <p class={sectionTitleClass}>Overflowing chips</p>

        <div class="ow-search-and-filter">
          <div
            class="ow-search-and-filter-search-container"
            bind:this={overflowContainer}
            aria-expanded={overflowExpanded}
            data-active="true"
            data-empty={overflowChips.length === 0}
            data-overflow-layout="true"
          >
            {#each overflowChips as chip, chipIndex (chipKey(chip, chipIndex))}
              {@render dismissibleChip(
                chip,
                () => removeOverflowChip(chipIndex),
                isOverflowChipHidden(chipIndex)
              )}
            {/each}

            {#if overflowHiddenCount > 0}
              <button
                type="button"
                class="ow-search-and-filter-selected-count"
                onclick={() => (overflowExpanded = true)}
              >
                +{overflowHiddenCount}
              </button>
            {/if}

            {@render searchForm({
              id: 'search-filter-overflow',
              onFocus: () => (overflowExpanded = true),
              overflowing: overflowExpanded
            })}
          </div>

          <div
            class="ow-search-and-filter-panel"
            aria-hidden={!overflowExpanded}
          >
            {@render filterPanel(true)}
          </div>
        </div>
      </section>

      <section class={promptSectionClass}>
        <p class={sectionTitleClass}>Search prompt</p>

        <div class="ow-search-and-filter">
          {#if promptValue !== ''}
            <button
              type="button"
              class="ow-search-and-filter-clear"
              aria-label="Clear search"
              onclick={clearPrompt}
            >
              <i class="ow-icon-close"></i>
            </button>
          {/if}

          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={promptExpanded}
            data-active="true"
            data-empty={!promptHasContent}
          >
            {#each promptChips as chip, chipIndex (chipKey(chip, chipIndex))}
              {@render dismissibleChip(
                chip,
                () => removePromptChip(chipIndex),
                undefined
              )}
            {/each}

            <form
              class="ow-search-and-filter-box"
              onsubmit={handlePromptSubmit}
            >
              <label class="sr-only" for="search-filter-prompt">
                {searchAndFilterLabel}
              </label>
              <input
                id="search-filter-prompt"
                class="ow-search-and-filter-input"
                type="search"
                name="search"
                placeholder={searchAndFilterLabel}
                autocomplete="off"
                bind:value={promptValue}
                onfocus={syncPromptExpanded}
                oninput={syncPromptExpanded}
                onblur={handlePromptBlur}
              />
              <button type="submit" class="ow-search-and-filter-search-button">
                Search
              </button>
            </form>
          </div>

          <div class="ow-search-and-filter-panel" aria-hidden={!promptExpanded}>
            <button
              type="button"
              class="ow-search-and-filter-search-prompt"
              onclick={addPromptChip}
            >
              Search for
              <span class="ow-search-and-filter-search-query">
                {promptValue.trim() || '...'}
              </span>
              ...
            </button>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
