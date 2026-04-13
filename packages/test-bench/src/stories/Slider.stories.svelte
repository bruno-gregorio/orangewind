<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode, rangeProgress } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Slider',
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
  let val1 = $state(50)
  let val2 = $state(50)
</script>

<Story name="Slider">
  {#snippet template({ dark, baselineGrid })}
    <div
      use:darkMode={dark}
      class={[
        'p-10 space-y-12 max-w-4xl',
        dark && 'bg-[#111] text-white',
        baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section>
        <p
          class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4"
        >
          Default State
        </p>
        <div class="space-y-4">
          <div class="ow-slider">
            <input
              use:rangeProgress={val1}
              type="range"
              min="0"
              max="100"
              bind:value={val1}
              step="1"
              name="amount"
              id="amount"
              aria-label="Slider default"
            />
            <input
              type="number"
              class="ow-slider-input"
              id="amount-input"
              bind:value={val1}
              aria-label="Slider input default"
            />
          </div>
        </div>
      </section>

      <section>
        <p
          class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4"
        >
          Disabled State
        </p>
        <div class="space-y-4">
          <div class="ow-slider">
            <input
              use:rangeProgress={val2}
              type="range"
              min="0"
              max="100"
              bind:value={val2}
              step="1"
              name="amountD"
              id="amountD"
              aria-label="Slider disabled"
              disabled
            />
            <input
              type="number"
              class="ow-slider-input"
              id="amount-inputD"
              bind:value={val2}
              aria-label="Slider input disabled"
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
