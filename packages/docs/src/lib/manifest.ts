// The component manifest — the single source of truth for the documented
// components. It drives the side navigation, the per-page title shown in the
// docs layout, and (later) routing and next/prev pagination.
//
// Grouping mirrors the phases in DOCS-TODO.md / TODO.md. As each component page
// is built, flip its `status` from 'todo' to 'ready' so the side navigation
// turns it into a real link.

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

const entry = (
  slug: string,
  title: string,
  status: ComponentStatus = 'todo'
): ComponentEntry => ({ slug, title, status })

export const componentGroups: ComponentGroup[] = [
  {
    heading: 'Foundations & Utilities',
    items: [
      entry('typography', 'Typography'),
      entry('colors', 'Colors'),
      entry('animations', 'Animations'),
      entry('icons', 'Icons'),
      entry('baseline-grid', 'Baseline Grid'),
      entry('links', 'Links', 'ready'),
      entry('divider', 'Divider')
    ]
  },
  {
    heading: 'Basic Elements',
    items: [
      entry('buttons', 'Buttons', 'ready'),
      entry('badge', 'Badge', 'ready'),
      entry('status-label', 'Status Label'),
      entry('chip', 'Chip', 'ready'),
      entry('heading-icon', 'Heading & Muted Heading')
    ]
  },
  {
    heading: 'Forms & Inputs',
    items: [
      entry('forms', 'Forms'),
      entry('switch', 'Switch', 'ready'),
      entry('slider', 'Slider'),
      entry('segmented-control', 'Segmented Control'),
      entry('search-box', 'Search Box'),
      entry('search-and-filter', 'Search and Filter')
    ]
  },
  {
    heading: 'Intermediate Components',
    items: [
      entry('notifications', 'Notifications', 'ready'),
      entry('tooltips', 'Tooltips', 'ready'),
      entry('tabs', 'Tabs'),
      entry('breadcrumbs', 'Breadcrumbs'),
      entry('accordion', 'Accordion'),
      entry('pagination', 'Pagination'),
      entry('code-snippet', 'Code Snippet')
    ]
  },
  {
    heading: 'Complex Content',
    items: [
      entry('lists', 'Lists & List Tree'),
      entry('tables', 'Tables'),
      entry('matrix', 'Matrix'),
      entry('card', 'Card'),
      entry('content-card', 'Content Card'),
      entry('media-object', 'Media Object'),
      entry('quotes', 'Quotes')
    ]
  },
  {
    heading: 'Layout Patterns',
    items: [
      entry('strip', 'Strip & Section'),
      entry('divided-section', 'Divided Section'),
      entry('modal', 'Modal'),
      entry('contextual-menu', 'Contextual Menu'),
      entry('in-page-navigation', 'In-Page Navigation'),
      entry('feature-blocks', 'Feature Blocks'),
      entry('blog', 'Blog & Article'),
      entry('hero', 'Hero & Sections')
    ]
  },
  {
    heading: 'Application Scaffolding',
    items: [
      entry('navigation', 'Navigation'),
      entry('application', 'Application Layout'),
      entry('side-navigation', 'Side Navigation'),
      entry('docs-layout', 'Docs Layout'),
      entry('brochure', 'Brochure Site'),
      entry('suru', 'Suru'),
      entry('grid', 'Grid & Fluid Breakout')
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
  const match = allComponents.find(c => pathForComponent(c.slug) === pathname)
  return match?.title ?? 'Documentation'
}
