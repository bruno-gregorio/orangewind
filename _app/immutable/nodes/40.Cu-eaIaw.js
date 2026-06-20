import{a as o,f as c}from"../chunks/BloWK6qd.js";import{b as T,e as E,f as W,t as S,s as l,c as i,g as t,n as x,r as n,h as F}from"../chunks/Cjeq8u6e.js";import{d as z,s as $}from"../chunks/BANAuLgK.js";import{e as I}from"../chunks/DaHokNY7.js";import{s as R}from"../chunks/BXUcxCK4.js";import{E as d}from"../chunks/CZfo3WOY.js";var J=c('<span class="ow-chip"><span class="ow-chip-lead"> </span> <span class="ow-chip-value"> </span> <button type="button" class="ow-chip-dismiss">Remove</button></span>'),j=c('<div class="w-full pb-56"><div class="ow-search-and-filter"><div class="ow-search-and-filter-search-container" data-active="true" data-empty="true"><form class="ow-search-and-filter-box"><label class="sr-only" for="saf">Search and filter</label> <input id="saf" class="ow-search-and-filter-input" type="search" placeholder="Search and filter" autocomplete="off"/> <button type="submit" class="ow-search-and-filter-search-button">Search</button></form></div> <div class="ow-search-and-filter-panel" tabindex="-1"><div class="ow-filter-panel-section"><h5 class="ow-filter-panel-section-heading">Cloud</h5> <div class="ow-filter-panel-section-chips"><button type="button" class="ow-chip"><span class="ow-chip-lead">Cloud</span> <span class="ow-chip-value">Google</span></button> <button type="button" class="ow-chip"><span class="ow-chip-lead">Cloud</span> <span class="ow-chip-value">AWS</span></button></div></div></div></div></div>'),q=c('<div class="w-full"><div class="ow-search-and-filter-search-container" data-active="true" data-empty="false"><span class="ow-chip"><span class="ow-chip-lead">Cloud</span> <span class="ow-chip-value">Google</span> <button type="button" class="ow-chip-dismiss" aria-label="Remove Google">Remove</button></span> <form class="ow-search-and-filter-box"><label class="sr-only" for="saf-selected">Search and filter</label> <input id="saf-selected" class="ow-search-and-filter-input" type="search" placeholder="Search and filter" autocomplete="off"/> <button type="submit" class="ow-search-and-filter-search-button">Search</button></form></div></div>'),B=c('<div class="w-full max-w-md"><div class="ow-filter-panel-section"><h5 class="ow-filter-panel-section-heading">Region</h5> <div class="ow-filter-panel-section-chips"><button type="button" class="ow-chip"><span class="ow-chip-lead">Region</span> <span class="ow-chip-value">us-east1</span></button> <button type="button" class="ow-chip"><span class="ow-chip-lead">Region</span> <span class="ow-chip-value">us-north2</span></button> <button type="button" class="ow-filter-panel-section-counter">+4</button></div></div></div>'),D=c('<div class="w-full max-w-md"><button type="button" class="ow-search-and-filter-selected-count">+4</button></div>'),H=c(`<div class="grid gap-3 rounded border border-ow-surface-border p-8 pb-72"><div class="ow-search-and-filter"><div class="ow-search-and-filter-search-container" data-active="true"><!> <form class="ow-search-and-filter-box"><label class="sr-only" for="hero-saf">Search and filter</label> <input id="hero-saf" class="ow-search-and-filter-input" type="search" name="search" placeholder="Search and filter" autocomplete="off"/> <button type="submit" class="ow-search-and-filter-search-button">Search</button></form></div> <div class="ow-search-and-filter-panel" tabindex="-1"><div class="ow-filter-panel-section"><h5 class="ow-filter-panel-section-heading">Cloud</h5> <div class="ow-filter-panel-section-chips"><button type="button" class="ow-chip"><span class="ow-chip-lead">Cloud</span> <span class="ow-chip-value">Azure</span></button></div></div> <div class="ow-filter-panel-section"><h5 class="ow-filter-panel-section-heading">Owner</h5> <div class="ow-filter-panel-section-chips"><button type="button" class="ow-chip"><span class="ow-chip-lead">Owner</span> <span class="ow-chip-value">foo</span></button> <button type="button" class="ow-chip"><span class="ow-chip-lead">Owner</span> <span class="ow-chip-value">bar</span></button></div></div></div></div></div> <p>Search and filter combines a free-text search field with selectable filter
  chips. Selected filters appear as dismissible chips inside the field, and a
  dropdown panel of available filters opens while the field is focused. Focus
  the field above to reveal its panel.</p> <h2 id="field" class="ow-heading-2">The field</h2> <p>The root is <code>ow-search-and-filter</code>. Inside, <code>ow-search-and-filter-search-container</code> holds the chips and the
  search box, and the dropdown lives in <code>ow-search-and-filter-panel</code>. The panel is positioned absolutely
  and reveals itself on <code>:focus-within</code>, so it needs no JavaScript to
  open.</p> <!> <h2 id="selected-chips" class="ow-heading-2">Selected filters</h2> <p>Each applied filter renders as a dismissible <code>ow-chip</code> before the
  search box, with an <code>ow-chip-lead</code> category, an <code>ow-chip-value</code> and an <code>ow-chip-dismiss</code> button. Set <code>data-empty="false"</code> on the container when chips are present.</p> <!> <h2 id="filter-panel" class="ow-heading-2">Filter panel sections</h2> <p>Group the available filters inside the panel with <code>ow-filter-panel-section</code>, each carrying an <code>ow-filter-panel-section-heading</code> and a <code>ow-filter-panel-section-chips</code> row. An optional <code>ow-filter-panel-section-counter</code> button can summarise hidden options.</p> <!> <h2 id="overflow" class="ow-heading-2">Overflow counter</h2> <p>When selected chips wrap beyond the collapsed single-row height, an <code>ow-search-and-filter-selected-count</code> button pins to the trailing edge
  showing how many are hidden; clicking it expands the field. Toggling visibility
  and counting the overflow is driven in script.</p> <!>`,1);function V(C){let r=T(E([{lead:"Cloud",value:"Google"},{lead:"Cloud",value:"AWS"}]));function k(e){F(r,t(r).filter((s,a)=>a!==e),!0)}var w=H(),p=W(w),b=i(p),h=i(b),G=i(h);I(G,19,()=>t(r),e=>e.lead+e.value,(e,s,a)=>{var u=J(),f=i(u),O=i(f,!0);n(f);var v=l(f,2),P=i(v,!0);n(v);var _=l(v,2);_.__click=()=>k(t(a)),n(u),S(()=>{$(O,t(s).lead),$(P,t(s).value),R(_,"aria-label",`Remove ${t(s).value}`)}),o(e,u)}),x(2),n(h),x(2),n(b),n(p);var m=l(p,8);d(m,{block:!0,code:`<div class="ow-search-and-filter">
  <div class="ow-search-and-filter-search-container" data-active="true" data-empty="true">
    <form class="ow-search-and-filter-box">
      <label class="sr-only" for="saf">Search and filter</label>
      <input id="saf" class="ow-search-and-filter-input" type="search" placeholder="Search and filter" autocomplete="off" />
      <button type="submit" class="ow-search-and-filter-search-button">Search</button>
    </form>
  </div>
  <div class="ow-search-and-filter-panel" tabindex="-1">
    <!-- filter panel sections -->
  </div>
</div>`,children:(e,s)=>{var a=j();o(e,a)},$$slots:{default:!0}});var y=l(m,6);d(y,{block:!0,code:`<div class="ow-search-and-filter-search-container" data-active="true" data-empty="false">
  <span class="ow-chip">
    <span class="ow-chip-lead">Cloud</span>
    <span class="ow-chip-value">Google</span>
    <button type="button" class="ow-chip-dismiss" aria-label="Remove Google">Remove</button>
  </span>
  <form class="ow-search-and-filter-box">
    <label class="sr-only" for="saf-selected">Search and filter</label>
    <input id="saf-selected" class="ow-search-and-filter-input" type="search" placeholder="Search and filter" autocomplete="off" />
    <button type="submit" class="ow-search-and-filter-search-button">Search</button>
  </form>
</div>`,children:(e,s)=>{var a=q();o(e,a)},$$slots:{default:!0}});var g=l(y,6);d(g,{block:!0,code:`<div class="ow-filter-panel-section">
  <h5 class="ow-filter-panel-section-heading">Region</h5>
  <div class="ow-filter-panel-section-chips">
    <button type="button" class="ow-chip">
      <span class="ow-chip-lead">Region</span>
      <span class="ow-chip-value">us-east1</span>
    </button>
    <button type="button" class="ow-chip">
      <span class="ow-chip-lead">Region</span>
      <span class="ow-chip-value">us-north2</span>
    </button>
    <button type="button" class="ow-filter-panel-section-counter">+4</button>
  </div>
</div>`,children:(e,s)=>{var a=B();o(e,a)},$$slots:{default:!0}});var A=l(g,6);d(A,{block:!0,code:'<button type="button" class="ow-search-and-filter-selected-count">+4</button>',children:(e,s)=>{var a=D();o(e,a)},$$slots:{default:!0}}),S(()=>R(h,"data-empty",t(r).length===0)),o(C,w)}z(["click"]);export{V as component};
