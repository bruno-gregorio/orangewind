<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Tooltips',
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
  /* global HTMLButtonElement, HTMLDivElement */
  import { tick } from 'svelte'

  type TooltipExample = {
    id: string
    label: string
    className: string
  }

  type DetachedTooltipKey = 'default' | 'centered'

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass =
    'rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5'

  const tooltipExamples: TooltipExample[] = [
    {
      id: 'default-tooltip',
      label: 'Bottom left',
      className: 'ow-tooltip'
    },
    {
      id: 'bottom-center-tooltip',
      label: 'Bottom center',
      className: 'ow-tooltip-btm-center'
    },
    {
      id: 'bottom-right-tooltip',
      label: 'Bottom right',
      className: 'ow-tooltip-btm-right'
    },
    {
      id: 'left-tooltip',
      label: 'Left',
      className: 'ow-tooltip-left'
    },
    {
      id: 'right-tooltip',
      label: 'Right',
      className: 'ow-tooltip-right'
    },
    {
      id: 'top-left-tooltip',
      label: 'Top left',
      className: 'ow-tooltip-top-left'
    },
    {
      id: 'top-center-tooltip',
      label: 'Top center',
      className: 'ow-tooltip-top-center'
    },
    {
      id: 'top-right-tooltip',
      label: 'Top right',
      className: 'ow-tooltip-top-right'
    }
  ]

  let detachedSurface = $state<HTMLDivElement | null>(null)
  let detachedDefaultTrigger = $state<HTMLButtonElement | null>(null)
  let detachedCenteredTrigger = $state<HTMLButtonElement | null>(null)
  let detachedDefaultTooltip = $state<HTMLDivElement | null>(null)
  let detachedCenteredTooltip = $state<HTMLDivElement | null>(null)
  let detachedDefaultOpen = $state(false)
  let detachedCenteredOpen = $state(false)

  function getDetachedParts(key: DetachedTooltipKey) {
    if (key === 'centered') {
      return {
        trigger: detachedCenteredTrigger,
        tooltip: detachedCenteredTooltip,
        align: 'center' as const
      }
    }

    return {
      trigger: detachedDefaultTrigger,
      tooltip: detachedDefaultTooltip,
      align: 'left' as const
    }
  }

  function positionDetachedTooltip(key: DetachedTooltipKey) {
    const surface = detachedSurface
    const { trigger, tooltip, align } = getDetachedParts(key)

    if (surface === null || trigger === null || tooltip === null) {
      return
    }

    const surfaceRect = surface.getBoundingClientRect()
    const triggerRect = trigger.getBoundingClientRect()
    const left =
      align === 'center'
        ? triggerRect.left - surfaceRect.left + triggerRect.width / 2
        : triggerRect.left - surfaceRect.left + 16

    tooltip.style.left = `${left}px`
    tooltip.style.top = `${triggerRect.bottom - surfaceRect.top}px`
  }

  async function setDetachedTooltip(
    key: DetachedTooltipKey,
    nextOpen: boolean
  ) {
    if (key === 'centered') {
      detachedCenteredOpen = nextOpen
    } else {
      detachedDefaultOpen = nextOpen
    }

    if (!nextOpen) {
      return
    }

    await tick()
    positionDetachedTooltip(key)
  }

  $effect(() => {
    if (!detachedDefaultOpen && !detachedCenteredOpen) {
      return
    }

    const reposition = () => {
      if (detachedDefaultOpen) {
        positionDetachedTooltip('default')
      }

      if (detachedCenteredOpen) {
        positionDetachedTooltip('centered')
      }
    }

    reposition()
    window.addEventListener('resize', reposition)
    window.addEventListener('scroll', reposition, true)

    return () => {
      window.removeEventListener('resize', reposition)
      window.removeEventListener('scroll', reposition, true)
    }
  })
</script>

