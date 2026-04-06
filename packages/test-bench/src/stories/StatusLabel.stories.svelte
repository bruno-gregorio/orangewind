<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Status Label',
    args: {
      dark: false,
      baselineGrid: false,
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
      }
    }
  })
</script>

<Story name="Status Label">
  {#snippet template({ dark, baselineGrid, rounded })}
    {@const labelClass = (base: string) => [base, rounded && 'ow-btn-round'].filter(Boolean).join(' ')}
    <div
      class={[
        'p-10 space-y-8',
        dark && 'dark bg-[#111]',
        baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          Variants
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <span class={labelClass('ow-status-label')}>Default</span>
          <span class={labelClass('ow-status-label-positive')}>Positive</span>
          <span class={labelClass('ow-status-label-caution')}>Caution</span>
          <span class={labelClass('ow-status-label-information')}>Information</span>
          <span class={labelClass('ow-status-label-negative')}>Negative</span>
        </div>
      </section>

      <section class="space-y-4">
        <p
          class={[
            'text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-gray-400' : 'text-gray-500'
          ].join(' ')}
        >
          As Links (Vanilla support)
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <a href="#link" class={labelClass('ow-status-label')}>Default Link</a>
          <a href="#link" class={labelClass('ow-status-label-positive')}>Positive Link</a>
          <a href="#link" class={labelClass('ow-status-label-caution')}>Caution Link</a>
          <a href="#link" class={labelClass('ow-status-label-information')}>Information Link</a>
          <a href="#link" class={labelClass('ow-status-label-negative')}>Negative Link</a>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
