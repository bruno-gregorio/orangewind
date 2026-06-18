<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Accordion expand state for the collapsible demo, keyed by id.
  const open = $state<Record<string, boolean>>({ testing: true })
</script>

<!-- Mandatory headline demonstration: a default side navigation, bounded to a
     narrow column. On large screens the drawer is a static column; below that
     it becomes an off-canvas panel (not shown here, to keep it contained). -->
<div class="rounded border border-ow-surface-border p-8">
  <div class="ow-side-navigation max-w-xs">
    <nav class="ow-side-navigation-drawer" aria-label="Documentation">
      <h3 class="ow-side-navigation-heading">Introduction</h3>
      <ul class="ow-side-navigation-list">
        <li class="ow-side-navigation-item">
          <a
            class="ow-side-navigation-link"
            aria-current="page"
            href="#getting-started"
          >
            Getting started
          </a>
        </li>
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#install">
            Installation
            <span class="ow-side-navigation-status">
              <span class="ow-chip-positive ow-is-dense">New</span>
            </span>
          </a>
        </li>
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#config">Configuration</a>
          <ul class="ow-side-navigation-list">
            <li class="ow-side-navigation-item">
              <a class="ow-side-navigation-link" href="#env">
                Environment variables
              </a>
            </li>
            <li class="ow-side-navigation-item">
              <span class="ow-side-navigation-text">Secrets</span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</div>

<p>
  A side navigation is a vertical list of grouped, optionally nested links for
  the secondary navigation of a page. Below the large breakpoint the
  <code>ow-side-navigation-drawer</code> becomes an off-canvas panel that slides in
  over an overlay; on large screens it is a static column. This very docs site's left-hand
  navigation is built from this component.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  Each list item is a <code>ow-side-navigation-item</code> holding a
  <code>ow-side-navigation-link</code>, a plain
  <code>ow-side-navigation-text</code>, or a nested
  <code>ow-side-navigation-list</code>. Mark the active page with
  <code>aria-current="page"</code>; a <code>ow-side-navigation-status</code>
  slot right-aligns an icon or chip. Group the list under a
  <code>ow-side-navigation-heading</code>.
</p>
<Example
  block
  code={`<div class="ow-side-navigation">
  <nav class="ow-side-navigation-drawer" aria-label="Default side">
    <h3 class="ow-side-navigation-heading">Introduction</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#about">About</a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#status">
          Link with status
          <span class="ow-side-navigation-status">
            <i class="ow-icon-error"></i>
          </span>
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#children">
          Link with children
        </a>
        <ul class="ow-side-navigation-list">
          <li class="ow-side-navigation-item">
            <a class="ow-side-navigation-link" href="#second">
              Second level link
            </a>
          </li>
          <li class="ow-side-navigation-item">
            <a
              class="ow-side-navigation-link"
              aria-current="page"
              href="#active"
            >
              Active link
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`}
>
  <div class="ow-side-navigation w-full max-w-xs">
    <nav class="ow-side-navigation-drawer" aria-label="Default side">
      <h3 class="ow-side-navigation-heading">Introduction</h3>
      <ul class="ow-side-navigation-list">
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#about">About</a>
        </li>
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#status">
            Link with status
            <span class="ow-side-navigation-status">
              <i class="ow-icon-error"></i>
            </span>
          </a>
        </li>
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#children">
            Link with children
          </a>
          <ul class="ow-side-navigation-list">
            <li class="ow-side-navigation-item">
              <a class="ow-side-navigation-link" href="#second">
                Second level link
              </a>
            </li>
            <li class="ow-side-navigation-item">
              <a
                class="ow-side-navigation-link"
                aria-current="page"
                href="#active"
              >
                Active link
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</Example>

<h2 id="icons" class="ow-heading-2">With icons</h2>
<p>
  Add <code>ow-side-navigation-icons</code> to the root and an
  <code>ow-side-navigation-icon</code> to each link's <code>&lt;i&gt;</code>.
  The extra indentation reserves room so labels line up whether or not an item
  has an icon.
</p>
<Example
  block
  code={`<div class="ow-side-navigation ow-side-navigation-icons">
  <nav class="ow-side-navigation-drawer" aria-label="Icon side">
    <h3 class="ow-side-navigation-heading">Group heading</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#info">
          <i class="ow-icon-information ow-side-navigation-icon"></i>
          First level link
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#search">
          <i class="ow-icon-search ow-side-navigation-icon"></i>
          Searchable section
          <span class="ow-side-navigation-status">
            <span class="ow-chip-information ow-is-dense">Updated</span>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</div>`}
