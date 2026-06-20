<script lang="ts">
  // Global navigation header. Occupies the `header` grid area of the docs
  // layout. Links and branding come from $lib/site so they stay in one place.
  import { page } from '$app/state'
  import { site, primaryNav, externalLinks } from '$lib/site'
  import { withBase, stripBase } from '$lib/paths'
  import Logo from '$lib/components/Logo.svelte'

  const isActive = (href: string): boolean => {
    const path = stripBase(page.url.pathname)
    return path === href || path.startsWith(`${href}/`)
  }
</script>

<header
  class="ow-docs-header ow-navigation-reduced border-b border-ow-surface-border bg-ow-background-alt"
>
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href={withBase('/')}>
          <span class="ow-navigation-logo-tag">
            <Logo variant="glyph" size={16} title={site.name} />
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
            <a class="ow-navigation-link" href={withBase(item.href)}
              >{item.label}</a
            >
          </li>
        {/each}
        {#each externalLinks as item (item.href)}
          <li class="ow-navigation-item">
            <a
              class="ow-navigation-link inline-flex items-center gap-2"
              href={item.external ? item.href : withBase(item.href)}
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
