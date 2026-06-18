<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Active state for the table-of-contents demo.
  let activeToc = $state('#installation')
</script>

<!-- Mandatory headline demonstration: a bounded miniature of the docs grid. The
     six ow-docs-* slots are direct children of .ow-docs; the grid only switches
     on at the large breakpoint, so this preview forces a two-column grid to make
     the slot placement visible inside the box. -->
<div class="overflow-hidden rounded border border-ow-surface-border">
  <div
    class="ow-docs grid h-80 grid-cols-[8rem_1fr] grid-rows-[auto_auto_1fr_auto] gap-px bg-ow-surface-border text-xs [&>*]:bg-ow-background-default"
    style="grid-template-areas: 'header header' 'sidebar title' 'sidebar main' 'footer footer'"
  >
    <div class="ow-docs-header flex items-center px-3 py-2 font-medium">
      header
    </div>
    <div class="ow-docs-sidebar overflow-auto p-3 opacity-75">sidebar</div>
    <div class="ow-docs-title px-3 pt-3 font-medium">title</div>
    <div class="ow-docs-main overflow-auto p-3 opacity-75">main</div>
    <div class="ow-docs-footer flex items-center px-3 py-2 opacity-75">
      footer
    </div>
  </div>
</div>

<p>
  The docs layout is the CSS-grid shell behind a documentation site: a header, a
  left side navigation, a content title, a metadata column (the table of
  contents), the main article and a footer. The six <code>ow-docs-*</code> slots
  must be direct children of <code>ow-docs</code>; the grid stays inert until
  the large breakpoint, so on small screens the slots simply stack in source
  order. This very site is built with <code>ow-docs</code>.
</p>

<h2 id="slots" class="ow-heading-2">Slot markup</h2>
<p>
  Place the six slots directly inside <code>ow-docs</code>. Each is just a named
  grid area, so any content or component can live inside it. The order below is
  the recommended source order.
</p>
<Example
  block
  code={`<div class="ow-docs">
  <header class="ow-docs-header">…</header>
  <aside class="ow-docs-sidebar">…</aside>
  <div class="ow-docs-title">…</div>
  <div class="ow-docs-meta">…</div>
  <div class="ow-docs-main">…</div>
  <footer class="ow-docs-footer">…</footer>
</div>`}
>
  <div
    class="ow-docs grid w-full grid-cols-2 gap-2 [&>*]:rounded [&>*]:border [&>*]:border-ow-surface-border [&>*]:p-3"
  >
    <header class="ow-docs-header col-span-2 font-medium">
      ow-docs-header
    </header>
    <aside class="ow-docs-sidebar opacity-75">ow-docs-sidebar</aside>
    <div class="ow-docs-title font-medium">ow-docs-title</div>
    <div class="ow-docs-meta opacity-75">ow-docs-meta</div>
    <div class="ow-docs-main opacity-75">ow-docs-main</div>
    <footer class="ow-docs-footer col-span-2 opacity-75">ow-docs-footer</footer>
  </div>
</Example>

<h2 id="responsive" class="ow-heading-2">Responsive columns</h2>
<p>
  The grid steps up with the viewport. At the large breakpoint it becomes two
  columns — the sidebar pinned left, the title, metadata and content stacked
  beside it. Once there is room for the full grid plus the sidebar, the metadata
  moves into its own right-hand column:
</p>
<Example
  lang="css"
  title="CSS"
  code={`/* large breakpoint: two columns */
.ow-docs {
  grid-template-areas:
    'header  header'
    'sidebar title'
    'sidebar meta'
    'sidebar main'
    'footer  footer';
  grid-template-columns: var(--ow-docs-sidebar-width) minmax(0, 1fr);
}

/* wider: three columns, metadata gets its own column */
.ow-docs {
  grid-template-areas:
    'header  header header'
    'sidebar title  meta'
    'sidebar main   meta'
    'footer  footer footer';
}`}
>
  <pre class="m-0 overflow-x-auto text-sm"><code
      >.ow-docs &lbrace;
  grid-template-areas:
    'header  header'
    'sidebar title'
    'sidebar meta'
    'sidebar main'
    'footer  footer';
&rbrace;</code
    ></pre>
</Example>

<h2 id="toc" class="ow-heading-2">Table of contents</h2>
<p>
  The metadata column usually holds a <code>ow-toc</code> table of contents.
  Links are <code>ow-toc-link</code>; mark the current section with
  <code>ow-is-active</code>. Inside a wide layout the
  <code>ow-docs-sticky-container</code> keeps it in view as the article scrolls.
</p>
<Example
  block
  code={`<aside class="ow-toc" aria-label="Table of contents">
  <div class="ow-toc-section">
    <h2 class="ow-toc-header">On this page</h2>
    <nav aria-label="On this page">
      <ul class="ow-toc-list">
        <li>
          <a class="ow-toc-link" href="#overview">Overview</a>
        </li>
        <li>
          <a class="ow-toc-link ow-is-active" href="#installation">
            Installation
          </a>
        </li>
        <li>
          <a class="ow-toc-link" href="#next-steps">Next steps</a>
        </li>
      </ul>
    </nav>
  </div>
</aside>`}
>
  <aside class="ow-toc w-full max-w-xs" aria-label="Table of contents">
    <div class="ow-toc-section">
      <h2 class="ow-toc-header">On this page</h2>
      <nav aria-label="On this page">
        <ul class="ow-toc-list">
          <li>
            <a
              class={[
                'ow-toc-link',
                activeToc === '#overview' && 'ow-is-active'
              ]
                .filter(Boolean)
                .join(' ')}
              href="#overview"
              onclick={e => {
                e.preventDefault()
                activeToc = '#overview'
              }}
            >
              Overview
            </a>
          </li>
          <li>
            <a
              class={[
                'ow-toc-link',
                activeToc === '#installation' && 'ow-is-active'
              ]
                .filter(Boolean)
                .join(' ')}
              href="#installation"
              onclick={e => {
                e.preventDefault()
                activeToc = '#installation'
              }}
            >
              Installation
            </a>
          </li>
          <li>
            <a
              class={[
                'ow-toc-link',
                activeToc === '#next-steps' && 'ow-is-active'
              ]
                .filter(Boolean)
                .join(' ')}
              href="#next-steps"
              onclick={e => {
                e.preventDefault()
                activeToc = '#next-steps'
              }}
            >
              Next steps
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</Example>
