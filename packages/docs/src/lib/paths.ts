// Base-path helpers for GitHub Pages sub-path hosting.
//
// The docs deploy to https://<user>.github.io/orangewind/, so the production
// build is configured with `paths.base = '/orangewind'` (see svelte.config.js).
// SvelteKit does NOT rewrite hardcoded `href` strings, and at runtime
// `page.url.pathname` *includes* the base — but the routes in `manifest.ts` and
// `site.ts` are stored base-free, as the single source of truth.
//
// These two helpers translate at the edges: `withBase` when building an href,
// `stripBase` when comparing the current pathname against a manifest route.
// Both are no-ops when `base` is empty (dev, preview, root-hosted builds).
import { base } from '$app/paths'

/** Prefix an app-absolute route (one that starts with `/`) with the base path,
 *  for use as an `href`. `withBase('/docs')` → `/orangewind/docs`. */
export const withBase = (path: string): string => `${base}${path}`

/** Strip the base path off `page.url.pathname` so it can be compared against the
 *  base-free routes in the manifest. `stripBase('/orangewind/docs')` → `/docs`. */
export const stripBase = (pathname: string): string => {
  if (base === '' || !pathname.startsWith(base)) return pathname
  return pathname.slice(base.length) || '/'
}
