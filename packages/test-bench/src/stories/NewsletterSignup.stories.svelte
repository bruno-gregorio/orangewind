<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/Newsletter Signup',
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

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Neighbouring grid columns shown beside the newsletter block in the 2-col
  // variant, mirroring the Vanilla documentation example.
  const promos = [
    {
      body: 'Imagine a world where every device is trustworthy. We designed every aspect of Ubuntu Core to create the most secure embedded Linux ever, with a 10 year LTS commitment.',
      heading: 'Continuous security',
      id: 'security-1',
      link: 'Learn more about Ubuntu security ›'
    },
    {
      body: 'Imagine a world where every device is trustworthy. We designed every aspect of Ubuntu Core to create the most secure embedded Linux ever, with a 10 year LTS commitment.',
      heading: 'Continuous security',
      id: 'security-2',
      link: 'Learn more about Ubuntu security ›'
    },
    {
      body: 'Imagine a world where every device is trustworthy. We designed every aspect of Ubuntu Core to create the most secure embedded Linux ever, with a 10 year LTS commitment.',
      heading: 'Continuous security',
      id: 'security-3',
      link: 'Learn more about Ubuntu security ›'
    }
  ]

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

{#snippet signupForm(id: string)}
  <form action="#subscribe" method="post" {id} class="ow-form ow-form-stacked">
    <label class="ow-is-required" for={`${id}-email`}>Work email:</label>
    <input
      required
      id={`${id}-email`}
      name="email"
      maxlength="255"
      type="email"
      placeholder="you@example.com"
    />
    <div class="ow-checkbox">
      <input
        required
        type="checkbox"
        id={`${id}-optin`}
        class="ow-checkbox-input"
      />
      <label for={`${id}-optin`} class="ow-checkbox-label">
        I agree to receive information about Canonical's products and services.
      </label>
    </div>
    <p>
      By submitting this form, I confirm that I have read and agree to
      <a href="#privacy">Canonical's Privacy Policy</a>.
    </p>
    <button type="submit" class="ow-btn-positive">Sign up</button>
  </form>
{/snippet}

<Story name="Section 25-75">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Section layout (25-75)</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <div class="grid gap-6 pt-4 lg:grid-cols-[1fr_3fr]">
              <h2 class="ow-heading-2">Newsletter signup</h2>
              <div class="grid gap-4">
                <p>Get the latest Ubuntu news and updates in your inbox.</p>
                {@render signupForm('newsletter-25-75')}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Two columns">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Grid layout (2-col)</p>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {#each promos as promo (promo.id)}
              <div class="grid content-start gap-2">
                <h5 class="ow-heading-5">{promo.heading}</h5>
                <p>{promo.body}</p>
                <a href="#learn-more">{promo.link}</a>
              </div>
            {/each}
            <div class="ow-newsletter-signup-2-col grid content-start gap-4">
              <hr class="ow-rule-muted md:hidden" />
              <h3 class="ow-heading-3">Newsletter signup</h3>
              <p>Get the latest Ubuntu news and updates in your inbox.</p>
              {@render signupForm('newsletter-2-col')}
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Single column">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Single column</p>
          <div class="grid max-w-md content-start gap-4">
            <hr class="ow-rule" />
            <h3 class="ow-heading-3">Newsletter signup</h3>
            <p>Get the latest Ubuntu news and updates in your inbox.</p>
            {@render signupForm('newsletter-single')}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
