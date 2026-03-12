# Orangewind TODO

The following is a curated list of components, layouts, and utilities from Canonical's Vanilla framework that need to be re-implemented as Tailwind plugins or CSS components in the `orangewind` theme.

Features that are inherently covered by base Tailwind CSS (e.g., standard layout grids, flexbox, clearfix, floats, text alignment, truncation, typography max-widths, sizing, and margin collapsing like `space-y-*`) have been excluded from this list to avoid duplication. The features already present in `packages/orangewind/src/utilities` (Animations, Theme Colors, Headings/Typography Definitions) have also been excluded.

## Components

- [ ] [Accordion](https://vanillaframework.io/docs/patterns/accordion)
      _Note: Needs a Tailwind plugin/component for the collapsible nature, headers, and panels._
- [ ] [Article](https://vanillaframework.io/docs/patterns/article) & Article Pagination
      _Note: Handles specific typographical rhythms and borders for blog posts or documentation articles._
- [ ] [Badge](https://vanillaframework.io/docs/patterns/badge)
      _Note: Small status indicators often placed inside other elements, not just standalone pills._
- [ ] [Blog Pattern](https://vanillaframework.io/docs/patterns/blog)
      _Note: Specific layouts for blog article cards and listings, distinct from standard cards._
- [ ] [Breadcrumbs](https://vanillaframework.io/docs/patterns/breadcrumbs)
      _Note: Navigation trail with specific separator icons and line-wrapping behaviors._
- [ ] [Buttons](https://vanillaframework.io/docs/patterns/buttons)
      _Note: Includes primary, positive, negative, base, and inline button styles with focus states._
- [ ] [Card](https://vanillaframework.io/docs/patterns/card)
      _Note: Highlighting bordered containers with specific padding and highlighted top borders._
- [ ] [Chip](https://vanillaframework.io/docs/patterns/chip)
      _Note: Used for tags or dismissible selections, with leading/trailing icon support._
- [ ] [Code Snippet](https://vanillaframework.io/docs/patterns/code-snippet)
      _Note: Blocks with copy-to-clipboard functionality and numbered lines (often requires JS)._
- [ ] [Contextual Menu](https://vanillaframework.io/docs/patterns/contextual-menu)
      _Note: Dropdown menus usually attached to a button or icon._
- [ ] [CTA (Call to Action)](https://vanillaframework.io/docs/patterns/cta)
      _Note: Highlighted blocks to grab user attention, usually integrating a button and text._
- [ ] [Divider](https://vanillaframework.io/docs/patterns/divider) & Divided Section
      _Note: Thematic horizontal rules with specific margins separating major content blocks._
- [ ] [Forms](https://vanillaframework.io/docs/patterns/forms)
      _Note: Highly specific styles for inputs, textareas, checkboxes, radios, help text, and validation states (error, success)._
- [ ] [Heading Icon](https://vanillaframework.io/docs/patterns/heading-icon) & [Muted Heading](https://vanillaframework.io/docs/patterns/muted-heading)
      _Note: Specific alignment for icons paired with headings, and subdued typography for sub-headings._
- [ ] [Icons](https://vanillaframework.io/docs/patterns/icons)
      _Note: Implementing Vanilla's specific icon set natively (e.g., through SVGs or mask-image classes)._
- [ ] [Image Pattern](https://vanillaframework.io/docs/patterns/image)
      _Note: Bordered or shadowed image wrappers with captions._
- [ ] [In-Page Navigation](https://vanillaframework.io/docs/patterns/in-page-navigation)
      _Note: Sticky jump links used within a single page's content._
- [ ] [Links](https://vanillaframework.io/docs/patterns/links)
      _Note: Specific underline thickness, hover states, and external link icon treatments._
- [ ] [Lists](https://vanillaframework.io/docs/patterns/lists) & [List Tree](https://vanillaframework.io/docs/patterns/list-tree)
      _Note: Custom bullet styling (e.g. tick marks) and hierarchical folder structures._
- [ ] [Logo Section](https://vanillaframework.io/docs/patterns/logo-section)
      _Note: Grid layout specifically for showcasing partner or customer logos._
- [ ] [Matrix](https://vanillaframework.io/docs/patterns/matrix)
      _Note: A specific presentation of layered list items or feature comparisons._
- [ ] [Media Object](https://vanillaframework.io/docs/patterns/media-object)
      _Note: Classic layout with an image to the left and text body to the right._
- [ ] [Modal](https://vanillaframework.io/docs/patterns/modal)
      _Note: Dialog overlays focusing the user, needing a backdrop and centered panel._
- [ ] [Navigation](https://vanillaframework.io/docs/patterns/navigation) & Settings
      _Note: The global header (dark/light), reduced headers, and expandable side navigations._
- [ ] [Newsletter Signup](https://vanillaframework.io/docs/patterns/newsletter-signup)
      _Note: Form layout specifically optimized for email capture._
- [ ] [Notifications](https://vanillaframework.io/docs/patterns/notifications)
      _Note: Banner alerts (Information, Caution, Negative, Positive) with icons._
- [ ] [Pagination](https://vanillaframework.io/docs/patterns/pagination)
      _Note: List of numbered pages for navigating large data sets._
- [ ] [Pricing Block](https://vanillaframework.io/docs/patterns/pricing-block)
      _Note: Feature lists with price callouts, usually aligned in a grid._
- [ ] [Quotes](https://vanillaframework.io/docs/patterns/quotes) & Pull Quotes
      _Note: Stylized blockquotes with citation alignment._
- [ ] [Search and Filter](https://vanillaframework.io/docs/patterns/search-and-filter) & [Search Box](https://vanillaframework.io/docs/patterns/search-box)
      _Note: Complex inputs combining text search with dropdown filters._
- [ ] [Section Pattern](https://vanillaframework.io/docs/patterns/section)
      _Note: Thematic wrappers (e.g., `is-dark`, `is-light`) setting text/link colors for child elements._
- [ ] [Segmented Control](https://vanillaframework.io/docs/patterns/segmented-control)
      _Note: A group of mutually exclusive buttons (like tabs but styled as a single toggle bar)._
- [ ] [Slider](https://vanillaframework.io/docs/patterns/slider)
      _Note: Styling for range inputs (`<input type="range">`)._
- [ ] [Status Label](https://vanillaframework.io/docs/patterns/status-label)
      _Note: Colored dots with text indicating entity status (e.g., Running, Stopped)._
- [ ] [Strip](https://vanillaframework.io/docs/patterns/strip)
      _Note: Full-width horizontal bands of color framing inner constrained content._
- [ ] [Suru](https://vanillaframework.io/docs/patterns/suru)
      _Note: Canonical's signature folded-paper background visual element._
- [ ] [Switch](https://vanillaframework.io/docs/patterns/switch)
      _Note: Toggle input styling replacing default checkboxes._
- [ ] [Tables](https://vanillaframework.io/docs/patterns/tables)
      _Note: Sortable headers, expanding rows, and mobile-card views for tabular data._
- [ ] [Table of Contents](https://vanillaframework.io/docs/patterns/table-of-contents)
      _Note: Sidebar navigation specifically referencing headings in documentation._
- [ ] [Tabs](https://vanillaframework.io/docs/patterns/tabs)
      _Note: Horizontal navigation for switching between views within the same page context._
- [ ] [Tooltips](https://vanillaframework.io/docs/patterns/tooltips)
      _Note: Hover-reveal text explanations attached to elements._

## Layouts

- [ ] [Application Layout](https://vanillaframework.io/docs/layouts/application)
      _Note: Full-viewport layout separating a side nav from the main dynamic reading area._
- [ ] [Application Panels](https://vanillaframework.io/docs/layouts/application-panels)
      _Note: Drawer panels that pop out in the application layout._
- [ ] [Docs Layout](https://vanillaframework.io/docs/layouts/docs)
      _Note: Three-column split (Side Nav -> Content -> Table of Contents)._
- [ ] [Fluid Breakout](https://vanillaframework.io/docs/layouts/fluid-breakout)
      _Note: Content that normally stays bounded but 'breaks out' to full-width when necessary._
- [ ] [Grid](https://vanillaframework.io/docs/rules/grid) (12 Column & 8 Column logic)
      _Note: Tailwind's grid handles basic columns, but Vanilla has specific gutters and responsive collapsing behaviors that may need distinct mappings._

## Utilities

_Note: Base Tailwind CSS inherently handles `clearfix`, `display`/`hide`, `float`, `margin`/`padding` basics, `max-width`, and `vertical-align`. The following are highly Vanilla-specific tweaks._

- [ ] [Baseline Grid](https://vanillaframework.io/docs/utilities/baseline-grid)
      _Note: Strict text-to-baseline alignment utility to ensure elements snap to a visual grid._
- [ ] [Deprecate](https://vanillaframework.io/docs/utilities/deprecate)
      _Note: Visual deprecation styling for elements (strikethroughs or fading)._
- [ ] Has Icon Utility
      _Note: Specific padding margins for inline icons next to text to prevent clipping._
