<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Links'
  })
</script>

<Story name="Base Links">
  <div class="p-10 space-y-4 max-w-2xl">
    <p>
      This is a <a href="#/" on:click={(e) => e.preventDefault()}>default link</a> inside some text.
    </p>
  </div>
</Story>

<Story name="Soft Link">
  <div class="p-10">
    <a href="#/" class="ow-link-soft" on:click={(e) => e.preventDefault()}>Soft Link Example</a>
  </div>
</Story>

<Story name="Inverted Link">
  <div class="p-10 bg-gray-900 rounded-md dark text-white">
    <a href="#/" class="ow-link-inverted" on:click={(e) => e.preventDefault()}>Inverted Link Example</a>
  </div>
</Story>

<Story name="Back to Top (ow-top)">
  <div class="p-10">
    <div class="ow-top">
      <a href="#/" class="ow-top-link" on:click={(e) => e.preventDefault()}>Back to top</a>
    </div>
  </div>
</Story>

<Story name="Anchor Heading Link">
  <div class="p-10 relative">
    <h3 class="ow-heading-3">
      <a href="#/" class="ow-link-anchor-heading" on:click={(e) => e.preventDefault()}>
        Anchor Heading Title
      </a>
    </h3>
  </div>
</Story>

<Story name="Skip Link">
  <div class="p-10 relative">
    <p>
      Use the tab key to focus the invisible skip link.
      <br />
      <a href="#/" class="ow-link-skip" on:click={(e) => e.preventDefault()}>Skip to main content</a>
      <a href="#/" class="ow-link" tabindex="0" on:click={(e) => e.preventDefault()}>Focus me first</a>
    </p>
  </div>
</Story>
