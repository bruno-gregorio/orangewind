import{a as t,f as i}from"../chunks/DLhIqdvp.js";import"../chunks/Nz-WpKIz.js";import{s as a,f as g}from"../chunks/Cjeq8u6e.js";import{E as n}from"../chunks/CDnnywVE.js";var p=i('<div class="ow-baseline-grid w-full rounded bg-ow-background-default p-4"><p class="ow-heading-3">Heading on the grid</p> <p>Body copy that lines up with the rhythm.</p></div>'),u=i('<p class="text-ow-text-muted">Run in the browser console to overlay the grid on the whole document.</p>'),v=i('<div class="grid w-full gap-8 py-2 pl-10"><h2 class="ow-heading-1 ow-visualise-font-metrics inline-block">Heading 1</h2> <p class="ow-visualise-font-metrics inline-block">Regular paragraph metrics</p></div>'),w=i(`<div class="rounded border border-ow-surface-border p-8"><div class="ow-baseline-grid rounded bg-ow-background-default p-4"><p class="ow-heading-3">Aligned to the baseline grid</p> <p>Every line of text in this block lands on one of the evenly spaced
      horizontal rules drawn by the overlay, keeping vertical rhythm consistent
      down the page.</p></div></div> <p>The baseline grid is a vertical rhythm: a repeating set of horizontal lines,
  spaced two base units apart, that text and components align to so spacing
  feels even throughout a layout. Orangewind ships a debug overlay you can
  switch on while building to check that alignment, plus a font-metrics
  visualiser for fine-tuning type.</p> <h2 id="overlay" class="ow-heading-2">Grid overlay</h2> <p>Add <code>ow-baseline-grid</code> to any container to paint the rhythm lines over
  its contents. The overlay is a non-interactive, debug-only guide — it sits above
  the content but ignores pointer events — so you can leave it on while you nudge
  spacing and remove the class when you are done.</p> <!> <h2 id="whole-page" class="ow-heading-2">Debugging a whole page</h2> <p>Applying <code>ow-baseline-grid</code> to the <code>&lt;html&gt;</code> element tints the page and draws the rhythm behind everything, which is handy for
  auditing an entire screen at once. Toggle it from your browser console rather than
  committing it:</p> <!> <h2 id="font-metrics" class="ow-heading-2">Font metrics</h2> <p>For type-level work, <code>ow-visualise-font-metrics</code> draws guides for the
  key vertical metrics of a line: a green line for the cap height, a band down to
  the x-height, and a red line for the baseline. Use it to confirm a heading sits
  correctly on the grid.</p> <!>`,1);function $(h){var s=w(),r=a(g(s),8);n(r,{code:`<div class="ow-baseline-grid">
  <p class="ow-heading-3">Heading on the grid</p>
  <p>Body copy that lines up with the rhythm.</p>
</div>`,children:(e,d)=>{var o=p();t(e,o)},$$slots:{default:!0}});var l=a(r,6);n(l,{lang:"bash",title:"Console",code:"document.documentElement.classList.toggle('ow-baseline-grid')",children:(e,d)=>{var o=u();t(e,o)},$$slots:{default:!0}});var c=a(l,6);n(c,{code:`<h2 class="ow-heading-1 ow-visualise-font-metrics inline-block">Heading 1</h2>
<p class="ow-visualise-font-metrics inline-block">Regular paragraph metrics</p>`,children:(e,d)=>{var o=v();t(e,o)},$$slots:{default:!0}}),t(h,s)}export{$ as component};
