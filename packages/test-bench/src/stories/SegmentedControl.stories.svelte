<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Segmented Control',
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
  let activeIndex = $state(0)
</script>

<Story
  name="Segmented Control"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'p-10 space-y-12',
        args?.dark && 'bg-[#111] text-white',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Default Segmented Control
        </p>
        <div class="ow-segmented-control">
          <div class="ow-segmented-control-list" role="tablist">
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 0}
              onclick={() => (activeIndex = 0)}
            >
              OLM
            </button>
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 1}
              onclick={() => (activeIndex = 1)}
            >
              SDK
            </button>
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 2}
              onclick={() => (activeIndex = 2)}
            >
              Charmhub
            </button>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Dense Segmented Control
        </p>
        <div class="ow-segmented-control is-dense">
          <div class="ow-segmented-control-list" role="tablist">
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 0}
              onclick={() => (activeIndex = 0)}
            >
              OLM
            </button>
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 1}
              onclick={() => (activeIndex = 1)}
            >
              SDK
            </button>
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 2}
              onclick={() => (activeIndex = 2)}
            >
              Charmhub
            </button>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          With Icons
        </p>
        <div class="ow-segmented-control">
          <div class="ow-segmented-control-list" role="tablist">
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 0}
              onclick={() => (activeIndex = 0)}
            >
              <i class="ow-icon-plus"></i> Add
            </button>
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 1}
              onclick={() => (activeIndex = 1)}
            >
              <i class="ow-icon-edit"></i> Edit
            </button>
            <button
              class="ow-segmented-control-button"
              role="tab"
              aria-selected={activeIndex === 2}
              onclick={() => (activeIndex = 2)}
            >
              <i class="ow-icon-delete"></i> Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
