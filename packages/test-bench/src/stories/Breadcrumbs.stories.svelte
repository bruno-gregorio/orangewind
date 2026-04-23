<script module lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Breadcrumbs',
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
  type BreadcrumbItem = {
    label: string
    path?: string
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass =
    'grid aspect-square w-full max-w-md content-start rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5'

  const docsTrail: BreadcrumbItem[] = [
    { path: '/overview', label: 'Overview' },
    { path: '/features', label: 'Features' },
    { path: '/managed', label: 'Managed' },
    { path: '/install', label: 'Install' },
    { path: '/partners', label: 'Partners' },
    { label: 'Docs' }
  ]

  const wrappedTrail: BreadcrumbItem[] = [
    { path: '/documentation', label: 'Documentation home' },
    { path: '/operators', label: 'Charmed Operators' },
    {
      path: '/production',
      label: 'Production deployment and release management'
    },
    {
      path: '/hybrid-cloud',
      label: 'Hybrid cloud operations across regions'
    },
    { label: 'Recovery runbook' }
  ]

  function getDemoHref(path: string) {
    return `#${path.replace(/^\//, '')}`
  }

  function preventNavigation(event: globalThis.MouseEvent) {
    event.preventDefault()
  }
</script>

<Story
  name="Breadcrumbs"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'space-y-12 p-10',
        args?.dark && 'bg-[#111] text-[#fff]',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default trail</p>

        <div class={demoContainerClass}>
          <nav class="ow-breadcrumbs" aria-label="Breadcrumb">
            <ol class="ow-breadcrumbs-list">
              {#each docsTrail as item (item.label)}
                <li class="ow-breadcrumbs-item">
                  {#if item.path}
                    <a
                      href={getDemoHref(item.path)}
                      onclick={preventNavigation}
                    >
                      {item.label}
                    </a>
                  {:else}
                    {item.label}
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Wrapped labels</p>

        <div class={[demoContainerClass, 'gap-4'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Separators stay in CSS while longer labels wrap naturally inside the
            trail.
          </p>

          <nav class="ow-breadcrumbs" aria-label="Breadcrumb">
            <ol class="ow-breadcrumbs-list">
              {#each wrappedTrail as item (item.label)}
                <li class="ow-breadcrumbs-item">
                  {#if item.path}
                    <a
                      href={getDemoHref(item.path)}
                      onclick={preventNavigation}
                    >
                      {item.label}
                    </a>
                  {:else}
                    {item.label}
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
