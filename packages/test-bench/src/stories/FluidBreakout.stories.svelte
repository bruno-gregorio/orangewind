<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Layouts/Fluid Breakout',
    parameters: {
      layout: 'fullscreen'
    },
    args: {
      dark: false
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      }
    }
  })
</script>

<script lang="ts">
  type StoryArgs = {
    dark?: boolean
  }

  const cards = Array.from({ length: 8 }, (_, index) => index + 1)

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

{#snippet card(index: number)}
  <article
    class="ow-fluid-breakout-item flex min-h-32 flex-col gap-2 rounded p-4"
    style="background: color-mix(in srgb, currentColor 8%, transparent)"
  >
    <h3 class="ow-heading-5"><strong>Card {index}</strong></h3>
    <p class="text-sm opacity-70">
      Cards auto-fill the main area, fitting more across the page than the
      regular grid would allow.
    </p>
  </article>
{/snippet}

<!-- Left aside and a toolbar above a wall of auto-filled cards. The main area
     spans the centre column and the right aside. -->
<Story name="Left aside & toolbar">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="ow-fluid-breakout">
        <div class="ow-fluid-breakout-toolbar">
          <div class="ow-fluid-breakout-toolbar-items">
            <div class="ow-fluid-breakout-toolbar-item">
              <h2 class="ow-heading-4"><strong>Breakout cards</strong></h2>
            </div>
            <div class="ow-fluid-breakout-toolbar-item">
              <button class="ow-btn ow-btn-positive">New card</button>
            </div>
          </div>
        </div>

        <aside
          class="ow-fluid-breakout-aside flex flex-col gap-3 rounded p-4"
          style="background: color-mix(in srgb, currentColor 6%, transparent)"
        >
          <h2 class="ow-muted-heading">Filters</h2>
          <ul class="flex flex-col gap-2 text-sm">
            <li><a href="#all" class="ow-link">All cards</a></li>
            <li><a href="#recent" class="ow-link">Recently added</a></li>
            <li><a href="#archived" class="ow-link">Archived</a></li>
          </ul>
        </aside>

        <div class="ow-fluid-breakout-main">
          {#each cards as index (index)}
            {@render card(index)}
          {/each}
        </div>
      </div>
    </div>
  {/snippet}
</Story>

<!-- No aside: the main area spans all three columns with `.is-full-width`,
     useful for a wide table or chart that would otherwise be truncated. -->
<Story name="Full width">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="ow-fluid-breakout">
        <div class="ow-fluid-breakout-main is-full-width">
          {#each cards as index (index)}
            {@render card(index)}
          {/each}
        </div>
      </div>
    </div>
  {/snippet}
</Story>
