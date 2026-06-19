import{a as o,f as s}from"../chunks/DLhIqdvp.js";import"../chunks/Nz-WpKIz.js";import{s as i,f as h}from"../chunks/Cjeq8u6e.js";import{E as n}from"../chunks/CDnnywVE.js";var g=s(`<pre class="m-0 overflow-x-auto text-sm"><code>.ow-application &lbrace;
  display: grid;
  grid-template-areas:
    'nav navbar navbar'
    'nav main   aside'
    'nav status status';
&rbrace;</code></pre>`),u=s('<div class="ow-panel w-full rounded border border-ow-surface-border"><div class="ow-panel-header ow-is-sticky"><h4 class="ow-heading-4 ow-panel-title">Applications</h4> <div class="ow-panel-controls"><button type="button" class="ow-btn">Details</button></div></div> <div class="ow-panel-content"><p>Panel body content scrolls beneath the sticky header.</p></div></div>'),m=s('<span class="ow-panel-logo"><i class="ow-panel-logo-icon ow-icon-blueprint" style="color: var(--color-ow-brand)"></i> <span class="text-lg font-light">Orangewind Cloud</span></span>'),b=s('<div class="w-full rounded border border-ow-surface-border p-4"><span class="ow-panel-logo"><i class="ow-panel-logo-icon ow-icon-blueprint" style="color: var(--color-ow-brand)"></i> <span class="text-lg font-light">Orangewind Cloud</span></span></div>'),f=s('<div class="flex flex-wrap gap-2"><span class="ow-chip ow-is-readonly ow-is-inline ow-is-dense"><span class="ow-chip-value">ow-is-narrow</span></span> <span class="ow-chip ow-is-readonly ow-is-inline ow-is-dense"><span class="ow-chip-value">default</span></span> <span class="ow-chip ow-is-readonly ow-is-inline ow-is-dense"><span class="ow-chip-value">ow-is-wide</span></span></div>'),y=s(`<div class="overflow-hidden rounded border border-ow-surface-border"><div class="grid h-96 grid-cols-[12rem_1fr] grid-rows-[auto_1fr_auto]"><header class="row-span-3 overflow-y-auto border-r border-ow-surface-border"><div class="ow-panel"><div class="ow-panel-header"><span class="ow-panel-logo"><i class="ow-panel-logo-icon ow-icon-blueprint" style="color: var(--color-ow-brand)"></i> <span class="text-lg font-light whitespace-nowrap">Cloud</span></span></div> <div class="ow-panel-content grid gap-1"><a class="flex items-center gap-3 rounded-sm bg-zinc-500/15 px-4 py-2 text-sm font-medium no-underline" href="#apps"><i class="ow-icon-applications"></i> <span>Applications</span></a> <a class="flex items-center gap-3 rounded-sm px-4 py-2 text-sm no-underline opacity-75 hover:bg-zinc-500/10" href="#machines"><i class="ow-icon-machines"></i> <span>Machines</span></a> <a class="flex items-center gap-3 rounded-sm px-4 py-2 text-sm no-underline opacity-75 hover:bg-zinc-500/10" href="#settings"><i class="ow-icon-settings"></i> <span>Settings</span></a></div></div></header> <main class="overflow-y-auto"><div class="ow-panel"><div class="ow-panel-header ow-is-sticky items-center gap-4"><h4 class="ow-heading-4 ow-panel-title">Applications</h4> <div class="ow-panel-controls"><button type="button" class="ow-btn-positive ow-has-icon"><i class="ow-icon-plus"></i> <span>Deploy app</span></button></div></div> <div class="ow-panel-content grid gap-4 px-6"><div class="ow-notification-positive ow-notification-inline"><div class="ow-notification-content"><p class="ow-notification-message">web-frontend rolled out with zero downtime.</p></div></div> <div class="grid gap-4 sm:grid-cols-2"><article class="ow-card mb-0 grid content-start gap-1"><p class="text-sm opacity-60">Active apps</p> <p class="text-3xl font-light">12</p></article> <article class="ow-card mb-0 grid content-start gap-1"><p class="text-sm opacity-60">Avg. CPU load</p> <p class="text-3xl font-light">48%</p></article></div></div></div></main> <aside class="border-t border-ow-surface-border"><div class="ow-panel"><div class="flex items-center gap-3 px-6 py-2 text-sm"><span class="ow-chip-positive ow-is-readonly ow-is-inline ow-is-dense"><span class="ow-chip-value">Operational</span></span> <span class="opacity-75">All systems operational</span></div></div></aside></div></div> <p>The application layout is a CSS-grid app shell built from the <code>ow-application</code> container and four named slots — a collapsible
  navigation drawer, the main content, an optional contextual aside and a status
  bar. Because the real shell fills the viewport and slides its drawer in with <code>position: fixed</code>, the previews on this page are deliberately
  bounded; the snippets show the structure to copy, not a full running app.</p> <h2 id="grid-areas" class="ow-heading-2">Grid structure</h2> <p><code>ow-application</code> is a <code>100dvh × 100vw</code> grid whose areas
  are placed by name so the navigation can move between the <code>navbar</code> and <code>nav</code> slots responsively. The template is three columns (navigation,
  main, aside) by three rows (bar, content, status):</p> <!> <h2 id="panels" class="ow-heading-2">Panels</h2> <p>A <code>ow-panel</code> is the single direct child of each slot. It supplies
  the background and splits into a <code>ow-panel-header</code> and a <code>ow-panel-content</code>. Add <code>ow-is-sticky</code> to the header to keep
  it in view while the content scrolls.</p> <!> <h2 id="panel-logo" class="ow-heading-2">Panel logo</h2> <p>A <code>ow-panel-logo</code> sizes its icon to line up with the collapsed drawer's
  icon rail, so the brand stays put as the navigation expands and contracts.</p> <!> <h2 id="navigation" class="ow-heading-2">Navigation drawer</h2> <p>The drawer lives in the <code>nav</code> area. State classes drive its
  responsive behaviour: <code>ow-is-collapsed</code> slides it off-canvas (or
  shrinks it to an icon rail on medium screens), while <code>ow-is-pinned</code> keeps it expanded. Elements tagged <code>ow-is-fading-when-collapsed</code> fade out while the rail is collapsed.</p> <!> <h2 id="aside" class="ow-heading-2">Aside widths</h2> <p>The contextual <code>ow-application-aside</code> is an overlay by default and
  becomes a split panel when <code>ow-is-pinned</code>. Add <code>ow-is-narrow</code> or <code>ow-is-wide</code> to change its pinned width
  (the default derives from an 8-column container).</p> <!>`,1);function A(w){var l=y(),d=i(h(l),8);n(d,{lang:"css",title:"CSS",code:`.ow-application {
  display: grid;
  grid-template-areas:
    'nav navbar navbar'
    'nav main   aside'
    'nav status status';
  grid-template-columns: min-content minmax(0, 1fr) minmax(0, min-content);
  grid-template-rows: min-content 1fr min-content;
  height: 100dvh;
  width: 100vw;
}`,children:(a,t)=>{var e=g();o(a,e)},$$slots:{default:!0}});var c=i(d,6);n(c,{block:!0,code:`<div class="ow-panel">
  <div class="ow-panel-header ow-is-sticky">
    <h4 class="ow-heading-4 ow-panel-title">Applications</h4>
    <div class="ow-panel-controls">
      <button type="button" class="ow-btn">Details</button>
    </div>
  </div>
  <div class="ow-panel-content">
    <p>Panel body content scrolls beneath the sticky header.</p>
  </div>
</div>`,children:(a,t)=>{var e=u();o(a,e)},$$slots:{default:!0}});var r=i(c,6);n(r,{code:`<span class="ow-panel-logo">
  <i class="ow-panel-logo-icon ow-icon-blueprint"></i>
  <span>Orangewind Cloud</span>
</span>`,children:(a,t)=>{var e=m();o(a,e)},$$slots:{default:!0}});var p=i(r,6);n(p,{block:!0,code:`<header class="ow-application-navigation ow-is-collapsed">
  <div class="ow-application-navigation-drawer">
    <div class="ow-panel">
      <div class="ow-panel-header">
        <span class="ow-panel-logo">
          <i class="ow-panel-logo-icon ow-icon-blueprint"></i>
          <span class="ow-is-fading-when-collapsed">Orangewind Cloud</span>
        </span>
      </div>
    </div>
  </div>
</header>`,children:(a,t)=>{var e=b();o(a,e)},$$slots:{default:!0}});var v=i(p,6);n(v,{code:`<aside class="ow-application-aside ow-is-pinned ow-is-narrow">…</aside>
<aside class="ow-application-aside ow-is-pinned">…</aside>
<aside class="ow-application-aside ow-is-pinned ow-is-wide">…</aside>`,children:(a,t)=>{var e=f();o(a,e)},$$slots:{default:!0}}),o(w,l)}export{A as component};
