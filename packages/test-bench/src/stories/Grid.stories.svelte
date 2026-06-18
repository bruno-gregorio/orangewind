<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Grid',
    parameters: {
      layout: 'fullscreen'
    },
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

  type Split = {
    cols: string[]
    description: string
    id: string
    rowClass: string
    title: string
  }
</script>

<script lang="ts">
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  // The split shortcut classes, rendered as labelled columns so the proportions
  // each one produces on the 4/4/8 grid are visible at a glance.
  const splits: Split[] = [
    {
      cols: ['50%', '50%'],
      description: 'Equal halves on medium (2/2) and large (4/4).',
      id: '50-50',
      rowClass: 'ow-grid-row-50-50',
      title: '50 / 50'
    },
    {
      cols: ['25%', '75%'],
      description:
        'A narrow column beside a wide one. Relaxes to 1/3 on medium.',
      id: '25-75',
      rowClass: 'ow-grid-row-25-75',
      title: '25 / 75'
    },
    {
      cols: ['75%', '25%'],
      description: 'The mirror of 25/75, with the wide column first.',
      id: '75-25',
      rowClass: 'ow-grid-row-75-25',
      title: '75 / 25'
    },
    {
      cols: ['25%', '25%', '50%'],
      description:
        'A 50/50 with the left half subdivided. The 50% column drops to its own row on medium.',
      id: '25-25-50',
      rowClass: 'ow-grid-row-25-25-50',
      title: '25 / 25 / 50'
    },
    {
      cols: ['25%', '25%', '25%', '25%'],
      description: 'Four equal columns, pairing into 50/50 rows on medium.',
      id: '25-25-25-25',
      rowClass: 'ow-grid-row-25-25-25-25',
      title: '25 / 25 / 25 / 25'
    }
  ]

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen p-6',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

{#snippet cell(label: string)}
  <div
    class="flex min-h-16 items-center justify-center rounded-xs text-sm font-semibold"
    style="background: color-mix(in srgb, currentColor 12%, transparent)"
  >
    {label}
  </div>
{/snippet}

<Story name="Grid">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="ow-fixed-width flex flex-col gap-12">
        <!-- Default grid: eight equal columns on large, four on medium/small. -->
        <section class="flex flex-col gap-3">
          <h2 class="ow-heading-4"><strong>Default grid</strong></h2>
          <p class="text-sm opacity-70">
            Eight columns on large screens, four on medium and small. Each cell
            is a single <code>.ow-grid-col-1</code> column.
          </p>
          <div class="ow-grid-row" style="padding-inline: 0">
            {#each Array(8) as _, index (index)}
              <div
                class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1"
              >
                {@render cell('1')}
              </div>
            {/each}
          </div>
        </section>

        <!-- Split shortcut classes. -->
        {#each splits as split (split.id)}
          <section class="flex flex-col gap-3">
            <h2 class="ow-heading-4"><strong>{split.title}</strong></h2>
            <p class="text-sm opacity-70">{split.description}</p>
            <div class={split.rowClass} style="padding-inline: 0">
              {#each split.cols as label, index (index)}
                <div class="ow-grid-col">{@render cell(label)}</div>
              {/each}
            </div>
          </section>
        {/each}

        <!-- Offset and reordering: an empty leading track, then a reordered pair. -->
        <section class="flex flex-col gap-3">
          <h2 class="ow-heading-4"><strong>Offset &amp; order</strong></h2>
          <p class="text-sm opacity-70">
            The first column starts at track 4 and is pushed to the end on large
            screens; the second fills the leading space.
          </p>
          <div class="ow-grid-row" style="padding-inline: 0">
            <div
              class="ow-grid-col-4 ow-grid-col-start-large-4 ow-grid-col-order-large-2"
            >
              {@render cell('.ow-grid-col-4 · start-large-4 · order-large-2')}
            </div>
            <div class="ow-grid-col-3 ow-grid-col-order-large-1">
              {@render cell('.ow-grid-col-3 · order-large-1')}
            </div>
          </div>
        </section>

        <!-- Nested grid: a row inside a column subdivides its parent's width. -->
        <section class="flex flex-col gap-3">
          <h2 class="ow-heading-4"><strong>Nested columns</strong></h2>
          <p class="text-sm opacity-70">
            A <code>.ow-grid-row</code> inside a column re-divides only that column's
            width, dropping the page margins.
          </p>
          <div class="ow-grid-row" style="padding-inline: 0">
            <div class="ow-grid-col-8">
              {@render cell('.ow-grid-col-8')}
              <div class="ow-grid-row pt-3">
                <div class="ow-grid-col-6">
                  {@render cell('.ow-grid-col-6')}
                </div>
                <div class="ow-grid-col-2">
                  {@render cell('.ow-grid-col-2')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
