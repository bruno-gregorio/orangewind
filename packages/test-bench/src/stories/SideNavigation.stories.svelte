<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Side navigation',
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
  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Drawer open/closed state for the responsive demo. Narrow the viewport
  // below the large breakpoint to see the off-canvas drawer slide in.
  let drawerExpanded = $state(false)

  function toggleDrawer() {
    drawerExpanded = !drawerExpanded
  }

  // Accordion expand state, keyed by id.
  const accordionOpen = $state<Record<string, boolean>>({
    testing: true,
    nested: false
  })

  function toggleAccordion(id: string) {
    accordionOpen[id] = !accordionOpen[id]
  }
</script>

<Story
  name="Side navigation"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'space-y-14 p-10',
        args?.dark && 'bg-[#111] text-[#fff]',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default</p>

        <div class="max-w-xs">
          <div class="ow-side-navigation">
            <nav class="ow-side-navigation-drawer" aria-label="Default side">
              <h3 class="ow-side-navigation-heading">Introduction</h3>
              <ul class="ow-side-navigation-list">
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#default">About</a>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#default">
                    Link with status
                    <span class="ow-side-navigation-status">
                      <i class="ow-icon-error"></i>
                    </span>
                  </a>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#default">
                    Link with children
                  </a>
                  <ul class="ow-side-navigation-list">
                    <li class="ow-side-navigation-item">
                      <a class="ow-side-navigation-link" href="#default">
                        Second level link
                      </a>
                    </li>
                    <li class="ow-side-navigation-item">
                      <span class="ow-side-navigation-text">
                        Second level text
                      </span>
                    </li>
                    <li class="ow-side-navigation-item">
                      <a
                        class="ow-side-navigation-link"
                        aria-current="page"
                        href="#default"
                      >
                        Active link
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="ow-side-navigation-item-title">
                  <a class="ow-side-navigation-link" href="#default">
                    Title that is a link
                  </a>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#default">
                    Link with a label
                    <span class="ow-side-navigation-status">
                      <span class="ow-chip-positive ow-is-dense">New</span>
                    </span>
                  </a>
                </li>
              </ul>

              <h3 class="ow-side-navigation-heading-linked">
                <a class="ow-side-navigation-link" href="#default">
                  Group heading linked
                </a>
              </h3>
              <ul class="ow-side-navigation-list">
                <li class="ow-side-navigation-item">
                  <span class="ow-side-navigation-text">First level text</span>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#default">
                    First level link
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>With icons</p>

        <div class="max-w-xs">
          <div class="ow-side-navigation ow-side-navigation-icons">
            <nav class="ow-side-navigation-drawer" aria-label="Icon side">
              <h3 class="ow-side-navigation-heading">Group heading</h3>
              <ul class="ow-side-navigation-list">
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#icons">
                    <i class="ow-icon-information ow-side-navigation-icon"></i>
                    First level link
                  </a>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#icons">
                    <i class="ow-icon-user ow-side-navigation-icon"></i>
                    Link with children
                  </a>
                  <ul class="ow-side-navigation-list">
                    <li class="ow-side-navigation-item">
                      <a class="ow-side-navigation-link" href="#icons">
                        Second level link
                        <span class="ow-side-navigation-status">
                          <i class="ow-icon-warning"></i>
                        </span>
                      </a>
                    </li>
                    <li class="ow-side-navigation-item">
                      <a
                        class="ow-side-navigation-link"
                        aria-current="page"
                        href="#icons"
                      >
                        Active link
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#icons">
                    <i class="ow-icon-search ow-side-navigation-icon"></i>
                    Searchable section
                    <span class="ow-side-navigation-status">
                      <span class="ow-chip-information ow-is-dense">
                        Updated
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Accordion</p>

        <div class="max-w-xs">
          <div class="ow-side-navigation ow-side-navigation-accordion">
            <nav class="ow-side-navigation-drawer" aria-label="Accordion side">
              <h3 class="ow-side-navigation-heading">Machines</h3>
              <ul class="ow-side-navigation-list">
                <li class="ow-side-navigation-item">
                  <a
                    class="ow-side-navigation-link"
                    aria-current="page"
                    href="#accordion"
                  >
                    Commission machines
                  </a>
                </li>
                <li class="ow-side-navigation-item">
                  <button
                    type="button"
                    class="ow-side-navigation-accordion-button"
                    aria-expanded={accordionOpen.testing ? 'true' : 'false'}
                    onclick={() => toggleAccordion('testing')}
                  >
                    Testing
                  </button>
                  <ul
                    class="ow-side-navigation-list"
                    aria-expanded={accordionOpen.testing ? 'true' : 'false'}
                  >
                    <li class="ow-side-navigation-item">
                      <a class="ow-side-navigation-link" href="#accordion">
                        Network testing
                      </a>
                    </li>
                    <li class="ow-side-navigation-item">
                      <a class="ow-side-navigation-link" href="#accordion">
                        Hardware testing scripts
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="ow-side-navigation-item">
                  <button
                    type="button"
                    class="ow-side-navigation-accordion-button"
                    aria-expanded={accordionOpen.nested ? 'true' : 'false'}
                    onclick={() => toggleAccordion('nested')}
                  >
                    Nested accordion
                  </button>
                  <ul
                    class="ow-side-navigation-list"
                    aria-expanded={accordionOpen.nested ? 'true' : 'false'}
                  >
                    <li class="ow-side-navigation-item">
                      <a class="ow-side-navigation-link" href="#accordion">
                        We need to go deeper
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="ow-side-navigation-item">
                  <a class="ow-side-navigation-link" href="#accordion">
                    Deploy machines
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Responsive drawer &amp; sticky</p>

        <p class="max-w-xl text-sm text-black/65 dark:text-white/65">
          Narrow the viewport below the large breakpoint to collapse the
          navigation into an off-canvas drawer. The toggle slides it in over an
          overlay; on large screens the drawer is a static, sticky column.
        </p>

        <div
          class={[
            'ow-side-navigation ow-is-sticky max-w-xs',
            drawerExpanded ? 'ow-is-drawer-expanded' : 'ow-is-drawer-collapsed'
          ].join(' ')}
        >
          <button
            type="button"
            class="ow-side-navigation-toggle"
            aria-controls="drawer-demo"
            aria-expanded={drawerExpanded ? 'true' : 'false'}
            onclick={toggleDrawer}
          >
            Toggle side navigation
          </button>

          <div
            class="ow-side-navigation-overlay"
            role="presentation"
            onclick={toggleDrawer}
            onkeydown={null}
          ></div>

          <nav
            class="ow-side-navigation-drawer"
            id="drawer-demo"
            aria-label="Responsive side"
          >
            <div class="ow-side-navigation-drawer-header">
              <button
                type="button"
                class="ow-side-navigation-toggle-in-drawer"
                aria-controls="drawer-demo"
                aria-expanded={drawerExpanded ? 'true' : 'false'}
                onclick={toggleDrawer}
              >
                Toggle side navigation
              </button>
            </div>

            <h3 class="ow-side-navigation-heading">Documentation</h3>
            <ul class="ow-side-navigation-list">
              <li class="ow-side-navigation-item">
                <a
                  class="ow-side-navigation-link"
                  aria-current="page"
                  href="#drawer"
                >
                  Getting started
                </a>
              </li>
              <li class="ow-side-navigation-item">
                <a class="ow-side-navigation-link" href="#drawer">Guides</a>
              </li>
              <li class="ow-side-navigation-item">
                <a class="ow-side-navigation-link" href="#drawer">Reference</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Raw HTML</p>

        <p class="max-w-xl text-sm text-black/65 dark:text-white/65">
          Plain markup emitted by an external service is styled through bare
          element selectors instead of explicit classes.
        </p>

        <div class="max-w-xs">
          <div class="ow-side-navigation ow-side-navigation-raw-html">
            <nav class="ow-side-navigation-drawer" aria-label="Raw HTML side">
              <h3>Group heading</h3>
              <ul>
                <li><a href="#raw">First level link</a></li>
                <li>
                  <strong>Text item with children</strong>
                  <ul>
                    <li><a href="#raw">Second level link</a></li>
                    <li>
                      <a class="ow-is-active" href="#raw">
                        Second level active link
                      </a>
                    </li>
                    <li><span>Second level text</span></li>
                  </ul>
                </li>
                <li><a href="#raw">First level link</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
