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
  type Chip = {
    lead?: string
    value: string
  }

  type FilterSection = {
    heading: string
    lead: string
    chips: string[]
  }

  const filterSections: FilterSection[] = [
    {
      heading: 'Cloud',
      lead: 'Cloud',
      chips: ['Google', 'AWS', 'Azure']
    },
    {
      heading: 'Region',
      lead: 'Region',
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
      lead: 'Owner',
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

  const overflowVisibleCount = 8

  let defaultExpanded = false
  let chipsExpanded = false
  let overflowExpanded = false
  let promptExpanded = true
  let selectedChips = [...initialSelectedChips]
  let overflowChips = [...initialOverflowChips]
  let promptChips: Chip[] = []
  let promptValue = 'vanilla'

  function removeChip(chips: Chip[], index: number) {
    return chips.filter((_, chipIndex) => chipIndex !== index)
  }

  function hiddenOverflowCount() {
    return Math.max(overflowChips.length - overflowVisibleCount, 0)
  }

  function chipKey(chip: Chip, index: number) {
    return `${chip.lead ?? 'query'}-${chip.value}-${index}`
  }

  function panelChipKey(section: FilterSection, chip: string) {
    return `${section.heading}-${chip}`
  }

  function promptHasContent() {
    return promptChips.length > 0 || promptValue.trim().length > 0
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
</script>

<Story
  name="Search and Filter"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'p-10 space-y-14',
        args?.dark && 'bg-[#111] text-white',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="max-w-4xl space-y-4 pb-72">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Default search and filter
        </p>

        <div class="ow-search-and-filter">
          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={defaultExpanded ? 'true' : 'false'}
            data-active="true"
            data-empty="true"
          >
            <form
              class="ow-search-and-filter-box"
              onsubmit={event => {
                event.preventDefault()
              }}
            >
              <label class="sr-only" for="search-filter-default">
                Search and filter
              </label>
              <input
                id="search-filter-default"
                class="ow-search-and-filter-input"
                type="search"
                name="search"
                placeholder="Search and filter"
                autocomplete="off"
                onfocus={() => {
                  defaultExpanded = true
                }}
                onblur={() => {
                  defaultExpanded = false
                }}
              />
              <button type="submit" class="ow-search-and-filter-search-button">
                Search
              </button>
            </form>
            <i class="ow-icon-search ow-search-and-filter-search-icon">Search</i
            >
          </div>

          <div
            class="ow-search-and-filter-panel"
            aria-hidden={defaultExpanded ? 'false' : 'true'}
          >
            {#each filterSections as section (section.heading)}
              <div class="ow-filter-panel-section">
                <h5 class="ow-filter-panel-section-heading">
                  {section.heading}
                </h5>
                <div
                  class="ow-filter-panel-section-chips"
                  aria-expanded="false"
                >
                  {#each section.chips as chip (panelChipKey(section, chip))}
                    <button type="button" class="ow-chip">
                      <span class="ow-chip-lead">{section.lead}</span>
                      <span class="ow-chip-value">{chip}</span>
                    </button>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <section class="max-w-4xl space-y-4 pb-72">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Selected chips
        </p>

        <div class="ow-search-and-filter">
          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={chipsExpanded ? 'true' : 'false'}
            data-active="true"
            data-empty={selectedChips.length === 0 ? 'true' : 'false'}
          >
            {#each selectedChips as chip, chipIndex (chipKey(chip, chipIndex))}
              <span class="ow-chip">
                <span class="ow-chip-lead">{chip.lead}</span>
                <span class="ow-chip-value">{chip.value}</span>
                <button
                  type="button"
                  class="ow-chip-dismiss"
                  aria-label={`Remove ${chip.value}`}
                  onclick={() => {
                    selectedChips = removeChip(selectedChips, chipIndex)
                  }}
                >
                  Remove
                </button>
              </span>
            {/each}

            <form
              class="ow-search-and-filter-box"
              onsubmit={event => {
                event.preventDefault()
              }}
            >
              <label class="sr-only" for="search-filter-selected">
                Search and filter
              </label>
              <input
                id="search-filter-selected"
                class="ow-search-and-filter-input"
                type="search"
                name="search"
                placeholder="Search and filter"
                autocomplete="off"
                onfocus={() => {
                  chipsExpanded = true
                }}
                onblur={() => {
                  chipsExpanded = false
                }}
              />
              <button type="submit" class="ow-search-and-filter-search-button">
                Search
              </button>
            </form>
            <i class="ow-icon-search ow-search-and-filter-search-icon">Search</i
            >
          </div>

          <div
            class="ow-search-and-filter-panel"
            aria-hidden={chipsExpanded ? 'false' : 'true'}
          >
            {#each filterSections as section (section.heading)}
              <div class="ow-filter-panel-section">
                <h5 class="ow-filter-panel-section-heading">
                  {section.heading}
                </h5>
                <div
                  class="ow-filter-panel-section-chips"
                  aria-expanded="false"
                >
                  {#each section.chips as chip (panelChipKey(section, chip))}
                    <button type="button" class="ow-chip">
                      <span class="ow-chip-lead">{section.lead}</span>
                      <span class="ow-chip-value">{chip}</span>
                    </button>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <section class="max-w-4xl space-y-4 pb-72">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Overflowing chips
        </p>

        <div class="ow-search-and-filter">
          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={overflowExpanded ? 'true' : 'false'}
            data-active="true"
            data-empty={overflowChips.length === 0 ? 'true' : 'false'}
          >
            {#each overflowChips as chip, chipIndex (chipKey(chip, chipIndex))}
              <span class="ow-chip">
                <span class="ow-chip-lead">{chip.lead}</span>
                <span class="ow-chip-value">{chip.value}</span>
                <button
                  type="button"
                  class="ow-chip-dismiss"
                  aria-label={`Remove ${chip.value}`}
                  onclick={() => {
                    overflowChips = removeChip(overflowChips, chipIndex)
                  }}
                >
                  Remove
                </button>
              </span>
            {/each}

            {#if hiddenOverflowCount() > 0}
              <button
                type="button"
                class="ow-search-and-filter-selected-count"
                onclick={() => {
                  overflowExpanded = true
                }}
              >
                +{hiddenOverflowCount()}
              </button>
            {/if}

            <form
              class="ow-search-and-filter-box"
              onsubmit={event => {
                event.preventDefault()
              }}
            >
              <label class="sr-only" for="search-filter-overflow">
                Search and filter
              </label>
              <input
                id="search-filter-overflow"
                class="ow-search-and-filter-input"
                type="search"
                name="search"
                placeholder="Search and filter"
                autocomplete="off"
                onfocus={() => {
                  overflowExpanded = true
                }}
              />
              <button type="submit" class="ow-search-and-filter-search-button">
                Search
              </button>
            </form>
            <i class="ow-icon-search ow-search-and-filter-search-icon">Search</i
            >
          </div>

          <div
            class="ow-search-and-filter-panel"
            aria-hidden={overflowExpanded ? 'false' : 'true'}
          >
            {#each filterSections as section (section.heading)}
              <div class="ow-filter-panel-section">
                <h5 class="ow-filter-panel-section-heading">
                  {section.heading}
                </h5>
                <div
                  class="ow-filter-panel-section-chips"
                  aria-expanded="false"
                >
                  {#each section.chips as chip (panelChipKey(section, chip))}
                    <button type="button" class="ow-chip">
                      <span class="ow-chip-lead">{section.lead}</span>
                      <span class="ow-chip-value">{chip}</span>
                    </button>
                  {/each}
                  {#if section.heading === 'Region'}
                    <button
                      type="button"
                      class="ow-filter-panel-section-counter"
                    >
                      +4
                    </button>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <section class="max-w-3xl space-y-4 pb-36">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Search prompt
        </p>

        <div class="ow-search-and-filter">
          {#if promptValue !== ''}
            <button
              type="button"
              class="ow-search-and-filter-clear"
              aria-label="Clear search"
              onclick={() => {
                promptValue = ''
                promptExpanded = false
              }}
            >
              <i class="ow-icon-close"></i>
            </button>
          {/if}

          <div
            class="ow-search-and-filter-search-container"
            aria-expanded={promptExpanded ? 'true' : 'false'}
            data-active="true"
            data-empty={promptHasContent() ? 'false' : 'true'}
          >
            {#each promptChips as chip, chipIndex (chipKey(chip, chipIndex))}
              <span class="ow-chip">
                <span class="ow-chip-value">{chip.value}</span>
                <button
                  type="button"
                  class="ow-chip-dismiss"
                  aria-label={`Remove ${chip.value}`}
                  onclick={() => {
                    promptChips = removeChip(promptChips, chipIndex)
                  }}
                >
                  Remove
                </button>
              </span>
            {/each}

            <form
              class="ow-search-and-filter-box"
              onsubmit={event => {
                event.preventDefault()
                addPromptChip()
              }}
            >
              <label class="sr-only" for="search-filter-prompt">
                Search and filter
              </label>
              <input
                id="search-filter-prompt"
                class="ow-search-and-filter-input"
                type="search"
                name="search"
                placeholder="Search and filter"
                autocomplete="off"
                bind:value={promptValue}
                onfocus={() => {
                  promptExpanded = promptValue.trim() !== ''
                }}
                oninput={() => {
                  promptExpanded = promptValue.trim() !== ''
                }}
                onblur={() => {
                  if (promptValue.trim() === '') {
                    promptExpanded = false
                  }
                }}
              />
              <button type="submit" class="ow-search-and-filter-search-button">
                Search
              </button>
            </form>
          </div>

          <div
            class="ow-search-and-filter-panel"
            aria-hidden={promptExpanded ? 'false' : 'true'}
          >
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
