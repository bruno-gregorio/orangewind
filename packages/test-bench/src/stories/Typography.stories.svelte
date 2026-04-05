<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Typography'
  })
</script>

<Story name="Headings">
  <h1 class="ow-display-heading">Display Heading</h1>
  <br />
  <p class="ow-heading-1">Heading 1</p>
  <p class="ow-heading-2">Heading 2</p>
  <br />
  <p class="ow-heading-3">Heading 3</p>
  <p class="ow-heading-4">Heading 4</p>
  <br />
  <p class="ow-heading-5">Heading 5</p>
  <p class="ow-heading-6">Heading 6</p>
</Story>

<Story name="Font Metrics">
  <div class="p-10 space-y-12">
    <div>
      <h1 class="ow-display-heading ow-visualise-font-metrics inline-block">Display</h1>
    </div>
    <div>
      <h2 class="ow-heading-1 ow-visualise-font-metrics inline-block">Heading 1</h2>
    </div>
    <div>
      <p class="ow-visualise-font-metrics inline-block">Regular paragraph text</p>
    </div>
  </div>
</Story>

<Story name="Baseline Grid">
  <div class="ow-baseline-grid p-10 min-h-screen">
    <h1 class="ow-display-heading mb-4">Baseline Grid</h1>
    <p class="ow-heading-3 mb-6">Line heights map organically to the spatial grid.</p>
    <p class="ow-heading-5">
      The baseline aligns uniformly across layouts.
      <br />
      This maintains vertical rhythm.
    </p>
  </div>
</Story>
