<script module lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Layouts/Docs',
    parameters: {
      layout: 'fullscreen'
    },
    args: {
      dark: false
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      }
    }
  })
</script>

<script lang="ts">
  type NavItem = {
    href: string
    label: string
  }

  type NavGroup = {
    heading: string
    items: NavItem[]
  }

  type TocItem = {
    href: string
    label: string
    children?: TocItem[]
  }

  // Side navigation: a handful of grouped pages with one active page so the
  // sidebar slot has realistic depth at every breakpoint.
  const sideNav: NavGroup[] = [
    {
      heading: 'Get started',
      items: [
        { href: '#install', label: 'Install' },
        { href: '#configuration', label: 'Configuration' },
        { href: '#first-deploy', label: 'Your first deploy' }
      ]
    },
    {
      heading: 'Guides',
      items: [
        { href: '#networking', label: 'Networking' },
        { href: '#storage', label: 'Storage' },
        { href: '#scaling', label: 'Scaling' }
      ]
    },
    {
      heading: 'Reference',
      items: [
        { href: '#cli', label: 'CLI commands' },
        { href: '#api', label: 'HTTP API' }
      ]
    }
  ]

  // Table of contents for the article shown in the metadata column.
  const tocLinks: TocItem[] = [
    { href: '#overview', label: 'Overview' },
    {
      href: '#installation',
      label: 'Installation',
      children: [
        { href: '#from-snap', label: 'From snap' },
        { href: '#from-source', label: 'From source' }
      ]
    },
    { href: '#verifying', label: 'Verifying the install' },
    { href: '#next-steps', label: 'Next steps' }
  ]

  let activePage = $state('#configuration')
  let activeToc = $state('#installation')

  function selectPage(event: MouseEvent, href: string) {
    event.preventDefault()
    activePage = href
  }

  function selectToc(event: MouseEvent, href: string) {
    event.preventDefault()
    activeToc = href
  }

  function tocLinkClass(href: string) {
    return ['ow-toc-link', activeToc === href && 'ow-is-active']
      .filter(Boolean)
      .join(' ')
  }

  function pageClass(dark?: boolean) {
    return [
      'ow-docs min-h-screen',
      dark ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-zinc-950'
    ].join(' ')
  }
</script>

