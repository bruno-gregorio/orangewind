import{a as u,f as c}from"../chunks/BloWK6qd.js";import{j as D,f as j,t as P,g as r,s as i,h as g,c as m,b as B,r as p,u as I}from"../chunks/Cjeq8u6e.js";import{s as O}from"../chunks/BANAuLgK.js";import{r as w}from"../chunks/BXUcxCK4.js";import{t as S}from"../chunks/DAr1n4Qa.js";import{a as y}from"../chunks/s_VSM-5s.js";import{E as _}from"../chunks/CZfo3WOY.js";function E(a,e,v,d){var s=a.__style;if(D||s!==e){var l=S(e);(!D||l!==a.getAttribute("style"))&&(l==null?a.removeAttribute("style"):a.style.cssText=l),a.__style=e}return d}var T=c('<div class="ow-form ow-form-stacked w-full max-w-md"><label for="amount">Amount</label> <input type="range" id="amount" min="0" max="100" value="50" step="1" style="--ow-range-progress: 50%"/></div>'),q=c('<div class="ow-form ow-form-stacked w-full max-w-md"><label for="amount-disabled">Disabled</label> <input type="range" id="amount-disabled" min="0" max="100" value="30" step="1" disabled="" style="--ow-range-progress: 30%"/></div>'),z=c('<div class="ow-slider w-full max-w-md"><input type="range" min="0" max="100" step="1" id="amount-2" aria-label="Amount"/> <input type="number" class="ow-slider-input" aria-label="Amount value"/></div>'),C=c(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><div class="ow-form ow-form-stacked w-full max-w-md"><label for="hero-volume"> </label> <input type="range" id="hero-volume" min="0" max="100" step="1" aria-label="Volume"/></div></div> <p>A slider lets the user choose a value from a continuous range. It is a native <code>&lt;input type="range"&gt;</code> that Orangewind styles automatically — the
  track fills up to the current value and the thumb gains a focus outline when tabbed
  to.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>Set <code>min</code>, <code>max</code> and <code>step</code> to define the
  range. Always provide a label or <code>aria-label</code> so the control is announced.</p> <!> <h2 id="disabled" class="ow-heading-2">Disabled</h2> <p>Add the <code>disabled</code> attribute to prevent interaction.</p> <!> <h2 id="with-number-input" class="ow-heading-2">With a number input</h2> <p>Wrap the range in <code>ow-slider</code> alongside a <code>&lt;input type="number"&gt;</code> carrying <code>ow-slider-input</code> to show and edit the exact value. Bind both controls
  to the same value so they stay in sync.</p> <!>`,1);function N(a){let e=B(50);const v=I(()=>`--ow-range-progress: ${r(e)}%`);var d=C(),s=j(d),l=m(s),b=m(l),V=m(b);p(b);var f=i(b,2);w(f),p(l),p(s);var x=i(s,8);_(x,{block:!0,code:`<div class="ow-form ow-form-stacked">
  <label for="amount">Amount</label>
  <input type="range" id="amount" min="0" max="100" value="50" step="1" />
</div>`,children:(t,A)=>{var o=T();u(t,o)},$$slots:{default:!0}});var $=i(x,6);_($,{block:!0,code:`<div class="ow-form ow-form-stacked">
  <label for="amount-disabled">Disabled</label>
  <input
    type="range"
    id="amount-disabled"
    min="0"
    max="100"
    value="30"
    step="1"
    disabled
  />
</div>`,children:(t,A)=>{var o=q();u(t,o)},$$slots:{default:!0}});var W=i($,6);_(W,{block:!0,code:`<div class="ow-slider">
  <input type="range" min="0" max="100" value="50" step="1" id="amount-2" aria-label="Amount" />
  <input type="number" class="ow-slider-input" value="50" aria-label="Amount value" />
</div>`,children:(t,A)=>{var o=z(),n=m(o);w(n);var k=i(n,2);w(k),p(o),P(()=>E(n,r(v))),y(n,()=>r(e),h=>g(e,h)),y(k,()=>r(e),h=>g(e,h)),u(t,o)},$$slots:{default:!0}}),P(()=>{O(V,`Volume — ${r(e)??""}`),E(f,r(v))}),y(f,()=>r(e),t=>g(e,t)),u(a,d)}export{N as component};
