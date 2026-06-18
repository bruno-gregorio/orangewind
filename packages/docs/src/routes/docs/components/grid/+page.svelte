<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration: the default 4/4/8 grid with eight single
     columns, bounded inside the bordered box. -->
<div class="rounded border border-ow-surface-border p-8">
  <div
    class="ow-grid-row w-full [&_[class*=ow-grid-col]]:flex [&_[class*=ow-grid-col]]:min-h-12 [&_[class*=ow-grid-col]]:items-center [&_[class*=ow-grid-col]]:justify-center [&_[class*=ow-grid-col]]:rounded [&_[class*=ow-grid-col]]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_[class*=ow-grid-col]]:text-sm [&_[class*=ow-grid-col]]:font-semibold"
    style="padding-inline: 0"
  >
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
    <div class="ow-grid-col-1 ow-grid-col-medium-1 ow-grid-col-small-1">1</div>
  </div>
</div>

<p>
  The grid lays a page out as a stack of rows — <code>ow-grid-row</code> — whose
  direct children are columns. The track count grows with the viewport: 4
  columns on small and medium screens, 8 on large. A
  <code>ow-grid-col-*</code> class only claims its span within the breakpoint it names;
  outside that range the column falls back to a full-width span and stacks. The split
  shortcuts and the fluid-breakout layout build on the same grid. Cells below are
  tinted only to make the tracks visible.
</p>

<h2 id="columns" class="ow-heading-2">Columns and breakpoints</h2>
<p>
  Name a span per breakpoint with <code>ow-grid-col-{'{n}'}</code> (large, 1–8),
  <code>ow-grid-col-medium-{'{n}'}</code> (1–4) and
  <code>ow-grid-col-small-{'{n}'}</code> (1–4). Combine the three on one column to
  control it at every size; omit a breakpoint to let the column stack full-width there.
</p>
<Example
  block
  code={`<div class="ow-grid-row">
  <div class="ow-grid-col-4 ow-grid-col-medium-2 ow-grid-col-small-2">
    Half-ish
  </div>
  <div class="ow-grid-col-4 ow-grid-col-medium-2 ow-grid-col-small-2">
    Half-ish
  </div>
</div>`}
>
  <div
    class="ow-grid-row w-full [&_[class*=ow-grid-col]]:flex [&_[class*=ow-grid-col]]:min-h-12 [&_[class*=ow-grid-col]]:items-center [&_[class*=ow-grid-col]]:justify-center [&_[class*=ow-grid-col]]:rounded [&_[class*=ow-grid-col]]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_[class*=ow-grid-col]]:text-sm [&_[class*=ow-grid-col]]:font-semibold"
    style="padding-inline: 0"
  >
    <div class="ow-grid-col-4 ow-grid-col-medium-2 ow-grid-col-small-2">
      Half-ish
    </div>
    <div class="ow-grid-col-4 ow-grid-col-medium-2 ow-grid-col-small-2">
      Half-ish
    </div>
  </div>
</Example>

<h2 id="splits" class="ow-heading-2">Split shortcuts</h2>
<p>
  Apply a split class to the row — <code>ow-grid-row-50-50</code>,
  <code>ow-grid-row-25-75</code>, <code>ow-grid-row-75-25</code>,
  <code>ow-grid-row-25-25-50</code> or <code>ow-grid-row-25-25-25-25</code> —
  and its <code>ow-grid-col</code> children arrange themselves without per-column
  classes. Widths are always multiples of 25% of the row.
</p>
<Example
  block
  code={`<div class="ow-grid-row-25-25-50">
  <div class="ow-grid-col">25%</div>
  <div class="ow-grid-col">25%</div>
  <div class="ow-grid-col">50%</div>
</div>`}
>
  <div
    class="ow-grid-row-25-25-50 w-full [&_.ow-grid-col]:flex [&_.ow-grid-col]:min-h-12 [&_.ow-grid-col]:items-center [&_.ow-grid-col]:justify-center [&_.ow-grid-col]:rounded [&_.ow-grid-col]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_.ow-grid-col]:text-sm [&_.ow-grid-col]:font-semibold"
    style="padding-inline: 0"
  >
    <div class="ow-grid-col">25%</div>
    <div class="ow-grid-col">25%</div>
    <div class="ow-grid-col">50%</div>
  </div>
</Example>

<h2 id="offset-order" class="ow-heading-2">Offset and order</h2>
<p>
  Pin a column to a track with
  <code>ow-grid-col-start-large-{'{n}'}</code> and reorder it with
  <code>ow-grid-col-order-large-{'{n}'}</code> (with
  <code>-medium-</code>/<code>-small-</code> variants). Both reset at the next breakpoint,
  so an offset on large leaves the smaller sizes untouched.
