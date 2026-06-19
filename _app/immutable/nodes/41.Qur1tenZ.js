import{a as s,f as o}from"../chunks/BrLxys79.js";import"../chunks/DSA0q87l.js";import{s as c,f as d}from"../chunks/DAFKDzfT.js";import{E as l}from"../chunks/5gGF761m.js";var n=o('<form class="ow-search-box w-full max-w-md" role="search"><label for="search" class="sr-only">Search</label> <input id="search" class="ow-search-box-input" type="search" placeholder="Search..." required=""/> <button type="reset" class="ow-search-box-reset" aria-label="Clear search"><i class="ow-icon-close"></i></button> <button type="submit" class="ow-search-box-button" aria-label="Submit search"><i class="ow-icon-search"></i></button></form>'),u=o('<form class="ow-search-box w-full max-w-md" role="search"><label for="search-disabled" class="sr-only">Search</label> <input id="search-disabled" class="ow-search-box-input" type="search" placeholder="Search..." required="" disabled=""/> <button type="reset" class="ow-search-box-reset" aria-label="Clear search" disabled=""><i class="ow-icon-close"></i></button> <button type="submit" class="ow-search-box-button" aria-label="Submit search" disabled=""><i class="ow-icon-search"></i></button></form>'),p=o(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><form class="ow-search-box w-full max-w-md" role="search"><label for="hero-search" class="sr-only">Search</label> <input id="hero-search" class="ow-search-box-input" type="search" placeholder="Search..." required=""/> <button type="reset" class="ow-search-box-reset" aria-label="Clear search"><i class="ow-icon-close"></i></button> <button type="submit" class="ow-search-box-button" aria-label="Submit search"><i class="ow-icon-search"></i></button></form></div> <p>A search box is a self-contained <code>&lt;form&gt;</code> pairing a search
  input with submit and reset buttons. Give the form <code>ow-search-box</code> and <code>role="search"</code>; the reset button only appears once the field
  has a value.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>The input uses <code>ow-search-box-input</code>, the clear button <code>ow-search-box-reset</code> and the submit button <code>ow-search-box-button</code>. Label the field with a visually hidden <code>&lt;label&gt;</code> and the icon buttons with <code>aria-label</code>.</p> <!> <h2 id="disabled" class="ow-heading-2">Disabled</h2> <p>Add the <code>disabled</code> attribute to the input and both buttons to make the
  whole search box unavailable.</p> <!>`,1);function y(i){var r=p(),t=c(d(r),8);l(t,{block:!0,code:`<form class="ow-search-box" role="search">
  <label for="search" class="sr-only">Search</label>
  <input id="search" class="ow-search-box-input" type="search" placeholder="Search..." required />
  <button type="reset" class="ow-search-box-reset" aria-label="Clear search">
    <i class="ow-icon-close"></i>
  </button>
  <button type="submit" class="ow-search-box-button" aria-label="Submit search">
    <i class="ow-icon-search"></i>
  </button>
</form>`,children:(e,h)=>{var a=n();s(e,a)},$$slots:{default:!0}});var b=c(t,6);l(b,{block:!0,code:`<form class="ow-search-box" role="search">
  <label for="search-disabled" class="sr-only">Search</label>
  <input id="search-disabled" class="ow-search-box-input" type="search" placeholder="Search..." required disabled />
  <button type="reset" class="ow-search-box-reset" aria-label="Clear search" disabled>
    <i class="ow-icon-close"></i>
  </button>
  <button type="submit" class="ow-search-box-button" aria-label="Submit search" disabled>
    <i class="ow-icon-search"></i>
  </button>
</form>`,children:(e,h)=>{var a=u();s(e,a)},$$slots:{default:!0}}),s(i,r)}export{y as component};
