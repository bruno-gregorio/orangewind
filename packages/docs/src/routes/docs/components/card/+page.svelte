<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="grid gap-3 rounded border border-ow-surface-border bg-ow-background-alt p-8 md:grid-cols-2"
>
  <article class="ow-card mb-0 grid gap-3">
    <h3 class="ow-heading-5">Default</h3>
    <p class="ow-card-content">
      Package security, release cadence and support windows grouped in a quiet
      information surface.
    </p>
  </article>
  <article class="ow-card-highlighted mb-0 grid gap-3">
    <h3 class="ow-heading-5">Highlighted</h3>
    <p class="ow-card-content">
      A stronger surface for destinations where the whole card supports an
      interactive workflow.
    </p>
  </article>
</div>

<p>
  Cards group related content on a contained surface. Reach for
  <code>ow-card</code> for a bordered card, <code>ow-card-highlighted</code> or
  <code>ow-card-muted</code> for shadowed surfaces, and
  <code>ow-card-overlay</code> for a card placed over imagery. Body copy can use
  <code>ow-card-content</code> to tune its trailing spacing.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>A bordered card for general grouped content.</p>
<Example
  block
  code={`<article class="ow-card">
  <h3 class="ow-heading-5">Default</h3>
  <p class="ow-card-content">
    Package security, release cadence and support windows grouped in a quiet
    information surface.
  </p>
</article>`}
>
  <article class="ow-card mb-0 grid gap-3">
    <h3 class="ow-heading-5">Default</h3>
    <p class="ow-card-content">
      Package security, release cadence and support windows grouped in a quiet
      information surface.
    </p>
  </article>
</Example>

<h2 id="highlighted" class="ow-heading-2">Highlighted</h2>
<p>
  <code>ow-card-highlighted</code> drops the border for a soft shadow, giving a stronger
  surface for interactive destinations.
</p>
<Example
  block
  code={`<article class="ow-card-highlighted">
  <h3 class="ow-heading-5">Highlighted</h3>
  <p class="ow-card-content">
    A stronger surface for destinations where the whole card supports an
    interactive workflow.
  </p>
</article>`}
>
  <article class="ow-card-highlighted mb-0 grid gap-3">
    <h3 class="ow-heading-5">Highlighted</h3>
    <p class="ow-card-content">
      A stronger surface for destinations where the whole card supports an
      interactive workflow.
    </p>
  </article>
</Example>

<h2 id="muted" class="ow-heading-2">Muted</h2>
<p>
  <code>ow-card-muted</code> is a low-emphasis variant for supporting information
  that still needs separation from neighbouring content.
</p>
<Example
  block
  code={`<article class="ow-card-muted">
  <h3 class="ow-heading-5">Muted</h3>
  <p class="ow-card-content">
    Low-emphasis supporting information that still needs separation from
    neighbouring content.
  </p>
</article>`}
>
  <article class="ow-card-muted mb-0 grid gap-3">
    <h3 class="ow-heading-5">Muted</h3>
    <p class="ow-card-content">
      Low-emphasis supporting information that still needs separation from
      neighbouring content.
    </p>
  </article>
</Example>

<h2 id="header" class="ow-heading-2">With a header</h2>
<p>
  <code>ow-card-header</code> adds a divided header region. Pair an
  <code>ow-card-thumbnail</code> image with a title to introduce the card.
</p>
<Example
  block
  code={`<article class="ow-card">
  <div class="ow-card-header grid gap-3">
    <img class="ow-card-thumbnail" src="/path/to/logo.svg" alt="" />
    <h3 class="ow-heading-5">Raspberry Pi 5</h3>
  </div>
  <p class="ow-card-content">
    Ubuntu Core supports compact device fleets with predictable updates and a
    small operational footprint.
  </p>
</article>`}
>
  <article class="ow-card mb-0 grid gap-4">
    <div class="ow-card-header grid gap-3">
      <img
        class="ow-card-thumbnail"
        src="https://assets.ubuntu.com/v1/31bd2627-logo-raspberry-pi.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <h3 class="ow-heading-5">Raspberry Pi 5</h3>
    </div>
    <p class="ow-card-content">
      Ubuntu Core supports compact device fleets with predictable updates and a
      small operational footprint.
    </p>
  </article>
</Example>

<h2 id="image" class="ow-heading-2">With a full-bleed image</h2>
<p>
  Remove the card padding with <code>p-0</code>, add an
  <code>ow-card-image</code> that fills the width, then place the text in an
  <code>ow-card-inner</code> region so it keeps its own padding.
</p>
<Example
  block
  code={`<article class="ow-card p-0">
  <img class="ow-card-image" src="/path/to/cover.jpg" alt="" width="496" height="278" />
  <div class="ow-card-inner grid gap-3">
    <h3 class="ow-heading-5">The state of robotics</h3>
    <p>
      From social participation to environmental detection, robotics teams keep
      stretching what field hardware can do.
    </p>
  </div>
</article>`}
>
  <article class="ow-card mb-0 p-0">
    <img
      class="ow-card-image"
      src="https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg"
      alt=""
      width="496"
      height="278"
      loading="lazy"
      decoding="async"
    />
    <div class="ow-card-inner grid gap-3">
      <h3 class="ow-heading-5">The state of robotics</h3>
      <p>
        From social participation to environmental detection, robotics teams
        keep stretching what field hardware can do.
      </p>
    </div>
  </article>
</Example>

<h2 id="overlay" class="ow-heading-2">Overlay</h2>
<p>
  <code>ow-card-overlay</code> renders a translucent surface designed to sit on top
  of a background image, keeping its content legible over the imagery.
</p>
<Example
  block
  code={`<article class="ow-card-overlay">
  <h2 class="ow-heading-4">Web browsing</h2>
  <p class="ow-card-content">
    Ubuntu and Firefox pair a familiar desktop with security maintenance for
    teams that need stable workstations.
  </p>
</article>`}
>
  <div
    class="grid w-full justify-items-end bg-cover bg-center p-6"
    style="background-image: url('https://assets.ubuntu.com/v1/0a98afcd-screenshot_desktop.jpg')"
  >
    <article class="ow-card-overlay mb-0 grid max-w-md gap-3">
      <h2 class="ow-heading-4">Web browsing</h2>
      <p class="ow-card-content">
        Ubuntu and Firefox pair a familiar desktop with security maintenance for
        teams that need stable workstations.
      </p>
    </article>
  </div>
</Example>
