<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Application Layouts/Hero',
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

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Placeholder copy mirrors the Vanilla hero documentation examples.
  const title = 'H1 - ideally one line, up to two'
  const subtitle =
    'H2 placeholder - aim for one line, 2 is acceptable, more - use a paragraph'
  const description =
    'Generally, the height of the right hand side of a 50/50 split should contain more content than the left hand side.'

  const wideImage =
    'https://assets.ubuntu.com/v1/cf1e2ddb-datacenter-wide-crop.jpeg'
  const tallImage = 'https://assets.ubuntu.com/v1/6c909bd8-datacenter-tall.jpeg'
  const signpostLogo = 'https://assets.ubuntu.com/v1/fe20126d-RISC-V-logo.svg'

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

<!-- Title and subtitle as a single shallow-spaced unit, matching the hero
     macro's `p-section--shallow` wrapper. The grid gap restores the title to
     subtitle rhythm that Tailwind's preflight strips from the heading. -->
{#snippet titleBlock()}
  <div class="ow-section-shallow grid gap-2">
    <h1 class="ow-heading-1">{title}</h1>
    <p class="ow-heading-2">{subtitle}</p>
  </div>
{/snippet}

{#snippet descriptionBlock()}
  <div class="ow-section-shallow">
    <p>{description}</p>
  </div>
{/snippet}

{#snippet cta()}
  <div class="ow-cta-block pb-0">
    <a class="ow-btn-positive" href="#hero" onclick={preventDefault}>
      Learn more
    </a>
    <a class="ow-btn-link" href="#hero" onclick={preventDefault}>
      Contact us &rsaquo;
    </a>
  </div>
{/snippet}

{#snippet coverImage(src: string, aspectClass: string)}
  <div class="{aspectClass} ow-is-cover">
    <img
      class="ow-image-container-img"
      {src}
      alt=""
      loading="lazy"
      decoding="async"
    />
  </div>
{/snippet}

<Story name="Hero">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <!-- 50/50: content and image share the row, splitting on large. -->
        <section class="grid gap-4">
          <p class={sectionTitleClass}>50 / 50</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            <section class="ow-section-hero">
              <div class="grid items-start gap-8 lg:grid-cols-2">
                <div>
                  {@render titleBlock()}
                  {@render descriptionBlock()}
                  {@render cta()}
                </div>
                {@render coverImage(wideImage, 'ow-image-container-3-2')}
              </div>
            </section>
          </div>
        </section>

        <!-- 50/50 without image: the title takes one column, the supporting
             content the other. -->
        <section class="grid gap-4">
          <p class={sectionTitleClass}>50 / 50 without image</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            <section class="ow-section-hero">
              <div class="grid items-start gap-8 lg:grid-cols-2">
                <h1 class="ow-heading-1">{title}</h1>
                <div>
                  <div class="ow-section-shallow">
                    <p class="ow-heading-2">{subtitle}</p>
                  </div>
                  {@render descriptionBlock()}
                  {@render cta()}
                </div>
              </div>
            </section>
          </div>
        </section>

        <!-- 75/25: a wide content column beside a narrow portrait image,
             split from medium screens up. -->
        <section class="grid gap-4">
          <p class={sectionTitleClass}>75 / 25</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            <section class="ow-section-hero">
              <div class="grid items-start gap-8 md:grid-cols-4">
                <div class="md:col-span-3">
                  {@render titleBlock()}
                  {@render descriptionBlock()}
                  {@render cta()}
                </div>
                <div class="md:col-span-1">
                  {@render coverImage(tallImage, 'ow-image-container-2-3')}
                </div>
              </div>
            </section>
          </div>
        </section>

        <!-- 25/75 signpost: a small leading logo introduces the content,
             which fills the remaining width. -->
        <section class="grid gap-4">
          <p class={sectionTitleClass}>25 / 75 signpost</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            <section class="ow-section-hero">
              <div class="grid items-start gap-8 lg:grid-cols-4">
                <div class="ow-section-shallow lg:col-span-1">
                  <img class="max-w-48" src={signpostLogo} alt="" />
                </div>
                <div class="lg:col-span-3">
                  {@render titleBlock()}
                  {@render descriptionBlock()}
                  {@render cta()}
                </div>
              </div>
            </section>
          </div>
        </section>

        <!-- Fallback: the title spans the full width, then a 50/50 content and
             image row sits beneath it. -->
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Fallback</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            <section class="ow-section-hero">
              {@render titleBlock()}
              <div class="grid items-start gap-8 lg:grid-cols-2">
                <div>
                  <div class="ow-section-shallow grid gap-4">
                    <p>
                      Use this variant when there is a lot of content, so that
                      it looks balanced with the image to the right. Works best
                      when the image is in portrait format.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </p>
                  </div>
                  {@render cta()}
                </div>
                {@render coverImage(wideImage, 'ow-image-container-3-2')}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
