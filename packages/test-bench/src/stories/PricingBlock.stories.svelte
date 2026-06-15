<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/Pricing Block',
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

  type Offering = {
    included: boolean
    text: string
  }

  type Tier = {
    description?: string
    explanation: string
    id: string
    name: string
    offerings: Offering[]
    price: string
  }
</script>

<script lang="ts">
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const baseOfferings: Offering[] = [
    { included: true, text: 'High availability' },
    { included: true, text: 'Public clouds, VMware, OpenStack' },
    { included: true, text: 'Storage and SDN basic options' },
    { included: true, text: 'Logging, monitoring, alerting' },
    { included: true, text: 'Kubernetes lifecycle management' },
    { included: false, text: 'Support or Fully Managed' },
    { included: false, text: 'Third-party integrations' },
    { included: false, text: 'GPU acceleration' }
  ]

  function makeTier(id: string, name: string, description?: string): Tier {
    return {
      description,
      explanation: 'per year, per VM',
      id,
      name,
      offerings: baseOfferings,
      price: '$3099'
    }
  }

  const fourTiers: Tier[] = [
    makeTier('explorer', 'Kubernetes Explorer', 'Ramp up your team’s skills.'),
    makeTier(
      'builder',
      'Kubernetes Builder',
      'Build and ship with confidence.'
    ),
    makeTier('operator', 'Kubernetes Operator', 'Run production at scale.'),
    makeTier('partner', 'Kubernetes Partner', 'Fully managed by Canonical.')
  ]

  const threeTiers: Tier[] = fourTiers.slice(0, 3)
  const twoTiers: Tier[] = fourTiers.slice(0, 2)

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

{#snippet tier(item: Tier)}
  <div class="ow-pricing-block-tier">
    <div class="ow-pricing-block-section">
      <h3 class="ow-heading-4">
        {item.name}<br />
        <strong>{item.price}</strong>
        <span class="opacity-60">{item.explanation}</span>
      </h3>
    </div>
    <div class="ow-pricing-block-section">
      {#if item.description}<p>{item.description}</p>{/if}
    </div>
    <div class="ow-pricing-block-section">
      <p class="opacity-60">What's included</p>
      <hr class="ow-rule-muted" />
      <ul class="ow-list-divided">
        {#each item.offerings as offering (offering.text)}
          <li
            class={`ow-list-item ${offering.included ? 'ow-is-ticked' : 'ow-is-crossed opacity-60'}`}
          >
            {#if !offering.included}<span class="sr-only">
                Does not include
              </span>{/if}{offering.text}
          </li>
        {/each}
      </ul>
    </div>
    <div class="ow-pricing-block-section">
      <a class="ow-btn-positive" href="#pricing">Get started</a>
    </div>
  </div>
{/snippet}

<Story name="Pricing Block">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Four tiers</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <h2 class="ow-heading-2 pt-4">Kubernetes pricing</h2>
            <div class="ow-pricing-block pt-4">
              {#each fourTiers as item (item.id)}
                {@render tier(item)}
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Three tiers (25-75)</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <h2 class="ow-heading-2 pt-4">Kubernetes pricing</h2>
            <div class="ow-pricing-block-25-75 pt-4">
              {#each threeTiers as item (item.id)}
                {@render tier(item)}
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Two tiers (50-50)</p>
          <div class="ow-section">
            <hr class="ow-rule ow-is-fixed-width" />
            <h2 class="ow-heading-2 pt-4">Kubernetes pricing</h2>
            <div class="ow-pricing-block-50-50 pt-4">
              {#each twoTiers as item (item.id)}
                {@render tier(item)}
              {/each}
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
