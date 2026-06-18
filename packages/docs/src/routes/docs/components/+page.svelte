<script lang="ts">
  import { componentGroups, pathForComponent } from '$lib/manifest'
</script>

<p>
  Every component below is documented with a live demonstration, its markup, and
  the variants it supports. Components still in progress are listed in grey.
</p>

{#each componentGroups as group (group.heading)}
  <section class="grid gap-3">
    <h2
      id={group.heading.toLowerCase().replace(/[^a-z]+/g, '-')}
      class="ow-heading-2"
    >
      {group.heading}
    </h2>
    <ul class="grid gap-1 sm:grid-cols-2">
      {#each group.items as item (item.slug)}
        <li>
          {#if item.status === 'ready'}
            <a href={pathForComponent(item.slug)}>{item.title}</a>
          {:else}
            <span class="opacity-40" title="Coming soon">{item.title}</span>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
{/each}
