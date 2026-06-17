<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Layouts/Brochure Site',
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

  // Each split is rendered as a `grid-demo` row whose columns carry the labels
  // below, so the proportions of every layout are visible at a glance.
  const splits: Split[] = [
    {
      cols: ['25%', '25%', '25%', '25%'],
      description:
        'Four equal columns. Pairs into two 50/50 rows on medium screens.',
      id: '25-25-25-25',
      rowClass: 'ow-row-25-25-25-25',
      title: '25 / 25 / 25 / 25'
    },
    {
      cols: ['50%', '50%'],
      description:
        'Equal halves: a scannable heading on the left, dense copy on the right.',
      id: '50-50',
      rowClass: 'ow-row-50-50',
      title: '50 / 50 split'
    },
    {
      cols: ['25%', '25%', '50%'],
      description:
        'A 50/50 with the left half subdivided. The 50% column drops to its own row on medium.',
      id: '25-25-50',
      rowClass: 'ow-row-25-25-50',
      title: '25 / 25 / 50 split'
    },
    {
      cols: ['25%', '75%'],
      description:
        'A narrow heading column beside a wide content area. Relaxes to 33/66 on medium.',
      id: '25-75',
      rowClass: 'ow-row-25-75',
      title: '25 / 75 split'
    },
    {
      cols: ['75%', '25%'],
      description: 'The mirror of 25/75, with the wide column first.',
      id: '75-25',
      rowClass: 'ow-row-75-25',
      title: '75 / 25 split'
    }
  ]

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

{#snippet demoCol(label: string)}
  <div
    class="ow-col flex min-h-24 items-center justify-center rounded-xs text-sm font-semibold"
    style="background: color-mix(in srgb, currentColor 12%, transparent)"
  >
    {label}
  </div>
{/snippet}

<Story name="Brochure Site">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <!-- Intro strip built on a 50/50 split. -->
      <section class="ow-strip ow-is-deep">
        <div class="ow-row-50-50">
          <div class="ow-col">
            <h1 class="ow-heading-2">
              <strong>Brochure site layouts</strong>
            </h1>
          </div>
          <div class="ow-col">
            <p class="ow-heading-3">
              A page is a sequence of sections sandwiched between a header and a
              footer.
            </p>
            <p>
              Every section uses one of the split grids below. Column widths are
              always multiples of 25% of the available space, so content across
              all sections aligns to the same invisible fault lines.
            </p>
          </div>
        </div>
      </section>

      <!-- One section per split: heading and description on a 25/75 row, then
           the split itself rendered full width below so its real column
           distribution is visible across the page. -->
      {#each splits as split (split.id)}
        <section class="ow-section">
          <div class="mx-auto max-w-7xl px-4 sm:px-6">
            <hr class="ow-rule" />
          </div>
          <div class="ow-row-25-75">
            <div class="ow-col">
              <h2 class="ow-muted-heading">{split.title}</h2>
            </div>
            <div class="ow-col">
              <p>{split.description}</p>
            </div>
          </div>
          <div class={`${split.rowClass} pt-6`}>
            {#each split.cols as label, index (index)}
              {@render demoCol(label)}
            {/each}
          </div>
        </section>
      {/each}

      <!-- A lone column in a 25/75 row offsets into the 75% area on large. -->
      <section class="ow-strip ow-is-highlighted ow-is-deep">
        <div class="ow-row-25-75">
          <div class="ow-col">
            <h2 class="ow-heading-3">
              A single column in a 25/75 row offsets to the right on large
              screens, leaving the first quarter as structural white space.
            </h2>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
