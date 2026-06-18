<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration: a main suru hero, bounded inside an
     overflow-hidden box so the angled band is visible without taking over the
     page. -->
<div class="overflow-hidden rounded border border-ow-surface-border">
  <div class="ow-suru-25-75">
    <div class="mx-auto grid max-w-5xl gap-3 px-6">
      <h2 class="ow-heading-1 max-w-3xl">Suru background</h2>
      <p class="max-w-2xl">
        The suru is a decorative angled graphic that separates a hero from the
        rest of the page.
      </p>
    </div>
  </div>
</div>

<p>
  Suru is the decorative angled background used behind Ubuntu-style heroes and
  section dividers. Apply a <code>ow-suru-*</code> class to a wrapper and place
  the hero content inside it; the angled artwork is drawn behind or below the
  content. The previews here are bounded inside <code>overflow-hidden</code>
  boxes so the graphic stays contained. The backgrounds adapt to the
  <code>dark</code> context automatically.
</p>

<h2 id="main-25-75" class="ow-heading-2">Main 25 / 75</h2>
<p>
  <code>ow-suru-25-75</code> draws the band into a centred
  <code>::after</code> element below the content, aligned to the 25/75 grid. It is
  the default main suru.
</p>
<Example
  block
  code={`<div class="ow-suru-25-75">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Main suru 25/75</h2>
    <p>A hero followed by the rest of the page.</p>
  </div>
</div>`}
>
  <div class="w-full overflow-hidden">
    <div class="ow-suru-25-75">
      <div class="mx-auto grid max-w-5xl gap-3 px-6">
        <h2 class="ow-heading-1 max-w-3xl">Main suru 25/75</h2>
        <p class="max-w-2xl">A hero followed by the rest of the page.</p>
      </div>
    </div>
  </div>
</Example>

<h2 id="main-50-50" class="ow-heading-2">Main 50 / 50</h2>
<p>
  <code>ow-suru-50-50</code> centres the band for a more symmetric hero separation.
</p>
<Example
  block
  code={`<div class="ow-suru-50-50">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Main suru 50/50</h2>
    <p>A symmetric separation between hero and content.</p>
  </div>
</div>`}
>
  <div class="w-full overflow-hidden">
    <div class="ow-suru-50-50">
      <div class="mx-auto grid max-w-5xl gap-3 px-6">
        <h2 class="ow-heading-1 max-w-3xl">Main suru 50/50</h2>
        <p class="max-w-2xl">
          A symmetric separation between hero and content.
        </p>
      </div>
    </div>
  </div>
</Example>

<h2 id="standalone" class="ow-heading-2">Standalone</h2>
<p>
  Used empty, <code>ow-suru</code> drops its hero padding and renders just the band
  — useful as a slim decorative divider between full-width sections.
</p>
<Example block code={'<div class="ow-suru"></div>'}>
  <div class="w-full overflow-hidden">
    <div class="ow-suru"></div>
  </div>
</Example>

<h2 id="corner" class="ow-heading-2">Corner backgrounds</h2>
<p>
  The corner variants anchor a fan or pyramid graphic to a corner of the hero:
  <code>ow-suru-fan-top</code>, <code>ow-suru-fan-bottom</code>,
  <code>ow-suru-pyramid-left</code> and <code>ow-suru-pyramid-right</code>. They
  would overlap content on small screens, so the artwork only appears from the
  large breakpoint up.
</p>
<Example
  block
  code={`<div class="ow-suru-fan-top">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Fan top</h2>
    <p>The fan background anchors to the top-right corner of the hero.</p>
  </div>
</div>`}
>
  <div class="w-full overflow-hidden">
    <div class="ow-suru-fan-top">
      <div class="mx-auto grid max-w-5xl gap-3 px-6">
        <h2 class="ow-heading-1 max-w-3xl">Fan top</h2>
        <p class="max-w-2xl">
          The fan background anchors to the top-right corner of the hero.
        </p>
      </div>
    </div>
  </div>
</Example>

<h2 id="divider" class="ow-heading-2">Divider</h2>
<p>
  <code>ow-suru-divider</code> places a triangle, anchored to the left edge, in the
  deep padding between two content sections. Like the corner variants it renders from
  the large breakpoint up.
</p>
<Example
  block
  code={`<div class="ow-suru-divider">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Divider suru</h2>
    <p>The triangle divider sits between two content sections.</p>
  </div>
</div>`}
>
  <div class="w-full overflow-hidden">
    <div class="ow-suru-divider">
      <div class="mx-auto grid max-w-5xl gap-3 px-6">
        <h2 class="ow-heading-1 max-w-3xl">Divider suru</h2>
        <p class="max-w-2xl">
          The triangle divider sits between two content sections.
        </p>
      </div>
    </div>
  </div>
</Example>
