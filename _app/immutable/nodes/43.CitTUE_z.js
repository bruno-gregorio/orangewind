import{a as n,f as e}from"../chunks/BloWK6qd.js";import{e as $,s,f as A,c as d,t as y,r as c}from"../chunks/Cjeq8u6e.js";import{d as G}from"../chunks/BANAuLgK.js";import{s as k}from"../chunks/BXUcxCK4.js";import{E as o}from"../chunks/CZfo3WOY.js";var T=e('<div class="ow-side-navigation w-full max-w-xs"><nav class="ow-side-navigation-drawer" aria-label="Default side"><h3 class="ow-side-navigation-heading">Introduction</h3> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#about">About</a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#status">Link with status <span class="ow-side-navigation-status"><i class="ow-icon-error"></i></span></a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#children">Link with children</a> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#second">Second level link</a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" aria-current="page" href="#active">Active link</a></li></ul></li></ul></nav></div>'),D=e('<div class="ow-side-navigation ow-side-navigation-icons w-full max-w-xs"><nav class="ow-side-navigation-drawer" aria-label="Icon side"><h3 class="ow-side-navigation-heading">Group heading</h3> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#info"><i class="ow-icon-information ow-side-navigation-icon"></i> First level link</a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#search"><i class="ow-icon-search ow-side-navigation-icon"></i> Searchable section <span class="ow-side-navigation-status"><span class="ow-chip-information ow-is-dense">Updated</span></span></a></li></ul></nav></div>'),I=e('<div class="ow-side-navigation ow-side-navigation-accordion w-full max-w-xs"><nav class="ow-side-navigation-drawer" aria-label="Accordion side"><h3 class="ow-side-navigation-heading">Machines</h3> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" aria-current="page" href="#commission">Commission machines</a></li> <li class="ow-side-navigation-item"><button type="button" class="ow-side-navigation-accordion-button">Testing</button>  <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#network">Network testing</a></li></ul></li></ul></nav></div>'),L=e('<div class="ow-side-navigation ow-side-navigation-raw-html w-full max-w-xs"><nav class="ow-side-navigation-drawer" aria-label="Raw HTML side"><h3>Group heading</h3> <ul><li><a href="#one">First level link</a></li> <li><strong>Text item with children</strong> <ul><li><a href="#two">Second level link</a></li> <li><a class="ow-is-active" href="#active">Active link</a></li></ul></li></ul></nav></div>'),M=e('<div class="dark rounded bg-zinc-950 p-4"><div class="ow-side-navigation w-full max-w-xs bg-transparent"><nav class="ow-side-navigation-drawer" aria-label="Dark side"><h3 class="ow-side-navigation-heading">Documentation</h3> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" aria-current="page" href="#start">Getting started</a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#guides">Guides</a></li></ul></nav></div></div>'),S=e(`<div class="rounded border border-ow-surface-border p-8"><div class="ow-side-navigation max-w-xs"><nav class="ow-side-navigation-drawer" aria-label="Documentation"><h3 class="ow-side-navigation-heading">Introduction</h3> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" aria-current="page" href="#getting-started">Getting started</a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#install">Installation <span class="ow-side-navigation-status"><span class="ow-chip-positive ow-is-dense">New</span></span></a></li> <li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#config">Configuration</a> <ul class="ow-side-navigation-list"><li class="ow-side-navigation-item"><a class="ow-side-navigation-link" href="#env">Environment variables</a></li> <li class="ow-side-navigation-item"><span class="ow-side-navigation-text">Secrets</span></li></ul></li></ul></nav></div></div> <p>A side navigation is a vertical list of grouped, optionally nested links for
  the secondary navigation of a page. Below the large breakpoint the <code>ow-side-navigation-drawer</code> becomes an off-canvas panel that slides in
  over an overlay; on large screens it is a static column. This very docs site's left-hand
  navigation is built from this component.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>Each list item is a <code>ow-side-navigation-item</code> holding a <code>ow-side-navigation-link</code>, a plain <code>ow-side-navigation-text</code>, or a nested <code>ow-side-navigation-list</code>. Mark the active page with <code>aria-current="page"</code>; a <code>ow-side-navigation-status</code> slot right-aligns an icon or chip. Group the list under a <code>ow-side-navigation-heading</code>.</p> <!> <h2 id="icons" class="ow-heading-2">With icons</h2> <p>Add <code>ow-side-navigation-icons</code> to the root and an <code>ow-side-navigation-icon</code> to each link's <code>&lt;i&gt;</code>.
  The extra indentation reserves room so labels line up whether or not an item
  has an icon.</p> <!> <h2 id="accordion" class="ow-heading-2">Accordion</h2> <p>Add <code>ow-side-navigation-accordion</code> and use a <code>ow-side-navigation-accordion-button</code> to collapse a group. Toggle
  the button's <code>aria-expanded</code> and mirror it on the sub-list to animate
  it open and closed.</p> <!> <h2 id="raw-html" class="ow-heading-2">Raw HTML</h2> <p>Add <code>ow-side-navigation-raw-html</code> to style plain markup emitted by
  an external service through bare element selectors — no per-element classes
  needed. Mark an active link with <code>ow-is-active</code>.</p> <!> <h2 id="dark" class="ow-heading-2">Dark</h2> <p>Inside a <code>dark</code> context the navigation recolours its hover, active
  and border tints. Wrap the component (or any ancestor) in the <code>dark</code> class to opt in.</p> <!>`,1);function N(b){const t=$({testing:!0});var v=S(),g=s(A(v),8);o(g,{block:!0,code:`<div class="ow-side-navigation">
  <nav class="ow-side-navigation-drawer" aria-label="Default side">
    <h3 class="ow-side-navigation-heading">Introduction</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#about">About</a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#status">
          Link with status
          <span class="ow-side-navigation-status">
            <i class="ow-icon-error"></i>
          </span>
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#children">
          Link with children
        </a>
        <ul class="ow-side-navigation-list">
          <li class="ow-side-navigation-item">
            <a class="ow-side-navigation-link" href="#second">
              Second level link
            </a>
          </li>
          <li class="ow-side-navigation-item">
            <a
              class="ow-side-navigation-link"
              aria-current="page"
              href="#active"
            >
              Active link
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`,children:(a,l)=>{var i=T();n(a,i)},$$slots:{default:!0}});var w=s(g,6);o(w,{block:!0,code:`<div class="ow-side-navigation ow-side-navigation-icons">
  <nav class="ow-side-navigation-drawer" aria-label="Icon side">
    <h3 class="ow-side-navigation-heading">Group heading</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#info">
          <i class="ow-icon-information ow-side-navigation-icon"></i>
          First level link
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#search">
          <i class="ow-icon-search ow-side-navigation-icon"></i>
          Searchable section
          <span class="ow-side-navigation-status">
            <span class="ow-chip-information ow-is-dense">Updated</span>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</div>`,children:(a,l)=>{var i=D();n(a,i)},$$slots:{default:!0}});var h=s(w,6);o(h,{block:!0,code:`<div class="ow-side-navigation ow-side-navigation-accordion">
  <nav class="ow-side-navigation-drawer" aria-label="Accordion side">
    <h3 class="ow-side-navigation-heading">Machines</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" aria-current="page" href="#commission">
          Commission machines
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <button
          type="button"
          class="ow-side-navigation-accordion-button"
          aria-expanded="true"
        >
          Testing
        </button>
        <ul class="ow-side-navigation-list" aria-expanded="true">
          <li class="ow-side-navigation-item">
            <a class="ow-side-navigation-link" href="#network">
              Network testing
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`,children:(a,l)=>{var i=I(),p=d(i),m=s(d(p),2),f=s(d(m),2),r=d(f);r.__click=()=>t.testing=!t.testing;var _=s(r,2);c(f),c(m),c(p),c(i),y(()=>{k(r,"aria-expanded",t.testing?"true":"false"),k(_,"aria-expanded",t.testing?"true":"false")}),n(a,i)},$$slots:{default:!0}});var u=s(h,6);o(u,{block:!0,code:`<div class="ow-side-navigation ow-side-navigation-raw-html">
  <nav class="ow-side-navigation-drawer" aria-label="Raw HTML side">
    <h3>Group heading</h3>
    <ul>
      <li><a href="#one">First level link</a></li>
      <li>
        <strong>Text item with children</strong>
        <ul>
          <li><a href="#two">Second level link</a></li>
          <li><a class="ow-is-active" href="#active">Active link</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`,children:(a,l)=>{var i=L();n(a,i)},$$slots:{default:!0}});var x=s(u,6);o(x,{block:!0,code:`<div class="ow-side-navigation">
  <nav class="ow-side-navigation-drawer" aria-label="Dark side">
    <h3 class="ow-side-navigation-heading">Documentation</h3>
    <ul class="ow-side-navigation-list">
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" aria-current="page" href="#start">
          Getting started
        </a>
      </li>
      <li class="ow-side-navigation-item">
        <a class="ow-side-navigation-link" href="#guides">Guides</a>
      </li>
    </ul>
  </nav>
</div>`,children:(a,l)=>{var i=M();n(a,i)},$$slots:{default:!0}}),n(b,v)}G(["click"]);export{N as component};
