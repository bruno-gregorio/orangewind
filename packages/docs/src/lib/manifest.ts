// The component manifest — the single source of truth for the documented
// components. It drives the side navigation, the per-page title shown in the
// docs layout, and (later) routing and next/prev pagination.
//
// Grouping mirrors the phases in DOCS-TODO.md / TODO.md. Each entry's `status`
// gates the side navigation: 'ready' renders a real link, 'todo' renders a
// muted, non-clickable item. A new component starts as 'todo' (the default) and
// flips to 'ready' once its page exists.

export type ComponentStatus = 'ready' | 'todo'

export type ComponentEntry = {
  /** URL slug under /docs/components and the component's id. */
  slug: string
  /** Human-readable title shown in the nav and as the page heading. */
  title: string
  /** 'ready' once a page exists; 'todo' renders as a muted, non-clickable item. */
  status: ComponentStatus
}

export type ComponentGroup = {
  heading: string
  items: ComponentEntry[]
}

export type GuideEntry = {
  /** Full route to the guide page. */
  path: string
  /** Human-readable title shown in the nav and as the page heading. */
  title: string
}

// The narrative guide pages (Phase 3). These sit above the component reference
// in the side navigation and walk the reader through installing, authoring and
// theming Orangewind before they reach the per-component pages.
export const guides: GuideEntry[] = [
  { path: '/docs/get-started', title: 'Get started' },
  { path: '/docs/markup-patterns', title: 'Markup patterns' },
  { path: '/docs/ui-patterns', title: 'UI patterns' }
]

const entry = (
  slug: string,
  title: string,
  status: ComponentStatus = 'todo'
): ComponentEntry => ({ slug, title, status })

export const componentGroups: ComponentGroup[] = [
  {
    heading: 'Foundations & Utilities',
    items: [
      entry('typography', 'Typography', 'ready'),
      entry('colors', 'Colors', 'ready'),
      entry('animations', 'Animations', 'ready'),
      entry('icons', 'Icons', 'ready'),
      entry('baseline-grid', 'Baseline Grid', 'ready'),
      entry('links', 'Links', 'ready'),
      entry('divider', 'Divider', 'ready')
    ]
  },
  {
    heading: 'Basic Elements',
    items: [
      entry('buttons', 'Buttons', 'ready'),
      entry('badge', 'Badge', 'ready'),
      entry('status-label', 'Status Label', 'ready'),
      entry('chip', 'Chip', 'ready'),
      entry('heading-icon', 'Heading & Muted Heading', 'ready')
    ]
  },
  {
    heading: 'Forms & Inputs',
    items: [
      entry('forms', 'Forms', 'ready'),
      entry('switch', 'Switch', 'ready'),
      entry('slider', 'Slider', 'ready'),
      entry('segmented-control', 'Segmented Control', 'ready'),
      entry('search-box', 'Search Box', 'ready'),
      entry('search-and-filter', 'Search and Filter', 'ready')
    ]
  },
  {
    heading: 'Intermediate Components',
    items: [
      entry('notifications', 'Notifications', 'ready'),
      entry('tooltips', 'Tooltips', 'ready'),
      entry('tabs', 'Tabs', 'ready'),
      entry('breadcrumbs', 'Breadcrumbs', 'ready'),
      entry('accordion', 'Accordion', 'ready'),
      entry('pagination', 'Pagination', 'ready'),
      entry('code-snippet', 'Code Snippet', 'ready')
    ]
  },
  {
    heading: 'Complex Content',
    items: [
      entry('lists', 'Lists & List Tree', 'ready'),
      entry('tables', 'Tables', 'ready'),
      entry('matrix', 'Matrix', 'ready'),
      entry('card', 'Card', 'ready'),
      entry('content-card', 'Content Card', 'ready'),
      entry('media-object', 'Media Object', 'ready'),
      entry('quotes', 'Quotes', 'ready')
    ]
  },
  {
    heading: 'Layout Patterns',
    items: [
      entry('strip', 'Strip & Section', 'ready'),
      entry('divided-section', 'Divided Section', 'ready'),
      entry('modal', 'Modal', 'ready'),
      entry('contextual-menu', 'Contextual Menu', 'ready'),
      entry('in-page-navigation', 'In-Page Navigation', 'ready'),
      entry('feature-blocks', 'Feature Blocks', 'ready'),
      entry('blog', 'Blog & Article', 'ready'),
      entry('hero', 'Hero & Sections', 'ready')
    ]
  },
  {
    heading: 'Application Scaffolding',
    items: [
      entry('navigation', 'Navigation', 'ready'),
      entry('application', 'Application Layout', 'ready'),
      entry('side-navigation', 'Side Navigation', 'ready'),
      entry('docs-layout', 'Docs Layout', 'ready'),
      entry('brochure', 'Brochure Site', 'ready'),
      entry('suru', 'Suru', 'ready'),
      entry('grid', 'Grid & Fluid Breakout', 'ready')
    ]
  }
]

/** Base path for component documentation pages. */
export const componentsBasePath = '/docs/components'

/** Build the route for a component slug. */
export const pathForComponent = (slug: string): string =>
  `${componentsBasePath}/${slug}`

/** Flat list of every component, in nav order. */
export const allComponents: ComponentEntry[] = componentGroups.flatMap(
  group => group.items
)

/**
 * Resolve the page title for a docs route from the manifest, so pages don't
 * each have to declare their own title for the layout's title bar.
 */
export function titleForPath(pathname: string): string {
  if (pathname === componentsBasePath) return 'Components'
  if (pathname === '/docs') return 'Documentation'
  const guide = guides.find(g => g.path === pathname)
  if (guide) return guide.title
  const match = allComponents.find(c => pathForComponent(c.slug) === pathname)
  return match?.title ?? 'Documentation'
}