<Story
  name="Tooltips"
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
        <p class={sectionTitleClass}>Placements</p>

        <div class={[demoContainerClass, 'overflow-visible'].join(' ')}>
          <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {#each tooltipExamples as example (example.id)}
              <div class="flex min-h-32 items-center justify-center">
                <button
                  type="button"
                  class={[example.className, 'ow-btn'].join(' ')}
                  aria-describedby={example.id}
                >
                  {example.label}
                  <span
                    class="ow-tooltip-message"
                    role="tooltip"
                    id={example.id}
                  >
                    Product name to be displayed on the storefront.
                  </span>
                </button>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Detached</p>

        <div
          bind:this={detachedSurface}
          class={[
            demoContainerClass,
            'relative flex min-h-56 flex-wrap items-start gap-6 overflow-visible'
          ].join(' ')}
        >
          <button
            bind:this={detachedDefaultTrigger}
            type="button"
            class="ow-btn"
            aria-describedby="detached-tooltip-default"
            onmouseenter={() => setDetachedTooltip('default', true)}
            onmouseleave={() => setDetachedTooltip('default', false)}
            onfocus={() => setDetachedTooltip('default', true)}
            onblur={() => setDetachedTooltip('default', false)}
          >
            UA Infrastructure - Standard
          </button>

          <button
            bind:this={detachedCenteredTrigger}
            type="button"
            class="ow-btn"
            aria-describedby="detached-tooltip-centered"
            onmouseenter={() => setDetachedTooltip('centered', true)}
            onmouseleave={() => setDetachedTooltip('centered', false)}
            onfocus={() => setDetachedTooltip('centered', true)}
            onblur={() => setDetachedTooltip('centered', false)}
          >
            UA Infrastructure - Advanced
          </button>

          <div
            bind:this={detachedDefaultTooltip}
            class="ow-tooltip is-detached"
            id="detached-tooltip-default"
            hidden={!detachedDefaultOpen}
          >
            <span class="ow-tooltip-message" role="tooltip">
              Support level: 24 hours, 5 days a week
            </span>
          </div>

          <div
            bind:this={detachedCenteredTooltip}
            class="ow-tooltip-btm-center is-detached"
            id="detached-tooltip-centered"
            hidden={!detachedCenteredOpen}
          >
            <span class="ow-tooltip-message" role="tooltip">
              Support level: 24 hours, 7 days a week
            </span>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Tailwind Theme Overrides</p>

        <div class="grid gap-6 xl:grid-cols-2">
          <div class="space-y-4 rounded-2xl bg-[#111] p-6 text-[#fff]">
            <p class="max-w-xl text-sm leading-6 text-white/75">
              This trigger lives inside a dark surface, so the tooltip is forced
              to the light palette with Tailwind-driven CSS variables on the
              trigger itself.
            </p>

            <button
              type="button"
              class="ow-tooltip ow-btn [--ow-tooltip-bg:var(--color-ow-light)] [--ow-tooltip-text:var(--color-ow-dark)]"
              aria-describedby="dark-override-tooltip"
            >
              Dark section trigger
              <span
                class="ow-tooltip-message"
                role="tooltip"
                id="dark-override-tooltip"
              >
                This tooltip switches to the light theme for contrast.
              </span>
            </button>
          </div>

          <div class="space-y-4 rounded-2xl bg-white p-6 text-[#111] shadow-sm">
            <p class="max-w-xl text-sm leading-6 text-black/65">
              This trigger keeps the dark tooltip treatment only in Storybook
              dark mode, using Tailwind's <code>dark:</code> variant to force the
              CSS variables when needed.
            </p>

            <button
              type="button"
              class="ow-tooltip ow-btn dark:[--ow-tooltip-bg:var(--color-ow-dark)] dark:[--ow-tooltip-text:var(--color-ow-x-light)]"
              aria-describedby="light-override-tooltip"
            >
              Light section trigger
              <span
                class="ow-tooltip-message"
                role="tooltip"
                id="light-override-tooltip"
              >
                This tooltip stays dark to contrast with the light surface.
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
