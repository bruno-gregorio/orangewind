import adapter from '@sveltejs/adapter-static'

// Empty unless deploying to a GitHub Pages sub-path (set by scripts/deploy-docs.sh).
const base = process.env.BASE_PATH ?? '/orangewind'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Static prerendered docs site. See https://svelte.dev/docs/kit/adapter-static
    // `fallback` emits a 404.html shell: every real route is still prerendered,
    // but static hosts serve this page for unknown paths, where the client
    // router then renders `+error.svelte` (our themed 404). See
    // https://svelte.dev/docs/kit/adapter-static#options-fallback
    adapter: adapter({ fallback: '404.html' }),
    // GitHub Pages serves this project site from a sub-path
    // (https://<user>.github.io/orangewind/), so the whole app is built under
    // that base. `scripts/deploy-docs.sh` sets `BASE_PATH=/orangewind`; dev and
    // preview leave it unset and serve from the root. Every internal link must
    // therefore resolve through `base` from `$app/paths`.
    paths: { base },
    prerender: {
      // Component demos contain illustrative anchors (href="#…") that point at
      // nothing real — they exist to show the markup, not to navigate. Downgrade
      // unresolved in-page hash fragments from a build error to a warning. This
      // only relaxes hash-fragment checking; real route/404 validation
      // (handleHttpError) stays strict, which keeps any internal link that
      // forgot to go through `withBase` (see paths.ts) a hard build error.
      handleMissingId: 'warn'
    }
  }
}

export default config
