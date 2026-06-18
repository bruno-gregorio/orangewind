<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="grid grid-cols-2 gap-3 rounded border border-ow-surface-border p-8 sm:grid-cols-3 md:grid-cols-4"
>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-brand"></div>
    <code class="text-xs">bg-ow-brand</code>
  </div>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-accent"></div>
    <code class="text-xs">bg-ow-accent</code>
  </div>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-positive"></div>
    <code class="text-xs">bg-ow-positive</code>
  </div>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-negative"></div>
    <code class="text-xs">bg-ow-negative</code>
  </div>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-caution"></div>
    <code class="text-xs">bg-ow-caution</code>
  </div>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-information"></div>
    <code class="text-xs">bg-ow-information</code>
  </div>
  <div class="grid gap-2">
    <div
      class="h-16 w-full rounded border border-ow-surface-border bg-ow-light"
    ></div>
    <code class="text-xs">bg-ow-light</code>
  </div>
  <div class="grid gap-2">
    <div class="h-16 w-full rounded bg-ow-dark"></div>
    <code class="text-xs">bg-ow-dark</code>
  </div>
</div>

<p>
  Orangewind exposes its palette as <code>--color-ow-*</code> theme tokens, so
  every colour is available through standard Tailwind utilities such as
  <code>bg-ow-brand</code>, <code>text-ow-positive</code> and
  <code>border-ow-information</code>. The palette covers a neutral greyscale,
  the brand and accent hues, and a set of semantic colours.
</p>

<h2 id="brand" class="ow-heading-2">Brand and accent</h2>
<p>
  <code>ow-brand</code> is the primary identity colour and
  <code>ow-accent</code> is its complement. Apply them with any colour utility.
</p>
<Example
  code={`<div class="bg-ow-brand"></div>
<div class="bg-ow-accent"></div>`}
>
  <div class="flex w-full gap-3">
    <div
      class="flex h-20 flex-1 items-end rounded bg-ow-brand p-2 text-ow-x-light"
    >
      <code class="text-xs">ow-brand</code>
    </div>
    <div
      class="flex h-20 flex-1 items-end rounded bg-ow-accent p-2 text-ow-x-light"
    >
      <code class="text-xs">ow-accent</code>
    </div>
  </div>
</Example>

<h2 id="semantic" class="ow-heading-2">Semantic colours</h2>
<p>
  Four semantic colours signal the meaning of an action or message:
  <code>ow-positive</code>, <code>ow-negative</code>, <code>ow-caution</code>
  and
  <code>ow-information</code>. Components reuse these tokens, so a custom
  element can match a notification or badge by sharing its colour.
</p>
<Example
  code={`<div class="bg-ow-positive"></div>
<div class="bg-ow-negative"></div>
<div class="bg-ow-caution"></div>
<div class="bg-ow-information"></div>`}
>
  <div class="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
    <div class="flex h-20 items-end rounded bg-ow-positive p-2 text-ow-x-light">
      <code class="text-xs">positive</code>
    </div>
    <div class="flex h-20 items-end rounded bg-ow-negative p-2 text-ow-x-light">
      <code class="text-xs">negative</code>
    </div>
    <div class="flex h-20 items-end rounded bg-ow-caution p-2 text-ow-x-light">
      <code class="text-xs">caution</code>
    </div>
    <div
      class="flex h-20 items-end rounded bg-ow-information p-2 text-ow-x-light"
    >
      <code class="text-xs">information</code>
    </div>
  </div>
</Example>

<h2 id="text" class="ow-heading-2">Text colours</h2>
<p>
  Body copy uses <code>text-ow-text-default</code>, with
  <code>text-ow-text-muted</code> for secondary text. The semantic tokens also
  work as text colours, for example <code>text-ow-negative</code> on an error message.
</p>
<Example
  code={`<p class="text-ow-text-default">Default body text.</p>
<p class="text-ow-text-muted">Muted secondary text.</p>
<p class="text-ow-negative">An error message.</p>`}
>
  <div class="grid w-full gap-1">
    <p class="text-ow-text-default">Default body text.</p>
    <p class="text-ow-text-muted">Muted secondary text.</p>
    <p class="text-ow-negative">An error message.</p>
  </div>
</Example>

<h2 id="surfaces" class="ow-heading-2">Backgrounds and borders</h2>
<p>
  Surface tokens drive page and panel chrome.
  <code>bg-ow-background-default</code> and <code>bg-ow-background-alt</code>
  set page backgrounds, while <code>border-ow-surface-border</code> draws the subtle
  borders used throughout these docs.
</p>
<Example
  code={`<div class="bg-ow-background-default border border-ow-surface-border">
  Default surface
</div>
<div class="bg-ow-background-alt border border-ow-surface-border">
  Alternate surface
</div>`}
>
  <div class="grid w-full gap-3 sm:grid-cols-2">
    <div
      class="rounded border border-ow-surface-border bg-ow-background-default p-4"
    >
      Default surface
    </div>
    <div
      class="rounded border border-ow-surface-border bg-ow-background-alt p-4"
    >
      Alternate surface
    </div>
  </div>
</Example>

<h2 id="dark-mode" class="ow-heading-2">Dark mode</h2>
<p>
  Orangewind redefines its semantic tokens under
  <code>prefers-color-scheme: dark</code>, so background, text, border and
  surface colours flip automatically. Build with the semantic utilities — such
  as <code>text-ow-text-default</code> over
  <code>bg-ow-background-default</code>
  — rather than the raw greyscale, and a layout adapts to the user's theme with no
  extra work. The variables are remapped like this:
</p>
<Example
  lang="css"
  title="CSS"
  code={`:root {
  @variant dark {
    --color-ow-background-default: var(--color-ow-dark);
    --color-ow-text-default: var(--color-ow-x-light);
    --color-ow-border-default: color-mix(
      in srgb,
      var(--color-ow-x-light) 20%,
      transparent
    );
  }
}`}
>
  <div class="grid w-full gap-3 sm:grid-cols-2">
    <div
      class="rounded border border-ow-surface-border bg-ow-background-default p-4 text-ow-text-default"
    >
      Adapts to the active colour scheme.
    </div>
    <div class="ow-strip-dark rounded p-4 text-ow-x-light">
      Always dark, for contrast.
    </div>
  </div>
</Example>
