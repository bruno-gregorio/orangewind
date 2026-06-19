import{a as o,f as s}from"../chunks/BrLxys79.js";import{f as k,s as n,c as i,r as d,h as M,g as b,t as x,b as A}from"../chunks/DAFKDzfT.js";import{d as C,s as K}from"../chunks/xUn5-6LJ.js";import{e as L}from"../chunks/BOpFwN6B.js";import{s as O}from"../chunks/CrM5BQoy.js";import{E as r}from"../chunks/5gGF761m.js";var P=s('<button class="ow-segmented-control-button" role="tab"> </button>'),S=s('<div class="ow-segmented-control"><div class="ow-segmented-control-list" role="tablist"><button class="ow-segmented-control-button" role="tab" aria-selected="true">OLM</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false">SDK</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false">Charmhub</button></div></div>'),E=s('<div class="ow-segmented-control ow-is-dense"><div class="ow-segmented-control-list" role="tablist"><button class="ow-segmented-control-button" role="tab" aria-selected="true">OLM</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false">SDK</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false">Charmhub</button></div></div>'),W=s('<div class="ow-segmented-control"><div class="ow-segmented-control-list" role="tablist"><button class="ow-segmented-control-button" role="tab" aria-selected="true"><i class="ow-icon-plus"></i> Add</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false"><i class="ow-icon-edit"></i> Edit</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false"><i class="ow-icon-delete"></i> Delete</button></div></div>'),y=s('<div class="ow-segmented-control"><div class="ow-segmented-control-list" role="tablist"><button class="ow-segmented-control-button" role="tab" aria-selected="true">Day</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false">Week</button> <button class="ow-segmented-control-button" role="tab" aria-selected="false" disabled="">Month</button></div></div>'),j=s(`<div class="flex flex-wrap items-center gap-3 rounded border border-ow-surface-border p-8"><div class="ow-segmented-control"><div class="ow-segmented-control-list" role="tablist"></div></div></div> <p>A segmented control lets the user pick one option from a small set of related
  choices, like a row of joined buttons. Mark the selected button with <code>aria-selected="true"</code>; the control highlights it and draws the
  dividers between segments.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>Wrap the buttons in an <code>ow-segmented-control-list</code> with <code>role="tablist"</code>, and give each <code>ow-segmented-control-button</code> <code>role="tab"</code>. The button
  whose <code>aria-selected</code> is <code>true</code> appears active.</p> <!> <h2 id="dense" class="ow-heading-2">Dense</h2> <p>Add <code>ow-is-dense</code> to the <code>ow-segmented-control</code> for a shorter
  control with reduced vertical padding, useful in tight toolbars.</p> <!> <h2 id="with-icons" class="ow-heading-2">With icons</h2> <p>Place an <code>&lt;i&gt;</code> icon element before the label inside a button; the
  control spaces the icon and text automatically.</p> <!> <h2 id="disabled" class="ow-heading-2">Disabled segment</h2> <p>Add the <code>disabled</code> attribute to a button to make a single segment unavailable
  while leaving the rest interactive.</p> <!>`,1);function H(p){let u=A(0);const _=["OLM","SDK","Charmhub"];var m=j(),c=k(m),v=i(c),g=i(v);L(g,22,()=>_,t=>t,(t,a,e)=>{var l=P();l.__click=()=>M(u,b(e),!0);var D=i(l,!0);d(l),x(()=>{O(l,"aria-selected",b(u)===b(e)),K(D,a)}),o(t,l)}),d(g),d(v),d(c);var w=n(c,8);r(w,{code:`<div class="ow-segmented-control">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">OLM</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">SDK</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">Charmhub</button>
  </div>
</div>`,children:(t,a)=>{var e=S();o(t,e)},$$slots:{default:!0}});var h=n(w,6);r(h,{code:`<div class="ow-segmented-control ow-is-dense">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">OLM</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">SDK</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">Charmhub</button>
  </div>
</div>`,children:(t,a)=>{var e=E();o(t,e)},$$slots:{default:!0}});var f=n(h,6);r(f,{code:`<div class="ow-segmented-control">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">
      <i class="ow-icon-plus"></i> Add
    </button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">
      <i class="ow-icon-edit"></i> Edit
    </button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">
      <i class="ow-icon-delete"></i> Delete
    </button>
  </div>
</div>`,children:(t,a)=>{var e=W();o(t,e)},$$slots:{default:!0}});var $=n(f,6);r($,{code:`<div class="ow-segmented-control">
  <div class="ow-segmented-control-list" role="tablist">
    <button class="ow-segmented-control-button" role="tab" aria-selected="true">Day</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false">Week</button>
    <button class="ow-segmented-control-button" role="tab" aria-selected="false" disabled>Month</button>
  </div>
</div>`,children:(t,a)=>{var e=y();o(t,e)},$$slots:{default:!0}}),o(p,m)}C(["click"]);export{H as component};
