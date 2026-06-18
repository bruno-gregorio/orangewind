import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Static prerendered docs site. See https://svelte.dev/docs/kit/adapter-static
    adapter: adapter(),
    prerender: {
      // Component demos contain illustrative anchors (href="#…") that point at
      // nothing real — they exist to show the markup, not to navigate. Downgrade
      // unresolved in-page hash fragments from a build error to a warning. This
      // only relaxes hash-fragment checking; real route/404 validation
      // (handleHttpError) stays strict.
      handleMissingId: 'warn'
    }
  }
}

export default config
