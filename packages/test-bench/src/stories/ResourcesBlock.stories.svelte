<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Resources Block',
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

  type Resource = {
    excerpt: string
    title: string
    type: string
  }

  const resources: Resource[] = [
    {
      excerpt: 'A practical guide to packaging and shipping software as snaps.',
      title: 'Getting started with snaps',
      type: 'Whitepaper'
    },
    {
      excerpt: 'Watch our engineers deploy a fleet of devices with Ubuntu Core.',
      title: 'Scaling IoT from prototype to production',
      type: 'Webinar'
    },
    {
      excerpt: 'How a leading retailer cut its update window from days to minutes.',
      title: 'Case study: continuous delivery at the edge',
      type: 'Case study'
    },
    {
      excerpt: 'Reference architecture for running confidential workloads.',
      title: 'Securing the cloud with confidential computing',
      type: 'Whitepaper'
    },
    {
      excerpt: 'A hands-on tutorial for building your first MAAS region.',
      title: 'Bare metal provisioning with MAAS',
      type: 'Tutorial'
    },
    {
      excerpt: 'Join the community call covering the upcoming LTS roadmap.',
      title: 'The road to the next LTS',
      type: 'Webinar'
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

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

<Story name="Resources Block">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-6 px-6">
        <header class="grid gap-2">
          <p class={sectionTitleClass}>Resources</p>
          <h2 class="ow-heading-2 max-w-3xl">
            Dive deeper with our latest guides and recordings
          </h2>
        </header>

        <div class="ow-resources-block">
          {#each resources as resource (resource.title)}
            <a
              class="ow-resources-block-item"
              href="#resource"
              onclick={preventDefault}
            >
              <span
                class="ow-resources-block-image ow-image-container-16-9 ow-is-highlighted"
              ></span>
              <span class="ow-resources-block-content">
                <span class="ow-resources-block-meta">{resource.type}</span>
                <span class="ow-resources-block-title">{resource.title}</span>
                <span class="ow-resources-block-excerpt">{resource.excerpt}</span>
              </span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/snippet}
</Story>
