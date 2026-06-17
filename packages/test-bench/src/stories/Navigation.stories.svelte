<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Navigation',
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

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Standard navigation state.
  const nav = $state({
    menuOpen: false,
    searchOpen: false,
    dropdownOpen: false
  })

  function toggleMenu() {
    nav.searchOpen = false
    nav.menuOpen = !nav.menuOpen
  }

  function toggleSearch() {
    nav.menuOpen = false
    nav.searchOpen = !nav.searchOpen
  }

  function toggleDropdown() {
    nav.dropdownOpen = !nav.dropdownOpen
  }

  function closeAll() {
    nav.menuOpen = false
    nav.searchOpen = false
    nav.dropdownOpen = false
  }

  function onWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeAll()
    }
  }

  function navClass() {
    return [
      'ow-navigation ow-is-sticky',
      nav.menuOpen && 'ow-has-menu-open',
      nav.searchOpen && 'ow-has-search-open'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen space-y-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<svelte:window onkeydown={onWindowKeydown} />

<Story name="Navigation">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <!-- Reduced navigation -->
      <header class="ow-navigation-reduced">
        <div class="ow-navigation-row">
          <div class="ow-navigation-banner">
            <div class="ow-navigation-tagged-logo">
              <a class="ow-navigation-link" href="#home">
                <span class="ow-navigation-logo-tag">
                  <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
                </span>
                <span class="ow-navigation-logo-title">Orangewind Labs</span>
              </a>
            </div>
          </div>
          <nav class="ow-navigation-nav">
            <ul class="ow-navigation-items ow-is-right-shifted">
              <li class="ow-navigation-item">
                <a class="ow-navigation-link" href="#about">About</a>
              </li>
              <li class="ow-navigation-item">
                <a class="ow-navigation-link" href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Standard navigation -->
      <header class={navClass()}>
        <div class="ow-navigation-row">
          <div class="ow-navigation-banner">
            <div class="ow-navigation-tagged-logo">
              <a class="ow-navigation-link" href="#home">
                <span class="ow-navigation-logo-tag">
                  <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
                </span>
                <span class="ow-navigation-logo-title">Orangewind</span>
              </a>
            </div>
            <ul class="ow-navigation-items">
              <li class="ow-navigation-item">
                <button
                  type="button"
                  class="ow-navigation-toggle-search"
                  aria-label="Toggle search"
                  aria-controls="nav-search"
                  aria-expanded={nav.searchOpen}
                  onclick={toggleSearch}
                >
                  Search
                </button>
              </li>
              <li class="ow-navigation-item">
                <button
                  type="button"
                  class="ow-navigation-toggle-open"
                  aria-label="Open menu"
                  aria-controls="nav-content"
                  aria-expanded={nav.menuOpen}
                  onclick={toggleMenu}
                >
                  Menu
                </button>
                <button
                  type="button"
                  class="ow-navigation-toggle-close"
                  aria-label="Close menu"
                  aria-controls="nav-content"
                  aria-expanded={nav.menuOpen}
                  onclick={toggleMenu}
                >
                  Close
                </button>
              </li>
            </ul>
          </div>

          <nav class="ow-navigation-nav" id="nav-content">
            <ul class="ow-navigation-items">
              <li class="ow-navigation-item ow-is-selected">
                <a class="ow-navigation-link" href="#products">Products</a>
              </li>
              <li
                class="ow-navigation-item-dropdown-toggle"
                class:ow-is-active={nav.dropdownOpen}
              >
                <button
                  type="button"
                  class="ow-navigation-link"
                  aria-controls="nav-dropdown"
                  aria-expanded={nav.dropdownOpen}
                  onclick={toggleDropdown}
                >
                  Solutions
                </button>
                <ul
                  class="ow-navigation-dropdown"
                  id="nav-dropdown"
                  aria-hidden={!nav.dropdownOpen}
                >
                  <li>
                    <a class="ow-navigation-dropdown-item" href="#cloud">
                      Cloud
                    </a>
                  </li>
                  <li>
                    <a class="ow-navigation-dropdown-item" href="#edge">Edge</a>
                  </li>
                  <li>
                    <a class="ow-navigation-dropdown-item" href="#iot">IoT</a>
                  </li>
                </ul>
              </li>
              <li class="ow-navigation-item">
                <a class="ow-navigation-link" href="#pricing">Pricing</a>
              </li>
              <li class="ow-navigation-item">
                <a class="ow-navigation-link" href="#docs">Docs</a>
              </li>
            </ul>

            <ul class="ow-navigation-items ow-is-right-shifted">
              <li class="ow-navigation-item">
                <a
                  class="ow-navigation-link ow-navigation-link-search-toggle"
                  href="#search"
                  aria-controls="nav-search"
                  aria-expanded={nav.searchOpen}
                  onclick={event => {
                    event.preventDefault()
                    toggleSearch()
                  }}
                >
                  <span class="ow-navigation-search-label">Search</span>
                </a>
              </li>
              <li class="ow-navigation-item">
                <a class="ow-navigation-link" href="#login">Sign in</a>
              </li>
            </ul>

            <div class="ow-navigation-search" id="nav-search">
              <form class="ow-search-box" role="search">
                <label for="nav-search-input" class="sr-only">Search</label>
                <input
                  id="nav-search-input"
                  class="ow-search-box-input"
                  type="search"
                  placeholder="Search Orangewind..."
                  required
                />
                <button
                  type="reset"
                  class="ow-search-box-reset"
                  aria-label="Clear search"
                >
                  <i class="ow-icon-close"></i>
                </button>
                <button
                  type="submit"
                  class="ow-search-box-button"
                  aria-label="Submit search"
                >
                  <i class="ow-icon-search"></i>
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div
          class="ow-navigation-search-overlay"
          onclick={() => (nav.searchOpen = false)}
          aria-hidden="true"
        ></div>
      </header>

      <section class="space-y-4 px-10">
        <p class={sectionTitleClass}>About this story</p>
        <div class="ow-card mb-0">
          <p class="mb-2">
            A reduced (secondary) bar sits above the main, sticky navigation.
          </p>
          <p>
            On narrow viewports use the <strong>Menu</strong> and
            <strong>Search</strong>
            toggles. On wide viewports the items expand inline, the
            <strong>Solutions</strong>
            dropdown opens on click, and the search toggle reveals an overlaid search
            box.
          </p>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
