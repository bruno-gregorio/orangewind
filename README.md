# Orangewind

Orangewind is a project that aims to re-implement **Canonical's Vanilla Framework** as a **Tailwind CSS** plugin, while avoiding duplication with Tailwind's existing utility classes.

This project uses [Bun](https://bun.com), a fast all-in-one JavaScript runtime and package manager.

## Installation

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
