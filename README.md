# Orangewind

[![npm](https://img.shields.io/npm/v/orangewind.svg)](https://www.npmjs.com/package/orangewind)
[![license](https://img.shields.io/npm/l/orangewind.svg)](./LICENSE)

Orangewind is a project that aims to re-implement **Canonical's Vanilla Framework** as a **Tailwind CSS** plugin, while avoiding duplication with Tailwind's existing utility classes.

This project uses [Bun](https://bun.com), a fast all-in-one JavaScript runtime and package manager.

## Using Orangewind

The plugin is published on npm as [`orangewind`](https://www.npmjs.com/package/orangewind). It requires **Tailwind CSS v4** as a peer dependency:

```bash
bun add orangewind tailwindcss
```

Then import it from your global stylesheet — Tailwind first, Orangewind second:

```css
@import 'tailwindcss';
@import 'orangewind';
```

See the [`orangewind` package README](packages/orangewind/README.md) for full usage (dark mode, optional syntax highlighting) and the docs site (`packages/docs`) for the component reference.

## Local development

To install dependencies for the monorepo, run:

```bash
bun install
```

## Available Scripts

Here are some important commands you can run from the root directory:

- `bun run storybook`: Starts the Storybook server from the `test-bench` package to preview components and UI.
- `bun run format`: Formats all files using Prettier.
- `bun run lint`: Runs ESLint to find and automatically fix issues across the codebase.
- `bun run check`: Verifies formatting with Prettier and checks for ESLint errors without modifying anything.

## Workspaces

This is a monorepo containing the following packages:

- `packages/orangewind`: The core Tailwind CSS plugin.
- `packages/test-bench`: A test bench environment for testing and developing the plugin using Storybook.

## Reference Codebase

The original Canonical Vanilla framework source code is included as a git submodule to be used as reference:

- `vanilla-framework/`: A submodule pointing to `canonical/vanilla-framework`.
