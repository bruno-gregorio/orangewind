<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Logo Section',
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
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const logos = ['Canonical', 'Ubuntu', 'MAAS', 'Juju', 'LXD', 'Snapcraft']

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

<Story name="Logo Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Default logo section</p>

          <div class="ow-logo-section">
            <p class="ow-logo-section-title">Trusted by teams everywhere</p>
            <div class="ow-logo-section-items">
              {#each logos as name (name)}
                <div class="ow-logo-section-item">
                  <svg
                    class="ow-logo-section-logo"
                    viewBox="0 0 120 48"
                    role="img"
                    aria-label={name}
                  >
                    <rect
                      width="120"
                      height="48"
                      rx="6"
                      fill="currentColor"
                      opacity="0.08"
                    ></rect>
                    <text
                      x="60"
                      y="29"
                      text-anchor="middle"
                      font-size="15"
                      font-weight="600"
                      fill="currentColor"
                    >
                      {name}
                    </text>
                  </svg>
                </div>
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>
            Linked logo section (each logo is an anchor)
          </p>

          <div class="ow-logo-section">
            <div class="ow-logo-section-items">
              {#each logos as name (name)}
                <a
                  class="ow-logo-section-item"
                  href="#partner"
                  aria-label={`Visit ${name}`}
                  onclick={preventDefault}
                >
                  <svg
                    class="ow-logo-section-logo"
                    viewBox="0 0 120 48"
                    role="img"
                    aria-label={name}
                  >
                    <rect
                      width="120"
                      height="48"
                      rx="6"
                      fill="currentColor"
                      opacity="0.08"
                    ></rect>
                    <text
                      x="60"
                      y="29"
                      text-anchor="middle"
                      font-size="15"
                      font-weight="600"
                      fill="currentColor"
                    >
                      {name}
                    </text>
                  </svg>
                </a>
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>
            Misaligned-images fallback (uniform widths, centered)
          </p>

          <div class="ow-logo-section ow-has-misaligned-images">
            <div class="ow-logo-section-items">
              {#each logos.slice(0, 4) as name (name)}
                <div class="ow-logo-section-item">
                  <svg
                    class="ow-logo-section-logo"
                    viewBox="0 0 120 48"
                    role="img"
                    aria-label={name}
                  >
                    <rect
                      width="120"
                      height="48"
                      rx="6"
                      fill="currentColor"
                      opacity="0.08"
                    ></rect>
                    <text
                      x="60"
                      y="29"
                      text-anchor="middle"
                      font-size="15"
                      font-weight="600"
                      fill="currentColor"
                    >
                      {name}
                    </text>
                  </svg>
                </div>
              {/each}
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
