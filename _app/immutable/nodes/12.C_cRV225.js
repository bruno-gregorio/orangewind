import{a as r,f as s}from"../chunks/DLhIqdvp.js";import"../chunks/Nz-WpKIz.js";import{s as l,f as n}from"../chunks/Cjeq8u6e.js";import{E as o}from"../chunks/CDnnywVE.js";var u=s('<nav class="ow-breadcrumbs" aria-label="Breadcrumb"><ol class="ow-breadcrumbs-list"><li class="ow-breadcrumbs-item"><a href="#overview">Overview</a></li> <li class="ow-breadcrumbs-item"><a href="#features">Features</a></li> <li class="ow-breadcrumbs-item"><a href="#managed">Managed</a></li> <li class="ow-breadcrumbs-item">Docs</li></ol></nav>'),h=s('<nav class="ow-breadcrumbs" aria-label="Breadcrumb"><ol class="ow-breadcrumbs-list"><li class="ow-breadcrumbs-item"><a href="#docs">Docs</a></li> <li class="ow-breadcrumbs-item">Breadcrumbs</li></ol></nav>'),w=s('<nav class="ow-breadcrumbs" aria-label="Breadcrumb"><ol class="ow-breadcrumbs-list"><li class="ow-breadcrumbs-item"><a href="#documentation">Documentation home</a></li> <li class="ow-breadcrumbs-item"><a href="#operators">Charmed Operators</a></li> <li class="ow-breadcrumbs-item"><a href="#production">Production deployment and release management</a></li> <li class="ow-breadcrumbs-item">Recovery runbook</li></ol></nav>'),p=s(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><nav class="ow-breadcrumbs" aria-label="Breadcrumb"><ol class="ow-breadcrumbs-list"><li class="ow-breadcrumbs-item"><a href="#overview">Overview</a></li> <li class="ow-breadcrumbs-item"><a href="#features">Features</a></li> <li class="ow-breadcrumbs-item"><a href="#managed">Managed</a></li> <li class="ow-breadcrumbs-item">Docs</li></ol></nav></div> <p>Breadcrumbs show the user's location within the site hierarchy and let them
  step back up the trail. Wrap the trail in a <code>&lt;nav&gt;</code> with an
  accessible label; the <code>/</code> separators are supplied by CSS, so the markup
  stays clean.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>Use an ordered list of <code>ow-breadcrumbs-item</code> elements. Each step except
  the current page is a link; the final item is plain text marking the page the user
  is on.</p> <!> <h2 id="single-level" class="ow-heading-2">Single level</h2> <p>A shallow trail can be just one link back to the parent followed by the
  current page.</p> <!> <h2 id="long-labels" class="ow-heading-2">Long labels</h2> <p>Separators are positioned in CSS, so longer labels wrap naturally inside the
  trail without breaking the layout.</p> <!>`,1);function y(d){var i=p(),c=l(n(i),8);o(c,{code:`<nav class="ow-breadcrumbs" aria-label="Breadcrumb">
  <ol class="ow-breadcrumbs-list">
    <li class="ow-breadcrumbs-item"><a href="/overview">Overview</a></li>
    <li class="ow-breadcrumbs-item"><a href="/features">Features</a></li>
    <li class="ow-breadcrumbs-item"><a href="/managed">Managed</a></li>
    <li class="ow-breadcrumbs-item">Docs</li>
  </ol>
</nav>`,children:(a,b)=>{var e=u();r(a,e)},$$slots:{default:!0}});var t=l(c,6);o(t,{code:`<nav class="ow-breadcrumbs" aria-label="Breadcrumb">
  <ol class="ow-breadcrumbs-list">
    <li class="ow-breadcrumbs-item"><a href="/docs">Docs</a></li>
    <li class="ow-breadcrumbs-item">Breadcrumbs</li>
  </ol>
</nav>`,children:(a,b)=>{var e=h();r(a,e)},$$slots:{default:!0}});var m=l(t,6);o(m,{code:`<nav class="ow-breadcrumbs" aria-label="Breadcrumb">
  <ol class="ow-breadcrumbs-list">
    <li class="ow-breadcrumbs-item">
      <a href="/documentation">Documentation home</a>
    </li>
    <li class="ow-breadcrumbs-item">
      <a href="/operators">Charmed Operators</a>
    </li>
    <li class="ow-breadcrumbs-item">
      <a href="/production">Production deployment and release management</a>
    </li>
    <li class="ow-breadcrumbs-item">Recovery runbook</li>
  </ol>
</nav>`,children:(a,b)=>{var e=w();r(a,e)},$$slots:{default:!0}}),r(d,i)}export{y as component};
