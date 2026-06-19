<script lang="ts">
  // Left-hand documentation navigation. Occupies the `ow-docs-sidebar` grid
  // area and uses the Orangewind accordion side-navigation so each component
  // group collapses (compact, and themed for light/dark out of the box).
  // 'ready' entries are links; 'todo' entries render muted so the nav never
  // breaks.
  //
  // Below the large breakpoint the navigation is an off-canvas drawer: a toggle
  // button sits in normal flow and the list slides in over an overlay. At the
  // large breakpoint the drawer becomes the static left column (Orangewind's
  // own CSS swaps the two), so there is a single markup for both.
  import { page } from '$app/state'
  import { componentGroups, guides, pathForComponent } from '$lib/manifest'
  import Search from '$lib/components/Search.svelte'

  const isActive = (href: string): boolean => page.url.pathname === href

  // The group containing the current page — used to default-open its accordion.
  const activeGroup = $derived(
    componentGroups.find(group =>
      group.items.some(
        item =>
          item.status === 'ready' &&
          pathForComponent(item.slug) === page.url.pathname
      )
    )?.heading
  )

  // Explicit open/closed state, keyed by group heading. Falls back to
  // "open if this is the active group" until the user toggles it.
  const open = $state<Record<string, boolean>>({})
  const isOpen = (heading: string): boolean =>
    open[heading] ?? heading === activeGroup
  const toggle = (heading: string): void => {
    open[heading] = !isOpen(heading)
  }

  // Mobile drawer state machine: 'closed' (off-canvas), 'open' (slid in),
  // 'closing' (playing the collapse animation before returning to 'closed').
  // Matches --ow-side-navigation-transition-duration (0.165s).
  type DrawerState = 'closed' | 'open' | 'closing'
  let drawer = $state<DrawerState>('closed')

  const openDrawer = (): void => {
    drawer = 'open'
  }
  const closeDrawer = (): void => {
    if (drawer !== 'open') return
    drawer = 'closing'
    setTimeout(() => {
      if (drawer === 'closing') drawer = 'closed'
    }, 165)
  }

  // Close the drawer whenever the route changes (i.e. a link was followed) and
  // lock body scroll while the overlay is up.
  $effect(() => {
    const _pathname = page.url.pathname
    drawer = 'closed'
  })
  $effect(() => {
    if (drawer === 'open') {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  })

  const onKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') closeDrawer()
  }
</script>

<svelte:window onkeydown={onKeydown} />

<!-- The `<aside>` is the grid item: it carries the column surface and border so
     the full-height cell stays one shade even when the sticky nav inside is
     shorter than the content beside it. The drawer chrome lives in the nested
     `.ow-side-navigation`. -->
<aside
  class="ow-docs-sidebar border-r border-ow-surface-border bg-ow-background-default"
>
  <div
    class={[
      'ow-side-navigation ow-side-navigation-accordion ow-is-sticky',
      drawer === 'open' && 'ow-is-drawer-expanded',
      drawer === 'closing' && 'ow-is-drawer-collapsed'
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <!-- Visible only below the large breakpoint (Orangewind hides it above). -->
    <button
      type="button"
      class="ow-side-navigation-toggle m-4"
      aria-controls="docs-side-nav-drawer"
      aria-expanded={drawer === 'open'}
      onclick={openDrawer}
    >
      Documentation menu
    </button>

    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
    <div class="ow-side-navigation-overlay" onclick={closeDrawer}></div>

    <div id="docs-side-nav-drawer" class="ow-side-navigation-drawer">
      <div class="ow-side-navigation-drawer-header">
        <button
          type="button"
          class="ow-side-navigation-toggle-in-drawer"
          onclick={closeDrawer}
        >
          Collapse
        </button>
      </div>

      <div class="px-4 pt-4">
        <Search />
      </div>

      <nav aria-label="Documentation">
        <ul class="ow-side-navigation-list">
          <li class="ow-side-navigation-item">
            <a
              class="ow-side-navigation-link"
              href="/docs"
              aria-current={isActive('/docs') ? 'page' : undefined}
            >
              Introduction
            </a>
          </li>
          {#each guides as guide (guide.path)}
            <li class="ow-side-navigation-item">
              <a
                class="ow-side-navigation-link"
                href={guide.path}
                aria-current={isActive(guide.path) ? 'page' : undefined}
              >
                {guide.title}
              </a>
            </li>
          {/each}
          <li class="ow-side-navigation-item">
            <a
              class="ow-side-navigation-link"
              href="/docs/components"
              aria-current={isActive('/docs/components') ? 'page' : undefined}
            >
              All components
            </a>
          </li>
        </ul>

        {#each componentGroups as group (group.heading)}
          <ul class="ow-side-navigation-list">
            <li class="ow-side-navigation-item">
              <button
                type="button"
                class="ow-side-navigation-accordion-button"
                aria-expanded={isOpen(group.heading) ? 'true' : 'false'}
                onclick={() => toggle(group.heading)}
              >
                {group.heading}
              </button>
              <!-- Orangewind drives the collapse animation from aria-expanded on
                   the list itself, so it must live here despite the implicit role. -->
              <!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
              <ul
                class="ow-side-navigation-list"
                aria-expanded={isOpen(group.heading) ? 'true' : 'false'}
              >
                {#each group.items as item (item.slug)}
                  <li class="ow-side-navigation-item">
                    {#if item.status === 'ready'}
                      {@const href = pathForComponent(item.slug)}
                      <a
                        class="ow-side-navigation-link"
                        {href}
                        aria-current={isActive(href) ? 'page' : undefined}
                      >
                        {item.title}
                      </a>
                    {:else}
                      <span
                        class="ow-side-navigation-text opacity-40"
                        title="Coming soon"
                      >
                        {item.title}
                      </span>
                    {/if}
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        {/each}
      </nav>
    </div>
  </div>
</aside>
