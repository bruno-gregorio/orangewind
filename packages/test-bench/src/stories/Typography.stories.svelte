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

<Story name="Heading Icon">
  <div class="p-10">
    <div class="ow-heading-icon">
      <div class="ow-heading-icon-header">
        <img
          class="ow-heading-icon-img"
          src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
          alt=""
        />
        <h3 class="ow-heading-icon-title ow-heading-3">
          LXD — system containers
        </h3>
      </div>
      <p>
        LXD, the Linux container hypervisor, merges the speed and density of
        containers with the manageability and security of traditional virtual
        machines. Economics are directly tied to density, and no other
        virtualisation technology is as fast or dense as LXD.
      </p>
    </div>
  </div>
</Story>

<Story name="Heading Icon Small">
  <div class="p-10">
    <div class="ow-heading-icon-small">
      <div class="ow-heading-icon-header">
        <img
          class="ow-heading-icon-img"
          src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
          alt=""
        />
        <h3 class="ow-heading-icon-title ow-heading-3">
          LXD — system containers
        </h3>
      </div>
      <p>
        LXD, the Linux container hypervisor, merges the speed and density of
        containers with the manageability and security of traditional virtual
        machines. Economics are directly tied to density, and no other
        virtualisation technology is as fast or dense as LXD.
      </p>
    </div>
  </div>
</Story>

<Story name="Heading Icon Stacked">
  <div class="p-10">
    <div class="ow-heading-icon">
      <div class="ow-heading-icon-header is-stacked">
        <img
          class="ow-heading-icon-img"
          src="https://assets.ubuntu.com/v1/425efe3a-lxd.svg"
          alt=""
        />
        <h3 class="ow-heading-icon-title ow-heading-3">
          LXD — system containers
        </h3>
      </div>
      <p>
        LXD, the Linux container hypervisor, merges the speed and density of
        containers with the manageability and security of traditional virtual
        machines. Economics are directly tied to density, and no other
        virtualisation technology is as fast or dense as LXD.
      </p>
    </div>
  </div>
</Story>

<Story name="Muted Heading">
  <div class="p-10">
    <span class="ow-muted-heading">Latest News</span>
    <h2 class="ow-heading-2">Canonical expands its generative AI portfolio</h2>
    <p>
      We are excited to announce new partnerships and projects in the AI
      space...
    </p>
  </div>
</Story>

<Story name="Small Caps Utility">
  <div class="p-10">
    <p class="ow-text-small-caps">This is some small caps text for evaluation.</p>
  </div>
</Story>
