# AI Agents Guidelines (Orangewind)

This document provides context, core rules, and architectural standards for the **Orangewind** project for Artificial Intelligence agents.

## 1. Project Overview

**Orangewind** is a _monorepo_ whose main objective is to re-implement **Canonical's Vanilla Framework** as a **Tailwind CSS** plugin. The central premise is to **avoid duplicating** utility classes that Tailwind already provides natively.

- **Stack / Runtime:** [Bun](https://bun.com)
- **Front-end Framework:** Svelte (used for validation inside the `test-bench` package)
- **Monorepo Management:** Bun Workspaces (defined in `package.json` for files inside `packages/*`)

## 2. Monorepo Structure

The main structure of the project is divided between the following packages:

- `packages/orangewind`: The core package containing the Tailwind CSS plugin.
- `packages/test-bench`: The environment to develop and test the plugin (using **Storybook** and Svelte).
- `vanilla-framework/`: A git submodule pointing to Canonical's original repository (`canonical/vanilla-framework`).
  - **Critical Submodule Usage:** Agents must always consult this directory as a "Template" (Reference) to understand how a CSS rule or component was originally created in the Vanilla Framework before attempting to implement it in `orangewind`.

## 3. Code Standards & Formatting (Lint & Prettier)

The project employs strict rules to ensure a clean and modern codebase.

**3.1. Linting (ESLint)**

- **Base:** Based on the `neostandard` config (StandardJS) with native support for `.ts` (TypeScript) and `.svelte` (Svelte) files.
- **Variables (`prefer-const` and `no-var`):** Use `const` whenever possible; under no circumstances use `var`; strict restriction on creating unused variables/arguments (except those prefixed with an underscore `^_`).
- **Strict Equality (`eqeqeq`):** Always use `===` or `!==`, instead of `==` or `!=`.
- **Typing (TypeScript):** Avoid using the explicit `any` type as much as possible (`@typescript-eslint/no-explicit-any` will throw a warning).

**3.2. Formatting (Prettier)**

- **Code Style:**
  - No semicolons (`semi: false`);
  - Single quotes (`singleQuote: true`);
  - No trailing commas on the last item of lists/objects (`trailingComma: "none"`);
  - Exact 2 spaces indentation (`tabWidth: 2`), `useTabs: false`;
  - Maximum code line width of 80 characters (`printWidth: 80`);
  - No parentheses in single-argument arrow functions (`arrowParens: "avoid"`, e.g., `x => x`).

## 4. Additional Rules

- Do not mark tasks as complete on the TO-DO file. This step should be done by the user.
- Whenever possible avoid margins for spacing, prefer padding, gap or layout utilities based on grid or flex. The same rule is also valid for inset-based positioning, if the desired position can be achieved by layout utilities, prefer them over inset utilities.
- Our CSS naming convention does not include double dashes or underscores.
- When coding the classes, make use of CSS nesting and the `&` selector to reduce the amount of code top level code blocks per file.
- Verification is done manually by the user by checking storybook.
- The directive `@variant dark` should be used only to set CSS variables.
- Do not use `@variant dark` inside pseudo-elements, when you need it, just use it on the underlying class to set the css variable.
- COLOR REDUCTION RULE: avoid using color literals. Use CSS variables unless the color is really exclusive to that line and has no contextual connection. For other cases, prefer CSS variables declared at the top of the file in the theme block. For variables inside the theme block prefer values derived from colors in the colors file. The goal is to reduce the amount of colors in the project as a whole.
