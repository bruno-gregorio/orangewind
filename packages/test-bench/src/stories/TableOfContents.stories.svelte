<script module lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Table of Contents',
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

  type TocItem = {
    href: string
    label: string
    children?: TocItem[]
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const pageLinks: TocItem[] = [
    { href: '#install', label: 'Install from snap' },
    { href: '#initialisation', label: 'Initialisation' },
    {
      href: '#configuration',
      label: 'Configuration verification',
      children: [
        { href: '#networkd', label: 'Networkd backend' },
        { href: '#networkmanager', label: 'NetworkManager backend' }
      ]
    },
    { href: '#statuses', label: 'Service statuses' }
  ]

  const resourceLinks: TocItem[] = [
    { href: '#documentation', label: 'Documentation' },
    { href: '#forum', label: 'Forum' },
    { href: '#github', label: 'GitHub' }
  ]

  let activeHref = $state('#configuration')

  function selectLink(event: globalThis.MouseEvent, href: string) {
    event.preventDefault()
    activeHref = href
  }

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen space-y-10 p-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<Story name="Table of Contents">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default</p>
        <aside class="ow-toc ow-card mb-0 max-w-sm">
          <div class="ow-toc-section">
            <h2 class="ow-toc-header">On this page</h2>
            <nav class="ow-toc-nav" aria-label="Table of contents">
              <ul class="ow-toc-list">
                {#each pageLinks as item (item.href)}
                  <li class="ow-toc-item">
                    <a
                      class={[
                        'ow-toc-link',
                        activeHref === item.href && 'ow-is-active'
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      href={item.href}
                      onclick={event => selectLink(event, item.href)}
                    >
                      {item.label}
                    </a>
                    {#if item.children}
                      <ul class="ow-toc-list">
                        {#each item.children as child (child.href)}
                          <li class="ow-toc-item">
                            <a
                              class={[
                                'ow-toc-link',
                                activeHref === child.href && 'ow-is-active'
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              href={child.href}
                              onclick={event => selectLink(event, child.href)}
                            >
                              {child.label}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </li>
                {/each}
              </ul>
            </nav>
          </div>
        </aside>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Multiple sections</p>
        <aside class="ow-toc ow-card mb-0 max-w-sm">
          <div class="ow-toc-section">
            <h2 class="ow-toc-header">On this page</h2>
            <nav class="ow-toc-nav" aria-label="Table of contents">
              <ul class="ow-toc-list">
                {#each pageLinks as item (item.href)}
                  <li class="ow-toc-item">
                    <a
                      class={[
                        'ow-toc-link',
                        activeHref === item.href && 'ow-is-active'
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      href={item.href}
                      onclick={event => selectLink(event, item.href)}
                    >
                      {item.label}
                    </a>
                    {#if item.children}
                      <ul class="ow-toc-list">
                        {#each item.children as child (child.href)}
                          <li class="ow-toc-item">
                            <a
                              class={[
                                'ow-toc-link',
                                activeHref === child.href && 'ow-is-active'
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              href={child.href}
                              onclick={event => selectLink(event, child.href)}
                            >
                              {child.label}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </li>
                {/each}
              </ul>
            </nav>
          </div>
          <div class="ow-toc-section">
            <h2 class="ow-toc-header">Resources</h2>
            <nav class="ow-toc-nav" aria-label="Resources">
              <ul class="ow-toc-list">
                {#each resourceLinks as item (item.href)}
                  <li class="ow-toc-item">
                    <a
                      class="ow-toc-link"
                      href={item.href}
                      onclick={event => event.preventDefault()}
                    >
                      {item.label}
                    </a>
                  </li>
                {/each}
              </ul>
            </nav>
          </div>
        </aside>
      </section>
    </div>
  {/snippet}
</Story>
