<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Badge',
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

<Story name="Badge">
  {#snippet template({ dark, baselineGrid })}
    <div
      use:darkMode={dark}
      class={[
        'p-10 space-y-12',
        dark && 'bg-[#111] text-white',
        baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Base Badges
        </p>
        <div class="flex items-center gap-4">
          <span class="ow-badge">1</span>
          <span class="ow-badge">10</span>
          <span class="ow-badge">99+</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="ow-badge-negative">1</span>
          <span class="ow-badge-negative">10</span>
          <span class="ow-badge-negative">99+</span>
        </div>
      </section>

      <section class="space-y-8">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Inline with Typography
        </p>
        <div>
          <h1 class="ow-heading-1">
            Update Notifications <span class="ow-badge">3</span>
          </h1>
          <p class="mt-4">
            You have new messages in your inbox <span class="ow-badge-negative"
              >12</span
            >
          </p>
        </div>

        <div>
          <h3 class="ow-heading-3">
            Pending Tasks <span class="ow-badge">5</span>
          </h3>
          <p class="text-sm mt-2 opacity-70">
            Archive items <span class="ow-badge">99+</span>
          </p>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
