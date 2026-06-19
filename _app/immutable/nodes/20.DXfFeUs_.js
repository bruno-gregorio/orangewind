import{a as p,f as w}from"../chunks/DLhIqdvp.js";import{e as $,f as q,t as m,c as s,s as i,r as u}from"../chunks/Cjeq8u6e.js";import{d as D}from"../chunks/BYU81E74.js";import{s as l}from"../chunks/BXUcxCK4.js";import{E as g}from"../chunks/CDnnywVE.js";var C=w('<div class="grid min-h-56 content-start"><span class="ow-contextual-menu"><button type="button" class="ow-btn ow-contextual-menu-toggle" aria-controls="right-menu" aria-haspopup="true">Align right</button> <span class="ow-contextual-menu-dropdown" id="right-menu"><span class="ow-contextual-menu-group"><button type="button" class="ow-contextual-menu-link">Commission</button> <button type="button" class="ow-contextual-menu-link">Acquire</button> <button type="button" class="ow-contextual-menu-link">Deploy</button></span></span></span></div>'),T=w('<div class="grid min-h-56 content-start"><span class="ow-contextual-menu-left"><button type="button" class="ow-btn ow-contextual-menu-toggle" aria-controls="left-menu" aria-haspopup="true">Align left</button> <span class="ow-contextual-menu-dropdown" id="left-menu"><span class="ow-contextual-menu-group"><button type="button" class="ow-contextual-menu-link">Commission</button> <button type="button" class="ow-contextual-menu-link">Acquire</button> <button type="button" class="ow-contextual-menu-link">Deploy</button></span></span></span></div>'),E=w('<div class="grid min-h-56 content-start"><span class="ow-contextual-menu-left"><button type="button" class="ow-btn-positive ow-contextual-menu-toggle ow-has-icon" aria-controls="indicator-menu" aria-haspopup="true"><span>Take action</span> <i class="ow-icon-chevron-down ow-contextual-menu-indicator" aria-hidden="true"></i></button> <span class="ow-contextual-menu-dropdown" id="indicator-menu"><span class="ow-contextual-menu-group"><a href="#commission" class="ow-contextual-menu-link">Commission</a> <a href="#acquire" class="ow-contextual-menu-link">Acquire</a> <a href="#deploy" class="ow-contextual-menu-link">Deploy</a></span></span></span></div>'),P=w(`<div class="grid min-h-72 place-items-start rounded border border-ow-surface-border p-8"><span class="ow-contextual-menu-left"><button type="button" class="ow-btn ow-contextual-menu-toggle" aria-controls="headline-menu" aria-haspopup="true">Take action…</button> <span class="ow-contextual-menu-dropdown" id="headline-menu"><span class="ow-contextual-menu-group"><button type="button" class="ow-contextual-menu-link">Commission</button> <button type="button" class="ow-contextual-menu-link">Acquire</button> <button type="button" class="ow-contextual-menu-link">Deploy</button></span> <span class="ow-contextual-menu-group"><button type="button" class="ow-contextual-menu-link">Rescue mode</button> <button type="button" class="ow-contextual-menu-link">Mark broken</button></span></span></span></div> <p>A contextual menu reveals a dropdown of related actions from a toggle button.
  Toggle visibility by setting <code>aria-hidden</code> on the <code>ow-contextual-menu-dropdown</code>, and reflect the open state with <code>aria-expanded</code> on the toggle. Group related links with <code>ow-contextual-menu-group</code>; a divider appears between groups.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>A bare <code>ow-contextual-menu</code> aligns its dropdown to the right edge
  of the toggle. Each entry is an <code>ow-contextual-menu-link</code> — use a <code>&lt;button&gt;</code> for actions or an <code>&lt;a&gt;</code> for links.</p> <!> <h2 id="alignment" class="ow-heading-2">Alignment</h2> <p>Use <code>ow-contextual-menu-left</code> to align the dropdown to the toggle's
  left edge, or <code>ow-contextual-menu-center</code> to centre it. The base <code>ow-contextual-menu</code> aligns right.</p> <!> <h2 id="indicator" class="ow-heading-2">With an indicator</h2> <p>Add an <code>ow-contextual-menu-indicator</code> chevron alongside the label
  (on an <code>ow-has-icon</code> toggle). It rotates 180° while the menu is expanded,
  signalling the current state.</p> <!>`,1);function R(_){const n=$({headline:!1,left:!1,right:!1,indicator:!1});function r(e){const d=n[e];for(const t of Object.keys(n))n[t]=!1;n[e]=!d}var x=P(),b=q(x),f=s(b),h=s(f);h.__click=()=>r("headline");var y=i(h,2);u(f),u(b);var v=i(b,8);g(v,{code:`<span class="ow-contextual-menu">
  <button
    class="ow-btn ow-contextual-menu-toggle"
    aria-controls="menu-right"
    aria-expanded="false"
    aria-haspopup="true"
  >
    Align right
  </button>
  <span class="ow-contextual-menu-dropdown" id="menu-right" aria-hidden="true">
    <span class="ow-contextual-menu-group">
      <button class="ow-contextual-menu-link">Commission</button>
      <button class="ow-contextual-menu-link">Acquire</button>
      <button class="ow-contextual-menu-link">Deploy</button>
    </span>
  </span>
</span>`,children:(e,d)=>{var t=C(),a=s(t),o=s(a);o.__click=()=>r("right");var c=i(o,2);u(a),u(t),m(()=>{l(o,"aria-expanded",n.right),l(c,"aria-hidden",!n.right)}),p(e,t)},$$slots:{default:!0}});var k=i(v,6);g(k,{code:`<span class="ow-contextual-menu-left">
  <button class="ow-btn ow-contextual-menu-toggle" aria-controls="menu-left" aria-expanded="false" aria-haspopup="true">
    Align left
  </button>
  <span class="ow-contextual-menu-dropdown" id="menu-left" aria-hidden="true">
    <span class="ow-contextual-menu-group">
      <button class="ow-contextual-menu-link">Commission</button>
      <button class="ow-contextual-menu-link">Acquire</button>
      <button class="ow-contextual-menu-link">Deploy</button>
    </span>
  </span>
</span>`,children:(e,d)=>{var t=T(),a=s(t),o=s(a);o.__click=()=>r("left");var c=i(o,2);u(a),u(t),m(()=>{l(o,"aria-expanded",n.left),l(c,"aria-hidden",!n.left)}),p(e,t)},$$slots:{default:!0}});var A=i(k,6);g(A,{code:`<span class="ow-contextual-menu-left">
  <button class="ow-btn-positive ow-contextual-menu-toggle ow-has-icon" aria-controls="menu-indicator" aria-expanded="false" aria-haspopup="true">
    <span>Take action</span>
    <i class="ow-icon-chevron-down ow-contextual-menu-indicator" aria-hidden="true"></i>
  </button>
  <span class="ow-contextual-menu-dropdown" id="menu-indicator" aria-hidden="true">
    <span class="ow-contextual-menu-group">
      <a href="#commission" class="ow-contextual-menu-link">Commission</a>
      <a href="#acquire" class="ow-contextual-menu-link">Acquire</a>
      <a href="#deploy" class="ow-contextual-menu-link">Deploy</a>
    </span>
  </span>
</span>`,children:(e,d)=>{var t=E(),a=s(t),o=s(a);o.__click=()=>r("indicator");var c=i(o,2);u(a),u(t),m(()=>{l(o,"aria-expanded",n.indicator),l(c,"aria-hidden",!n.indicator)}),p(e,t)},$$slots:{default:!0}}),m(()=>{l(h,"aria-expanded",n.headline),l(y,"aria-hidden",!n.headline)}),p(_,x)}D(["click"]);export{R as component};
