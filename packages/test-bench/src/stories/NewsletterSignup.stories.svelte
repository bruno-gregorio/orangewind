<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Newsletter Signup',
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

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<Story name="Newsletter Signup">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-5xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Two columns — 50/50</p>

          <section class="ow-newsletter-signup">
            <div>
              <h2 class="ow-heading-3">Get the latest updates</h2>
              <p class="opacity-70">
                Product news and engineering deep-dives, delivered monthly.
              </p>
            </div>

            <form class="ow-form" onsubmit={preventDefault}>
              <div class="ow-newsletter-signup-fields">
                <div class="ow-newsletter-signup-field">
                  <label class="ow-is-required" for="newsletter-email-1">
                    Email address
                  </label>
                  <input
                    id="newsletter-email-1"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <button type="submit" class="ow-btn ow-btn-positive">
                  Sign up
                </button>
              </div>

              <div class="ow-checkbox">
                <input
                  class="ow-checkbox-input"
                  id="newsletter-consent-1"
                  type="checkbox"
                />
                <label class="ow-checkbox-label" for="newsletter-consent-1">
                  I agree to receive marketing emails and can unsubscribe at any
                  time.
                </label>
              </div>
            </form>
          </section>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Two columns — 25/75</p>

          <section class="ow-newsletter-signup-25-75">
            <div>
              <h2 class="ow-heading-3">Stay in the loop</h2>
            </div>

            <form class="ow-form" onsubmit={preventDefault}>
              <p class="mb-4 opacity-70">
                One short email a month — release notes, events, and the
                occasional deep-dive.
              </p>
              <div class="ow-newsletter-signup-fields">
                <div class="ow-newsletter-signup-field">
                  <label class="ow-is-required" for="newsletter-email-2">
                    Email address
                  </label>
                  <input
                    id="newsletter-email-2"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <button type="submit" class="ow-btn ow-btn-positive">
                  Subscribe
                </button>
              </div>

              <div class="ow-checkbox">
                <input
                  class="ow-checkbox-input"
                  id="newsletter-consent-2"
                  type="checkbox"
                />
                <label class="ow-checkbox-label" for="newsletter-consent-2">
                  I agree to receive marketing emails.
                </label>
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
