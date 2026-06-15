<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/Resources Block',
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
    author: string
    date: string
    id: string
    image: string
    summary: string
    title: string
  }

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const image = 'https://assets.ubuntu.com/v1/0a98afcd-screenshot_desktop.jpg'

  const resources: Resource[] = [
    {
      author: 'Canonical',
      date: '20th April 2024',
      id: 'whitepaper',
      image,
      summary:
        'A practical guide to running Kubernetes across hybrid and multi-cloud estates.',
      title: 'Multi-cloud Kubernetes operations'
    },
    {
      author: 'Canonical',
      date: '14th March 2024',
      id: 'webinar',
      image,
      summary:
        'Watch our engineers walk through bootstrapping a cluster from scratch.',
      title: 'Cluster bootstrapping, end to end'
    },
    {
      author: 'Canonical',
      date: '2nd February 2024',
      id: 'case-study',
      image,
      summary:
        'How a financial services team cut total cost of ownership by half.',
      title: 'Lowering total cost of ownership'
    }
  ]

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

<Story name="Resources Block">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-8 px-6">
        <p class={sectionLabelClass}>Resources with media and content</p>

        <section class="ow-section">
          <hr class="ow-rule ow-is-fixed-width" />
          <div class="grid gap-6 pt-4 lg:grid-cols-2">
            <div>
              <h2 class="ow-heading-2">Learn more about Kubernetes</h2>
            </div>
            <div class="grid gap-3">
              <p>
                Browse our latest whitepapers, webinars and case studies to get
                the most from your deployments.
              </p>
              <div class="ow-cta-block">
                <a class="ow-btn-positive" href="#resources">View all</a>
                <a class="ow-btn-link" href="#resources">Browse the archive ›</a
                >
              </div>
            </div>
          </div>

          <div class="grid gap-6 pt-2">
            {#each resources as resource, index (resource.id)}
              <div class="ow-resources-block">
                <div class="ow-resources-block-col">
                  <div class="ow-image-container-16-9 ow-is-cover">
                    <img
                      class="ow-image-container-img"
                      src={resource.image}
                      alt=""
                    />
                  </div>
                </div>
                <div class="ow-resources-block-col grid gap-2">
                  <h3 class="ow-heading-3">
                    <a href="#resource">{resource.title}</a>
                  </h3>
                  <p>{resource.summary}</p>
                  <p class="opacity-60">
                    {resource.author} · {resource.date}
                  </p>
                </div>
              </div>
              {#if index < resources.length - 1}
                <hr class="ow-rule-muted" />
              {/if}
            {/each}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
