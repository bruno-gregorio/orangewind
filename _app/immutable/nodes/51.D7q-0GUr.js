import{a as e,f as s}from"../chunks/BloWK6qd.js";import"../chunks/Nz-WpKIz.js";import{s as r,f as c,n as b}from"../chunks/Cjeq8u6e.js";import{E as l}from"../chunks/CZfo3WOY.js";var h=s('<button type="button" class="ow-tooltip ow-btn" aria-describedby="t1">Hover me <span class="ow-tooltip-message" role="tooltip" id="t1">A short, helpful message.</span></button>'),w=s('<button type="button" class="ow-tooltip-right ow-btn" aria-describedby="t2">Right <span class="ow-tooltip-message" role="tooltip" id="t2">On the right</span></button> <button type="button" class="ow-tooltip-btm-center ow-btn" aria-describedby="t3">Below <span class="ow-tooltip-message" role="tooltip" id="t3">Underneath</span></button>',1),m=s(`<div class="flex flex-wrap items-center justify-center gap-6 rounded border border-ow-surface-border p-12"><button type="button" class="ow-tooltip ow-btn" aria-describedby="demo-tooltip">Hover me <span class="ow-tooltip-message" role="tooltip" id="demo-tooltip">Extra context appears in the tooltip.</span></button></div> <p>Tooltips reveal supplementary text when the user hovers or focuses an element.
  Add a positional <code>ow-tooltip-*</code> class to the trigger and nest a <code>ow-tooltip-message</code> with <code>role="tooltip"</code> inside it.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>The base <code>ow-tooltip</code> positions the message above the trigger.</p> <!> <h2 id="positions" class="ow-heading-2">Positions</h2> <p>Position the tooltip with a directional class such as <code>ow-tooltip-right</code>, <code>ow-tooltip-left</code> or <code>ow-tooltip-btm-center</code>.</p> <!>`,1);function y(n){var a=m(),i=r(c(a),8);l(i,{code:`<button class="ow-tooltip ow-btn" aria-describedby="t1">
  Hover me
  <span class="ow-tooltip-message" role="tooltip" id="t1">
    A short, helpful message.
  </span>
</button>`,children:(t,d)=>{var o=h();e(t,o)},$$slots:{default:!0}});var p=r(i,6);l(p,{code:`<button class="ow-tooltip-right ow-btn" aria-describedby="t2">
  Right
  <span class="ow-tooltip-message" role="tooltip" id="t2">On the right</span>
</button>
<button class="ow-tooltip-btm-center ow-btn" aria-describedby="t3">
  Below
  <span class="ow-tooltip-message" role="tooltip" id="t3">Underneath</span>
</button>`,children:(t,d)=>{var o=w();b(2),e(t,o)},$$slots:{default:!0}}),e(n,a)}export{y as component};
