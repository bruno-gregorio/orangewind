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
  <p>The font metrics utility visualizes baseline alignment of typography. Notice how the blue background sits precisely from the font baseline, to the cap-height, helping aligning elements.</p>
  <br />
  <h1 class="ow-visualise-font-metrics ow-display-heading" style="margin-left: 2rem;">Display Heading Align</h1>
  <br />
  <p class="ow-visualise-font-metrics ow-heading-1" style="margin-left: 2rem;">Heading 1 Align</p>
  <br />
  <p class="ow-visualise-font-metrics" style="margin-left: 2rem;">Regular text with font metrics visualizer</p>
</Story>

<Story name="Baseline Grid">
  <p>The baseline grid allows visualizing the structural spacing grid.</p>
  <div class="ow-baseline-grid p-4" style="height: 300px;">
    <h1 class="ow-heading-1">Content snapped to grid ideally</h1>
    <p class="ow-heading-5" style="margin-top: 1.5rem">More content here</p>
  </div>
</Story>
