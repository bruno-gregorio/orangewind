<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Data Spotlight',
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
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  type Stat = {
    desc: string
    headline: string
    stat: string
  }

  const stats: Stat[] = [
    {
      desc: 'Backed by our global, follow-the-sun support team.',
      headline: 'Uptime SLA',
      stat: '99.9%'
    },
    {
      desc: 'Running in production across every major cloud.',
      headline: 'Deployments / day',
      stat: '12k+'
    },
    {
      desc: 'Lower total cost of ownership versus legacy stacks.',
      headline: 'Cost reduction',
      stat: '40%'
    },
    {
      desc: 'Security patches shipped within the disclosure window.',
      headline: 'CVE response',
      stat: '24h'
    }
  ]

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

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

<Story name="Data Spotlight">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Four blocks</p>

          <div class="ow-data-spotlight-4-blocks">
            <h2 class="ow-data-spotlight-title ow-muted-heading">
              By the numbers
            </h2>
            {#each stats as item (item.headline)}
              <div class="ow-data-spotlight-block">
                <hr class="ow-rule-highlight" />
                <p class="ow-data-spotlight-stat">{item.stat}</p>
                <p class="ow-data-spotlight-headline">{item.headline}</p>
                <p class="opacity-70">{item.desc}</p>
              </div>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Three blocks</p>

          <div class="ow-data-spotlight-3-blocks">
            <h2 class="ow-data-spotlight-title ow-muted-heading">
              Performance at scale
            </h2>
            {#each stats.slice(0, 3) as item (item.headline)}
              <div class="ow-data-spotlight-block">
                <hr class="ow-rule-highlight" />
                <p class="ow-data-spotlight-stat">{item.stat}</p>
                <p class="ow-data-spotlight-headline">{item.headline}</p>
                <p class="opacity-70">{item.desc}</p>
              </div>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Two blocks</p>

          <div class="ow-data-spotlight-2-blocks">
            <h2 class="ow-data-spotlight-title ow-muted-heading">
              Why teams switch
            </h2>
            {#each stats.slice(0, 2) as item (item.headline)}
              <div class="ow-data-spotlight-block">
                <hr class="ow-rule-highlight" />
                <p class="ow-data-spotlight-stat">{item.stat}</p>
                <p class="ow-data-spotlight-headline">{item.headline}</p>
                <p class="opacity-70">{item.desc}</p>
              </div>
            {/each}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
