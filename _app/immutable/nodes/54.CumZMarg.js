import{a as s,f as a}from"../chunks/BrLxys79.js";import"../chunks/DSA0q87l.js";import{p as v,s as o,f,t as y,a as S,c as $,n as r,r as x}from"../chunks/DAFKDzfT.js";import{s as T}from"../chunks/CrM5BQoy.js";import{i as _,w as k}from"../chunks/7r70cVbj.js";import{E as n}from"../chunks/5gGF761m.js";var O=a('<div class="grid gap-2"><button class="ow-btn-positive">Save</button></div>'),C=a('<button class="ow-btn">Default</button> <button class="ow-btn ow-is-small">Small</button> <button class="ow-btn ow-is-small ow-is-dense">Small + dense</button>',1),E=a('<div class="ow-notification-positive"><div class="ow-notification-content"><span class="ow-notification-title">Saved</span> <span class="ow-notification-message">Your changes are live.</span></div></div>'),P=a('<div class="flex flex-wrap items-center gap-3"><button class="ow-btn-positive">Save</button> <button class="ow-btn-base">Cancel</button></div>'),B=a('<button class="ow-btn-positive ow-is-small">Save</button>'),M=a(`<p>Orangewind is a class-based framework: you write plain HTML and apply
  Orangewind component classes to it. There are no required wrapper elements or
  JavaScript — a component is whatever structure its classes describe. This
  guide covers the conventions those classes follow so the rest of the
  documentation reads predictably.</p> <h2 id="prefix" class="ow-heading-2">Every class is prefixed</h2> <p>Every Orangewind class begins with <code>ow-</code>. The prefix namespaces the
  framework so its classes never collide with your own or with Tailwind's
  utilities. When you see <code>ow-</code> in markup, it is Orangewind; anything else
  is your own CSS or a Tailwind utility.</p> <h2 id="naming" class="ow-heading-2">Single-dash kebab-case</h2> <p>Class names are <strong>single-dash kebab-case</strong>. A component's
  variants read as <code>ow-&lt;component&gt;-&lt;variant&gt;</code> — there is no
  BEM-style double dash. The variant is part of the same flat name, not a modifier
  appended to a block.</p> <!> <h2 id="state" class="ow-heading-2">State classes use <code>ow-is-</code> and <code>ow-has-</code></h2> <p>Stateful or modifier variations are expressed with separate <code>ow-is-*</code> and <code>ow-has-*</code> classes added alongside the
  base component class — they are never baked into the base name. <code>ow-is-*</code> describes a state the element is in (<code>ow-is-small</code>, <code>ow-is-dense</code>, <code>ow-is-active</code>, <code>ow-is-disabled</code>); <code>ow-has-*</code> declares that the element
  contains something (<code>ow-has-icon</code>, <code>ow-has-border</code>).</p> <p>Because they are independent classes, compatible states stack. A button can be
  both small and dense at once.</p> <!> <h2 id="nesting" class="ow-heading-2">Component classes nest</h2> <p>Most components are more than one class: a root class describes the component
  and child classes describe its parts, following the <code>ow-&lt;component&gt;-&lt;part&gt;</code> pattern. The parts are meant to sit
  inside the root, and many only style correctly in that context. A notification,
  for example, is a root with a content wrapper and titled message inside it.</p> <!> <p>Each component page documents the full structure it expects. Keep the parts
  nested as shown — dropping the wrapper or moving a part out of its root is the
  most common reason a component "looks unstyled".</p> <h2 id="tailwind" class="ow-heading-2">Composing with Tailwind utilities</h2> <p>Orangewind is a Tailwind plugin, so Orangewind classes and raw Tailwind
  utilities live in the same <code>class</code> attribute. Use Orangewind for the
  component, Tailwind for one-off layout and spacing around it — flex/grid, gaps,
  widths. This documentation site is built that way throughout.</p> <!> <p>Prefer padding and gap over margins when spacing things out — it composes more
  predictably inside Orangewind's grid-based layout components. The <a>UI patterns</a> guide goes deeper on spacing,
  theming and breakpoints.</p> <h2 id="pitfalls" class="ow-heading-2">Common pitfalls</h2> <p><strong>Don't combine two base component classes on one element.</strong> A
  button is exactly one of <code>ow-btn</code>, <code>ow-btn-positive</code>, <code>ow-btn-negative</code>, and so on — they set conflicting styles, so
  applying two produces undefined results. To change a variant, swap the class;
  to change a state, add an <code>ow-is-*</code> class.</p> <!> <p><strong>Don't drop the prefix or rename parts.</strong> The child-part classes
  (<code>ow-notification-content</code> and friends) are matched by name; a typo or
  a missing wrapper silently falls back to unstyled HTML. When something isn't styling,
  check the structure against the component's page first.</p>`,1);function Y(u,b){v(b,!1),_();var l=M(),d=o(f(l),10);n(d,{block:!0,title:"Naming",code:`<!-- correct: a flat, single-dash name -->
<button class="ow-btn-positive">Save</button>

<!-- wrong: BEM-style double dash -->
<button class="ow-btn--positive">Save</button>`,children:(e,i)=>{var t=O();s(e,t)},$$slots:{default:!0}});var p=o(d,8);n(p,{code:`<button class="ow-btn">Default</button>
<button class="ow-btn ow-is-small">Small</button>
<button class="ow-btn ow-is-small ow-is-dense">Small + dense</button>`,children:(e,i)=>{var t=C();r(4),s(e,t)},$$slots:{default:!0}});var h=o(p,6);n(h,{block:!0,code:`<div class="ow-notification-positive">
  <div class="ow-notification-content">
    <span class="ow-notification-title">Saved</span>
    <span class="ow-notification-message">Your changes are live.</span>
  </div>
</div>`,children:(e,i)=>{var t=E();s(e,t)},$$slots:{default:!0}});var w=o(h,8);n(w,{block:!0,code:`<div class="flex flex-wrap items-center gap-3">
  <button class="ow-btn-positive">Save</button>
  <button class="ow-btn-base">Cancel</button>
</div>`,children:(e,i)=>{var t=P();s(e,t)},$$slots:{default:!0}});var c=o(w,2),m=o($(c));r(),x(c);var g=o(c,6);n(g,{block:!0,title:"Buttons",code:`<!-- wrong: two base button classes fight each other -->
<button class="ow-btn-positive ow-btn-negative">Save</button>

<!-- right: one base class, plus state classes as needed -->
<button class="ow-btn-positive ow-is-small">Save</button>`,children:(e,i)=>{var t=B();s(e,t)},$$slots:{default:!0}}),r(2),y(e=>T(m,"href",e),[()=>k("/docs/ui-patterns")]),s(u,l),S()}export{Y as component};
