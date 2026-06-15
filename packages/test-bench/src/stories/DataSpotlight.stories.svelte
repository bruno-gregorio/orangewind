<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/Data Spotlight',
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

  type Stat = {
    description?: string
    headline?: string
    id: string
    link?: string
    stat: string
  }
</script>

<script lang="ts">
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const fourStats: Stat[] = [
    {
      description: 'Across public clouds, private clouds and the edge.',
      headline: 'production clusters',
      id: 'clusters',
      link: 'Read the report',
      stat: '12k+'
    },
    {
      description: 'Median time to bootstrap a new cluster end to end.',
      headline: 'to first workload',
      id: 'time',
      stat: '8 min'
    },
    {
      description:
        'Lower total cost of ownership than public cloud managed K8s.',
      headline: 'cost reduction',
      id: 'cost',
      link: 'See the case study',
      stat: '5×'
    },
    {
      description: 'Security maintenance commitment for every LTS release.',
      headline: 'of support',
      id: 'support',
      stat: '10 yrs'
    }
  ]

  const threeStats: Stat[] = fourStats.slice(0, 3)

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

{#snippet block(item: Stat)}
  <div class="ow-data-spotlight-block">
    <div>
      <hr class="ow-rule-highlight" />
      <p class="ow-heading-1 ow-data-spotlight-stat">{item.stat}</p>
    </div>
    {#if item.headline}
      <p class="ow-heading-3 m-0 p-0">{item.headline}</p>
    {/if}
    {#if item.description}
      <p>{item.description}</p>
    {/if}
    {#if item.link}
      <a href="#stat">{item.link}</a>
    {/if}
  </div>
{/snippet}

<Story name="Data Spotlight">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Four blocks</p>
          <div class="ow-section">
            <h2 class="ow-muted-heading">Kubernetes at scale</h2>
            <div
              class="ow-data-spotlight-row pt-2 md:grid-cols-2 lg:grid-cols-4"
            >
              {#each fourStats as item (item.id)}
                {@render block(item)}
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Three blocks</p>
          <div class="ow-section">
            <h2 class="ow-muted-heading">By the numbers</h2>
            <div class="ow-data-spotlight-row pt-2 md:grid-cols-3">
              {#each threeStats as item (item.id)}
                {@render block(item)}
              {/each}
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
