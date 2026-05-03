<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Card',
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
  type CardVariant = {
    action?: string
    className: string
    copy: string
    id: string
    title: string
  }

  type ResourceCard = {
    author: string
    copy: string
    id: string
    image: string
    label: string
    title: string
  }

  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const sectionClass = 'flex flex-col gap-8'
  const overlayStyle =
    "background-image: url('https://assets.ubuntu.com/v1/0a98afcd-screenshot_desktop.jpg')"

  const cardVariants: CardVariant[] = [
    {
      className: 'ow-card',
      copy: 'Package security, release cadence and support windows grouped in a quiet information surface.',
      id: 'default',
      title: 'Default'
    },
    {
      action: 'Open offer',
      className: 'ow-card-highlighted',
      copy: 'A stronger surface for destinations where the whole card supports an interactive workflow.',
      id: 'highlighted',
      title: 'Highlighted'
    },
    {
      className: 'ow-card-muted',
      copy: 'Low-emphasis supporting information that still needs separation from neighbouring content.',
      id: 'muted',
      title: 'Muted'
    }
  ]

  const resourceCards: ResourceCard[] = [
    {
      author: 'Design and Web Team',
      copy: 'How open source robotics teams turn repeatable delivery into daily product work.',
      id: 'robotics',
      image:
        'https://assets.ubuntu.com/v1/36f1139e-Design-and-Web-Team-Blog.jpg',
      label: 'New',
      title: 'Open source robotics challenges'
    },
    {
      author: 'Canonical Field Engineering',
      copy: 'Patterns for keeping edge estates observable, current and ready for long-term service.',
      id: 'field',
      image: 'https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg',
      label: 'LTS',
      title: 'The state of robotics'
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

  function getCardClass(baseClass: string) {
    return [baseClass, 'mb-0 grid gap-3'].join(' ')
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

<Story name="Card">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="flex max-w-6xl flex-col gap-8">
        <section class={sectionClass}>
          <p class={sectionTitleClass}>Variants</p>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {#each cardVariants as card (card.id)}
              <article class={getCardClass(card.className)}>
                <h3 class="ow-heading-5">{card.title}</h3>
                <p class="ow-card-content">{card.copy}</p>

                {#if card.action}
                  <a
                    class="ow-btn is-small justify-self-start"
                    href={`#${card.id}`}
                    onclick={preventDefault}
                  >
                    {card.action}
                  </a>
                {/if}
              </article>
            {/each}
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Header and content bleed</p>

          <div class="grid gap-6 lg:grid-cols-2">
            <article class="ow-card mb-0 grid gap-4">
              <div class="ow-card-header grid gap-3">
                <img
                  class="ow-card-thumbnail"
                  src="https://assets.ubuntu.com/v1/31bd2627-logo-raspberry-pi.svg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div class="grid gap-1">
                  <h3 class="ow-heading-5">Raspberry Pi 5</h3>
                  <a
                    class="ow-link-soft"
                    href="#raspberry-pi"
                    onclick={preventDefault}
                  >
                    Certified devices
                  </a>
                </div>
              </div>

              <p class="ow-card-content">
                Ubuntu Core supports compact device fleets with predictable
                updates and a small operational footprint.
              </p>
            </article>

            <article class="ow-card mb-0 p-0">
              <img
                class="ow-card-image"
                alt=""
                height="278"
                width="496"
                src="https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg"
                loading="lazy"
                decoding="async"
              />
              <div class="ow-card-inner grid gap-3">
                <h3 class="ow-heading-5">The state of robotics</h3>
                <p>
                  From social participation to environmental detection, robotics
                  teams keep stretching what field hardware can do.
                </p>
              </div>
              <hr class="ow-rule mb-0" />
              <div
                class="ow-card-inner flex flex-wrap items-center gap-2 text-sm opacity-75"
              >
                <span>by Bartek Szopka</span>
                <span aria-hidden="true">/</span>
                <span>Aug 21, 2021</span>
              </div>
            </article>
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Image cards</p>

          <div class="grid gap-6 md:grid-cols-2">
            {#each resourceCards as card (card.id)}
              <article class="ow-card-highlighted mb-0 p-0">
                <img
                  class="ow-card-image"
                  alt=""
                  height="278"
                  width="496"
                  src={card.image}
                  loading="lazy"
                  decoding="async"
                />
                <div class="ow-card-inner grid gap-3">
                  <div class="flex flex-wrap items-center gap-3">
                    <span class="ow-badge">{card.label}</span>
                    <span class="text-sm opacity-75">{card.author}</span>
                  </div>
                  <h3 class="ow-heading-5">
                    <a href={`#${card.id}`} onclick={preventDefault}>
                      {card.title}
                    </a>
                  </h3>
                  <p class="ow-card-content">{card.copy}</p>
                </div>
              </article>
            {/each}
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Overlay</p>

          <div
            class="grid min-h-80 items-center justify-items-end bg-cover bg-center p-6 md:p-10"
            style={overlayStyle}
          >
            <div class="w-full max-w-xl">
              <article class="ow-card-overlay mb-0 grid gap-3">
                <h2 class="ow-heading-4">Web browsing</h2>
                <p class="ow-card-content">
                  Ubuntu and Firefox pair a familiar desktop with security
                  maintenance for teams that need stable workstations.
                </p>
                <a
                  class="ow-btn is-small justify-self-start"
                  href="#web-browsing"
                  onclick={preventDefault}
                >
                  Read guide
                </a>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
