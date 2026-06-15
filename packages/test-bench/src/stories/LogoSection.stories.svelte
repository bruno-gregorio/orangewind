<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/Logo Section',
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

  type Logo = {
    alt: string
    src: string
  }

  type HeaderOpts = {
    cta?: string
    description?: string
    titleLinked?: boolean
    titleText: string
  }

  type LinkedLogo = {
    alt: string
    height: number
    id: string
    src: string
    text: string
    width: number
  }
</script>

<script lang="ts">
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Partner logos, mirroring the Vanilla "Logo section" examples.
  const logos: Logo[] = [
    {
      alt: 'Dell Technologies',
      src: 'https://assets.ubuntu.com/v1/38fdfd23-Dell-logo.png'
    },
    {
      alt: 'Hewlett Packard',
      src: 'https://assets.ubuntu.com/v1/cd5f636a-hp-logo.png'
    },
    {
      alt: 'Lenovo',
      src: 'https://assets.ubuntu.com/v1/f90702cd-lenovo-logo.png'
    },
    {
      alt: 'Amazon Web Services',
      src: 'https://assets.ubuntu.com/v1/2ef3c028-amazon-web-services-logo.png'
    },
    {
      alt: 'IBM Cloud',
      src: 'https://assets.ubuntu.com/v1/cb7ef8ac-ibm-cloud-logo.png'
    },
    {
      alt: 'Microsoft Azure',
      src: 'https://assets.ubuntu.com/v1/210f44e4-microsoft-azure-new-logo.png'
    },
    {
      alt: 'Google Cloud Platform',
      src: 'https://assets.ubuntu.com/v1/a554a818-google-cloud-logo.png'
    },
    {
      alt: 'Oracle',
      src: 'https://assets.ubuntu.com/v1/b3e692f4-oracle-new-logo.png'
    }
  ]

  // Linked logo cards, mirroring the Vanilla "Linked Logo Section" examples.
  const linkedLogos: LinkedLogo[] = [
    {
      alt: 'Kubeflow',
      height: 481,
      id: 'kubeflow',
      src: 'https://assets.ubuntu.com/v1/cd89477e-kubeflow-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 432
    },
    {
      alt: 'MLflow',
      height: 481,
      id: 'mlflow',
      src: 'https://assets.ubuntu.com/v1/104192d9-mlflow-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 222
    },
    {
      alt: 'Apache Spark',
      height: 481,
      id: 'apache-spark',
      src: 'https://assets.ubuntu.com/v1/855deda8-apache-spark-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 240
    },
    {
      alt: 'OpenSearch',
      height: 481,
      id: 'opensearch',
      src: 'https://assets.ubuntu.com/v1/a8185f91-opensearch-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 330
    },
    {
      alt: 'Kafka',
      height: 481,
      id: 'kafka',
      src: 'https://assets.ubuntu.com/v1/d30de1f1-kafka-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 294
    },
    {
      alt: 'PostgreSQL',
      height: 481,
      id: 'postgresql',
      src: 'https://assets.ubuntu.com/v1/f5605b7e-postgre-sql-container-vert-fill.png',
      text: 'Learn more ›',
      width: 432
    },
    {
      alt: 'MongoDB',
      height: 481,
      id: 'mongodb',
      src: 'https://assets.ubuntu.com/v1/efdc8292-mongodb-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 413
    },
    {
      alt: 'MySQL',
      height: 481,
      id: 'mysql',
      src: 'https://assets.ubuntu.com/v1/692e2b1d-mysql-logo-container-vert-fill.png',
      text: 'Learn more ›',
      width: 300
    }
  ]

  // Per-layout logo caps, matching the Vanilla macro's max_logos_map.
  const fullWidthLogos = linkedLogos.slice(0, 8)
  const fiftyFiftyLogos = linkedLogos.slice(0, 6)

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

{#snippet logoBlock()}
  <div class="ow-logo-section pt-4">
    <div class="ow-logo-section-items">
      {#each logos as item (item.alt)}
        <img class="ow-logo-section-logo" src={item.src} alt={item.alt} />
      {/each}
    </div>
  </div>
{/snippet}

{#snippet header(opts: HeaderOpts)}
  <div class="grid gap-6 pt-4 lg:grid-cols-2">
    <h2 class="ow-muted-heading">
      {#if opts.titleLinked}
        <a href="#title">{opts.titleText}</a>
      {:else}
        {opts.titleText}
      {/if}
    </h2>
    {#if opts.description || opts.cta}
      <div class="grid gap-4">
        {#if opts.description}<p>{opts.description}</p>{/if}
        {#if opts.cta}
          <div class="ow-cta-block">
            <a class="ow-btn-link" href="#more">{opts.cta}</a>
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/snippet}

{#snippet card(link: LinkedLogo)}
  <a href="#linked-logo" aria-label={link.alt} class="grid gap-2">
    <div class="ow-image-container-16-9 ow-is-highlighted">
      <img
        class="ow-image-container-img"
        src={link.src}
        alt=""
        width={link.width}
        height={link.height}
      />
    </div>
    <hr class="ow-rule-muted" />
    <p>{link.text}</p>
  </a>
{/snippet}

<Story name="Logo Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Default</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'The quick brown fox jumps over the lazy dog',
              description: 'The quick brown fox jumps over the lazy dog',
              cta: 'Lorem ipsum dolor sit amet ›'
            })}
            {@render logoBlock()}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Linked title</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'The quick brown fox jumps over the lazy dog ›',
              titleLinked: true,
              description: 'The quick brown fox jumps over the lazy dog',
              cta: 'Lorem ipsum dolor sit amet ›'
            })}
            {@render logoBlock()}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>No description</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'The quick brown fox jumps over the lazy dog',
              cta: 'Lorem ipsum dolor sit amet ›'
            })}
            {@render logoBlock()}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>No CTA block</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'The quick brown fox jumps over the lazy dog',
              description: 'The quick brown fox jumps over the lazy dog'
            })}
            {@render logoBlock()}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>No description and CTA block</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'The quick brown fox jumps over the lazy dog'
            })}
            {@render logoBlock()}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Minimal mode</p>
          <div class="ow-section">
            {@render logoBlock()}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Padding variants</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'Default padding variant',
              description: 'This variant uses default padding'
            })}
            {@render logoBlock()}
          </div>
          <div class="ow-section-deep">
            <hr class="ow-rule ow-is-fixed-width" />
            {@render header({
              titleText: 'Deep padding variant',
              description: 'This variant uses deep padding'
            })}
            {@render logoBlock()}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Linked Logo Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Default (full width)</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <h2 class="ow-heading-2 pt-4">
              Come for PostgreSQL, get security and support for your entire
              stack
            </h2>
            <div class="grid grid-cols-2 gap-6 pt-4 md:grid-cols-4">
              {#each fullWidthLogos as link (link.id)}
                {@render card(link)}
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>50 / 50</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <div class="grid gap-6 pt-4 lg:grid-cols-2">
              <h2 class="ow-heading-2">
                Come for PostgreSQL, get security and support for your entire
                stack
              </h2>
              <div class="grid grid-cols-2 gap-6">
                {#each fiftyFiftyLogos as link (link.id)}
                  {@render card(link)}
                {/each}
              </div>
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>25 / 75</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <div class="grid gap-6 pt-4 lg:grid-cols-[1fr_3fr]">
              <h2 class="ow-heading-2">PostgreSQL, security and support</h2>
              <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
                {#each linkedLogos as link (link.id)}
                  {@render card(link)}
                {/each}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
