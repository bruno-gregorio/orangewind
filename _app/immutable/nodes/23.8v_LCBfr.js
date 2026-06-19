import{a as d,f as l}from"../chunks/BrLxys79.js";import{p as E,s as i,f as I,a as C,c as a,h as v,t as N,g as h,b as A,r as s}from"../chunks/DAFKDzfT.js";import{d as L}from"../chunks/xUn5-6LJ.js";import{c as w,s as p}from"../chunks/B9N1VJ3A.js";import{E as m}from"../chunks/5gGF761m.js";var R=l('<div class="ow-docs grid w-full grid-cols-2 gap-2 [&amp;>*]:rounded [&amp;>*]:border [&amp;>*]:border-ow-surface-border [&amp;>*]:p-3"><header class="ow-docs-header col-span-2 font-medium">ow-docs-header</header> <aside class="ow-docs-sidebar opacity-75">ow-docs-sidebar</aside> <div class="ow-docs-title font-medium">ow-docs-title</div> <div class="ow-docs-meta opacity-75">ow-docs-meta</div> <div class="ow-docs-main opacity-75">ow-docs-main</div> <footer class="ow-docs-footer col-span-2 opacity-75">ow-docs-footer</footer></div>'),q=l(`<pre class="m-0 overflow-x-auto text-sm"><code>.ow-docs &lbrace;
  grid-template-areas:
    'header  header'
    'sidebar title'
    'sidebar meta'
    'sidebar main'
    'footer  footer';
&rbrace;</code></pre>`),z=l('<aside class="ow-toc w-full max-w-xs" aria-label="Table of contents"><div class="ow-toc-section"><h2 class="ow-toc-header">On this page</h2> <nav aria-label="On this page"><ul class="ow-toc-list"><li><a href="#overview">Overview</a></li> <li><a href="#installation">Installation</a></li> <li><a href="#next-steps">Next steps</a></li></ul></nav></div></aside>'),F=l(`<div class="overflow-hidden rounded border border-ow-surface-border"><div class="ow-docs grid h-80 grid-cols-[8rem_1fr] grid-rows-[auto_auto_1fr_auto] gap-px bg-ow-surface-border text-xs [&amp;>*]:bg-ow-background-default" style="grid-template-areas: 'header header' 'sidebar title' 'sidebar main' 'footer footer'"><div class="ow-docs-header flex items-center px-3 py-2 font-medium">header</div> <div class="ow-docs-sidebar overflow-auto p-3 opacity-75">sidebar</div> <div class="ow-docs-title px-3 pt-3 font-medium">title</div> <div class="ow-docs-main overflow-auto p-3 opacity-75">main</div> <div class="ow-docs-footer flex items-center px-3 py-2 opacity-75">footer</div></div></div> <p>The docs layout is the CSS-grid shell behind a documentation site: a header, a
  left side navigation, a content title, a metadata column (the table of
  contents), the main article and a footer. The six <code>ow-docs-*</code> slots
  must be direct children of <code>ow-docs</code>; the grid stays inert until
  the large breakpoint, so on small screens the slots simply stack in source
  order. This very site is built with <code>ow-docs</code>.</p> <h2 id="slots" class="ow-heading-2">Slot markup</h2> <p>Place the six slots directly inside <code>ow-docs</code>. Each is just a named
  grid area, so any content or component can live inside it. The order below is
  the recommended source order.</p> <!> <h2 id="responsive" class="ow-heading-2">Responsive columns</h2> <p>The grid steps up with the viewport. At the large breakpoint it becomes two
  columns — the sidebar pinned left, the title, metadata and content stacked
  beside it. Once there is room for the full grid plus the sidebar, the metadata
  moves into its own right-hand column:</p> <!> <h2 id="toc" class="ow-heading-2">Table of contents</h2> <p>The metadata column usually holds a <code>ow-toc</code> table of contents.
  Links are <code>ow-toc-link</code>; mark the current section with <code>ow-is-active</code>. Inside a wide layout the <code>ow-docs-sticky-container</code> keeps it in view as the article scrolls.</p> <!>`,1);function Q(S,j){E(j,!0);let t=A("#installation");var f=F(),u=i(I(f),8);m(u,{block:!0,code:`<div class="ow-docs">
  <header class="ow-docs-header">…</header>
  <aside class="ow-docs-sidebar">…</aside>
  <div class="ow-docs-title">…</div>
  <div class="ow-docs-meta">…</div>
  <div class="ow-docs-main">…</div>
  <footer class="ow-docs-footer">…</footer>
</div>`,children:(r,g)=>{var e=R();d(r,e)},$$slots:{default:!0}});var b=i(u,6);m(b,{lang:"css",title:"CSS",code:`/* large breakpoint: two columns */
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
}`,children:(r,g)=>{var e=q();d(r,e)},$$slots:{default:!0}});var P=i(b,6);m(P,{block:!0,code:`<aside class="ow-toc" aria-label="Table of contents">
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
</aside>`,children:(r,g)=>{var e=z(),_=a(e),k=i(a(_),2),x=a(k),c=a(x),y=a(c);y.__click=o=>{o.preventDefault(),v(t,"#overview")},s(c);var n=i(c,2),$=a(n);$.__click=o=>{o.preventDefault(),v(t,"#installation")},s(n);var T=i(n,2),O=a(T);O.__click=o=>{o.preventDefault(),v(t,"#next-steps")},s(T),s(x),s(k),s(_),s(e),N((o,B,D)=>{p(y,1,o),p($,1,B),p(O,1,D)},[()=>w(["ow-toc-link",h(t)==="#overview"&&"ow-is-active"].filter(Boolean).join(" ")),()=>w(["ow-toc-link",h(t)==="#installation"&&"ow-is-active"].filter(Boolean).join(" ")),()=>w(["ow-toc-link",h(t)==="#next-steps"&&"ow-is-active"].filter(Boolean).join(" "))]),d(r,e)},$$slots:{default:!0}}),d(S,f),C()}L(["click"]);export{Q as component};
