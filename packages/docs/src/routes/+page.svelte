<script lang="ts">
  // Home / landing page (DOCS-TODO Phase 3). A standalone page (the root layout
  // has no docs shell), so it mounts the global Navigation and Footer itself —
  // their `ow-docs-*` grid-area classes are inert outside the docs grid. The
  // hero rides a `suru` background; quick links lead into the guides, the
  // component reference and the repository.
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { site, repoUrl } from '$lib/site'

  const features = [
    {
      icon: 'switcher-environments',
      title: 'A Tailwind v4 plugin',
      body: "Vanilla Framework re-implemented as a Tailwind plugin — it reuses Tailwind's native utilities instead of duplicating them."
    },
    {
      icon: 'starred',
      title: 'Vanilla parity',
      body: "Faithful ports of Vanilla's components — buttons, forms, navigation, heroes, suru and more — under a single ow- prefix."
    },
    {
      icon: 'code',
      title: 'Class-based markup',
      body: 'Plain HTML with ow- component classes. No required JavaScript, single-dash kebab-case names, composes with raw Tailwind.'
    },
    {
      icon: 'settings',
      title: 'Automatic dark mode',
      body: "Theming runs through CSS variables flipped by Tailwind's dark variant, so the framework follows the OS theme with no toggle."
    }
  ]
</script>

<svelte:head>
  <title>{site.name} · {site.description}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<a href="#main-content" class="ow-docs-skip-link">Skip to main content</a>

<div class="text-ow-text-default min-h-screen bg-white dark:bg-black">
  <Navigation />

  <main id="main-content" tabindex="-1">
    <div class="overflow-hidden">
      <div class="ow-suru-25-75">
        <div class="mx-auto grid max-w-5xl gap-6 px-6">
          <h1 class="ow-heading-1 mb-0 max-w-3xl">{site.name}</h1>
          <p class="ow-heading-4 m-0 max-w-2xl">
            Canonical's Vanilla Framework, re-implemented as a Tailwind CSS v4
            plugin — and these docs are built with it.
          </p>
          <p class="m-0 max-w-2xl">
            Orangewind brings Vanilla's component set to Tailwind projects as a
            set of <code>ow-</code> classes, reusing Tailwind's utilities, theme and
            dark variant rather than duplicating them.
          </p>
          <div class="ow-cta-block flex flex-wrap gap-3 pb-0">
            <a class="ow-btn-positive ow-has-icon" href="/docs/get-started">
              <i class="ow-icon-begin-downloading" aria-hidden="true"></i>
              <span>Get started</span>
            </a>
            <a class="ow-btn" href="/docs/components">Browse components</a>
            <a
              class="ow-btn-base ow-has-icon"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ow-icon-external-link" aria-hidden="true"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <section class="ow-strip">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="ow-heading-2">Why Orangewind</h2>
        <div class="grid gap-3 pt-2 sm:grid-cols-2">
          {#each features as feature (feature.title)}
            <div class="ow-card">
              <h3 class="ow-heading-5 ow-has-icon">
                <i class="ow-icon-{feature.icon}" aria-hidden="true"></i>
                <span>{feature.title}</span>
              </h3>
              <p class="m-0">{feature.body}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section class="ow-strip ow-is-shallow">
      <div class="mx-auto grid max-w-5xl gap-4 px-6">
        <hr class="ow-rule" />
        <div class="grid gap-3 lg:grid-cols-3">
          <a class="ow-card" href="/docs/get-started">
            <h3 class="ow-heading-5">Get started</h3>
            <p class="m-0">Install Orangewind and import the stylesheet.</p>
          </a>
          <a class="ow-card" href="/docs/markup-patterns">
            <h3 class="ow-heading-5">Markup patterns</h3>
            <p class="m-0">
              How to author the class markup the framework expects.
            </p>
          </a>
          <a class="ow-card" href="/docs/ui-patterns">
            <h3 class="ow-heading-5">UI patterns</h3>
            <p class="m-0">Theming, dark mode, breakpoints and spacing.</p>
          </a>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>
