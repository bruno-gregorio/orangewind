<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Search Box',
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
  name="Search Box"
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
          Default search box
        </p>
        <form class="ow-search-box" role="search">
          <label for="search-default" class="sr-only">Search</label>
          <input
            id="search-default"
            class="ow-search-box-input"
            type="search"
            placeholder="Search..."
            required
          />
          <button
            type="reset"
            class="ow-search-box-reset"
            aria-label="Clear search"
          >
            <i class="ow-icon-close"></i>
          </button>
          <button
            type="submit"
            class="ow-search-box-button"
            aria-label="Submit search"
          >
            <i class="ow-icon-search"></i>
          </button>
        </form>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Disabled search box
        </p>
        <form class="ow-search-box" role="search">
          <label for="search-disabled" class="sr-only">Search</label>
          <input
            id="search-disabled"
            class="ow-search-box-input"
            type="search"
            placeholder="Search..."
            required
            disabled
          />
          <button
            type="reset"
            class="ow-search-box-reset"
            aria-label="Clear search"
            disabled
          >
            <i class="ow-icon-close"></i>
          </button>
          <button
            type="submit"
            class="ow-search-box-button"
            aria-label="Submit search"
            disabled
          >
            <i class="ow-icon-search"></i>
          </button>
        </form>
      </section>
    </div>
  {/snippet}
</Story>
