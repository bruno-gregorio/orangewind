import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Static prerendered docs site. See https://svelte.dev/docs/kit/adapter-static
    adapter: adapter()
  }
}

export default config
