<script lang="ts">
  // Shared shell for every /docs page: the three-column Orangewind docs layout
  // (header, side nav, title, table of contents, content, footer). The six grid
  // slots must be direct children of `.ow-docs`, so the component roots
  // (Navigation/SideNav/Footer) carry the `ow-docs-*` area classes themselves.
  import { page } from '$app/state'
  import { titleForPath } from '$lib/manifest'
  import { stripBase } from '$lib/paths'
  import { site } from '$lib/site'
  import Navigation from '$lib/components/Navigation.svelte'
  import SideNav from '$lib/components/SideNav.svelte'
  import Toc from '$lib/components/Toc.svelte'
  import Footer from '$lib/components/Footer.svelte'

  const { children } = $props()
  const title = $derived(titleForPath(stripBase(page.url.pathname)))
</script>

<svelte:head>
  <title>{title} · {site.name} {site.tagline}</title>
</svelte:head>

<a href="#main-content" class="ow-docs-skip-link">Skip to main content</a>

<div class="ow-docs text-ow-text-default min-h-screen bg-white dark:bg-black">
  <Navigation />
  <SideNav />

  <!-- Skip-link target. tabindex=-1 lets keyboard focus land here (on the page
       heading) without adding it to the tab order. -->
  <div class="ow-docs-title" id="main-content" tabindex="-1">
    <div class="ow-strip ow-is-shallow px-6 pb-0">
      <h1 class="ow-heading-1 mb-0">{title}</h1>
      <hr class="ow-rule" />
    </div>
  </div>

  <div class="ow-docs-meta">
    <div class="ow-docs-sticky-container ow-strip ow-is-shallow px-6">
      <Toc />
    </div>
  </div>

  <div class="ow-docs-main">
    <div class="ow-section px-6">
      <main class="ow-docs-article max-w-3xl">
        {@render children()}
      </main>
    </div>
  </div>

  <Footer />
</div>
