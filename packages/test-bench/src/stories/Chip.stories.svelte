<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Chip',
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

<Story
  name="Chip"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      class={[
        'p-10 space-y-12',
        args?.dark && 'dark bg-[#111] text-white',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">Base Chips</p>
        <div>
          <span class="ow-chip"><span class="ow-chip-value">Default chip</span></span>
          <span class="ow-chip-positive"><span class="ow-chip-value">Positive</span></span>
          <span class="ow-chip-negative"><span class="ow-chip-value">Negative</span></span>
          <span class="ow-chip-caution"><span class="ow-chip-value">Caution</span></span>
          <span class="ow-chip-information"><span class="ow-chip-value">Information</span></span>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">Readonly Chips</p>
        <div>
          <span class="ow-chip is-readonly"><span class="ow-chip-value">Default chip</span></span>
          <span class="ow-chip-positive is-readonly"><span class="ow-chip-value">Positive</span></span>
          <span class="ow-chip-negative is-readonly"><span class="ow-chip-value">Negative</span></span>
          <span class="ow-chip-caution is-readonly"><span class="ow-chip-value">Caution</span></span>
          <span class="ow-chip-information is-readonly"><span class="ow-chip-value">Information</span></span>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">With Lead Value</p>
        <div>
          <span class="ow-chip">
            <span class="ow-chip-lead">Owner</span>
            <span class="ow-chip-value">Canonical</span>
          </span>
          <span class="ow-chip">
            <span class="ow-chip-lead">OS</span>
            <span class="ow-chip-value">Ubuntu 22.04 LTS</span>
          </span>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">Interactive Chips</p>
        <div>
          <button class="ow-chip" aria-pressed="false">
            <span class="ow-chip-value">Click me</span>
          </button>
          <a href="#test" class="ow-chip">
            <span class="ow-chip-value">Link Chip</span>
          </a>
          <button class="ow-chip-positive" aria-pressed="true">
            <span class="ow-chip-value">Active State</span>
          </button>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">Dismissible Chips</p>
        <div>
          <span class="ow-chip">
            <span class="ow-chip-value">Ubuntu</span>
            <button class="ow-chip-dismiss" aria-label="Dismiss">Dismiss</button>
          </span>
        </div>
      </section>
      
      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">Branded Chip</p>
        <div>
          <span class="ow-chip-branded">
            <i class="ow-icon-circle-of-friends"></i>
            <span class="ow-chip-value">Canonical</span>
          </span>
          <span class="ow-chip-branded" aria-label="Ubuntu friends">
            <i class="ow-icon-circle-of-friends"></i>
          </span>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
