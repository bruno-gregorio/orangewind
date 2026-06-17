<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Application Layouts/Tab Section',
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

  type Tab = {
    cards: { copy: string; title: string }[]
    id: string
    label: string
    panelId: string
  }
</script>

<script lang="ts">
  /* global HTMLButtonElement, HTMLElement, KeyboardEvent */
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const tabs: Tab[] = [
    {
      id: 'compute-tab',
      panelId: 'compute-panel',
      label: 'Compute',
      cards: [
        {
          title: 'Virtual machines',
          copy: 'Provision and operate VMs across every cloud you run.'
        },
        {
          title: 'Containers',
          copy: 'Production grade Kubernetes with a consistent toolchain.'
        },
        {
          title: 'Bare metal',
          copy: 'Bring physical servers under the same lifecycle.'
        }
      ]
    },
    {
      id: 'storage-tab',
      panelId: 'storage-panel',
      label: 'Storage',
      cards: [
        {
          title: 'Block',
          copy: 'Resilient block storage for stateful workloads.'
        },
        {
          title: 'Object',
          copy: 'Scalable object storage with an S3 compatible API.'
        },
        {
          title: 'File',
          copy: 'Shared file systems for teams and pipelines.'
        }
      ]
    },
    {
      id: 'network-tab',
      panelId: 'network-panel',
      label: 'Networking',
      cards: [
        {
          title: 'Software defined',
          copy: 'Model networks in code and apply them anywhere.'
        },
        {
          title: 'Load balancing',
          copy: 'Distribute traffic across services automatically.'
        },
        {
          title: 'Observability',
          copy: 'Trace flows and surface issues before users do.'
        }
      ]
    }
  ]

  let activeTabId = $state(tabs[0].id)

  function selectTab(tabId: string) {
    activeTabId = tabId
  }

  function focusTab(button: HTMLButtonElement, nextIndex: number) {
    const tabList = button.closest('[role="tablist"]')

    if (!(tabList instanceof HTMLElement)) {
      return
    }

    const items = Array.from(
      tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    )

    if (items.length === 0) {
      return
    }

    const normalizedIndex = (nextIndex + items.length) % items.length
    const nextTab = items[normalizedIndex]

    if (nextTab === undefined) {
      return
    }

    nextTab.focus()
  }

  function handleTabKeydown(event: KeyboardEvent) {
    const button = event.currentTarget

    if (!(button instanceof HTMLButtonElement)) {
      return
    }

    const tabList = button.closest('[role="tablist"]')

    if (!(tabList instanceof HTMLElement)) {
      return
    }

    const items = Array.from(
      tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    )
    const currentIndex = items.indexOf(button)

    if (currentIndex === -1) {
      return
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab(button, currentIndex + 1)
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab(button, currentIndex - 1)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      focusTab(button, 0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      focusTab(button, items.length - 1)
    }
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<Story name="Tab Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>50 / 50 header with full-width tabs</p>

          <div class="bg-white px-6 dark:bg-zinc-900">
            <section class="ow-section">
              <!-- Title row: heading on the left, description and CTA on the right. -->
              <div class="ow-section-shallow">
                <hr class="ow-rule" />
                <div class="grid gap-6 pt-4 lg:grid-cols-2">
                  <h2 class="ow-heading-2 m-0">
                    A platform for every workload
                  </h2>
                  <div class="grid gap-4">
                    <p class="m-0">
                      Switch between layers of the stack to see how the same
                      operations model carries across them.
                    </p>
                    <div class="ow-cta-block">
                      <a
                        class="ow-btn-positive"
                        href="#tab-section"
                        onclick={preventDefault}
                      >
                        Explore the platform
                      </a>
                      <a
                        class="ow-btn-link"
                        href="#tab-section"
                        onclick={preventDefault}
                      >
                        Read the docs &rsaquo;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tabbed content blocks. -->
              <div class="ow-tabs">
                <div
                  class="ow-tabs-list"
                  role="tablist"
                  aria-label="Platform capabilities"
                >
                  {#each tabs as tab (tab.id)}
                    <div class="ow-tabs-item">
                      <button
                        type="button"
                        class="ow-tabs-link"
                        id={tab.id}
                        role="tab"
                        aria-selected={activeTabId === tab.id}
                        aria-controls={tab.panelId}
                        tabindex={activeTabId === tab.id ? 0 : -1}
                        onclick={() => selectTab(tab.id)}
                        onfocus={() => selectTab(tab.id)}
                        onkeydown={handleTabKeydown}
                      >
                        {tab.label}
                      </button>
                    </div>
                  {/each}
                </div>

                {#each tabs as tab (tab.panelId)}
                  <div
                    class="ow-tabs-panel"
                    role="tabpanel"
                    id={tab.panelId}
                    aria-labelledby={tab.id}
                    tabindex="0"
                    hidden={activeTabId !== tab.id}
                  >
                    <div class="grid gap-6 md:grid-cols-3">
                      {#each tab.cards as card (card.title)}
                        <div class="ow-card mb-0">
                          <h3 class="ow-heading-5">{card.title}</h3>
                          <p class="m-0">{card.copy}</p>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
