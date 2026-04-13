<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Switch',
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

<Story name="Switch">
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
          <label class="ow-switch">
            <input type="checkbox" class="ow-switch-input" role="switch" />
            <span class="ow-switch-slider"></span>
            <span class="ow-switch-label">Off default</span>
          </label>
        </div>
      </section>

      <section>
        <p
          class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4"
        >
          Checked State
        </p>
        <div class="space-y-4">
          <label class="ow-switch">
            <input
              type="checkbox"
              class="ow-switch-input"
              role="switch"
              checked
            />
            <span class="ow-switch-slider"></span>
            <span class="ow-switch-label">On default</span>
          </label>
        </div>
      </section>

      <section>
        <p
          class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4"
        >
          Disabled State
        </p>
        <div class="space-y-4">
          <div>
            <label class="ow-switch">
              <input
                type="checkbox"
                class="ow-switch-input"
                role="switch"
                disabled
              />
              <span class="ow-switch-slider"></span>
              <span class="ow-switch-label">Off disabled</span>
            </label>
          </div>
          <div>
            <label class="ow-switch">
              <input
                type="checkbox"
                class="ow-switch-input"
                role="switch"
                disabled
                checked
              />
              <span class="ow-switch-slider"></span>
              <span class="ow-switch-label">On disabled</span>
            </label>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
