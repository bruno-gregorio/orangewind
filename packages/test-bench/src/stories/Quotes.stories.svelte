<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Quotes',
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
  type PullQuoteVariant = {
    className: string
    id: string
    label: string
    quote: string[]
  }

  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const sectionClass = 'grid gap-4'
  const demoContainerClass = 'ow-card mb-0 grid gap-8'
  const quoteLogo =
    'https://assets.ubuntu.com/v1/c7881d6c-spiculelogo-spacingx2-01.svg'

  const pullQuotes: PullQuoteVariant[] = [
    {
      className: 'ow-pull-quote-small',
      id: 'small',
      label: 'Small',
      quote: [
        'The team could move from prototype to production without changing the deployment model.'
      ]
    },
    {
      className: 'ow-pull-quote',
      id: 'default',
      label: 'Default',
      quote: [
        'Open infrastructure works best when it feels predictable, observable and ready for ordinary teams to operate.'
      ]
    },
    {
      className: 'ow-pull-quote-large',
      id: 'large',
      label: 'Large',
      quote: [
        'The support has been consistently practical, helping us turn complex systems into repeatable everyday operations.'
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
</script>

<Story name="Quotes">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="flex max-w-5xl flex-col gap-8">
        <section class={sectionClass}>
          <p class={sectionTitleClass}>Blockquote</p>

          <div class={demoContainerClass}>
            <blockquote>
              <p>
                A stable platform lets product teams spend more time improving
                service quality and less time recreating operating procedures.
              </p>
              <cite>Cloud Platform Research Group</cite>
            </blockquote>
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Pull quote variants</p>

          <div class={demoContainerClass}>
            {#each pullQuotes as pullQuote (pullQuote.id)}
              <div class="grid gap-2">
                <span class="text-sm font-semibold">{pullQuote.label}</span>
                <blockquote class={pullQuote.className}>
                  {#each pullQuote.quote as paragraph (paragraph)}
                    <p class="ow-pull-quote-quote">{paragraph}</p>
                  {/each}
                  <span class="ow-pull-quote-citation">
                    Director of Web Engineering, Best Buy Corp
                  </span>
                </blockquote>
              </div>
            {/each}
          </div>
        </section>

        <section class={sectionClass}>
          <p class={sectionTitleClass}>Image and multiple paragraphs</p>

          <div class={demoContainerClass}>
            <blockquote class="ow-pull-quote has-image">
              <img
                class="ow-pull-quote-image"
                src={quoteLogo}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <p class="ow-pull-quote-quote">
                The same operational model can run locally, on bare metal and in
                the cloud.
              </p>
              <p class="ow-pull-quote-quote">
                That consistency makes teams faster because every environment
                stops feeling like a special case.
              </p>
              <span class="ow-pull-quote-citation"> CTO, Spicule LTD </span>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
