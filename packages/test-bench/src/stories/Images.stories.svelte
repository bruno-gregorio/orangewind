<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Images',
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
  type AspectExample = {
    className: string
    id: string
    label: string
  }

  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const sectionClass = 'grid gap-4'
  const demoContainerClass = 'ow-card mb-0 grid gap-6'
  const productImage =
    'https://assets.ubuntu.com/v1/9b4c074f-Kernelt%20industries-80-short.png'
  const landscapeImage =
    'https://assets.ubuntu.com/v1/44095efb-photo-1580536793208-117fdb20ffc1%20(1).jpeg'
  const droneImage = 'https://assets.ubuntu.com/v1/584903f3-iot-drone.png'
  const responsiveImage =
    'https://assets.ubuntu.com/v1/f74cb1d3-streaming%20data.png'

  const aspectExamples: AspectExample[] = [
    {
      className: 'ow-image-container-16-9',
      id: 'ratio-16-9',
      label: '16:9'
    },
    {
      className: 'ow-image-container-3-2',
      id: 'ratio-3-2',
      label: '3:2'
    },
    {
      className: 'ow-image-container-2-3',
      id: 'ratio-2-3',
      label: '2:3'
    },
    {
      className: 'ow-image-container-cinematic',
      id: 'ratio-cinematic',
      label: 'Cinematic'
    },
    {
      className: 'ow-image-container-square',
      id: 'ratio-square',
      label: 'Square'
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
</script>

<Story name="Images">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="flex max-w-6xl flex-col gap-8">
        <section class={sectionClass}>
          <p class={sectionTitleClass}>Highlighted and legacy treatments</p>

          <div class={demoContainerClass}>
            <div class="grid gap-6 md:grid-cols-3">
              <div class="ow-image-container is-highlighted">
                <img
                  class="ow-image-container-img"
                  src={productImage}
                  alt=""
                  width="250"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <img
                class="ow-image-bordered"
                src={droneImage}
                alt=""
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
              />

              <figure class="grid gap-2">
                <img
                  class="ow-image-shadowed"
                  src={droneImage}
                  alt=""
                  width="640"
                  height="360"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption class="text-sm opacity-75">
                  A drone in flight
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Aspect ratios</p>

          <div class={demoContainerClass}>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {#each aspectExamples as example (example.id)}
                <div class="grid gap-2">
                  <span class="text-sm font-semibold">{example.label}</span>
                  <div class={`${example.className} is-highlighted`}>
                    <img
                      class="ow-image-container-img"
                      src={productImage}
                      alt=""
                      width="300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Cover and responsive ratio</p>

          <div class={demoContainerClass}>
            <div class="grid gap-6 lg:grid-cols-2">
              <div class="ow-image-container-16-9 is-cover">
                <img
                  class="ow-image-container-img"
                  src={landscapeImage}
                  alt=""
                  width="1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div class="ow-image-container is-cover h-72">
                <img
                  class="ow-image-container-img"
                  src={landscapeImage}
                  alt=""
                  width="1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div
                class="ow-image-container-square-on-small ow-image-container-16-9-on-medium ow-image-container-cinematic-on-large is-highlighted lg:col-span-2"
              >
                <div class="lazyloaded">
                  <img
                    class="ow-image-container-img"
                    src={responsiveImage}
                    alt=""
                    width="852"
                    height="1279"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Media spacing</p>

          <div class={demoContainerClass}>
            <hr class="ow-rule mb-0" />
            <div class="ow-media-container">
              <img
                src={droneImage}
                alt=""
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