</p>
<Example
  block
  code={`<div class="ow-grid-row">
  <div class="ow-grid-col-4 ow-grid-col-start-large-4 ow-grid-col-order-large-2">
    Starts at track 4, drawn last
  </div>
  <div class="ow-grid-col-3 ow-grid-col-order-large-1">
    Drawn first
  </div>
</div>`}
>
  <div
    class="ow-grid-row w-full [&_[class*=ow-grid-col]]:flex [&_[class*=ow-grid-col]]:min-h-12 [&_[class*=ow-grid-col]]:items-center [&_[class*=ow-grid-col]]:justify-center [&_[class*=ow-grid-col]]:rounded [&_[class*=ow-grid-col]]:bg-[color-mix(in_srgb,currentColor_12%,transparent)] [&_[class*=ow-grid-col]]:px-3 [&_[class*=ow-grid-col]]:text-center [&_[class*=ow-grid-col]]:text-sm [&_[class*=ow-grid-col]]:font-semibold"
    style="padding-inline: 0"
  >
    <div
      class="ow-grid-col-4 ow-grid-col-start-large-4 ow-grid-col-order-large-2"
    >
      Starts at track 4, drawn last
    </div>
    <div class="ow-grid-col-3 ow-grid-col-order-large-1">Drawn first</div>
  </div>
</Example>

<h2 id="nested" class="ow-heading-2">Nested columns</h2>
<p>
  A <code>ow-grid-row</code> nested inside a column re-divides only that column's
  width, dropping the page margins and width cap so it fills its parent.
</p>
<Example
  block
  code={`<div class="ow-grid-row">
  <div class="ow-grid-col-8">
    .ow-grid-col-8
    <div class="ow-grid-row">
      <div class="ow-grid-col-6">.ow-grid-col-6</div>
      <div class="ow-grid-col-2">.ow-grid-col-2</div>
    </div>
  </div>
</div>`}
>
  <div
    class="ow-grid-row w-full [&_[class*=ow-grid-col]]:rounded [&_[class*=ow-grid-col]]:bg-[color-mix(in_srgb,currentColor_10%,transparent)] [&_[class*=ow-grid-col]]:p-3 [&_[class*=ow-grid-col]]:text-sm [&_[class*=ow-grid-col]]:font-semibold"
    style="padding-inline: 0"
  >
    <div class="ow-grid-col-8">
      .ow-grid-col-8
      <div class="ow-grid-row pt-3">
        <div class="ow-grid-col-6">.ow-grid-col-6</div>
        <div class="ow-grid-col-2">.ow-grid-col-2</div>
      </div>
    </div>
  </div>
</Example>

<h2 id="fixed-width" class="ow-heading-2">Fixed-width container</h2>
<p>
  <code>ow-fixed-width</code> constrains content to the grid's width and margins without
  becoming a grid itself — handy for prose or a single centred column that should
  line up with the rest of the page.
</p>
<Example
  block
  code={`<div class="ow-fixed-width">
  Centred and capped at the grid's max-width.
</div>`}
>
  <div class="w-full">
    <div
      class="ow-fixed-width rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm"
    >
      Centred and capped at the grid's max-width.
    </div>
  </div>
</Example>

<h2 id="fluid-breakout" class="ow-heading-2">Fluid breakout</h2>
<p>
  The fluid-breakout layout lets dense content bleed past the grid's margins. A
  <code>ow-fluid-breakout</code> wrapper is a single padded column below the
  large breakpoint; above it, it becomes a capped centre area with a flexible
  <code>ow-fluid-breakout-aside</code> on either side. The
  <code>ow-fluid-breakout-main</code> area auto-fills equal items across the page,
  fitting more than the regular grid would allow.
</p>
<Example
  block
  code={`<div class="ow-fluid-breakout">
  <aside class="ow-fluid-breakout-aside">Filters</aside>
  <div class="ow-fluid-breakout-main">
    <article class="ow-fluid-breakout-item">Card 1</article>
    <article class="ow-fluid-breakout-item">Card 2</article>
    <article class="ow-fluid-breakout-item">Card 3</article>
  </div>
</div>`}
>
  <div class="ow-fluid-breakout w-full">
    <aside
      class="ow-fluid-breakout-aside rounded bg-[color-mix(in_srgb,currentColor_6%,transparent)] p-4 text-sm font-semibold"
    >
      Filters
    </aside>
    <div class="ow-fluid-breakout-main gap-3">
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 1
      </article>
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 2
      </article>
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 3
      </article>
    </div>
  </div>
</Example>

<h2 id="fluid-breakout-full-width" class="ow-heading-2">Full-width breakout</h2>
<p>
  With no aside, add <code>is-full-width</code> to the main area so it spans all three
  columns — useful for a wide table or chart that would otherwise be truncated.
</p>
<Example
  block
  code={`<div class="ow-fluid-breakout">
  <div class="ow-fluid-breakout-main is-full-width">
    <article class="ow-fluid-breakout-item">Card 1</article>
    <article class="ow-fluid-breakout-item">Card 2</article>
    <article class="ow-fluid-breakout-item">Card 3</article>
    <article class="ow-fluid-breakout-item">Card 4</article>
  </div>
</div>`}
>
  <div class="ow-fluid-breakout w-full">
    <div class="ow-fluid-breakout-main is-full-width gap-3">
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 1
      </article>
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 2
      </article>
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 3
      </article>
      <article
        class="ow-fluid-breakout-item min-h-20 rounded bg-[color-mix(in_srgb,currentColor_10%,transparent)] p-4 text-sm font-semibold"
      >
        Card 4
      </article>
    </div>
  </div>
</Example>
