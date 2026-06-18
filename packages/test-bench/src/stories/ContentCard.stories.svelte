<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Content Card',
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
  type FooterMeta = {
    icon: string
    label: string
  }

  type ContentCard = {
    author: string
    date: string
    desc: string
    footer: FooterMeta[]
    id: string
    image?: string
    title: string
    topic: string
  }

  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const sectionClass = 'flex flex-col gap-6'

  const cards: ContentCard[] = [
    {
      author: 'Design and Web Team',
      date: 'Jun 18, 2026',
      desc: 'How open source robotics teams turn repeatable delivery into daily product work, and what that means for long-term maintenance.',
      footer: [
        { icon: 'ow-icon-comments', label: '12' },
        { icon: 'ow-icon-share', label: 'Share' }
      ],
      id: 'robotics',
      image:
        'https://assets.ubuntu.com/v1/36f1139e-Design-and-Web-Team-Blog.jpg',
      title: 'Open source robotics challenges and how teams solve them',
      topic: 'Robotics'
    },
    {
      author: 'Canonical Field Engineering',
      date: 'May 02, 2026',
      desc: 'Patterns for keeping edge estates observable, current and ready for long-term service across thousands of devices.',
      footer: [
        { icon: 'ow-icon-book', label: '6 min read' },
        { icon: 'ow-icon-comments', label: '4' }
      ],
      id: 'field',
      image: 'https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg',
      title: 'The state of robotics at the edge',
      topic: 'Edge'
    },
    {
      author: 'Security Team',
      date: 'Apr 14, 2026',
      desc: 'Release cadence, support windows and security maintenance grouped into a single predictable surface for planning.',
      footer: [{ icon: 'ow-icon-book', label: '8 min read' }],
      id: 'security',
      title: 'Predictable security maintenance without an image',
      topic: 'Security'
    }
  ]

  const eightColCard = cards[0]

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen p-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function getCardClass(cols: number, card: ContentCard) {
    return [
      `ow-content-card ow-content-card-cols-${cols}`,
      card.image && 'ow-has-image',
      card.desc && 'ow-has-desc'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

<Story name="Content Card">
  {#snippet card(cols: number, item: ContentCard)}
    <article class={getCardClass(cols, item)}>
      <a
        class="ow-content-card-overlay-link"
        href={`#${item.id}`}
        aria-label={item.title}
        onclick={preventDefault}
        tabindex="-1"
      ></a>

      {#if item.image}
        <div class="ow-content-card-image-wrapper">
          <img
            class="ow-content-card-image"
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      {/if}

      <div class="ow-content-card-content">
        <div class="ow-content-card-body">
          <div class="ow-content-card-primary-content">
            <h3 class="ow-content-card-heading ow-heading-4">
              <a
                class="ow-content-card-main-link"
                href={`#${item.id}`}
                onclick={preventDefault}
              >
                {item.title}
              </a>
            </h3>
            <div class="ow-content-card-author-and-date">
              <span class="text-sm opacity-75">
                By
                <a
                  class="ow-content-card-author-link"
                  href={`#${item.id}-author`}
                  onclick={preventDefault}
                >
                  {item.author}
                </a>
                <span aria-hidden="true">·</span>
                {item.date}
              </span>
            </div>
          </div>

          <div class="ow-content-card-hover-content">
            <p class="ow-content-card-description">{item.desc}</p>
          </div>
        </div>

        <div class="ow-content-card-footer-container">
          <hr class="ow-rule-muted" />
          <div class="ow-content-card-footer-outer">
            <div class="ow-content-card-footer-inner">
              <span class="ow-chip-information">{item.topic}</span>
              {#each item.footer as meta (meta.icon)}
                <span class="ow-has-icon">
                  <i
                    class={`ow-content-card-icon ${meta.icon}`}
                    aria-hidden="true"
                  ></i>
                  <small class="ow-content-card-small">{meta.label}</small>
                </span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </article>
  {/snippet}

  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto flex max-w-6xl flex-col gap-12">
        <section class={sectionClass}>
          <p class={sectionTitleClass}>Two column (vertical)</p>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {#each cards as item (item.id)}
              <div class="ow-content-card-wrapper ow-content-card-wrapper-2">
                {@render card(2, item)}
              </div>
            {/each}
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Four column (horizontal)</p>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {#each cards.slice(0, 2) as item (item.id)}
              <div class="ow-content-card-wrapper ow-content-card-wrapper-4">
                {@render card(4, item)}
              </div>
            {/each}
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Six column (horizontal)</p>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <div class="ow-content-card-wrapper ow-content-card-wrapper-6">
              {@render card(6, cards[1])}
            </div>
            <div class="ow-content-card-wrapper ow-content-card-wrapper-2">
              {@render card(2, cards[2])}
            </div>
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Eight column (full width split)</p>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <div class="ow-content-card-wrapper ow-content-card-wrapper-8">
              {@render card(8, eightColCard)}
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