<Story name="Docs">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false}>
      <div class={pageClass(args?.dark)}>
        <!-- Global navigation header. -->
        <header class="ow-docs-header ow-navigation-reduced">
          <div class="ow-navigation-row">
            <div class="ow-navigation-banner">
              <div class="ow-navigation-tagged-logo">
                <a class="ow-navigation-link" href="#home">
                  <span class="ow-navigation-logo-tag">
                    <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
                  </span>
                  <span class="ow-navigation-logo-title">Orangewind Docs</span>
                </a>
              </div>
            </div>
            <nav class="ow-navigation-nav" aria-label="Main">
              <ul class="ow-navigation-items ow-is-right-shifted">
                <li class="ow-navigation-item ow-is-selected">
                  <a class="ow-navigation-link" href="#docs">Docs</a>
                </li>
                <li class="ow-navigation-item">
                  <a class="ow-navigation-link" href="#about">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <!-- Left-hand side navigation. Vertical rhythm comes from the strip;
             the gutter matches the rest of the layout. -->
        <aside class="ow-docs-sidebar border-r border-zinc-500/15">
          <nav
            class="ow-strip ow-is-shallow grid gap-6 px-6 lg:sticky lg:top-0"
            aria-label="Documentation"
          >
            {#each sideNav as group (group.heading)}
              <div class="grid gap-2">
                <h2
                  class="text-xs font-semibold tracking-wider uppercase opacity-50"
                >
                  {group.heading}
                </h2>
                <ul class="grid list-none gap-px">
                  {#each group.items as item (item.href)}
                    <li>
                      <a
                        class={[
                          'block rounded-sm px-3 py-1.5 text-sm no-underline',
                          activePage === item.href
                            ? 'bg-zinc-500/15 font-medium'
                            : 'opacity-75 hover:bg-zinc-500/10 hover:opacity-100'
                        ].join(' ')}
                        href={item.href}
                        aria-current={activePage === item.href
                          ? 'page'
                          : undefined}
                        onclick={event => selectPage(event, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </nav>
        </aside>

        <!-- Content title; stacks above the metadata on medium screens. A
             shallow strip with no bottom padding lets the rule sit tight
             against the content below, as in the Vanilla docs layout. -->
        <div class="ow-docs-title" id="main-content">
          <div class="ow-strip ow-is-shallow px-6 pb-0">
            <h1 class="ow-heading-1 mb-0">Installation</h1>
            <hr class="ow-rule" />
          </div>
        </div>

        <!-- Metadata column: the table of contents for this page. -->
        <div class="ow-docs-meta">
          <div class="ow-docs-sticky-container ow-strip ow-is-shallow px-6">
            <aside class="ow-toc" aria-label="Table of contents">
              <div class="ow-toc-section">
                <h2 class="ow-toc-header">On this page</h2>
                <nav class="ow-toc-nav" aria-label="On this page">
                  <ul class="ow-toc-list">
                    {#each tocLinks as item (item.href)}
                      <li class="ow-toc-item">
                        <a
                          class={tocLinkClass(item.href)}
                          href={item.href}
                          onclick={event => selectToc(event, item.href)}
                        >
                          {item.label}
                        </a>
                        {#if item.children}
                          <ul class="ow-toc-list">
                            {#each item.children as child (child.href)}
                              <li class="ow-toc-item">
                                <a
                                  class={tocLinkClass(child.href)}
                                  href={child.href}
                                  onclick={event =>
                                    selectToc(event, child.href)}
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
          </div>
        </div>

        <!-- Main article content. The section supplies the bottom padding;
             the column width itself keeps the measure readable. -->
        <div class="ow-docs-main">
          <div class="ow-section px-6">
            <main class="grid gap-4">
              <h2 id="overview" class="ow-heading-2">Overview</h2>
              <p>
                Orangewind ships as a single binary. This guide walks through
                installing it, verifying the install and deploying your first
                application. Any standard typography or Orangewind component can
                be used throughout a documentation page.
              </p>

              <h2 id="installation" class="ow-heading-2">Installation</h2>
              <h3 id="from-snap" class="ow-heading-3">From snap</h3>
              <p>
                The quickest way to get started is via the snap, which tracks
                the
                <code>stable</code> channel by default:
              </p>
              <pre><code>snap install orangewind --classic</code></pre>

              <h3 id="from-source" class="ow-heading-3">From source</h3>
              <p>
                Prefer building yourself? Clone the repository and run the
                bundled build script:
              </p>
              <pre><code
                  >git clone https://example.com/orangewind.git
cd orangewind
bun run build</code
                ></pre>

              <h2 id="verifying" class="ow-heading-2">Verifying the install</h2>
              <p>
                Confirm the binary is on your path and reports a version number:
              </p>
              <ul>
                <li>Run <code>orangewind version</code></li>
                <li>Check the daemon with <code>orangewind status</code></li>
                <li>Open the dashboard at <code>localhost:8080</code></li>
              </ul>

              <div class="ow-notification-information">
                <div class="ow-notification-content">
                  <p class="ow-notification-message">
                    On large screens the table of contents moves into its own
                    sticky column on the right; on medium screens it appears
                    between the title and this content.
                  </p>
                </div>
              </div>

              <h2 id="next-steps" class="ow-heading-2">Next steps</h2>
              <p>
                With Orangewind installed you are ready to configure your first
                project and deploy it. Head to the configuration guide to
                continue.
              </p>
            </main>
          </div>
        </div>

        <!-- Global footer. -->
        <footer class="ow-docs-footer ow-strip-highlighted ow-is-shallow px-6">
          <p class="mb-0 text-sm opacity-75">
            © 2026 Orangewind. Built as a Tailwind CSS reimplementation of
            Vanilla.
          </p>
        </footer>
      </div>
    </div>
  {/snippet}
</Story>
