<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Typography',
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

<Story name="All Variants">
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'p-10 space-y-16 min-h-screen',
        args?.dark && 'bg-[#111] text-white',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-6">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Standard Headings
        </p>
        <div>
          <h1 class="ow-display-heading">Display Heading</h1>
          <br />
          <p class="ow-heading-1">Heading 1</p>
          <p class="ow-heading-2">Heading 2</p>
          <br />
          <p class="ow-heading-3">Heading 3</p>
          <p class="ow-heading-4">Heading 4</p>
          <br />
          <p class="ow-heading-5">Heading 5</p>
          <p class="ow-heading-6">Heading 6</p>
        </div>
      </section>

      <section class="space-y-6">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Heading Icon patterns
        </p>
        <div class="space-y-12">
          <div class="ow-heading-icon">
            <div class="ow-heading-icon-header">
              <img
                class="ow-heading-icon-img"
                src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
                alt=""
              />
              <h3 class="ow-heading-icon-title ow-heading-3">
                LXD — system containers
              </h3>
            </div>
            <p>
              LXD, the Linux container hypervisor, merges the speed and density
              of containers with the manageability and security of traditional
              virtual machines.
            </p>
          </div>

          <div class="ow-heading-icon-small">
            <div class="ow-heading-icon-header">
              <img
                class="ow-heading-icon-img"
                src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
                alt=""
              />
              <h3 class="ow-heading-icon-title ow-heading-3">
                LXD — system containers
              </h3>
            </div>
            <p>Economics are directly tied to density. Smaller icon version.</p>
          </div>

          <div class="ow-heading-icon">
            <div class="ow-heading-icon-header is-stacked">
              <img
                class="ow-heading-icon-img"
                src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
                alt=""
              />
              <h3 class="ow-heading-icon-title ow-heading-3">
                LXD — system containers
              </h3>
            </div>
            <p>Stacked layout version.</p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Muted Headings & Utilities
        </p>
        <div>
          <span class="ow-muted-heading">Latest News</span>
          <h2 class="ow-heading-2">Canonical expands AI portfolio</h2>
          <p class="mt-4">
            We are excited to announce new partnerships and projects.
          </p>
        </div>
        <div class="pt-8">
          <p class="ow-text-small-caps">Small caps utility text block</p>
        </div>
      </section>

      <section class="space-y-6">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Font Metrics Visualization
        </p>
        <div class="space-y-8">
          <h1 class="ow-display-heading ow-visualise-font-metrics inline-block">
            Display
          </h1>
          <br />
          <h2 class="ow-heading-1 ow-visualise-font-metrics inline-block">
            Heading 1
          </h2>
          <br />
          <p class="ow-visualise-font-metrics inline-block">
            Regular paragraph text metrics
          </p>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
