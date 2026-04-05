<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Buttons'
  })
</script>

<Story name="Default Button">
  <div class="p-10 max-w-3xl space-y-6">
    <h3 class="mb-4 text-xl font-bold">Default Button</h3>
    <p class="text-gray-600 dark:text-gray-300">
      The default <code>ow-btn</code> is a neutral, bordered button suitable
      for most secondary actions.
    </p>
    <div class="flex flex-wrap gap-2 items-center">
      <button class="ow-btn">Default</button>
      <button class="ow-btn is-dense">Dense</button>
      <button class="ow-btn is-small">Small</button>
      <button class="ow-btn" disabled>Disabled</button>
    </div>
  </div>
</Story>

<Story name="Positive Button">
  <div class="p-10 max-w-3xl space-y-6">
    <h3 class="mb-4 text-xl font-bold">Positive Button</h3>
    <p class="text-gray-600 dark:text-gray-300">
      Use <code>ow-btn-positive</code> to confirm or submit an action (e.g.
      Save, Confirm, Install).
    </p>
    <div class="flex flex-wrap gap-2 items-center">
      <button class="ow-btn-positive">Save changes</button>
      <button class="ow-btn-positive is-dense">Dense</button>
      <button class="ow-btn-positive is-small">Small</button>
      <button class="ow-btn-positive" disabled>Disabled</button>
    </div>
  </div>
</Story>

<Story name="Negative Button">
  <div class="p-10 max-w-3xl space-y-6">
    <h3 class="mb-4 text-xl font-bold">Negative Button</h3>
    <p class="text-gray-600 dark:text-gray-300">
      Use <code>ow-btn-negative</code> for destructive or irreversible actions
      (e.g. Delete, Remove, Uninstall).
    </p>
    <div class="flex flex-wrap gap-2 items-center">
      <button class="ow-btn-negative">Delete</button>
      <button class="ow-btn-negative is-dense">Dense</button>
      <button class="ow-btn-negative is-small">Small</button>
      <button class="ow-btn-negative" disabled>Disabled</button>
    </div>
  </div>
</Story>

<Story name="Base Button">
  <div class="p-10 max-w-3xl space-y-6">
    <h3 class="mb-4 text-xl font-bold">Base (Ghost) Button</h3>
    <p class="text-gray-600 dark:text-gray-300">
      <code>ow-btn-base</code> has a transparent background and border, making
      it suitable for tertiary or icon-only actions where chrome is unwanted.
    </p>
    <div class="flex flex-wrap gap-2 items-center">
      <button class="ow-btn-base">Ghost action</button>
      <button class="ow-btn-base is-dense">Dense</button>
      <button class="ow-btn-base is-small">Small</button>
      <button class="ow-btn-base" disabled>Disabled</button>
    </div>
  </div>
</Story>

<Story name="Link Button">
  <div class="p-10 max-w-3xl space-y-6">
    <h3 class="mb-4 text-xl font-bold">Link Button</h3>
    <p class="text-gray-600 dark:text-gray-300">
      <code>ow-btn-link</code> renders a <code>&lt;button&gt;</code> element
      visually identical to an inline hyperlink, without any background or
      border.
    </p>
    <div class="flex flex-wrap gap-2 items-center">
      <p>
        Click here to <button class="ow-btn-link">learn more</button> about
        this feature, or
        <button class="ow-btn-link">read the docs</button>.
      </p>
    </div>
  </div>
</Story>

<Story name="Inline Buttons">
  <div class="p-10 max-w-3xl space-y-6">
    <h3 class="mb-4 text-xl font-bold">Inline Buttons</h3>
    <p class="text-gray-600 dark:text-gray-300">
      Adding <code>is-inline</code> adds left spacing so it can sit naturally
      beside text or another button.
    </p>
    <div>
      <span class="text-sm font-semibold">Action required:</span>
      <button class="ow-btn is-inline is-small">Acknowledge</button>
      <button class="ow-btn-negative is-inline is-small">Dismiss</button>
    </div>
  </div>
</Story>

<Story name="All Variants">
  <div class="p-10 max-w-3xl space-y-8">
    <h3 class="mb-4 text-xl font-bold">All Variants</h3>

    <section class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Default size
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <button class="ow-btn">Default</button>
        <button class="ow-btn-positive">Positive</button>
        <button class="ow-btn-negative">Negative</button>
        <button class="ow-btn-base">Base</button>
        <button class="ow-btn-link">Link</button>
      </div>
    </section>

    <section class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Dense
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <button class="ow-btn is-dense">Default</button>
        <button class="ow-btn-positive is-dense">Positive</button>
        <button class="ow-btn-negative is-dense">Negative</button>
        <button class="ow-btn-base is-dense">Base</button>
      </div>
    </section>

    <section class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Small
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <button class="ow-btn is-small">Default</button>
        <button class="ow-btn-positive is-small">Positive</button>
        <button class="ow-btn-negative is-small">Negative</button>
        <button class="ow-btn-base is-small">Base</button>
      </div>
    </section>

    <section class="space-y-2">
      <p class="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Disabled
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <button class="ow-btn" disabled>Default</button>
        <button class="ow-btn-positive" disabled>Positive</button>
        <button class="ow-btn-negative" disabled>Negative</button>
        <button class="ow-btn-base" disabled>Base</button>
      </div>
    </section>
  </div>
</Story>
