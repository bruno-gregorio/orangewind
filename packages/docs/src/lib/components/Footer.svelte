<script lang="ts">
  // Global footer. Occupies the `footer` grid area. Links come from $lib/site.
  import { site, externalLinks } from '$lib/site'
</script>

<footer
  class="ow-docs-footer ow-strip ow-is-shallow border-t border-ow-surface-border bg-ow-background-alt px-6"
>
  <div
    class="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4"
  >
    <p class="mb-0 text-sm opacity-75">
      © {site.name}. A Tailwind CSS reimplementation of Canonical's Vanilla
      Framework. Licensed under LGPL-3.0.
    </p>
    <ul class="m-0 flex list-none gap-4 p-0 text-sm">
      {#each externalLinks as link (link.href)}
        <li>
          <a
            class="inline-flex items-center gap-2"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {#if link.icon}
              <i class="ow-icon-{link.icon}" aria-hidden="true"></i>
            {/if}
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</footer>
