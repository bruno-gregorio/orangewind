<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Application Layouts/Text Spotlight',
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

  // The pattern expects between 2 and 7 statements.
  const statements: string[] = [
    'Every layer is open source, from the kernel to the control plane.',
    'One operations model spans cloud, data center and edge.',
    'A ten year security maintenance commitment backs each release.'
  ]

  const smallStatements: string[] = [
    'Predictable, time based releases.',
    'Commercial support when you need it.',
    'A consistent toolkit across the estate.'
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

{#snippet spotlight(title: string, items: string[], headingClass: string)}
  <section class="ow-section">
    <hr class="ow-rule ow-is-fixed-width" />
    <div class="grid gap-6 lg:grid-cols-4">
      <div class="lg:col-span-1">
        <h2 class="ow-text-small-caps">{title}</h2>
      </div>
      <div class="lg:col-span-3">
        {#each items as item, index (item)}
          <p class={headingClass}>{item}</p>
          {#if index < items.length - 1}
            <hr class="ow-rule-muted" />
          {/if}
        {/each}
      </div>
    </div>
  </section>
{/snippet}

<Story name="Text Spotlight">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-10 px-6">
        <section class="grid gap-4">
          <p class={sectionTitleClass}>Large statements</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            {@render spotlight('Why Ubuntu', statements, 'ow-heading-2')}
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionTitleClass}>Small statements</p>
          <div class="bg-white px-6 dark:bg-zinc-900">
            {@render spotlight('At a glance', smallStatements, 'ow-heading-4')}
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
