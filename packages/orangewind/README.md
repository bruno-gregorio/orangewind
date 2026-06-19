# Orangewind

Canonical's [Vanilla Framework](https://vanillaframework.io) re-implemented as a
[Tailwind CSS](https://tailwindcss.com) **v4** plugin.

Orangewind layers a set of `ow-*` component classes (buttons, cards, navigation,
forms, modals, and more) on top of Tailwind. It deliberately **reuses Tailwind's
native utilities** rather than duplicating them, so you get Vanilla's component
vocabulary with Tailwind's utility workflow.

- **CSS-only** — no JavaScript, no build step. Just import the stylesheet.
- **Tailwind v4 native** — ships as a CSS `@import`, themed with CSS variables.
- **Dark mode without a toggle** — follows the OS `prefers-color-scheme` by default.

## Install

Orangewind requires **Tailwind CSS v4** as a peer dependency.

```bash
bun add orangewind tailwindcss
# or: npm install orangewind tailwindcss
```

## Usage

Import Tailwind first, then Orangewind, from your global stylesheet:

```css
@import 'tailwindcss';
@import 'orangewind';
```

That's it — the `ow-*` component classes are now available:

```html
<button class="ow-button-positive">Save</button>
```

### Syntax highlighting (optional)

A Prism-compatible token theme is shipped separately so you only pay for it when
you need it:

```css
@import 'orangewind/prism.css';
```

### Dark mode

Orangewind only flips its own CSS variables for dark mode — it never styles the
document itself. By default Tailwind's `dark` variant follows the operating
system's `prefers-color-scheme`, so the framework themes itself automatically
with no toggle required. To drive the theme from a class instead, define the
variant before importing Orangewind:

```css
@import 'tailwindcss';
@import 'orangewind';

/* drive dark mode from a class instead of the OS preference */
@custom-variant dark (&:where(.dark, .dark *));
```

## Documentation

Full component reference and guides live in the
[documentation site](https://github.com/bruno-gregorio/orangewind) (built with
Orangewind itself, in `packages/docs`).

## License

[LGPL-3.0-only](./LICENSE). Orangewind is a derivative work of Canonical's
Vanilla Framework (© Canonical Ltd., LGPL-3.0) — see [NOTICE](./NOTICE) for
attribution.
