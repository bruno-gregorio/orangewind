<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/In-Page Navigation',
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

  type NavItem = {
    id: string
    text: string
    children?: NavItem[]
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const navItems: NavItem[] = [
    { id: 'identifying-a-kernel', text: 'Identifying a kernel' },
    {
      id: 'kernel-security',
      text: 'Kernel security',
      children: [
        {
          id: 'general-availability',
          text: 'General Availability (GA) and variant Ubuntu kernels for different hardware and workloads'
        },
        { id: 'optimized-kernels', text: 'Optimized kernels' }
      ]
    },
    { id: 'variant-categories', text: 'Variant categories' },
    { id: 'current-variant-kernels', text: 'Current variant kernels' },
    {
      id: 'additional-kernel-variants',
      text: 'Additional kernel variants',
      children: [
        { id: 'version-specific-kernels', text: 'Version-specific kernels' },
        {
          id: 'configuration-specific-kernels',
          text: 'Configuration-specific kernels'
        },
        { id: 'platform-specific-kernels', text: 'Platform-specific kernels' }
      ]
    }
  ]

  let sidebarActiveId = $state(navItems[0].id)
  let collapsibleActiveId = $state(navItems[0].id)
  let collapsibleExpanded = $state(false)
  let collapsibleWithHeadingActiveId = $state(navItems[0].id)
  let collapsibleWithHeadingExpanded = $state(false)

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

<Story name="In-Page Navigation">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <section>
        <p class="text-sm text-black/65 dark:text-white/65">
          <strong>Note:</strong> the component is not sticky by default. Apply
          Tailwind utilities like
          <code
            class="rounded bg-black/10 px-1 py-0.5 font-mono text-xs dark:bg-white/10"
            >sticky top-6 max-h-screen overflow-y-auto</code
          >
          on the wrapping element when you want the sidebar (or the collapsible toggle)
          to stay reachable while scrolling.
        </p>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Sidebar — narrow container</p>
        <div class="ow-card mb-0">
          <div class="grid grid-cols-12 gap-6">
            <aside
              class="sticky top-6 col-span-12 max-h-screen overflow-y-auto lg:col-span-3"
            >
              <div class="ow-in-page-nav">
                <nav
                  class="ow-in-page-nav-container"
                  aria-label="In-page navigation"
                >
                  <h3 class="ow-in-page-nav-heading">On this page</h3>
                  <ul class="ow-in-page-nav-list">
                    {#each navItems as item (item.id)}
                      <li class="ow-in-page-nav-item">
                        <a
                          class={[
                            'ow-in-page-nav-link',
                            sidebarActiveId === item.id && 'ow-is-active'
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          href={`#${item.id}`}
                          aria-current={sidebarActiveId === item.id
                            ? 'true'
                            : undefined}
                          onclick={event => {
                            event.preventDefault()
                            sidebarActiveId = item.id
                          }}
                        >
                          {item.text}
                        </a>
                        {#if item.children}
                          <ul class="ow-in-page-nav-list">
                            {#each item.children as child (child.id)}
                              <li class="ow-in-page-nav-item">
                                <a
                                  class={[
                                    'ow-in-page-nav-link',
                                    sidebarActiveId === child.id &&
                                      'ow-is-active'
                                  ]
                                    .filter(Boolean)
                                    .join(' ')}
                                  href={`#${child.id}`}
                                  aria-current={sidebarActiveId === child.id
                                    ? 'true'
                                    : undefined}
                                  onclick={event => {
                                    event.preventDefault()
                                    sidebarActiveId = child.id
                                  }}
                                >
                                  {child.text}
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

            <div class="col-span-12 space-y-6 lg:col-span-9">
              <h2 class="ow-heading-3">The main content goes here</h2>
              <p>
                Inside a narrow sidebar column the navigation renders as a
                sticky vertical list with a left highlight rail. Clicking an
                item updates the active state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Collapsible — wide container</p>
        <div class="ow-card mb-0 space-y-4">
          <p class="text-sm text-black/65 dark:text-white/65">
            When the navigation sits in a container wider than the collapse
            threshold (≥ 22rem) it switches to a horizontal scroller with a
            dropdown toggle. Tap the chevron to expand the full list.
          </p>
          <div
            class={['ow-in-page-nav', collapsibleExpanded && 'ow-is-expanded']
              .filter(Boolean)
              .join(' ')}
          >
            <nav
              class="ow-in-page-nav-container"
              aria-label="In-page navigation"
            >
              <ul
                class="ow-in-page-nav-list"
                id="collapsible-nav-list"
                aria-expanded={collapsibleExpanded}
              >
                {#each navItems as item (item.id)}
                  <li class="ow-in-page-nav-item">
                    <a
                      class={[
                        'ow-in-page-nav-link',
                        collapsibleActiveId === item.id && 'ow-is-active'
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      href={`#${item.id}`}
                      aria-current={collapsibleActiveId === item.id
                        ? 'true'
                        : undefined}
                      onclick={event => {
                        event.preventDefault()
                        collapsibleActiveId = item.id
                        collapsibleExpanded = false
                      }}
                    >
                      {item.text}
                    </a>
                    {#if item.children}
                      <ul class="ow-in-page-nav-list">
                        {#each item.children as child (child.id)}
                          <li class="ow-in-page-nav-item">
                            <a
                              class={[
                                'ow-in-page-nav-link',
                                collapsibleActiveId === child.id &&
                                  'ow-is-active'
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              href={`#${child.id}`}
                              aria-current={collapsibleActiveId === child.id
                                ? 'true'
                                : undefined}
                              onclick={event => {
                                event.preventDefault()
                                collapsibleActiveId = child.id
                                collapsibleExpanded = false
                              }}
                            >
                              {child.text}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </li>
                {/each}
              </ul>
              <button
                type="button"
                class="ow-in-page-nav-dropdown-toggle"
                aria-expanded={collapsibleExpanded}
                aria-controls="collapsible-nav-list"
                onclick={() => (collapsibleExpanded = !collapsibleExpanded)}
              >
                <i
                  class={[
                    collapsibleExpanded
                      ? 'ow-icon-chevron-up'
                      : 'ow-icon-chevron-down',
                    'ow-in-page-nav-dropdown-toggle-icon'
                  ].join(' ')}
                  aria-hidden="true"
                ></i>
              </button>
            </nav>
          </div>
          <div class="space-y-3 pt-2">
            <h2 class="ow-heading-3">Main content</h2>
            <p>
              When expanded, the dropdown reveals the full list including nested
              children. When collapsed, items scroll horizontally and nested
              children are hidden.
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Collapsible — with heading</p>
        <div class="ow-card mb-0 space-y-4">
          <div
            class={[
              'ow-in-page-nav',
              collapsibleWithHeadingExpanded && 'ow-is-expanded'
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <nav
              class="ow-in-page-nav-container"
              aria-label="In-page navigation"
            >
              <h3 class="ow-in-page-nav-heading">On this page</h3>
              <ul
                class="ow-in-page-nav-list"
                id="collapsible-with-heading-list"
                aria-expanded={collapsibleWithHeadingExpanded}
              >
                {#each navItems as item (item.id)}
                  <li class="ow-in-page-nav-item">
                    <a
                      class={[
                        'ow-in-page-nav-link',
                        collapsibleWithHeadingActiveId === item.id &&
                          'ow-is-active'
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      href={`#${item.id}`}
                      aria-current={collapsibleWithHeadingActiveId === item.id
                        ? 'true'
                        : undefined}
                      onclick={event => {
                        event.preventDefault()
                        collapsibleWithHeadingActiveId = item.id
                        collapsibleWithHeadingExpanded = false
                      }}
                    >
                      {item.text}
                    </a>
                    {#if item.children}
                      <ul class="ow-in-page-nav-list">
                        {#each item.children as child (child.id)}
                          <li class="ow-in-page-nav-item">
                            <a
                              class={[
                                'ow-in-page-nav-link',
                                collapsibleWithHeadingActiveId === child.id &&
                                  'ow-is-active'
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              href={`#${child.id}`}
                              aria-current={collapsibleWithHeadingActiveId ===
                              child.id
                                ? 'true'
                                : undefined}
                              onclick={event => {
                                event.preventDefault()
                                collapsibleWithHeadingActiveId = child.id
                                collapsibleWithHeadingExpanded = false
                              }}
                            >
                              {child.text}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    {/if}
                  </li>
                {/each}
              </ul>
              <button
                type="button"
                class="ow-in-page-nav-dropdown-toggle"
                aria-expanded={collapsibleWithHeadingExpanded}
                aria-controls="collapsible-with-heading-list"
                onclick={() =>
                  (collapsibleWithHeadingExpanded =
                    !collapsibleWithHeadingExpanded)}
              >
                <i
                  class={[
                    collapsibleWithHeadingExpanded
                      ? 'ow-icon-chevron-up'
                      : 'ow-icon-chevron-down',
                    'ow-in-page-nav-dropdown-toggle-icon'
                  ].join(' ')}
                  aria-hidden="true"
                ></i>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
