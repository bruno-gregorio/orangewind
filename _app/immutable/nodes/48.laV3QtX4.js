import{a as e,f as l}from"../chunks/DLhIqdvp.js";import{f as k,t as x,g as m,c as n,s as t,b as $,r,h as y}from"../chunks/Cjeq8u6e.js";import{s as O}from"../chunks/BYU81E74.js";import{r as A}from"../chunks/BXUcxCK4.js";import{b as D}from"../chunks/s_VSM-5s.js";import{E as p}from"../chunks/CDnnywVE.js";var P=l('<label class="ow-switch"><input type="checkbox" class="ow-switch-input" role="switch"/> <span class="ow-switch-slider"></span> <span class="ow-switch-label">Off</span></label>'),E=l('<label class="ow-switch"><input type="checkbox" class="ow-switch-input" role="switch" checked=""/> <span class="ow-switch-slider"></span> <span class="ow-switch-label">On</span></label>'),I=l('<label class="ow-switch"><input type="checkbox" class="ow-switch-input" role="switch" disabled=""/> <span class="ow-switch-slider"></span> <span class="ow-switch-label">Disabled</span></label>'),N=l(`<div class="flex flex-wrap items-center gap-6 rounded border border-ow-surface-border p-8"><label class="ow-switch"><input type="checkbox" class="ow-switch-input" role="switch"/> <span class="ow-switch-slider"></span> <span class="ow-switch-label"> </span></label></div> <p>A switch toggles a single setting on or off, taking effect immediately. It is
  built on a native checkbox with <code>role="switch"</code> for accessibility.</p> <h2 id="default" class="ow-heading-2">Off</h2> <p>An unchecked switch represents the off state.</p> <!> <h2 id="on" class="ow-heading-2">On</h2> <p>Add the <code>checked</code> attribute to start in the on state.</p> <!> <h2 id="disabled" class="ow-heading-2">Disabled</h2> <p>Add the <code>disabled</code> attribute to prevent interaction.</p> <!>`,1);function G(v){let c=$(!0);var h=N(),o=k(h),w=n(o),i=n(w);A(i);var d=t(i,4),_=n(d);r(d),r(w),r(o);var b=t(o,8);p(b,{code:`<label class="ow-switch">
  <input type="checkbox" class="ow-switch-input" role="switch" />
  <span class="ow-switch-slider"></span>
  <span class="ow-switch-label">Off</span>
</label>`,children:(s,u)=>{var a=P();e(s,a)},$$slots:{default:!0}});var f=t(b,6);p(f,{code:`<label class="ow-switch">
  <input type="checkbox" class="ow-switch-input" role="switch" checked />
  <span class="ow-switch-slider"></span>
  <span class="ow-switch-label">On</span>
</label>`,children:(s,u)=>{var a=E();e(s,a)},$$slots:{default:!0}});var g=t(f,6);p(g,{code:`<label class="ow-switch">
  <input type="checkbox" class="ow-switch-input" role="switch" disabled />
  <span class="ow-switch-slider"></span>
  <span class="ow-switch-label">Disabled</span>
</label>`,children:(s,u)=>{var a=I();e(s,a)},$$slots:{default:!0}}),x(()=>O(_,`Notifications ${m(c)?"on":"off"}`)),D(i,()=>m(c),s=>y(c,s)),e(v,h)}export{G as component};
