<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  type NavItem = { id: string; text: string; children?: NavItem[] }

  const navItems: NavItem[] = [
    { id: 'identifying-a-kernel', text: 'Identifying a kernel' },
    {
      id: 'kernel-security',
      text: 'Kernel security',
      children: [
        { id: 'general-availability', text: 'General availability kernels' },
        { id: 'optimized-kernels', text: 'Optimized kernels' }
      ]
    },
    { id: 'variant-categories', text: 'Variant categories' },
    { id: 'current-variant-kernels', text: 'Current variant kernels' }
  ]

  let activeId = $state(navItems[0].id)
  let expanded = $state(false)
</script>

<!-- Mandatory headline demonstration — a contained sidebar navigation. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="grid grid-cols-12 gap-6">
    <aside class="col-span-12 sm:col-span-5 lg:col-span-4">
      <div class="ow-in-page-nav">
        <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
          <h3 class="ow-in-page-nav-heading">On this page</h3>
          <ul class="ow-in-page-nav-list">
            {#each navItems as item (item.id)}
              <li class="ow-in-page-nav-item">
                <a
                  class={[
                    'ow-in-page-nav-link',
                    activeId === item.id && 'ow-is-active'
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onclick={event => {
                    event.preventDefault()
                    activeId = item.id
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
                            activeId === child.id && 'ow-is-active'
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          href={`#${child.id}`}
                          aria-current={activeId === child.id
                            ? 'true'
                            : undefined}
                          onclick={event => {
                            event.preventDefault()
                            activeId = child.id
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
    <div class="col-span-12 space-y-3 sm:col-span-7 lg:col-span-8">
      <h2 class="ow-heading-3 m-0">The main content goes here</h2>
      <p class="m-0">
        In a narrow column the navigation renders as a vertical list with a left
        highlight rail. Clicking an item updates the active state.
      </p>
    </div>
  </div>
</div>

<p>
  In-page navigation lists the sections of a long document and highlights the
  current one. The <code>ow-in-page-nav</code> wrapper is a container: in a
  narrow column it renders as a vertical sidebar list, and once the container
  passes 22rem it becomes a horizontal scroller with a dropdown toggle. It is
  <strong>not</strong> sticky by default — add Tailwind utilities like
  <code>sticky top-6</code> when you want it to follow the scroll.
</p>

<h2 id="sidebar" class="ow-heading-2">Sidebar list</h2>
<p>
  Mark the active link with <code>ow-is-active</code> and
  <code>aria-current="true"</code>. Nest a second
  <code>ow-in-page-nav-list</code> inside an item to indent child sections.
</p>
<Example
  block
  code={`<div class="ow-in-page-nav">
  <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
    <h3 class="ow-in-page-nav-heading">On this page</h3>
    <ul class="ow-in-page-nav-list">
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link ow-is-active" href="#overview" aria-current="true">
          Overview
        </a>
      </li>
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link" href="#install">Installation</a>
        <ul class="ow-in-page-nav-list">
          <li class="ow-in-page-nav-item">
            <a class="ow-in-page-nav-link" href="#requirements">Requirements</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`}
>
  <div class="max-w-xs">
    <div class="ow-in-page-nav">
      <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
        <h3 class="ow-in-page-nav-heading">On this page</h3>
        <ul class="ow-in-page-nav-list">
          <li class="ow-in-page-nav-item">
            <a
              class="ow-in-page-nav-link ow-is-active"
              href="#overview"
              aria-current="true"
            >
              Overview
            </a>
          </li>
          <li class="ow-in-page-nav-item">
            <a class="ow-in-page-nav-link" href="#install">Installation</a>
            <ul class="ow-in-page-nav-list">
              <li class="ow-in-page-nav-item">
                <a class="ow-in-page-nav-link" href="#requirements">
                  Requirements
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</Example>

<h2 id="collapsible" class="ow-heading-2">Collapsible scroller</h2>
<p>
  When the container is wider than 22rem the list collapses into a horizontal
  scroller with a dropdown toggle. Add <code>ow-is-expanded</code> to the
  wrapper to reveal the full list, and keep <code>aria-expanded</code> on the toggle
  in sync.
</p>
<Example
  block
  code={`<div class="ow-in-page-nav">
  <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
    <ul class="ow-in-page-nav-list" id="nav-list" aria-expanded="false">
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link ow-is-active" href="#a" aria-current="true">Section A</a>
      </li>
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link" href="#b">Section B</a>
      </li>
    </ul>
    <button class="ow-in-page-nav-dropdown-toggle" aria-expanded="false" aria-controls="nav-list">
      <i class="ow-icon-chevron-down ow-in-page-nav-dropdown-toggle-icon" aria-hidden="true"></i>
    </button>
  </nav>
</div>`}
>
  <div class="w-full">
    <div
      class={['ow-in-page-nav', expanded && 'ow-is-expanded']
        .filter(Boolean)
        .join(' ')}
    >
      <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
        <!-- Orangewind drives the collapse animation from `aria-expanded` on the
             list itself, so it intentionally sits on the `<ul>`. -->
        <!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
        <ul
          class="ow-in-page-nav-list"
          id="collapsible-nav-list"
          aria-expanded={expanded}
        >
          {#each navItems as item (item.id)}
            <li class="ow-in-page-nav-item">
              <a
                class={[
                  'ow-in-page-nav-link',
                  activeId === item.id && 'ow-is-active'
                ]
                  .filter(Boolean)
                  .join(' ')}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                onclick={event => {
                  event.preventDefault()
                  activeId = item.id
                  expanded = false
                }}
              >
                {item.text}
              </a>
              {#if item.children}
                <ul class="ow-in-page-nav-list">
                  {#each item.children as child (child.id)}
                    <li class="ow-in-page-nav-item">
                      <a
                        class="ow-in-page-nav-link"
                        href={`#${child.id}`}
                        onclick={event => {
                          event.preventDefault()
                          activeId = child.id
                          expanded = false
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
          aria-expanded={expanded}
          aria-controls="collapsible-nav-list"
          aria-label="Toggle navigation"
          onclick={() => (expanded = !expanded)}
        >
          <i
            class={[
              expanded ? 'ow-icon-chevron-up' : 'ow-icon-chevron-down',
              'ow-in-page-nav-dropdown-toggle-icon'
            ].join(' ')}
            aria-hidden="true"
          ></i>
        </button>
      </nav>
    </div>
  </div>
</Example>

<h2 id="sticky" class="ow-heading-2">Making it sticky</h2>
<p>
  To keep the navigation reachable while the page scrolls — as the right rail of
  this docs site does — wrap it in an element carrying
  <code>sticky top-6 max-h-screen overflow-y-auto</code>. Stickiness is
  intentionally left to the consumer so the component works in any layout.
</p>
<Example
  block
  lang="svelte"
  code={`<aside class="sticky top-6 max-h-screen overflow-y-auto">
  <div class="ow-in-page-nav">
    <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
      <!-- list as above -->
    </nav>
  </div>
</aside>`}
>
  <div class="max-w-xs">
    <div class="ow-in-page-nav">
      <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
        <h3 class="ow-in-page-nav-heading">On this page</h3>
        <ul class="ow-in-page-nav-list">
          <li class="ow-in-page-nav-item">
            <a
              class="ow-in-page-nav-link ow-is-active"
              href="#intro"
              aria-current="true"
            >
              Introduction
            </a>
          </li>
          <li class="ow-in-page-nav-item">
            <a class="ow-in-page-nav-link" href="#usage">Usage</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</Example>
