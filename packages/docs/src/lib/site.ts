// Site-wide configuration for the Orangewind documentation.
//
// Edit this file to change the metadata and links shown across the site —
// the navigation header, the footer, and page <meta> tags all read from here.
// It is the single source of truth for site links so they never drift apart.

export type NavLink = {
  /** Text shown for the link. */
  label: string
  /** Destination. Internal links start with `/`; external links are full URLs. */
  href: string
  /**
   * Optional Orangewind icon, given without the `ow-icon-` prefix.
   * e.g. `'github'` renders the `ow-icon-github` glyph. See icons.css for the
   * full set.
   */
  icon?: string
  /** Set for links that leave the docs site (opens in a new tab, rel=noopener). */
  external?: boolean
}

/** Canonical source repository — referenced by the GitHub link and the footer. */
export const repoUrl = 'https://github.com/bruno-gregorio/orangewind'

/** Core site metadata. */
export const site = {
  name: 'Orangewind',
  tagline: 'Docs',
  description:
    "Canonical's Vanilla Framework, re-implemented as a Tailwind CSS plugin."
}

/** Primary links shown in the main navigation header. */
export const primaryNav: NavLink[] = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/docs/components' }
]

/**
 * External / utility links. Shown on the right of the navigation header and in
 * the footer. Add more entries here (Discord, Matrix, npm, …) as needed.
 */
export const externalLinks: NavLink[] = [
  { label: 'GitHub', href: repoUrl, icon: 'github', external: true }
]
