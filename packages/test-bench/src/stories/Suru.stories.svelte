<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Layouts/Suru',
    args: {
      dark: false
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      }
    }
  })
</script>

<script lang="ts">
  type StoryArgs = {
    dark?: boolean
  }

  type SuruExample = {
    className: string
    copy: string
    id: string
    title: string
  }

  // Main suru draws its band into an ::after element below the content
  const mainExamples: SuruExample[] = [
    {
      className: 'ow-suru-25-75',
      copy: 'The 25/75 split aligns the suru band with the grid for a hero followed by the rest of the page.',
      id: '25-75',
      title: 'Main suru 25/75'
    },
    {
      className: 'ow-suru-50-50',
      copy: 'The 50/50 split centers the band for a more symmetric hero separation.',
      id: '50-50',
      title: 'Main suru 50/50'
    }
  ]

  // Corner and divider backgrounds only render from the large breakpoint up
  const cornerExamples: SuruExample[] = [
    {
      className: 'ow-suru-fan-top',
      copy: 'The fan background anchors to the top-right corner of the hero.',
      id: 'fan-top',
      title: 'Fan top'
    },
    {
      className: 'ow-suru-fan-bottom',
      copy: 'The same fan, anchored instead to the bottom-right corner.',
      id: 'fan-bottom',
      title: 'Fan bottom'
    },
    {
      className: 'ow-suru-pyramid-left',
      copy: 'The pyramid background anchors to the top-left corner.',
      id: 'pyramid-left',
      title: 'Pyramid left'
    },
    {
      className: 'ow-suru-pyramid-right',
      copy: 'The pyramid background anchors to the top-right corner.',
      id: 'pyramid-right',
      title: 'Pyramid right'
    }
  ]

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<Story name="Suru">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Main suru</p>

          <div class="grid gap-6">
            {#each mainExamples as suru (suru.id)}
              <div
                class="overflow-hidden border border-black/10 dark:border-white/20"
              >
                <div class={suru.className}>
                  <div class="mx-auto grid max-w-5xl gap-3 px-6">
                    <h2 class="ow-heading-1 max-w-3xl">{suru.title}</h2>
                    <p class="max-w-2xl">{suru.copy}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Standalone main suru</p>

          <div
            class="overflow-hidden border border-black/10 dark:border-white/20"
          >
            <div class="ow-suru"></div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Corner suru (large screens only)</p>

          <div class="grid gap-6">
            {#each cornerExamples as suru (suru.id)}
              <div
                class="overflow-hidden border border-black/10 dark:border-white/20"
              >
                <div class={suru.className}>
                  <div class="mx-auto grid max-w-5xl gap-3 px-6">
                    <h2 class="ow-heading-1 max-w-3xl">{suru.title}</h2>
                    <p class="max-w-2xl">{suru.copy}</p>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Divider suru (large screens only)</p>

          <div
            class="overflow-hidden border border-black/10 dark:border-white/20"
          >
            <div class="ow-suru-divider">
              <div class="mx-auto grid max-w-5xl gap-3 px-6">
                <h2 class="ow-heading-1 max-w-3xl">Divider suru</h2>
                <p class="max-w-2xl">
                  The triangle divider sits in the deep padding between two
                  content sections.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
