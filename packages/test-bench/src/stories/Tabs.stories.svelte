<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Tabs',
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
  /* global HTMLButtonElement, HTMLElement, KeyboardEvent */
  type NavigationTab = {
    hash: string
    label: string
  }

  type ContentTab = {
    copy: string
    id: string
    label: string
    panelId: string
    title: string
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass =
    'rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5'

  const navigationTabs: NavigationTab[] = [
    {
      hash: 'implementation',
      label: 'Implementation'
    },
    {
      hash: 'accessibility',
      label: 'Accessibility'
    },
    {
      hash: 'design-guidelines',
      label: 'Design guidelines'
    }
  ]

  const contentTabs: ContentTab[] = [
    {
      id: 'olm-tab',
      panelId: 'olm-panel',
      label: 'Charmed Operator Lifecycle Manager',
      title: 'Operate applications across clouds',
      copy: 'A system to help you move from configuration management to application management across your hybrid cloud estate through sharable, reusable Charmed Operators.'
    },
    {
      id: 'sdk-tab',
      panelId: 'sdk-panel',
      label: 'Charmed Operator SDK',
      title: 'Build operators with a focused toolkit',
      copy: 'A set of tools to help you write Charmed Operators, model workloads clearly and package them for repeatable delivery.'
    },
    {
      id: 'charmhub-tab',
      panelId: 'charmhub-panel',
      label: 'Charmhub',
      title: 'Discover and publish reusable building blocks',
      copy: 'A repository for charms, bundles and related artifacts spanning observability, data, identity and more.'
    }
  ]

  let activeNavigationHash = $state(navigationTabs[0].hash)
  let activeTabId = $state(contentTabs[0].id)

  function selectNavigationTab(hash: string) {
    activeNavigationHash = hash
  }

  function selectTab(tabId: string) {
    activeTabId = tabId
  }

  function focusTab(button: HTMLButtonElement, nextIndex: number) {
    const tabList = button.closest('[role="tablist"]')

    if (!(tabList instanceof HTMLElement)) {
      return
    }

    const tabs = Array.from(
      tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    )

    if (tabs.length === 0) {
      return
    }

    const normalizedIndex = (nextIndex + tabs.length) % tabs.length
    const nextTab = tabs[normalizedIndex]

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

    const tabs = Array.from(
      tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    )
    const currentIndex = tabs.indexOf(button)

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
      focusTab(button, tabs.length - 1)
    }
  }
</script>

<Story
  name="Tabs"
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
        <p class={sectionTitleClass}>Navigation</p>

        <div class={demoContainerClass}>
          <nav class="ow-tabs max-w-4xl" aria-label="Documentation sections">
            <ul class="ow-tabs-list">
              {#each navigationTabs as tab (tab.hash)}
                <li class="ow-tabs-item">
                  <a
                    href={`#${tab.hash}`}
                    class="ow-tabs-link"
                    aria-current={activeNavigationHash === tab.hash
                      ? 'page'
                      : undefined}
                    onclick={() => selectNavigationTab(tab.hash)}
                  >
                    {tab.label}
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Tabbed Content</p>

        <div class={demoContainerClass}>
          <div class="ow-tabs max-w-4xl">
            <div
              class="ow-tabs-list"
              role="tablist"
              aria-label="Juju technology"
            >
              {#each contentTabs as tab (tab.id)}
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

            {#each contentTabs as tab (tab.panelId)}
              <div
                class={[
                  'ow-tabs-panel max-w-3xl rounded-2xl bg-black/[0.03] p-6',
                  args?.dark && 'bg-white/[0.04]'
                ]
                  .filter(Boolean)
                  .join(' ')}
                tabindex="0"
                role="tabpanel"
                id={tab.panelId}
                aria-labelledby={tab.id}
                hidden={activeTabId !== tab.id}
              >
                <div class="space-y-3">
                  <h3 class="ow-heading-5">{tab.title}</h3>
                  <p>{tab.copy}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
