# Orangewind Implementation Roadmap (TODO)

To avoid circular dependencies and ensure a smooth build process, the missing components from Canonical's Vanilla framework have been organized into hierarchical implementation phases. You should generally complete the items in **Phase 1** before moving to **Phase 2**, and so forth, as later components heavily rely on earlier ones.

Features that are inherently covered by base Tailwind CSS (e.g., standard layout grids, flexbox, defaults) or are already in your `src/utilities` (Animations, Theme Colors, Typography) have been omitted.

---

## Phase 1: Foundations & Utilities

_These are the lowest-level primitives. They don't depend on any other components and are used frequently by everything else._

- [x] [Icons](https://vanillaframework.io/docs/patterns/icons)
      _Dependency for: Buttons, Navigation, Notifications, Forms, etc. Needs to be established first natively (e.g., SVGs or mask-images)._
- [x] [Baseline Grid](https://vanillaframework.io/docs/utilities/baseline-grid) & Font Metrics
      _Dependency for: Article, Docs layout, basically all typography snapping._
- [x] [Links](https://vanillaframework.io/docs/patterns/links)
      _Dependency for: Breadcrumbs, Navigation, Lists._
- [x] [Divider](https://vanillaframework.io/docs/patterns/divider) (Rule)
      _Dependency for: Divided Section, Navigation, Application Layouts._

---

## Phase 2: Basic Elements

_Simple, single-node elements that are widely nested inside larger structures._

- [ ] [Buttons](https://vanillaframework.io/docs/patterns/buttons)
      _Dependency for: Forms, Modal, CTA, Newsletter, Navigation, Search. Massive dependency._
- [ ] [Badge](https://vanillaframework.io/docs/patterns/badge)
      _Dependency for: Navigation, Cards, Tables._
- [ ] [Status Label](https://vanillaframework.io/docs/patterns/status-label)
      _Dependency for: Tables, Matrix, Lists._
- [ ] [Chip](https://vanillaframework.io/docs/patterns/chip)
      _Dependency for: Search and Filter, Forms._
- [ ] [Heading Icon](https://vanillaframework.io/docs/patterns/heading-icon) & [Muted Heading](https://vanillaframework.io/docs/patterns/muted-heading)
      _Dependency for: Section Pattern, Cards, Modal headers._

---

## Phase 3: Forms & Inputs

_Interactive elements that require Phase 1 rules and Buttons to be complete._

- [ ] [Forms](https://vanillaframework.io/docs/patterns/forms) (Base Inputs, Textareas, Checkboxes, Radios, Validation)
      _Dependency for: Search Box, Newsletter, Auth pages, Settings pages._
- [ ] [Switch](https://vanillaframework.io/docs/patterns/switch)
      _Dependency for: Forms, Application Panels._
- [ ] [Slider](https://vanillaframework.io/docs/patterns/slider)
      _Dependency for: Forms, specific Filter setups._
- [ ] [Segmented Control](https://vanillaframework.io/docs/patterns/segmented-control)
      _Dependency for: Navigation, Data Filtering view toggles._
- [ ] [Search Box](https://vanillaframework.io/docs/patterns/search-box)
      _Dependency for: Global Navigation, Search and Filter._

---

## Phase 4: Intermediate Components

_Components that rely entirely on the primitives from Phases 1-3 being complete._

- [ ] [Notifications](https://vanillaframework.io/docs/patterns/notifications) (Requires Icons, Buttons)
- [ ] [Tooltips](https://vanillaframework.io/docs/patterns/tooltips) (Requires Typography, Z-index handling)
- [ ] [Tabs](https://vanillaframework.io/docs/patterns/tabs) (Requires Typography, Links)
- [ ] [Breadcrumbs](https://vanillaframework.io/docs/patterns/breadcrumbs) (Requires Links)
- [ ] [Accordion](https://vanillaframework.io/docs/patterns/accordion) (Requires Icons, Typography)
- [ ] [Pagination](https://vanillaframework.io/docs/patterns/pagination) (Requires Buttons, Links)
- [ ] [Code Snippet](https://vanillaframework.io/docs/patterns/code-snippet) (Requires Typography, Buttons for 'Copy')

---

## Phase 5: Complex Content Blocks

_Larger data presentation blocks that nest multiple basic elements together._

- [ ] [Lists](https://vanillaframework.io/docs/patterns/lists) & [List Tree](https://vanillaframework.io/docs/patterns/list-tree)
- [ ] [Tables](https://vanillaframework.io/docs/patterns/tables) (Requires Icons, Buttons, Status Labels, Pagination)
- [ ] [Matrix](https://vanillaframework.io/docs/patterns/matrix)
- [ ] [Card](https://vanillaframework.io/docs/patterns/card) (Requires Typography, Links, Buttons)
- [ ] [Media Object](https://vanillaframework.io/docs/patterns/media-object) / [Image Pattern](https://vanillaframework.io/docs/patterns/image)
- [ ] [Quotes](https://vanillaframework.io/docs/patterns/quotes) & Pull Quotes

---

## Phase 6: Layout Components & Patterns

_Full-width or macro-layout elements that frame content from previous phases._

- [ ] [Strip](https://vanillaframework.io/docs/patterns/strip) & [Section Pattern](https://vanillaframework.io/docs/patterns/section)
      _Note: These establish the light/dark thematic wrappers for everything inside them._
- [ ] Divided Section (Requires Strip, Divider)
- [ ] [Modal](https://vanillaframework.io/docs/patterns/modal) (Requires Buttons, Forms, Typography)
- [ ] [Contextual Menu](https://vanillaframework.io/docs/patterns/contextual-menu) (Requires Buttons, Lists, Links)
- [ ] [In-Page Navigation](https://vanillaframework.io/docs/patterns/in-page-navigation) & [Table of Contents](https://vanillaframework.io/docs/patterns/table-of-contents)
- [ ] Feature Blocks: [Pricing Block](https://vanillaframework.io/docs/patterns/pricing-block), [Resources Block](https://vanillaframework.io/docs/patterns/resources-block), [Logo Section](https://vanillaframework.io/docs/patterns/logo-section), [CTA](https://vanillaframework.io/docs/patterns/cta), [Data Spotlight](https://vanillaframework.io/docs/patterns/data-spotlight), [Newsletter Signup](https://vanillaframework.io/docs/patterns/newsletter-signup)
- [ ] [Blog Pattern](https://vanillaframework.io/docs/patterns/blog) & [Article](https://vanillaframework.io/docs/patterns/article)

---

## Phase 7: Application Scaffolding

_The highest level wrappers. These define the entire shell of the page._

- [ ] [Navigation](https://vanillaframework.io/docs/patterns/navigation)
      _Note: The global header. Requires Icons, Links, Forms (Search), Buttons, and responsive toggles._
- [ ] [Application Layout](https://vanillaframework.io/docs/layouts/application) & [Application Panels](https://vanillaframework.io/docs/layouts/application-panels)
      _Note: Standard app shell with side-nav and drawers._
- [ ] [Docs Layout](https://vanillaframework.io/docs/layouts/docs)
      _Note: Three-column layout for documentation pages._
- [ ] [Suru](https://vanillaframework.io/docs/patterns/suru) (Canonical's signature background visual element)
- [ ] Layout tweaks: [Fluid Breakout](https://vanillaframework.io/docs/layouts/fluid-breakout), [Grid 8](https://vanillaframework.io/docs/rules/grid)
