<script lang="ts">
  // Left-hand documentation navigation. Occupies the `sidebar` grid area and
  // uses the Orangewind accordion side-navigation so each component group
  // collapses (compact, and themed for light/dark out of the box). 'ready'
  // entries are links; 'todo' entries render muted so the nav never breaks.
  import { page } from '$app/state'
  import { componentGroups, pathForComponent } from '$lib/manifest'

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
</script>

<!-- The sidebar uses the default surface — the side navigation's own tone. The
     sticky nav is shorter than the column, so the cell carries that same surface
     explicitly; otherwise the empty space below the nav would expose the page
     colour and split the column into two shades. -->
<aside
  class="ow-docs-sidebar border-r border-ow-surface-border bg-ow-background-default"
>
  <div class="ow-side-navigation ow-side-navigation-accordion ow-is-sticky">
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
</aside>
