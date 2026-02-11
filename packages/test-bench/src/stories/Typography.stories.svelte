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
