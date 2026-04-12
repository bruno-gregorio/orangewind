<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Buttons',
    args: {
      dark: false,
      baselineGrid: false,
      positiveColor: '#0e8420',
      negativeColor: '#c7162b',
      rounded: false
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      },
      baselineGrid: {
        name: 'Baseline grid',
        control: 'boolean'
      },
      rounded: {
        name: 'Rounded',
        control: 'boolean'
      },
      positiveColor: {
        name: 'Positive color',
        control: 'color'
      },
      negativeColor: {
        name: 'Negative color',
        control: 'color'
      }
    }
  })
</script>

<Story name="Buttons">
  {#snippet template({ dark, baselineGrid, positiveColor, negativeColor, rounded })}
    {@const btnClass = (base: string) => [base, rounded && 'ow-btn-round'].filter(Boolean).join(' ')}
    <div
      use:darkMode={dark}
      class={[
        'p-10 space-y-8',
        dark && 'bg-[#111]',
        baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
      style="
        --color-ow-positive: {positiveColor};
        --color-ow-negative: {negativeColor};
      "
    >
      <section class="space-y-2">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          Default size
        </p>
        <div class="flex flex-wrap gap-2 items-center">
          <button class={btnClass('ow-btn')}>Default</button>
          <button class={btnClass('ow-btn-positive')}>Positive</button>
          <button class={btnClass('ow-btn-negative')}>Negative</button>
          <button class={btnClass('ow-btn-base')}>Base</button>
          <button class={btnClass('ow-btn-link')}>Link</button>
        </div>
      </section>

      <section class="space-y-2">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          Dense
        </p>
        <div class="flex flex-wrap gap-2 items-center">
          <button class={btnClass('ow-btn is-dense')}>Default</button>
          <button class={btnClass('ow-btn-positive is-dense')}>Positive</button>
          <button class={btnClass('ow-btn-negative is-dense')}>Negative</button>
          <button class={btnClass('ow-btn-base is-dense')}>Base</button>
        </div>
      </section>

      <section class="space-y-2">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          Small
        </p>
        <div class="flex flex-wrap gap-2 items-center">
          <button class={btnClass('ow-btn is-small')}>Default</button>
          <button class={btnClass('ow-btn-positive is-small')}>Positive</button>
          <button class={btnClass('ow-btn-negative is-small')}>Negative</button>
          <button class={btnClass('ow-btn-base is-small')}>Base</button>
        </div>
      </section>

      <section class="space-y-2">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          Disabled
        </p>
        <div class="flex flex-wrap gap-2 items-center">
          <button class={btnClass('ow-btn')} disabled>Default</button>
          <button class={btnClass('ow-btn-positive')} disabled>Positive</button>
          <button class={btnClass('ow-btn-negative')} disabled>Negative</button>
          <button class={btnClass('ow-btn-base')} disabled>Base</button>
        </div>
      </section>

      <section class="space-y-2">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          Inline
        </p>
        <div>
          <span class={dark ? 'text-white text-sm' : 'text-sm'}>
            Action required:
          </span>
          <button class={btnClass('ow-btn is-inline is-small')}>Acknowledge</button>
          <button class={btnClass('ow-btn-negative is-inline is-small')}>Dismiss</button>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