>
  <div class="ow-side-navigation ow-side-navigation-icons w-full max-w-xs">
    <nav class="ow-side-navigation-drawer" aria-label="Icon side">
      <h3 class="ow-side-navigation-heading">Group heading</h3>
      <ul class="ow-side-navigation-list">
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#info">
            <i class="ow-icon-information ow-side-navigation-icon"></i>
            First level link
          </a>
        </li>
        <li class="ow-side-navigation-item">
          <a class="ow-side-navigation-link" href="#search">
            <i class="ow-icon-search ow-side-navigation-icon"></i>
            Searchable section
            <span class="ow-side-navigation-status">
              <span class="ow-chip-information ow-is-dense">Updated</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</Example>

<h2 id="accordion" class="ow-heading-2">Accordion</h2>
<p>
  Add <code>ow-side-navigation-accordion</code> and use a
  <code>ow-side-navigation-accordion-button</code> to collapse a group. Toggle
  the button's <code>aria-expanded</code> and mirror it on the sub-list to animate
  it open and closed.
</p>
<Example
  block
  code={`<div class="ow-side-navigation ow-side-navigation-accordion">
  <nav class="ow-side-navigation-drawer" aria-label="Accordion side">
    <h3 class="ow-side-navigation-heading">Machines</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" aria-current="page" href="#commission">
          Commission machines
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <button
          type="button"
          class="ow-side-navigation-accordion-button"
          aria-expanded="true"
        >
          Testing
        </button>
        <ul class="ow-side-navigation-list" aria-expanded="true">
          <li class="ow-side-navigation-item">
            <a class="ow-side-navigation-link" href="#network">
              Network testing
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`}
>
  <div class="ow-side-navigation ow-side-navigation-accordion w-full max-w-xs">
    <nav class="ow-side-navigation-drawer" aria-label="Accordion side">
      <h3 class="ow-side-navigation-heading">Machines</h3>
      <ul class="ow-side-navigation-list">
        <li class="ow-side-navigation-item">
          <a
            class="ow-side-navigation-link"
            aria-current="page"
            href="#commission"
          >
            Commission machines
          </a>
        </li>
        <li class="ow-side-navigation-item">
          <button
            type="button"
            class="ow-side-navigation-accordion-button"
            aria-expanded={open.testing ? 'true' : 'false'}
            onclick={() => (open.testing = !open.testing)}
          >
            Testing
          </button>
          <!-- Orangewind animates the accordion from `aria-expanded` on the list
               itself, so it intentionally sits on the `<ul>`. -->
          <!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
          <ul
            class="ow-side-navigation-list"
            aria-expanded={open.testing ? 'true' : 'false'}
          >
            <li class="ow-side-navigation-item">
              <a class="ow-side-navigation-link" href="#network">
                Network testing
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</Example>

<h2 id="raw-html" class="ow-heading-2">Raw HTML</h2>
<p>
  Add <code>ow-side-navigation-raw-html</code> to style plain markup emitted by
  an external service through bare element selectors — no per-element classes
  needed. Mark an active link with <code>ow-is-active</code>.
</p>
<Example
  block
  code={`<div class="ow-side-navigation ow-side-navigation-raw-html">
  <nav class="ow-side-navigation-drawer" aria-label="Raw HTML side">
    <h3>Group heading</h3>
    <ul>
      <li><a href="#one">First level link</a></li>
      <li>
        <strong>Text item with children</strong>
        <ul>
          <li><a href="#two">Second level link</a></li>
          <li><a class="ow-is-active" href="#active">Active link</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`}
>
  <div class="ow-side-navigation ow-side-navigation-raw-html w-full max-w-xs">
    <nav class="ow-side-navigation-drawer" aria-label="Raw HTML side">
      <h3>Group heading</h3>
      <ul>
        <li><a href="#one">First level link</a></li>
        <li>
          <strong>Text item with children</strong>
          <ul>
            <li><a href="#two">Second level link</a></li>
            <li><a class="ow-is-active" href="#active">Active link</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</Example>

<h2 id="dark" class="ow-heading-2">Dark</h2>
<p>
  Inside a <code>dark</code> context the navigation recolours its hover, active
  and border tints. Wrap the component (or any ancestor) in the
  <code>dark</code> class to opt in.
</p>
<Example
  block
  code={`<div class="ow-side-navigation">
  <nav class="ow-side-navigation-drawer" aria-label="Dark side">
    <h3 class="ow-side-navigation-heading">Documentation</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" aria-current="page" href="#start">
          Getting started
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#guides">Guides</a>
      </li>
    </ul>
  </nav>
</div>`}
>
  <div class="dark rounded bg-zinc-950 p-4">
    <div class="ow-side-navigation w-full max-w-xs bg-transparent">
      <nav class="ow-side-navigation-drawer" aria-label="Dark side">
        <h3 class="ow-side-navigation-heading">Documentation</h3>
        <ul class="ow-side-navigation-list">
          <li class="ow-side-navigation-item">
            <a
              class="ow-side-navigation-link"
              aria-current="page"
              href="#start"
            >
              Getting started
            </a>
          </li>
          <li class="ow-side-navigation-item">
            <a class="ow-side-navigation-link" href="#guides">Guides</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</Example>
