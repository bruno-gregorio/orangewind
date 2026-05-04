<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Media Object',
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
  type MetaKind = 'date' | 'location' | 'venue'

  type MetaItem = {
    kind: MetaKind
    label: string
    value: string
  }

  type MediaObjectItem = {
    copy: string
    id: string
    image: string
    meta: MetaItem[]
    title: string
  }

  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const sectionClass = 'grid gap-4'
  const demoContainerClass = 'ow-card mb-0 grid gap-6'
  const metaClassByKind: Record<MetaKind, string> = {
    date: 'ow-media-object-meta-item-date',
    location: 'ow-media-object-meta-item-location',
    venue: 'ow-media-object-meta-item-venue'
  }

  const events: MediaObjectItem[] = [
    {
      copy: 'Ubuntu powered everything from autonomous cars to workstations to inference at the edge, supporting organizations in AI and data science.',
      id: 'nvidia-gtc',
      image: 'https://assets.ubuntu.com/v1/60d9b81e-picto-canonical.svg',
      title: 'NVIDIA GTC 2019',
      meta: [
        {
          kind: 'date',
          label: 'Date',
          value: '18 - 21 March 2019'
        },
        {
          kind: 'venue',
          label: 'Venue',
          value: 'San Jose McEnery Convention Center'
        },
        {
          kind: 'location',
          label: 'Location',
          value: 'Silicon Valley, CA'
        }
      ]
    },
    {
      copy: 'Lead Visual Designer',
      id: 'karl-waghorn-moyce',
      image: 'https://assets.ubuntu.com/v1/0a529437-karlos.jpeg',
      title: 'Karl Waghorn-Moyce',
      meta: [
        {
          kind: 'location',
          label: 'Location',
          value: 'London, UK'
        }
      ]
    }
  ]

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen p-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function getMetaItemClass(kind: MetaKind) {
    return metaClassByKind[kind]
  }

  function getMediaObjectImageClass(round = false) {
    return ['ow-media-object-image', round && 'is-round']
      .filter(Boolean)
      .join(' ')
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

<Story name="Media Object">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="flex max-w-5xl flex-col gap-8">
        <section class={sectionClass}>
          <p class={sectionTitleClass}>Default and circular</p>

          <div class={demoContainerClass}>
            {#each events as item, index (item.id)}
              <div class="ow-media-object mb-0">
                <img
                  class={getMediaObjectImageClass(index === 1)}
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div class="ow-media-object-details">
                  <h3 class="ow-media-object-title">
                    <a href={`#${item.id}`} onclick={preventDefault}>
                      {item.title}
                    </a>
                  </h3>
                  <p class="ow-media-object-content">{item.copy}</p>
                  <ul class="ow-media-object-meta-list">
                    {#each item.meta as meta (meta.kind)}
                      <li class={getMetaItemClass(meta.kind)}>
                        <span class="sr-only">{meta.label}: </span>
                        <span>{meta.value}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Large</p>

          <div class={demoContainerClass}>
            <div class="ow-media-object-large mb-0">
              <img
                class="ow-media-object-image"
                src="https://assets.ubuntu.com/v1/80cd67d3-mysql.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <div class="ow-media-object-details">
                <h1 class="ow-media-object-title">MySQL</h1>
                <p class="ow-media-object-content">By mysql-charmers</p>
                <ul class="ow-media-object-meta-list">
                  <li class="ow-media-object-meta-item">
                    Production database charm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
