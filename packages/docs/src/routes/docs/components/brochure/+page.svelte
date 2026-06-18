<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration: a representative brochure section built on
     a 50/50 split, bounded inside the bordered box. -->
<div class="rounded border border-ow-surface-border p-8">
  <section class="ow-strip ow-is-shallow w-full">
    <div class="ow-row-50-50">
      <div class="ow-col">
        <h2 class="ow-heading-3"><strong>Brochure site layouts</strong></h2>
      </div>
      <div class="ow-col">
        <p>
          A page is a sequence of sections, each built on one of a small set of
          split grids whose column widths are always multiples of 25% of the
          available space.
        </p>
      </div>
    </div>
  </section>
</div>

<p>
  The brochure layout composes a marketing page as a stack of sections, each
  built on a <code>ow-row-*</code> split grid. Every row is a centred container
  that is 4 columns wide on small screens, 6 on medium and 12 on large, and its
  <code>ow-col</code> children span the full width by default — so they stack on small
  screens and snap to their fractions once there is room. The 25% rule keeps content
  across all sections aligned to the same fault lines.
</p>

<h2 id="fifty-fifty" class="ow-heading-2">50 / 50</h2>
<p>
  <code>ow-row-50-50</code> gives two equal halves on large screens — commonly a scannable
  heading beside denser copy.
</p>
<Example
  block
  code={`<div class="ow-row-50-50">
  <div class="ow-col">50%</div>
  <div class="ow-col">50%</div>
</div>`}
>
  <div
    class="ow-row-50-50 w-full gap-3 [&_.ow-col]:flex [&_.ow-col]:min-h-16 [&_.ow-col]:items-center [&_.ow-col]:justify-center [&_.ow-col]:rounded [&_.ow-col]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_.ow-col]:text-sm [&_.ow-col]:font-semibold"
  >
    <div class="ow-col">50%</div>
    <div class="ow-col">50%</div>
  </div>
</Example>

<h2 id="quarter-three-quarters" class="ow-heading-2">25 / 75</h2>
<p>
  <code>ow-row-25-75</code> pairs a narrow heading column with a wide content
  area, relaxing to 33/66 on medium screens. Its mirror is
  <code>ow-row-75-25</code>.
</p>
<Example
  block
  code={`<div class="ow-row-25-75">
  <div class="ow-col">25%</div>
  <div class="ow-col">75%</div>
</div>`}
>
  <div
    class="ow-row-25-75 w-full gap-3 [&_.ow-col]:flex [&_.ow-col]:min-h-16 [&_.ow-col]:items-center [&_.ow-col]:justify-center [&_.ow-col]:rounded [&_.ow-col]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_.ow-col]:text-sm [&_.ow-col]:font-semibold"
  >
    <div class="ow-col">25%</div>
    <div class="ow-col">75%</div>
  </div>
</Example>

<h2 id="quarter-quarter-half" class="ow-heading-2">25 / 25 / 50</h2>
<p>
  <code>ow-row-25-25-50</code> is a 50/50 with the left half subdivided. The 50% column
  drops to its own full-width row on medium screens.
</p>
<Example
  block
  code={`<div class="ow-row-25-25-50">
  <div class="ow-col">25%</div>
  <div class="ow-col">25%</div>
  <div class="ow-col">50%</div>
</div>`}
>
  <div
    class="ow-row-25-25-50 w-full gap-3 [&_.ow-col]:flex [&_.ow-col]:min-h-16 [&_.ow-col]:items-center [&_.ow-col]:justify-center [&_.ow-col]:rounded [&_.ow-col]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_.ow-col]:text-sm [&_.ow-col]:font-semibold"
  >
    <div class="ow-col">25%</div>
    <div class="ow-col">25%</div>
    <div class="ow-col">50%</div>
  </div>
</Example>

<h2 id="quarters" class="ow-heading-2">25 / 25 / 25 / 25</h2>
<p>
  <code>ow-row-25-25-25-25</code> lays out four equal columns, pairing into two 50/50
  rows on medium screens.
</p>
<Example
  block
  code={`<div class="ow-row-25-25-25-25">
  <div class="ow-col">25%</div>
  <div class="ow-col">25%</div>
  <div class="ow-col">25%</div>
  <div class="ow-col">25%</div>
</div>`}
>
  <div
    class="ow-row-25-25-25-25 w-full gap-3 [&_.ow-col]:flex [&_.ow-col]:min-h-16 [&_.ow-col]:items-center [&_.ow-col]:justify-center [&_.ow-col]:rounded [&_.ow-col]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_.ow-col]:text-sm [&_.ow-col]:font-semibold"
  >
    <div class="ow-col">25%</div>
    <div class="ow-col">25%</div>
    <div class="ow-col">25%</div>
    <div class="ow-col">25%</div>
  </div>
</Example>

<h2 id="single-column" class="ow-heading-2">Offset single column</h2>
<p>
  A lone <code>ow-col</code> inside a <code>ow-row-25-75</code> fills the width on
  medium screens and offsets into the 75% area on large ones, leaving the first quarter
  as structural white space.
</p>
<Example
  block
  code={`<div class="ow-row-25-75">
  <div class="ow-col">Offset to the 75% area on large screens</div>
</div>`}
>
  <div
    class="ow-row-25-75 w-full [&_.ow-col]:flex [&_.ow-col]:min-h-16 [&_.ow-col]:items-center [&_.ow-col]:rounded [&_.ow-col]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_.ow-col]:px-4 [&_.ow-col]:text-sm"
  >
    <div class="ow-col">Offset to the 75% area on large screens</div>
  </div>
</Example>
