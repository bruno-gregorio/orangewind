import{a as o,f as t}from"../chunks/BloWK6qd.js";import"../chunks/Nz-WpKIz.js";import{s as a,f as u,n as c}from"../chunks/Cjeq8u6e.js";import{E as i}from"../chunks/CZfo3WOY.js";var m=t('<section class="ow-strip ow-is-shallow w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-3">Default strip</h2> <p class="m-0">A neutral wrapper that keeps the page surface.</p></div></section>'),f=t('<section class="ow-strip-light ow-is-shallow w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-3">Light strip</h2> <p class="m-0">A themed wrapper carrying the light surface.</p></div></section> <section class="ow-strip-highlighted ow-is-shallow w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-3">Highlighted strip</h2> <p class="m-0">The alternative surface separates a region.</p></div></section>',1),v=t('<section class="ow-strip-dark ow-is-shallow w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-3">Dark strip</h2> <p class="m-0">High-emphasis region with inverted text.</p></div></section> <section class="ow-strip-accent ow-is-shallow w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-3">Accent strip</h2> <p class="m-0">Shares the accent surface for emphasis.</p></div></section>',1),x=t('<section class="ow-strip-highlighted ow-is-shallow w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-4 m-0">Shallow strip</h2> <p class="m-0">Compact padding for grouped content.</p></div></section> <section class="ow-strip-highlighted ow-is-deep w-full"><div class="mx-auto max-w-3xl px-6"><h2 class="ow-heading-4 m-0">Deep strip</h2> <p class="m-0">Generous padding before the next region.</p></div></section>',1),b=t('<div class="w-full"><section class="ow-section"><hr class="ow-rule"/> <h2 class="ow-heading-3 pt-2">Default section</h2> <p class="m-0">Provides only the bottom spacing between content blocks.</p></section> <section class="ow-section-shallow"><hr class="ow-rule"/> <h2 class="ow-heading-3 pt-2">Shallow section</h2> <p class="m-0">Keeps tightly related content on the same cadence.</p></section></div>'),k=t(`<div class="grid gap-0 overflow-hidden rounded border border-ow-surface-border"><section class="ow-strip ow-is-shallow ow-is-bordered"><div class="mx-auto grid max-w-3xl gap-2 px-6"><h2 class="ow-heading-3">Default strip</h2> <p class="m-0">A neutral wrapper keeps the page surface while applying strip spacing.</p></div></section> <section class="ow-strip-highlighted ow-is-shallow ow-is-bordered"><div class="mx-auto grid max-w-3xl gap-2 px-6"><h2 class="ow-heading-3">Highlighted strip</h2> <p class="m-0">The alternative surface separates a region without an extra border.</p></div></section> <section class="ow-strip-dark ow-is-shallow"><div class="mx-auto grid max-w-3xl gap-2 px-6"><h2 class="ow-heading-3">Dark strip</h2> <p class="m-0">A dark wrapper flips foreground colour for high-emphasis regions.</p></div></section></div> <p>A strip is a full-width horizontal band that spaces and, optionally, colours a
  region of the page. Strip variants set the background, while <code>ow-section</code> classes control only the vertical rhythm between
  blocks. Use <code>ow-is-shallow</code> and <code>ow-is-deep</code> to tune
  padding, and <code>ow-is-bordered</code> to add a hairline beneath a strip.</p> <h2 id="default" class="ow-heading-2">Default strip</h2> <p>The base <code>ow-strip</code> is transparent: it applies strip padding while inheriting
  the surrounding page surface.</p> <!> <h2 id="light" class="ow-heading-2">Light and highlighted</h2> <p><code>ow-strip-light</code> carries the light surface for grouped content,
  while <code>ow-strip-highlighted</code> uses the alternate highlight surface to
  set a region apart.</p> <!> <h2 id="dark-accent" class="ow-heading-2">Dark and accent</h2> <p><code>ow-strip-dark</code> and <code>ow-strip-accent</code> invert the foreground
  colour for high-emphasis regions such as calls to action.</p> <!> <h2 id="depth" class="ow-heading-2">Shallow and deep</h2> <p>Add <code>ow-is-shallow</code> for tightly related content or <code>ow-is-deep</code> to create a larger pause before the next major region. Both
  modifiers work on any strip variant.</p> <!> <h2 id="section" class="ow-heading-2">Section rhythm</h2> <p>Unlike strips, <code>ow-section</code> sets no background — it only supplies
  the bottom spacing between content blocks. Use <code>ow-section-hero</code> for first-page content, and <code>ow-section-deep</code> or <code>ow-section-shallow</code> to widen or tighten the gap. Pair a section
  with an <code>ow-rule</code> to introduce a new block.</p> <!>`,1);function A(w){var r=k(),n=a(u(r),8);i(n,{block:!0,code:`<section class="ow-strip">
  <div class="mx-auto max-w-3xl px-6">
    <h2 class="ow-heading-3">Default strip</h2>
    <p>A neutral wrapper that keeps the page surface.</p>
  </div>
</section>`,children:(e,l)=>{var s=m();o(e,s)},$$slots:{default:!0}});var h=a(n,6);i(h,{block:!0,code:`<section class="ow-strip-light">…</section>
<section class="ow-strip-highlighted">…</section>`,children:(e,l)=>{var s=f();c(2),o(e,s)},$$slots:{default:!0}});var d=a(h,6);i(d,{block:!0,code:`<section class="ow-strip-dark">
  <div class="mx-auto max-w-3xl px-6">
    <h2 class="ow-heading-3">Dark strip</h2>
    <p>High-emphasis region with inverted text.</p>
  </div>
</section>`,children:(e,l)=>{var s=v();c(2),o(e,s)},$$slots:{default:!0}});var p=a(d,6);i(p,{block:!0,code:`<section class="ow-strip-highlighted ow-is-shallow">…</section>
<section class="ow-strip-highlighted ow-is-deep">…</section>`,children:(e,l)=>{var s=x();c(2),o(e,s)},$$slots:{default:!0}});var g=a(p,6);i(g,{block:!0,code:`<section class="ow-section">
  <hr class="ow-rule" />
  <h2 class="ow-heading-3">Default section</h2>
  <p>Provides only the bottom spacing between content blocks.</p>
</section>
<section class="ow-section-shallow">
  <hr class="ow-rule" />
  <h2 class="ow-heading-3">Shallow section</h2>
  <p>Keeps tightly related content on the same cadence.</p>
</section>`,children:(e,l)=>{var s=b();o(e,s)},$$slots:{default:!0}}),o(w,r)}export{A as component};
