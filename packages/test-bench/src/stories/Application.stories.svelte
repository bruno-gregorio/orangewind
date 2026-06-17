<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Layouts/Application',
    parameters: {
      layout: 'fullscreen'
    },
    args: {
      dark: false,
      asideWidth: 'default'
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      },
      asideWidth: {
        name: 'Aside width',
        control: 'select',
        options: ['narrow', 'default', 'wide']
      }
    }
  })
</script>

<script lang="ts">
  type Tone = 'positive' | 'caution' | 'negative'

  type StoryArgs = {
    dark?: boolean
    asideWidth?: 'narrow' | 'default' | 'wide'
  }

  // Layout state. The drawer starts collapsed and the aside starts closed, so
  // the dashboard is the landing view at every viewport size — on small
  // screens an open aside would overlay the whole page, and a pinned one would
  // crush the main column. Both open on demand (drawer via the top bar/rail
  // toggles, aside via "Details"); pinning the aside then splits the panel.
  const app = $state({
    drawerCollapsed: true,
    drawerPinned: false,
    asideOpen: false,
    asidePinned: true,
    activeNav: 'applications',
    autoScaling: true
  })

  const chipTone: Record<Tone, string> = {
    positive: 'ow-chip-positive',
    caution: 'ow-chip-caution',
    negative: 'ow-chip-negative'
  }

  const primaryNav = [
    { id: 'overview', icon: 'ow-icon-home', label: 'Overview' },
    {
      id: 'applications',
      icon: 'ow-icon-applications',
      label: 'Applications',
      chip: '12'
    },
    { id: 'containers', icon: 'ow-icon-containers', label: 'Containers' },
    { id: 'storage', icon: 'ow-icon-storage-bucket', label: 'Storage' },
    { id: 'machines', icon: 'ow-icon-machines', label: 'Machines' },
    {
      id: 'activity',
      icon: 'ow-icon-history',
      label: 'Activity',
      chip: '3',
      chipTone: 'positive' as Tone
    }
  ]

  const secondaryNav = [
    { id: 'settings', icon: 'ow-icon-settings', label: 'Settings' },
    { id: 'docs', icon: 'ow-icon-book', label: 'Documentation' },
    { id: 'logout', icon: 'ow-icon-log-out', label: 'Log out' }
  ]

  const stats: { label: string; value: string; delta: string; tone: Tone }[] = [
    {
      label: 'Active apps',
      value: '12',
      delta: '+2 this week',
      tone: 'positive'
    },
    {
      label: 'Avg. CPU load',
      value: '48%',
      delta: 'Healthy',
      tone: 'positive'
    },
    {
      label: 'Monthly spend',
      value: '$1,284',
      delta: '+6% vs May',
      tone: 'caution'
    }
  ]

  const apps: {
    name: string
    status: string
    tone: Tone
    units: number
    cloud: string
    updated: string
  }[] = [
    {
      name: 'web-frontend',
      status: 'Running',
      tone: 'positive',
      units: 6,
      cloud: 'aws / eu-west-1',
      updated: '2 min ago'
    },
    {
      name: 'api-gateway',
      status: 'Running',
      tone: 'positive',
      units: 4,
      cloud: 'aws / eu-west-1',
      updated: '14 min ago'
    },
    {
      name: 'worker-queue',
      status: 'Degraded',
      tone: 'caution',
      units: 3,
      cloud: 'gcp / europe-west1',
      updated: '1 hr ago'
    },
    {
      name: 'analytics-db',
      status: 'Blocked',
      tone: 'negative',
      units: 2,
      cloud: 'gcp / europe-west1',
      updated: '3 hr ago'
    },
    {
      name: 'cache-redis',
      status: 'Running',
      tone: 'positive',
      units: 2,
      cloud: 'aws / eu-west-1',
      updated: '5 hr ago'
    }
  ]

  function navigationClass() {
    return [
      'ow-application-navigation',
      app.drawerCollapsed && 'ow-is-collapsed',
      app.drawerPinned && 'ow-is-pinned'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function asideClass(args?: StoryArgs) {
    return [
      'ow-application-aside',
      !app.asideOpen && 'ow-is-collapsed',
      app.asidePinned && 'ow-is-pinned',
      args?.asideWidth === 'narrow' && 'ow-is-narrow',
      args?.asideWidth === 'wide' && 'ow-is-wide'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function navLinkClass(id: string) {
    return [
      'flex items-center gap-3 rounded-sm px-4 py-2 text-sm no-underline',
      'transition-colors',
      app.activeNav === id
        ? 'bg-zinc-500/15 font-medium opacity-100'
        : 'opacity-75 hover:bg-zinc-500/10 hover:opacity-100'
    ].join(' ')
  }

  function selectNav(id: string, event: MouseEvent) {
    event.preventDefault()
    app.activeNav = id
  }
</script>

<Story name="Application">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false}>
      <div class="ow-application">
        <!-- Top bar: shown on small screens to toggle the drawer. -->
        <header class="ow-application-navigation-bar">
          <div class="ow-panel">
            <div class="ow-panel-header">
              <span class="ow-panel-logo">
                <i
                  class="ow-panel-logo-icon ow-icon-blueprint"
                  style="color: var(--color-ow-brand)"
                ></i>
                <span class="text-lg font-light">Orangewind Cloud</span>
              </span>
              <div class="ow-panel-controls">
                <button
                  type="button"
                  class="ow-btn-base ow-has-icon"
                  aria-label="Toggle navigation"
                  aria-expanded={!app.drawerCollapsed}
                  onclick={() => (app.drawerCollapsed = !app.drawerCollapsed)}
                >
                  <i class="ow-icon-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </header>

        <!-- Navigation drawer. -->
        <header class={navigationClass()}>
          <div class="ow-application-navigation-drawer">
            <div class="ow-panel border-r border-zinc-500/20">
              <div class="ow-panel-header ow-is-sticky">
                <span class="ow-panel-logo">
                  <i
                    class="ow-panel-logo-icon ow-icon-blueprint"
                    style="color: var(--color-ow-brand)"
                  ></i>
                  <span
                    class="ow-is-fading-when-collapsed text-lg font-light whitespace-nowrap"
                  >
                    Orangewind Cloud
                  </span>
                </span>
                <div class="ow-panel-controls ow-is-fading-when-collapsed">
                  <button
                    type="button"
                    class="ow-btn-base ow-has-icon max-md:hidden"
                    aria-label="Pin navigation"
                    aria-pressed={app.drawerPinned}
                    onclick={() => (app.drawerPinned = !app.drawerPinned)}
                  >
                    <i class="ow-icon-pin"></i>
                  </button>
                  <button
                    type="button"
                    class="ow-btn-base ow-has-icon"
                    aria-label="Close navigation"
                    onclick={e => {
                      app.drawerCollapsed = true
                      // Release focus so the drawer's `:focus-within` reveal
                      // rule doesn't hold the off-canvas panel open.
                      e.currentTarget.blur()
                    }}
                  >
                    <i class="ow-icon-close"></i>
                  </button>
                </div>
              </div>
              <div class="ow-panel-content grid gap-4">
                <nav aria-label="Main">
                  <ul class="flex list-none flex-col gap-1">
                    {#each primaryNav as item (item.id)}
                      <li>
                        <a
                          class={navLinkClass(item.id)}
                          href="#{item.id}"
                          aria-current={app.activeNav === item.id
                            ? 'page'
                            : undefined}
                          onclick={e => selectNav(item.id, e)}
                        >
                          <i class="{item.icon} shrink-0"></i>
                          <span
                            class="ow-is-fading-when-collapsed flex-1 truncate"
                          >
                            {item.label}
                          </span>
                          {#if item.chip}
                            <span
                              class="{chipTone[
                                item.chipTone ?? 'positive'
                              ]} ow-is-readonly ow-is-inline ow-is-dense ow-is-fading-when-collapsed"
                            >
                              <span class="ow-chip-value">{item.chip}</span>
                            </span>
                          {/if}
                        </a>
                      </li>
                    {/each}
                  </ul>
                </nav>

                <hr class="ow-rule ow-is-fading-when-collapsed" />

                <nav aria-label="Account" class="ow-is-fading-when-collapsed">
                  <ul class="flex list-none flex-col gap-1">
                    {#each secondaryNav as item (item.id)}
                      <li>
                        <a
                          class={navLinkClass(item.id)}
                          href="#{item.id}"
                          aria-current={app.activeNav === item.id
                            ? 'page'
                            : undefined}
                          onclick={e => selectNav(item.id, e)}
                        >
                          <i class="{item.icon} shrink-0"></i>
                          <span class="flex-1 truncate">{item.label}</span>
                        </a>
                      </li>
                    {/each}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <!-- Main content. -->
        <main class="ow-application-main">
          <div class="ow-panel">
            <div
              class="ow-panel-header ow-is-sticky flex-wrap items-center gap-4"
            >
              <h4 class="ow-heading-4 ow-panel-title">Applications</h4>
              <span class="ow-chip ow-is-readonly ow-is-inline ow-is-dense">
                <span class="ow-chip-value">eu-west-1</span>
              </span>
              <div class="ow-panel-controls flex items-center gap-2">
                <form class="ow-search-box hidden pb-0 lg:flex" role="search">
                  <label for="app-search" class="sr-only">
                    Search applications
                  </label>
                  <input
                    id="app-search"
                    class="ow-search-box-input"
                    type="search"
                    placeholder="Search applications…"
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
                <button type="button" class="ow-btn-positive ow-has-icon">
                  <i class="ow-icon-plus"></i>
                  <span class="hidden sm:inline">Deploy app</span>
                </button>
                <button
                  type="button"
                  class="ow-btn"
                  aria-expanded={app.asideOpen}
                  aria-controls="app-aside"
                  onclick={() => (app.asideOpen = !app.asideOpen)}
                >
                  Details
                </button>
              </div>
            </div>

            <div class="ow-panel-content grid gap-6 px-6">
              <div class="ow-notification-positive">
                <i class="ow-icon-success"></i>
                <div class="ow-notification-content">
                  <h3 class="ow-notification-title">Deployment succeeded</h3>
                  <p class="ow-notification-message">
                    <strong>web-frontend</strong> rolled out to 6 units across eu-west-1
                    with zero downtime.
                  </p>
                </div>
              </div>

              <div class="grid gap-4 sm:grid-cols-3">
                {#each stats as stat (stat.label)}
                  <article class="ow-card mb-0 grid content-start gap-2">
                    <p class="text-sm opacity-60">{stat.label}</p>
                    <p class="text-3xl font-light">{stat.value}</p>
                    <p>
                      <span
                        class="{chipTone[
                          stat.tone
                        ]} ow-is-readonly ow-is-inline ow-is-dense"
                      >
                        <span class="ow-chip-value">{stat.delta}</span>
                      </span>
                    </p>
                  </article>
                {/each}
              </div>

              <div class="overflow-x-auto">
                <table class="mb-0" aria-label="Applications">
                  <thead>
                    <tr>
                      <th>Application</th>
                      <th>Status</th>
                      <th class="text-right">Units</th>
                      <th>Cloud / Region</th>
                      <th class="text-right">Last updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each apps as item (item.name)}
                      <tr>
                        <th scope="row">{item.name}</th>
                        <td>
                          <span
                            class="{chipTone[
                              item.tone
                            ]} ow-is-readonly ow-is-inline ow-is-dense"
                          >
                            <span class="ow-chip-value">{item.status}</span>
                          </span>
                        </td>
                        <td class="text-right">{item.units}</td>
                        <td>{item.cloud}</td>
                        <td class="text-right">{item.updated}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        <!-- Aside: contextual settings for the selected application. -->
        <aside class={asideClass(args)} id="app-aside">
          <div class="ow-panel">
            <div class="ow-panel-header ow-is-sticky items-center">
              <h4 class="ow-heading-4 ow-panel-title">web-frontend</h4>
              <div class="ow-panel-controls flex items-center gap-2">
                <button
                  type="button"
                  class="ow-btn-base ow-has-icon max-md:hidden"
                  aria-label="Pin aside"
                  aria-pressed={app.asidePinned}
                  onclick={() => (app.asidePinned = !app.asidePinned)}
                >
                  <i class="ow-icon-pin"></i>
                </button>
                <button
                  type="button"
                  class="ow-btn-base ow-has-icon"
                  aria-label="Close aside"
                  onclick={() => (app.asideOpen = false)}
                >
                  <i class="ow-icon-close"></i>
                </button>
              </div>
            </div>
            <div class="ow-panel-content grid gap-4 px-6">
              <div class="ow-form ow-form-stacked">
                <label for="aside-name">Application name</label>
                <input id="aside-name" type="text" value="web-frontend" />

                <label for="aside-region">Region</label>
                <select id="aside-region">
                  <option>eu-west-1</option>
                  <option>us-east-1</option>
                  <option>europe-west1</option>
                </select>

                <label for="aside-channel">Channel</label>
                <select id="aside-channel">
                  <option>stable</option>
                  <option>candidate</option>
                  <option>edge</option>
                </select>
              </div>

              <label class="ow-switch">
                <input
                  type="checkbox"
                  class="ow-switch-input"
                  role="switch"
                  bind:checked={app.autoScaling}
                />
                <span class="ow-switch-slider"></span>
                <span class="ow-switch-label">Enable auto-scaling</span>
              </label>

              <div class="ow-notification-caution ow-notification-inline">
                <div class="ow-notification-content">
                  <p class="ow-notification-message">
                    Changes apply on the next deployment.
                  </p>
                </div>
              </div>

              <div class="flex gap-2">
                <button type="button" class="ow-btn-positive">
                  Save changes
                </button>
                <button
                  type="button"
                  class="ow-btn"
                  onclick={() => (app.asideOpen = false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- Status bar. -->
        <aside class="ow-application-status">
          <div class="ow-panel">
            <div class="flex items-center gap-3 px-6 py-2 text-sm">
              <span
                class="ow-chip-positive ow-is-readonly ow-is-inline ow-is-dense"
              >
                <span class="ow-chip-value">Operational</span>
              </span>
              <span class="opacity-75">All systems operational</span>
              <span class="ml-auto flex items-center gap-3 opacity-60">
                <span>eu-west-1</span>
                <span>v2.4.0</span>
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  {/snippet}
</Story>
