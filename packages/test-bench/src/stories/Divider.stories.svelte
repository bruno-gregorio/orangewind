<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Rule (Divider)',
    argTypes: {
      type: {
        control: 'select',
        options: ['standard', 'muted', 'highlight'],
        description: 'The type of rule'
      },
      isAccent: {
        control: 'boolean',
        description: 'Use the accent color (only for highlight type)'
      },
      isDark: {
        control: 'boolean',
        description: 'Toggle dark mode for the container'
      }
    }
  })
</script>

<Story
  name="Rule (Divider)"
  args={{
    type: 'standard',
    isAccent: false,
    isDark: false
  }}
>
  {#snippet template(args)}
    <div
      class="p-10 max-w-2xl transition-colors duration-200"
      class:dark={args.isDark}
      class:bg-gray-900={args.isDark}
      class:text-white={args.isDark}
    >
      <h3 class="mb-4 text-xl font-bold capitalize">{args.type} Rule</h3>
      <p class="mb-8 text-gray-600 dark:text-gray-300">
        {#if args.type === 'standard'}
          The standard rule (<code>ow-rule</code>) is used to separate blocks of
          content vertically. It defaults to the standard border color defined
          by the theme.
        {:else if args.type === 'muted'}
          The muted rule (<code>ow-rule-muted</code>) uses a lower opacity. It
          is ideal for subtly grouping elements where a harsh line might be too
          distracting.
        {:else if args.type === 'highlight'}
          The highlight rule (<code>ow-rule-highlight</code>) features a thicker
          colored bar sitting directly on top of the base line.
          {#if args.isAccent}
            Combining it with <code>is-accent</code> creates a colorful bar using
            the brand's accent color.
          {/if}
        {/if}
      </p>

      <div class="space-y-4">
        <p>Section 1: Here is some introductory content.</p>
        <hr
          class:ow-rule={args.type === 'standard'}
          class:ow-rule-muted={args.type === 'muted'}
          class:ow-rule-highlight={args.type === 'highlight'}
          class:is-accent={args.type === 'highlight' && args.isAccent}
        />
        <p>Section 2: Content that is structurally separate from section 1.</p>
      </div>
    </div>
  {/snippet}
</Story>
