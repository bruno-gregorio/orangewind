<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Application Layouts/Strip and Section',
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

  type StripExample = {
    className: string
    copy: string
    id: string
    titleClass?: string
    title: string
  }

  type SectionExample = {
    className: string
    copy: string
    hasRule: boolean
    id: string
    titleClass: string
    title: string
  }

  const stripExamples: StripExample[] = [
    {
      className: 'ow-strip',
      copy: 'A neutral wrapper keeps the surrounding page surface while applying Vanilla strip spacing.',
      id: 'default',
      titleClass: 'ow-heading-2',
      title: 'Default strip'
    },
    {
      className: 'ow-strip is-light',
      copy: 'A themed wrapper that carries the default light surface for content groups.',
      id: 'light',
      titleClass: 'ow-heading-2',
      title: 'Light strip'
    },
    {
      className: 'ow-strip-highlighted',
      copy: 'The alternative surface separates a region without needing an extra border.',
      id: 'highlighted',
      titleClass: 'ow-heading-2',
      title: 'Highlighted strip'
    },
    {
      className: 'ow-strip-dark',
      copy: 'A dark wrapper flips foreground color for high-emphasis page regions.',
      id: 'dark',
      titleClass: 'ow-heading-2',
      title: 'Dark strip'
    },
    {
      className: 'ow-strip-paper is-highlighted',
      copy: 'Paper keeps a softer editorial surface while still supporting a highlighted state.',
      id: 'paper',
      titleClass: 'ow-heading-2',
      title: 'Paper strip'
    }
  ]

  const sectionExamples: SectionExample[] = [
    {
      className: 'ow-section-hero',
      copy: 'Hero sections add top padding for first-page content and keep the standard bottom rhythm.',
      hasRule: false,
      id: 'hero',
      titleClass: 'ow-heading-1',
      title: 'Hero section'
    },
    {
      className: 'ow-section',
      copy: 'Default sections provide only the bottom spacing needed between page content blocks.',
      hasRule: true,
      id: 'default',
      titleClass: 'ow-heading-3',
      title: 'Default section'
    },
    {
      className: 'ow-section-deep',
      copy: 'Deep sections create larger pauses before the next major region.',
      hasRule: true,
      id: 'deep',
      titleClass: 'ow-heading-3',
      title: 'Deep section'
    },
    {
      className: 'ow-section-shallow',
      copy: 'Shallow sections keep tightly related content on the same visual cadence.',
      hasRule: false,
      id: 'shallow',
      titleClass: 'ow-heading-3',
      title: 'Shallow section'
    }
  ]

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const imageStyle =
    "background-image: linear-gradient(color-mix(in srgb, var(--color-ow-dark) 62%, transparent), color-mix(in srgb, var(--color-ow-dark) 62%, transparent)), url('https://assets.ubuntu.com/v1/0a98afcd-screenshot_desktop.jpg')"

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

  function getTitleClass(baseClass = 'ow-heading-2') {
    return `${baseClass} max-w-3xl`
  }
</script>

<Story name="Strip and Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Strip variants</p>

          <div
            class="grid overflow-hidden border border-black/10 dark:border-white/20"
          >
            {#each stripExamples as strip (strip.id)}
              <section class={`${strip.className} is-bordered`}>
                <div class="mx-auto grid max-w-5xl gap-3 px-6 lg:grid-cols-3">
                  <h2 class={getTitleClass(strip.titleClass)}>
                    {strip.title}
                  </h2>
                  <p class="max-w-2xl pt-1.5 lg:col-span-2">{strip.copy}</p>
                </div>
              </section>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Depth modifiers</p>

          <div
            class="grid overflow-hidden border border-black/10 dark:border-white/20"
          >
            <section class="ow-strip-highlighted is-shallow is-bordered">
              <div class="mx-auto grid max-w-5xl gap-3 px-6 lg:grid-cols-3">
                <h2 class={getTitleClass()}>Shallow strip</h2>
                <p class="max-w-2xl pt-1.5">
                  Compact vertical padding for grouped content that belongs near
                  its neighbors.
                </p>
              </div>
            </section>

            <section class="ow-strip is-light is-deep">
              <div class="mx-auto grid max-w-5xl gap-3 px-6 lg:grid-cols-3">
                <h2 class={getTitleClass()}>
                  The fastest way to go from development to production in IoT
                </h2>
                <div class="grid gap-4 lg:col-span-2">
                  <p class="max-w-2xl pt-1.5">
                    Learn about how Ubuntu Core and snaps can help you build
                    your connected devices.
                  </p>
                  <a
                    class="ow-btn justify-self-start"
                    href="#deep-strip"
                    onclick={preventDefault}
                  >
                    Explore packages
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Image strip</p>

          <section class="ow-strip-image is-deep text-white" style={imageStyle}>
            <div class="mx-auto grid max-w-5xl gap-3 px-6 lg:grid-cols-3">
              <h2 class={getTitleClass()}>Image backed strip</h2>
              <div class="grid gap-4 lg:col-span-2">
                <p class="max-w-2xl pt-1.5">
                  The image variant owns repeat and cover behavior while the
                  project supplies the actual image source.
                </p>
                <a
                  class="ow-btn ow-btn-positive justify-self-start"
                  href="#image-strip"
                  onclick={preventDefault}
                >
                  View deployments
                </a>
              </div>
            </div>
          </section>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Section rhythm</p>

          <div class="bg-white px-6 pt-6 shadow-sm dark:bg-zinc-900">
            {#each sectionExamples as section (section.id)}
              <section class={section.className}>
                {#if section.hasRule}
                  <hr class="ow-rule" />
                {/if}
                <div
                  class={[
                    'grid gap-3 lg:grid-cols-3',
                    section.hasRule && 'pt-4'
                  ]}
                >
                  <h2 class={getTitleClass(section.titleClass)}>
                    {section.title}
                  </h2>
                  <p class="max-w-2xl pt-1.5 lg:col-span-2">
                    {section.copy}
                  </p>
                </div>
              </section>
            {/each}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
