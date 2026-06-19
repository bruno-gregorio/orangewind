<script lang="ts">
  // Error page (DOCS-TODO Phase 5). Rendered by SvelteKit whenever a route
  // errors — most visibly a 404 for an unknown URL. Standalone like the home
  // page: it mounts the global Navigation and Footer itself (their `ow-docs-*`
  // grid classes are inert outside the docs grid).
  import { page } from '$app/state'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { site } from '$lib/site'

  // Friendly copy per status, falling back to a generic message.
  const heading = $derived(
    page.status === 404 ? 'Page not found' : 'Something went wrong'
  )
  const body = $derived(
    page.status === 404
      ? "The page you're looking for doesn't exist or may have moved."
      : (page.error?.message ?? 'An unexpected error occurred.')
  )
</script>

<svelte:head>
  <title>{page.status} · {site.name} {site.tagline}</title>
</svelte:head>

<a href="#main-content" class="ow-docs-skip-link">Skip to main content</a>

<div
  class="text-ow-text-default flex min-h-screen flex-col bg-white dark:bg-black"
>
  <Navigation />

  <main
    id="main-content"
    class="ow-strip grid flex-1 place-items-center"
    tabindex="-1"
  >
    <div class="max-w-xl px-6 text-center">
      <p class="mb-2 text-7xl font-bold opacity-20">{page.status}</p>
      <h1 class="ow-heading-1">{heading}</h1>
      <p class="text-ow-text-muted mb-6">{body}</p>
      <div class="flex flex-wrap justify-center gap-3">
        <a class="ow-btn-positive" href="/">Back to home</a>
        <a class="ow-btn-base" href="/docs">Browse the docs</a>
      </div>
    </div>
  </main>

  <Footer />
</div>
