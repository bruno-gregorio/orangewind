<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Links',
    argTypes: {
      type: {
        control: 'select',
        options: [
          'standard',
          'soft',
          'inverted',
          'top',
          'anchor-heading',
          'skip'
        ],
        description: 'The style of the link'
      },
      text: {
        control: 'text',
        description: 'The text of the link'
      },
      isDark: {
        control: 'boolean',
        description: 'Toggle dark mode for the container'
      }
    }
  })
</script>

<Story
  name="Links"
  args={{
    type: 'standard',
    text: 'Link Example',
    isDark: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args.isDark}
      class="p-10 max-w-2xl transition-colors duration-200 rounded-md"
      class:bg-gray-900={args.isDark}
      class:text-white={args.isDark}
    >
      <h3 class="mb-4 text-xl font-bold capitalize">
        {args.type.replace('-', ' ')} Link
      </h3>

      <div class="space-y-6">
        {#if args.type === 'standard'}
          <p>
            This is a <a href="#/" on:click={e => e.preventDefault()}
              >{args.text}</a
            > inside some text.
          </p>
        {:else if args.type === 'soft'}
          <p>
            <a href="#/" class="ow-link-soft" on:click={e => e.preventDefault()}
              >{args.text}</a
            >
          </p>
        {:else if args.type === 'inverted'}
          <p>
            <a
              href="#/"
              class="ow-link-inverted"
              on:click={e => e.preventDefault()}>{args.text}</a
            >
          </p>
        {:else if args.type === 'top'}
          <div class="ow-top">
            <a href="#/" class="ow-top-link" on:click={e => e.preventDefault()}
              >Back to top</a
            >
          </div>
        {:else if args.type === 'anchor-heading'}
          <h3 class="text-2xl font-bold">
            <a
              href="#/"
              class="ow-link-anchor-heading"
              on:click={e => e.preventDefault()}
            >
              {args.text}
            </a>
          </h3>
        {:else if args.type === 'skip'}
          <p class="text-sm text-gray-500">
            Use the <b>Tab</b> key to focus the invisible skip link.
          </p>
          <a href="#/" class="ow-link-skip" on:click={e => e.preventDefault()}>
            Skip to main content
          </a>
          <a
            href="#/"
            class="underline"
            tabindex="0"
            on:click={e => e.preventDefault()}
          >
            Focus me first, then Tab again
          </a>
        {/if}
      </div>
    </div>
  {/snippet}
</Story>
