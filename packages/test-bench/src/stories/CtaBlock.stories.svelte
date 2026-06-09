<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/CTA Block',
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

<Story name="CTA Block">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-4xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Default</p>

          <div class="grid gap-3">
            <h2 class="ow-heading-2">Ready to get started?</h2>
            <div class="ow-cta-block">
              <a
                class="ow-btn ow-btn-positive"
                href="#cta"
                onclick={preventDefault}
              >
                Get started
              </a>
              <a class="ow-btn" href="#cta" onclick={preventDefault}>
                View pricing
              </a>
              <a class="ow-btn-link" href="#cta" onclick={preventDefault}>
                Contact sales ›
              </a>
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>With top border</p>

          <div class="grid gap-3">
            <h2 class="ow-heading-2">Bring your team on board</h2>
            <p class="max-w-2xl opacity-70">
              Start a free trial today — no credit card required.
            </p>
            <div class="ow-cta-block ow-has-border">
              <a
                class="ow-btn ow-btn-positive"
                href="#cta"
                onclick={preventDefault}
              >
                Start free trial
              </a>
              <a class="ow-btn-link" href="#cta" onclick={preventDefault}>
                Talk to us ›
              </a>
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Heading and actions side by side</p>

          <div
            class="flex flex-wrap items-baseline justify-between gap-4 border-t border-black/10 pt-4 dark:border-white/20"
          >
            <h2 class="ow-heading-3">Join the next community call</h2>
            <div class="ow-cta-block">
              <a
                class="ow-btn ow-btn-positive"
                href="#cta"
                onclick={preventDefault}
              >
                Register
              </a>
              <a class="ow-btn-link" href="#cta" onclick={preventDefault}>
                Add to calendar ›
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
