import{a,f as d}from"../chunks/BloWK6qd.js";import"../chunks/Nz-WpKIz.js";import{s as r,f as v}from"../chunks/Cjeq8u6e.js";import{E as s}from"../chunks/CZfo3WOY.js";var w=d('<div class="w-full overflow-hidden"><div class="ow-suru-25-75"><div class="mx-auto grid max-w-5xl gap-3 px-6"><h2 class="ow-heading-1 max-w-3xl">Main suru 25/75</h2> <p class="max-w-2xl">A hero followed by the rest of the page.</p></div></div></div>'),g=d('<div class="w-full overflow-hidden"><div class="ow-suru-50-50"><div class="mx-auto grid max-w-5xl gap-3 px-6"><h2 class="ow-heading-1 max-w-3xl">Main suru 50/50</h2> <p class="max-w-2xl">A symmetric separation between hero and content.</p></div></div></div>'),m=d('<div class="w-full overflow-hidden"><div class="ow-suru"></div></div>'),x=d('<div class="w-full overflow-hidden"><div class="ow-suru-fan-top"><div class="mx-auto grid max-w-5xl gap-3 px-6"><h2 class="ow-heading-1 max-w-3xl">Fan top</h2> <p class="max-w-2xl">The fan background anchors to the top-right corner of the hero.</p></div></div></div>'),f=d('<div class="w-full overflow-hidden"><div class="ow-suru-divider"><div class="mx-auto grid max-w-5xl gap-3 px-6"><h2 class="ow-heading-1 max-w-3xl">Divider suru</h2> <p class="max-w-2xl">The triangle divider sits between two content sections.</p></div></div></div>'),b=d(`<div class="overflow-hidden rounded border border-ow-surface-border"><div class="ow-suru-25-75"><div class="mx-auto grid max-w-5xl gap-3 px-6"><h2 class="ow-heading-1 max-w-3xl">Suru background</h2> <p class="max-w-2xl">The suru is a decorative angled graphic that separates a hero from the
        rest of the page.</p></div></div></div> <p>Suru is the decorative angled background used behind Ubuntu-style heroes and
  section dividers. Apply a <code>ow-suru-*</code> class to a wrapper and place
  the hero content inside it; the angled artwork is drawn behind or below the
  content. The previews here are bounded inside <code>overflow-hidden</code> boxes so the graphic stays contained. The backgrounds adapt to the <code>dark</code> context automatically.</p> <h2 id="main-25-75" class="ow-heading-2">Main 25 / 75</h2> <p><code>ow-suru-25-75</code> draws the band into a centred <code>::after</code> element below the content, aligned to the 25/75 grid. It is
  the default main suru.</p> <!> <h2 id="main-50-50" class="ow-heading-2">Main 50 / 50</h2> <p><code>ow-suru-50-50</code> centres the band for a more symmetric hero separation.</p> <!> <h2 id="standalone" class="ow-heading-2">Standalone</h2> <p>Used empty, <code>ow-suru</code> drops its hero padding and renders just the band
  — useful as a slim decorative divider between full-width sections.</p> <!> <h2 id="corner" class="ow-heading-2">Corner backgrounds</h2> <p>The corner variants anchor a fan or pyramid graphic to a corner of the hero: <code>ow-suru-fan-top</code>, <code>ow-suru-fan-bottom</code>, <code>ow-suru-pyramid-left</code> and <code>ow-suru-pyramid-right</code>. They
  would overlap content on small screens, so the artwork only appears from the
  large breakpoint up.</p> <!> <h2 id="divider" class="ow-heading-2">Divider</h2> <p><code>ow-suru-divider</code> places a triangle, anchored to the left edge, in the
  deep padding between two content sections. Like the corner variants it renders from
  the large breakpoint up.</p> <!>`,1);function T(u){var t=b(),n=r(v(t),8);s(n,{block:!0,code:`<div class="ow-suru-25-75">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Main suru 25/75</h2>
    <p>A hero followed by the rest of the page.</p>
  </div>
</div>`,children:(e,i)=>{var o=w();a(e,o)},$$slots:{default:!0}});var l=r(n,6);s(l,{block:!0,code:`<div class="ow-suru-50-50">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Main suru 50/50</h2>
    <p>A symmetric separation between hero and content.</p>
  </div>
</div>`,children:(e,i)=>{var o=g();a(e,o)},$$slots:{default:!0}});var c=r(l,6);s(c,{block:!0,code:'<div class="ow-suru"></div>',children:(e,i)=>{var o=m();a(e,o)},$$slots:{default:!0}});var h=r(c,6);s(h,{block:!0,code:`<div class="ow-suru-fan-top">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Fan top</h2>
    <p>The fan background anchors to the top-right corner of the hero.</p>
  </div>
</div>`,children:(e,i)=>{var o=x();a(e,o)},$$slots:{default:!0}});var p=r(h,6);s(p,{block:!0,code:`<div class="ow-suru-divider">
  <div class="mx-auto grid max-w-5xl gap-3 px-6">
    <h2 class="ow-heading-1">Divider suru</h2>
    <p>The triangle divider sits between two content sections.</p>
  </div>
</div>`,children:(e,i)=>{var o=f();a(e,o)},$$slots:{default:!0}}),a(u,t)}export{T as component};
