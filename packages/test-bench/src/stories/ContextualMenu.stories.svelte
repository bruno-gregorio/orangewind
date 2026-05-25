<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Contextual Menu',
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

  type MenuKey =
    | 'default'
    | 'left'
    | 'center'
    | 'right'
    | 'indicator'
    | 'inline'

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const openMenus = $state<Record<MenuKey, boolean>>({
    default: false,
    left: false,
    center: false,
    right: false,
    indicator: false,
    inline: false
  })

  function toggle(key: MenuKey) {
    const wasOpen = openMenus[key]
    for (const id of Object.keys(openMenus) as MenuKey[]) {
      openMenus[id] = false
    }
    openMenus[key] = !wasOpen
  }

  function closeAll() {
    for (const id of Object.keys(openMenus) as MenuKey[]) {
      openMenus[id] = false
    }
  }

  function onWindowClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null
    if (!target?.closest('[data-ow-contextual-menu]')) {
      closeAll()
    }
  }

  function onWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeAll()
    }
  }

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

<svelte:window onclick={onWindowClick} onkeydown={onWindowKeydown} />

<Story name="Contextual Menu">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default</p>
        <div class="ow-card mb-0">
          <p class="mb-4">
            A toggle button reveals a dropdown of related actions, grouped by
            purpose.
          </p>
          <span class="ow-contextual-menu-left" data-ow-contextual-menu>
            <button
              type="button"
              class="ow-btn ow-contextual-menu-toggle"
              aria-controls="menu-default"
              aria-expanded={openMenus.default}
              aria-haspopup="true"
              onclick={() => toggle('default')}
            >
              Take action&hellip;
            </button>
            <span
              class="ow-contextual-menu-dropdown"
              id="menu-default"
              aria-hidden={!openMenus.default}
            >
              <span class="ow-contextual-menu-group">
                <button type="button" class="ow-contextual-menu-link">
                  Commission
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Acquire
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Deploy
                </button>
              </span>
              <span class="ow-contextual-menu-group">
                <button type="button" class="ow-contextual-menu-link">
                  Test hardware
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Rescue mode
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Mark broken
                </button>
              </span>
            </span>
          </span>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Alignment</p>
        <div class="ow-card mb-0 flex flex-wrap gap-8">
          <span class="ow-contextual-menu-left" data-ow-contextual-menu>
            <button
              type="button"
              class="ow-btn ow-contextual-menu-toggle"
              aria-controls="menu-left"
              aria-expanded={openMenus.left}
              aria-haspopup="true"
              onclick={() => toggle('left')}
            >
              Align left
            </button>
            <span
              class="ow-contextual-menu-dropdown"
              id="menu-left"
              aria-hidden={!openMenus.left}
            >
              <span class="ow-contextual-menu-group">
                <button type="button" class="ow-contextual-menu-link">
                  Commission
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Acquire
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Deploy
                </button>
              </span>
            </span>
          </span>

          <span class="ow-contextual-menu-center" data-ow-contextual-menu>
            <button
              type="button"
              class="ow-btn ow-contextual-menu-toggle"
              aria-controls="menu-center"
              aria-expanded={openMenus.center}
              aria-haspopup="true"
              onclick={() => toggle('center')}
            >
              Align center
            </button>
            <span
              class="ow-contextual-menu-dropdown"
              id="menu-center"
              aria-hidden={!openMenus.center}
            >
              <span class="ow-contextual-menu-group">
                <button type="button" class="ow-contextual-menu-link">
                  Commission
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Acquire
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Deploy
                </button>
              </span>
            </span>
          </span>

          <span class="ow-contextual-menu" data-ow-contextual-menu>
            <button
              type="button"
              class="ow-btn ow-contextual-menu-toggle"
              aria-controls="menu-right"
              aria-expanded={openMenus.right}
              aria-haspopup="true"
              onclick={() => toggle('right')}
            >
              Align right
            </button>
            <span
              class="ow-contextual-menu-dropdown"
              id="menu-right"
              aria-hidden={!openMenus.right}
            >
              <span class="ow-contextual-menu-group">
                <button type="button" class="ow-contextual-menu-link">
                  Commission
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Acquire
                </button>
                <button type="button" class="ow-contextual-menu-link">
                  Deploy
                </button>
              </span>
            </span>
          </span>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>With indicator</p>
        <div class="ow-card mb-0">
          <p class="mb-4">
            A chevron indicator rotates when the menu opens, signalling the
            current state.
          </p>
          <span class="ow-contextual-menu-left" data-ow-contextual-menu>
            <button
              type="button"
              class="ow-btn-positive ow-contextual-menu-toggle has-icon"
              aria-controls="menu-indicator"
              aria-expanded={openMenus.indicator}
              aria-haspopup="true"
              onclick={() => toggle('indicator')}
            >
              <span>Take action</span>
              <i
                class="ow-icon-chevron-down ow-contextual-menu-indicator"
                aria-hidden="true"
              ></i>
            </button>
            <span
              class="ow-contextual-menu-dropdown"
              id="menu-indicator"
              aria-hidden={!openMenus.indicator}
            >
              <span class="ow-contextual-menu-group">
                <a href="#commission" class="ow-contextual-menu-link">
                  Commission
                </a>
                <a href="#acquire" class="ow-contextual-menu-link">Acquire</a>
                <a href="#deploy" class="ow-contextual-menu-link">Deploy</a>
              </span>
              <span class="ow-contextual-menu-group">
                <a href="#test" class="ow-contextual-menu-link">
                  Test hardware
                </a>
                <a href="#rescue" class="ow-contextual-menu-link">
                  Rescue mode
                </a>
                <a href="#broken" class="ow-contextual-menu-link">
                  Mark broken
                </a>
              </span>
            </span>
          </span>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Inline</p>
        <div class="ow-card mb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <span class="ow-contextual-menu-left" data-ow-contextual-menu>
              <a
                href="#inline-action"
                class="ow-contextual-menu-toggle"
                aria-controls="menu-inline"
                aria-expanded={openMenus.inline}
                aria-haspopup="true"
                onclick={event => {
                  event.preventDefault()
                  toggle('inline')
                }}
              >
                take action
              </a>
              <span
                class="ow-contextual-menu-dropdown"
                id="menu-inline"
                aria-hidden={!openMenus.inline}
              >
                <span class="ow-contextual-menu-group">
                  <a href="#commission" class="ow-contextual-menu-link">
                    Commission
                  </a>
                  <a href="#acquire" class="ow-contextual-menu-link">
                    Acquire
                  </a>
                  <a href="#deploy" class="ow-contextual-menu-link">Deploy</a>
                </span>
              </span>
            </span>
            nunc dolor. Arcu molestie non arcu porttitor volutpat rutrum ipsum
            nunc lacus ligula ornare et diam vel eu.
          </p>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
