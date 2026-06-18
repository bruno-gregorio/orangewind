<script lang="ts">
  // Global navigation header. Occupies the `header` grid area of the docs
  // layout. Links and branding come from $lib/site so they stay in one place.
  import { page } from '$app/state'
  import { site, primaryNav, externalLinks } from '$lib/site'

  const isActive = (href: string): boolean =>
    page.url.pathname === href || page.url.pathname.startsWith(`${href}/`)
</script>

<header class="ow-docs-header ow-navigation-reduced">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="/">
          <span class="ow-navigation-logo-tag">
            <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
          </span>
          <span class="ow-navigation-logo-title">
            {site.name}
            <span class="opacity-60">{site.tagline}</span>
          </span>
        </a>
      </div>
    </div>

    <nav class="ow-navigation-nav" aria-label="Main">
      <ul class="ow-navigation-items ow-is-right-shifted">
        {#each primaryNav as item (item.href)}
          <li
            class="ow-navigation-item"
            class:ow-is-selected={isActive(item.href)}
          >
            <a class="ow-navigation-link" href={item.href}>{item.label}</a>
          </li>
        {/each}
        {#each externalLinks as item (item.href)}
          <li class="ow-navigation-item">
            <a
              class="ow-navigation-link inline-flex items-center gap-2"
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              {#if item.icon}
                <i class="ow-icon-{item.icon}" aria-hidden="true"></i>
              {/if}
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
