import{a as n,f as u}from"../chunks/DLhIqdvp.js";import{a6 as B,ae as F,af as M,V as W,ag as D,ah as V,v as y,aa as z,f as G,g as O,s as t,c as f,h as R,b as I,r as m,n as Y}from"../chunks/Cjeq8u6e.js";import{r as j}from"../chunks/BXUcxCK4.js";import{a as H}from"../chunks/s_VSM-5s.js";import{E as v}from"../chunks/CDnnywVE.js";function L(e,l,p=!1){if(e.multiple){if(l==null)return;if(!W(l))return D();for(var r of e.options)r.selected=l.includes(w(r));return}for(r of e.options){var i=w(r);if(V(i,l)){r.selected=!0;return}}(!p||l!==void 0)&&(e.selectedIndex=-1)}function J(e){var l=new MutationObserver(()=>{L(e,e.__value)});l.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),M(()=>{l.disconnect()})}function K(e,l,p=l){var r=new WeakSet,i=!0;B(e,"change",c=>{var d=c?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(d),w);else{var h=e.querySelector(d)??e.querySelector("option:not([disabled])");s=h&&w(h)}p(s),y!==null&&r.add(y)}),F(()=>{var c=l();if(e===document.activeElement){var d=z??y;if(r.has(d))return}if(L(e,c,i),i&&c===void 0){var s=e.querySelector(":checked");s!==null&&(c=w(s),p(c))}e.__value=c,i=!1}),J(e)}function w(e){return"__value"in e?e.__value:e.value}var N=u('<div class="ow-form ow-form-stacked w-full max-w-md"><label for="text">Text input</label> <input type="text" id="text" placeholder="Enter text..."/> <p class="ow-form-help-text">Please enter your full name.</p></div>'),Q=u('<div class="ow-form ow-form-stacked w-full max-w-md"><label for="textarea">Textarea</label> <textarea id="textarea" placeholder="Enter multi-line text..."></textarea></div>'),X=u('<div class="ow-form ow-form-stacked w-full max-w-md"><label for="select">Dropdown select</label> <select id="select"><option>Choose an option...</option><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div>'),Z=u('<div class="ow-form w-full max-w-md"><div class="ow-checkbox"><input type="checkbox" id="check-1" class="ow-checkbox-input"/> <label for="check-1" class="ow-checkbox-label">Checkbox 1</label></div> <div class="ow-checkbox"><input type="checkbox" id="check-2" class="ow-checkbox-input" checked=""/> <label for="check-2" class="ow-checkbox-label">Checkbox 2 (checked)</label></div> <div class="ow-checkbox"><input type="checkbox" id="check-3" class="ow-checkbox-input" disabled=""/> <label for="check-3" class="ow-checkbox-label">Checkbox disabled</label></div></div>'),ee=u('<div class="ow-form w-full max-w-md"><div class="ow-radio"><input type="radio" name="plan" id="rad-1" class="ow-radio-input"/> <label for="rad-1" class="ow-radio-label">Radio option A</label></div> <div class="ow-radio"><input type="radio" name="plan" id="rad-2" class="ow-radio-input" checked=""/> <label for="rad-2" class="ow-radio-label">Radio option B</label></div></div>'),oe=u('<div class="ow-form ow-form-stacked w-full max-w-md"><label for="val-error">Error state</label> <input type="text" id="val-error" class="ow-input-error" value="Invalid data"/> <span class="ow-form-message ow-form-message-error">This field is required and has an error.</span> <label for="val-success">Success state</label> <input type="text" id="val-success" class="ow-input-success" value="Looks perfect"/> <span class="ow-form-message ow-form-message-success">The username is available!</span></div>'),ae=u('<div class="ow-form ow-form-inline"><div class="ow-form-group"><label for="inline-search">Search query</label> <input type="search" id="inline-search" placeholder="E.g. Ubuntu"/></div> <button class="ow-btn-positive">Search</button></div>'),le=u(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><form class="ow-form ow-form-stacked max-w-md"><label for="hero-name" class="ow-is-required">Full name</label> <input type="text" id="hero-name" placeholder="Ada Lovelace"/> <p class="ow-form-help-text">We only use this to personalise your account.</p> <label for="hero-email" class="ow-is-required">Email address</label> <input type="email" id="hero-email" placeholder="ada@example.com"/> <label for="hero-plan">Billing</label> <select id="hero-plan"><option>Monthly</option><option>Yearly</option></select> <button type="submit" class="ow-btn-positive">Create account</button></form></div> <p>Form controls collect input from the user. Style native <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code> and <code>&lt;select&gt;</code> elements by wrapping them in a <code>ow-form</code> container; checkboxes and radios use the dedicated <code>ow-checkbox</code> and <code>ow-radio</code> tick elements.</p> <h2 id="text-inputs" class="ow-heading-2">Text inputs</h2> <p>Most text-like input types are styled automatically, including <code>text</code>, <code>email</code>, <code>password</code>, <code>search</code> and <code>date</code>. Pair each control with a <code>&lt;label&gt;</code> and use <code>ow-form-help-text</code> for supporting
  guidance.</p> <!> <h2 id="textarea" class="ow-heading-2">Textarea</h2> <p>Use a textarea for multi-line free text such as comments or descriptions.</p> <!> <h2 id="select" class="ow-heading-2">Select</h2> <p>A select presents a list of mutually exclusive options. Add the <code>multiple</code> attribute to allow several selections at once.</p> <!> <h2 id="checkboxes" class="ow-heading-2">Checkboxes</h2> <p>Wrap each checkbox in <code>ow-checkbox</code>, apply <code>ow-checkbox-input</code> to the input and <code>ow-checkbox-label</code> to its label. Add <code>ow-checkbox-inline</code> to lay several out in a row.</p> <!> <h2 id="radios" class="ow-heading-2">Radio buttons</h2> <p>Radio buttons share the same structure as checkboxes using <code>ow-radio</code>, <code>ow-radio-input</code> and <code>ow-radio-label</code>. Group them with a common <code>name</code> so only
  one can be selected.</p> <!> <h2 id="validation" class="ow-heading-2">Validation states</h2> <p>Communicate the outcome of validation by adding <code>ow-input-error</code>, <code>ow-input-caution</code> or <code>ow-input-success</code> to the control,
  and pair it with an <code>ow-form-message</code> carrying the matching <code>ow-form-message-error</code>, <code>-caution</code> or <code>-success</code> modifier.</p> <!> <h2 id="inline" class="ow-heading-2">Inline layout</h2> <p>Use <code>ow-form-inline</code> to lay label/control pairs out horizontally,
  wrapping each pair in an <code>ow-form-group</code>. It suits compact filter
  bars and toolbars.</p> <!>`,1);function de(e){let l=I(""),p=I("monthly");var r=le(),i=G(r),c=f(i),d=t(f(c),2);j(d);var s=t(d,10),h=f(s);h.value=h.__value="monthly";var g=t(h);g.value=g.__value="yearly",m(s),Y(2),m(c),m(i);var $=t(i,8);v($,{block:!0,code:`<div class="ow-form ow-form-stacked">
  <label for="text">Text input</label>
  <input type="text" id="text" placeholder="Enter text..." />
  <p class="ow-form-help-text">Please enter your full name.</p>
</div>`,children:(o,b)=>{var a=N();n(o,a)},$$slots:{default:!0}});var S=t($,6);v(S,{block:!0,code:`<div class="ow-form ow-form-stacked">
  <label for="textarea">Textarea</label>
  <textarea id="textarea" placeholder="Enter multi-line text..."></textarea>
</div>`,children:(o,b)=>{var a=Q();n(o,a)},$$slots:{default:!0}});var E=t(S,6);v(E,{block:!0,code:`<div class="ow-form ow-form-stacked">
  <label for="select">Dropdown select</label>
  <select id="select">
    <option value="">Choose an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>`,children:(o,b)=>{var a=X(),T=t(f(a),2),x=f(T);x.value=x.__value="";var k=t(x);k.value=k.__value="1";var _=t(k);_.value=_.__value="2";var A=t(_);A.value=A.__value="3",m(T),m(a),n(o,a)},$$slots:{default:!0}});var q=t(E,6);v(q,{block:!0,code:`<div class="ow-form">
  <div class="ow-checkbox">
    <input type="checkbox" id="check-1" class="ow-checkbox-input" />
    <label for="check-1" class="ow-checkbox-label">Checkbox 1</label>
  </div>
  <div class="ow-checkbox">
    <input type="checkbox" id="check-2" class="ow-checkbox-input" checked />
    <label for="check-2" class="ow-checkbox-label">Checkbox 2 (checked)</label>
  </div>
  <div class="ow-checkbox">
    <input type="checkbox" id="check-3" class="ow-checkbox-input" disabled />
    <label for="check-3" class="ow-checkbox-label">Checkbox disabled</label>
  </div>
</div>`,children:(o,b)=>{var a=Z();n(o,a)},$$slots:{default:!0}});var C=t(q,6);v(C,{block:!0,code:`<div class="ow-form">
  <div class="ow-radio">
    <input type="radio" name="plan" id="rad-1" class="ow-radio-input" />
    <label for="rad-1" class="ow-radio-label">Radio option A</label>
  </div>
  <div class="ow-radio">
    <input type="radio" name="plan" id="rad-2" class="ow-radio-input" checked />
    <label for="rad-2" class="ow-radio-label">Radio option B</label>
  </div>
</div>`,children:(o,b)=>{var a=ee();n(o,a)},$$slots:{default:!0}});var P=t(C,6);v(P,{block:!0,code:`<div class="ow-form ow-form-stacked">
  <label for="val-error">Error state</label>
  <input type="text" id="val-error" class="ow-input-error" value="Invalid data" />
  <span class="ow-form-message ow-form-message-error">This field is required and has an error.</span>

  <label for="val-success">Success state</label>
  <input type="text" id="val-success" class="ow-input-success" value="Looks perfect" />
  <span class="ow-form-message ow-form-message-success">The username is available!</span>
</div>`,children:(o,b)=>{var a=oe();n(o,a)},$$slots:{default:!0}});var U=t(P,6);v(U,{block:!0,code:`<div class="ow-form ow-form-inline">
  <div class="ow-form-group">
    <label for="inline-search">Search query</label>
    <input type="search" id="inline-search" placeholder="E.g. Ubuntu" />
  </div>
  <button class="ow-btn-positive">Search</button>
</div>`,children:(o,b)=>{var a=ae();n(o,a)},$$slots:{default:!0}}),H(d,()=>O(l),o=>R(l,o)),K(s,()=>O(p),o=>R(p,o)),n(e,r)}export{de as component};
