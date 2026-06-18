<script lang="ts">
  // Global footer. Occupies the `footer` grid area. Links come from $lib/site.
  import { site, externalLinks } from '$lib/site'
</script>

<footer class="ow-docs-footer ow-strip-highlighted ow-is-shallow px-6">
  <div class="flex flex-wrap items-center justify-between gap-4">
    <p class="mb-0 text-sm opacity-75">
      © {site.name}. A Tailwind CSS reimplementation of Canonical's Vanilla
      Framework. Licensed under LGPL-3.0.
    </p>
    <ul class="flex list-none gap-4 text-sm">
      {#each externalLinks as link (link.href)}
        <li>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>
