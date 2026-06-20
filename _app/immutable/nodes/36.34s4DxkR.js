import{a as t,f as l}from"../chunks/BloWK6qd.js";import{f as C,h as E,g,t as A,b as I,s as o,c as n,r as s,n as y}from"../chunks/Cjeq8u6e.js";import{d as L}from"../chunks/BANAuLgK.js";import{s as O}from"../chunks/BXUcxCK4.js";import{s as M}from"../chunks/DAr1n4Qa.js";import{E as d}from"../chunks/CZfo3WOY.js";var W=l('<header class="ow-navigation w-full"><div class="ow-navigation-row"><div class="ow-navigation-banner"><div class="ow-navigation-tagged-logo"><a class="ow-navigation-link" href="#home"><span class="ow-navigation-logo-tag"><i class="ow-navigation-logo-icon ow-icon-blueprint"></i></span> <span class="ow-navigation-logo-title">Orangewind</span></a></div></div></div></header>'),B=l('<header class="ow-navigation-reduced w-full"><div class="ow-navigation-row"><div class="ow-navigation-banner"><div class="ow-navigation-tagged-logo"><a class="ow-navigation-link" href="#home"><span class="ow-navigation-logo-title">Orangewind Labs</span></a></div></div> <nav class="ow-navigation-nav"><ul class="ow-navigation-items ow-is-right-shifted"><li class="ow-navigation-item"><a class="ow-navigation-link" href="#about">About</a></li> <li class="ow-navigation-item"><a class="ow-navigation-link" href="#contact">Contact</a></li></ul></nav></div></header>'),R=l('<nav class="ow-navigation ow-navigation-nav w-full"><ul class="ow-navigation-items"><li class="ow-navigation-item ow-is-selected"><a class="ow-navigation-link" href="#products">Products</a></li> <li class="ow-navigation-item"><a class="ow-navigation-link" href="#pricing">Pricing</a></li> <li class="ow-navigation-item"><a class="ow-navigation-link" href="#docs">Docs</a></li></ul> <ul class="ow-navigation-items ow-is-right-shifted"><li class="ow-navigation-item"><a class="ow-navigation-link" href="#login">Sign in</a></li></ul></nav>'),U=l('<nav class="ow-navigation ow-navigation-nav w-full"><ul class="ow-navigation-items"><li class="ow-navigation-item-dropdown-toggle ow-is-active"><button type="button" class="ow-navigation-link" aria-expanded="true">Solutions</button> <ul class="ow-navigation-dropdown" aria-hidden="false"><li><a class="ow-navigation-dropdown-item" href="#cloud">Cloud</a></li> <li><a class="ow-navigation-dropdown-item" href="#edge">Edge</a></li> <li><a class="ow-navigation-dropdown-item" href="#iot">IoT</a></li></ul></li></ul></nav>'),j=l('<div class="dark w-full"><header class="ow-navigation w-full"><div class="ow-navigation-row"><div class="ow-navigation-banner"><div class="ow-navigation-tagged-logo"><a class="ow-navigation-link" href="#home"><span class="ow-navigation-logo-tag"><i class="ow-navigation-logo-icon ow-icon-blueprint"></i></span> <span class="ow-navigation-logo-title">Orangewind</span></a></div></div> <nav class="ow-navigation-nav"><ul class="ow-navigation-items"><li class="ow-navigation-item ow-is-selected"><a class="ow-navigation-link" href="#products">Products</a></li> <li class="ow-navigation-item"><a class="ow-navigation-link" href="#docs">Docs</a></li></ul></nav></div></header></div>'),q=l(`<div class="overflow-hidden rounded border border-ow-surface-border"><div class="max-h-80 overflow-auto"><header class="ow-navigation"><div class="ow-navigation-row"><div class="ow-navigation-banner"><div class="ow-navigation-tagged-logo"><a class="ow-navigation-link" href="#home"><span class="ow-navigation-logo-tag"><i class="ow-navigation-logo-icon ow-icon-blueprint"></i></span> <span class="ow-navigation-logo-title">Orangewind</span></a></div></div> <nav class="ow-navigation-nav"><ul class="ow-navigation-items"><li class="ow-navigation-item ow-is-selected"><a class="ow-navigation-link" href="#products">Products</a></li> <li><button type="button" class="ow-navigation-link">Solutions</button> <ul class="ow-navigation-dropdown"><li><a class="ow-navigation-dropdown-item" href="#cloud">Cloud</a></li> <li><a class="ow-navigation-dropdown-item" href="#edge">Edge</a></li></ul></li> <li class="ow-navigation-item"><a class="ow-navigation-link" href="#docs">Docs</a></li></ul> <ul class="ow-navigation-items ow-is-right-shifted"><li class="ow-navigation-item"><a class="ow-navigation-link" href="#login">Sign in</a></li></ul></nav></div></header></div></div> <p>The navigation bar holds a site's primary links and branding. The real
  component is full-width and sticks to the top of the viewport with <code>ow-is-sticky</code>; below the large breakpoint it collapses behind <strong>Menu</strong> and <strong>Search</strong> toggles. The previews here are
  bounded inside a scrollable box so they never take over the page.</p> <h2 id="banner" class="ow-heading-2">Banner and tagged logo</h2> <p>A <code>ow-navigation-banner</code> holds the logo and the mobile toggles. The
  tagged logo pairs the orange <code>ow-navigation-logo-tag</code> mark with a <code>ow-navigation-logo-title</code>.</p> <!> <h2 id="reduced" class="ow-heading-2">Reduced</h2> <p>A <code>ow-navigation-reduced</code> bar is a secondary, muted strip that sits above
  the main bar — useful for cross-site or account links. Its orange logo tag is hidden
  automatically.</p> <!> <h2 id="items" class="ow-heading-2">Items and selected state</h2> <p>Links live in a <code>ow-navigation-items</code> list. Mark the current page
  with <code>ow-is-selected</code> on its item, and push a list (or a single
  item) to the trailing edge with <code>ow-is-right-shifted</code>.</p> <!> <h2 id="dropdown" class="ow-heading-2">Dropdown</h2> <p>Use <code>ow-navigation-item-dropdown-toggle</code> for a link that reveals a <code>ow-navigation-dropdown</code> panel. Toggle <code>ow-is-active</code> on the
  item to open it; the chevron rotates to match.</p> <!> <h2 id="dark" class="ow-heading-2">Dark</h2> <p>Within a <code>dark</code> context the bar recolours its surface and text.
  Wrap the navigation (or any ancestor) in the <code>dark</code> class to opt in.</p> <!>`,1);function N(D){let e=I(!1);var h=q(),r=C(h),u=n(r),p=n(u),m=n(p),f=o(n(m),2),b=n(f),v=o(n(b),2);let k;var w=n(v);w.__click=()=>E(e,!g(e));var S=o(w,2);s(v),y(2),s(b),y(2),s(f),s(m),s(p),s(u),s(r);var _=o(r,8);d(_,{code:`<header class="ow-navigation">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="#home">
          <span class="ow-navigation-logo-tag">
            <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
          </span>
          <span class="ow-navigation-logo-title">Orangewind</span>
        </a>
      </div>
    </div>
  </div>
</header>`,children:(a,c)=>{var i=W();t(a,i)},$$slots:{default:!0}});var $=o(_,6);d($,{code:`<header class="ow-navigation-reduced">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="#home">
          <span class="ow-navigation-logo-title">Orangewind Labs</span>
        </a>
      </div>
    </div>
    <nav class="ow-navigation-nav">
      <ul class="ow-navigation-items ow-is-right-shifted">
        <li class="ow-navigation-item">
          <a class="ow-navigation-link" href="#about">About</a>
        </li>
        <li class="ow-navigation-item">
          <a class="ow-navigation-link" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`,children:(a,c)=>{var i=B();t(a,i)},$$slots:{default:!0}});var P=o($,6);d(P,{code:`<nav class="ow-navigation-nav">
  <ul class="ow-navigation-items">
    <li class="ow-navigation-item ow-is-selected">
      <a class="ow-navigation-link" href="#products">Products</a>
    </li>
    <li class="ow-navigation-item">
      <a class="ow-navigation-link" href="#pricing">Pricing</a>
    </li>
    <li class="ow-navigation-item">
      <a class="ow-navigation-link" href="#docs">Docs</a>
    </li>
  </ul>
  <ul class="ow-navigation-items ow-is-right-shifted">
    <li class="ow-navigation-item">
      <a class="ow-navigation-link" href="#login">Sign in</a>
    </li>
  </ul>
</nav>`,children:(a,c)=>{var i=R();t(a,i)},$$slots:{default:!0}});var x=o(P,6);d(x,{code:`<ul class="ow-navigation-items">
  <li class="ow-navigation-item-dropdown-toggle ow-is-active">
    <button type="button" class="ow-navigation-link" aria-expanded="true">
      Solutions
    </button>
    <ul class="ow-navigation-dropdown" aria-hidden="false">
      <li><a class="ow-navigation-dropdown-item" href="#cloud">Cloud</a></li>
      <li><a class="ow-navigation-dropdown-item" href="#edge">Edge</a></li>
      <li><a class="ow-navigation-dropdown-item" href="#iot">IoT</a></li>
    </ul>
  </li>
</ul>`,children:(a,c)=>{var i=U();t(a,i)},$$slots:{default:!0}});var T=o(x,6);d(T,{code:`<header class="ow-navigation">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="#home">
          <span class="ow-navigation-logo-tag">
            <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
          </span>
          <span class="ow-navigation-logo-title">Orangewind</span>
        </a>
      </div>
    </div>
    <nav class="ow-navigation-nav">
      <ul class="ow-navigation-items">
        <li class="ow-navigation-item ow-is-selected">
          <a class="ow-navigation-link" href="#products">Products</a>
        </li>
        <li class="ow-navigation-item">
          <a class="ow-navigation-link" href="#docs">Docs</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`,children:(a,c)=>{var i=j();t(a,i)},$$slots:{default:!0}}),A(()=>{k=M(v,1,"ow-navigation-item-dropdown-toggle",null,k,{"ow-is-active":g(e)}),O(w,"aria-expanded",g(e)),O(S,"aria-hidden",!g(e))}),t(D,h)}L(["click"]);export{N as component};
