<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Application Layouts/Equal Height Row',
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

  type Column = {
    description: string
    id: string
    link: string
    stat: string
    title: string
  }
</script>

<script lang="ts">
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Deliberately uneven copy so the row subgrid alignment is visible: the
  // title, description and link rows stay level across columns even though the
  // descriptions differ in length.
  const columns: Column[] = [
    {
      description: 'Run the same control plane across public clouds.',
      id: 'cloud',
      link: 'Explore clouds',
      stat: '01',
      title: 'Public cloud'
    },
    {
      description:
        'Bring workloads on-premise without changing the operations model your team already relies on day to day.',
      id: 'private',
      link: 'Explore private cloud',
      stat: '02',
      title: 'Private cloud'
    },
    {
      description: 'Push compute to the edge with a lightweight footprint.',
      id: 'edge',
      link: 'Explore edge',
      stat: '03',
      title: 'Edge'
    },
    {
      description:
        'Keep bare metal under the same lifecycle, from provisioning through retirement.',
      id: 'metal',
      link: 'Explore bare metal',
      stat: '04',
      title: 'Bare metal'
    }
  ]

  const threeColumns: Column[] = columns.slice(0, 3)

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

{#snippet column(item: Column)}
  <div class="ow-equal-height-row-col">
    <div class="ow-equal-height-row-item">
      <p class="ow-heading-1 m-0 p-0">{item.stat}</p>
    </div>
    <div class="ow-equal-height-row-item">
      <h3 class="ow-heading-5 m-0 p-0">{item.title}</h3>
    </div>
    <div class="ow-equal-height-row-item">
      <p class="m-0 p-0">{item.description}</p>
    </div>
    <div class="ow-equal-height-row-item">
      <a href="#equal-height" onclick={preventDefault}>{item.link} &rsaquo;</a>
    </div>
  </div>
{/snippet}

<Story name="Equal Height Row">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="grid gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Four column row</p>
          <div class="ow-equal-height-row">
            {#each columns as item (item.id)}
              {@render column(item)}
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Cross-column dividers</p>
          <div class="ow-equal-height-row ow-has-divider-1 ow-has-divider-3">
            {#each columns as item (item.id)}
              {@render column(item)}
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>
            Three column row (75% nested template)
          </p>
          <div
            class="ow-equal-height-row"
            style="--ow-equal-height-row-template-large: repeat(6, minmax(0, 1fr))"
          >
            {#each threeColumns as item (item.id)}
              {@render column(item)}
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Wrap variant</p>
          <div class="ow-equal-height-row-wrap">
            {#each columns as item (item.id)}
              {@render column(item)}
            {/each}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
