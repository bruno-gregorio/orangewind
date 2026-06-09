<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Pricing Block',
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

  type Feature = {
    included: boolean
    label: string
  }

  type Tier = {
    cadence: string
    cta: string
    features: Feature[]
    name: string
    price: string
  }

  const tiers: Tier[] = [
    {
      cadence: 'free forever',
      cta: 'Get started',
      features: [
        { included: true, label: 'Up to 3 projects' },
        { included: true, label: 'Community support' },
        { included: false, label: 'Usage analytics' },
        { included: false, label: 'SSO & audit logs' }
      ],
      name: 'Community',
      price: '$0'
    },
    {
      cadence: 'per user / month',
      cta: 'Start free trial',
      features: [
        { included: true, label: 'Unlimited projects' },
        { included: true, label: 'Email support' },
        { included: true, label: 'Usage analytics' },
        { included: false, label: 'SSO & audit logs' }
      ],
      name: 'Team',
      price: '$15'
    },
    {
      cadence: 'per user / month',
      cta: 'Start free trial',
      features: [
        { included: true, label: 'Unlimited projects' },
        { included: true, label: 'Priority support' },
        { included: true, label: 'Usage analytics' },
        { included: true, label: 'SSO & audit logs' }
      ],
      name: 'Business',
      price: '$45'
    },
    {
      cadence: 'tailored to you',
      cta: 'Contact us',
      features: [
        { included: true, label: 'Everything in Business' },
        { included: true, label: 'Dedicated success manager' },
        { included: true, label: 'Custom SLAs' },
        { included: true, label: 'On-premise option' }
      ],
      name: 'Enterprise',
      price: 'Custom'
    }
  ]

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

<Story name="Pricing Block">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Four tiers</p>

          <div class="ow-pricing-block">
            {#each tiers as tier (tier.name)}
              <div class="ow-pricing-block-tier">
                <div class="ow-card-highlighted">
                  <div class="ow-pricing-block-section">
                    <h3 class="ow-heading-5">{tier.name}</h3>
                    <p class="ow-heading-2">
                      {tier.price}
                      <span class="text-base opacity-70">{tier.cadence}</span>
                    </p>
                  </div>

                  <div class="ow-pricing-block-section">
                    <p class="opacity-70">What's included</p>
                    <hr class="ow-rule-muted" />
                    <ul class="ow-list-divided">
                      {#each tier.features as feature (feature.label)}
                        <li
                          class={[
                            'ow-list-item',
                            feature.included ? 'ow-is-ticked' : 'ow-is-crossed'
                          ]}
                        >
                          {#if !feature.included}
                            <span class="sr-only">Not included: </span>
                          {/if}
                          {feature.label}
                        </li>
                      {/each}
                    </ul>
                  </div>

                  <div class="ow-pricing-block-cta">
                    <a
                      class="ow-btn ow-btn-positive"
                      href="#pricing"
                      onclick={preventDefault}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Two tiers — 50/50 split</p>

          <div class="ow-pricing-block-50-50">
            {#each tiers.slice(0, 2) as tier (tier.name)}
              <div class="ow-pricing-block-tier">
                <div class="ow-card-highlighted">
                  <div class="ow-pricing-block-section">
                    <h3 class="ow-heading-5">{tier.name}</h3>
                    <p class="ow-heading-2">
                      {tier.price}
                      <span class="text-base opacity-70">{tier.cadence}</span>
                    </p>
                  </div>
                  <div class="ow-pricing-block-cta">
                    <a
                      class="ow-btn ow-btn-positive"
                      href="#pricing"
                      onclick={preventDefault}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>
            Three tiers — 25/75 split (leading column offset)
          </p>

          <div class="ow-pricing-block-25-75">
            {#each tiers.slice(1, 4) as tier (tier.name)}
              <div class="ow-pricing-block-tier">
                <div class="ow-card-highlighted">
                  <div class="ow-pricing-block-section">
                    <h3 class="ow-heading-5">{tier.name}</h3>
                    <p class="ow-heading-2">
                      {tier.price}
                      <span class="text-base opacity-70">{tier.cadence}</span>
                    </p>
                  </div>
                  <div class="ow-pricing-block-cta">
                    <a
                      class="ow-btn ow-btn-positive"
                      href="#pricing"
                      onclick={preventDefault}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
