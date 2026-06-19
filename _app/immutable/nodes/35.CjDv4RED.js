import{a as d,f as s}from"../chunks/DLhIqdvp.js";import{f as E,h as i,c as r,s as l,b as T,g as S,r as n,n as P}from"../chunks/Cjeq8u6e.js";import{d as F}from"../chunks/BYU81E74.js";import{i as W}from"../chunks/D4HlAJzU.js";import{E as m}from"../chunks/CDnnywVE.js";var z=s('<div class="ow-modal absolute" role="presentation"><div class="ow-modal-dialog ow-is-narrow" role="dialog" aria-modal="true" aria-labelledby="headline-modal-title"><header class="ow-modal-header"><h2 class="ow-modal-title" id="headline-modal-title">Confirm action</h2> <button type="button" class="ow-modal-close" aria-label="Close modal"><i class="ow-icon-close" aria-hidden="true"></i></button></header> <div class="ow-modal-body"><p class="m-0">Are you sure you want to proceed?</p></div> <footer class="ow-modal-footer"><button type="button" class="ow-btn-base">Cancel</button> <button type="button" class="ow-btn-positive">Confirm</button></footer></div></div>'),G=s('<div class="ow-modal-dialog w-full" role="dialog" aria-modal="true" aria-labelledby="anatomy-title"><header class="ow-modal-header"><h2 class="ow-modal-title" id="anatomy-title">Confirm action</h2> <button class="ow-modal-close" aria-label="Close modal"><i class="ow-icon-close" aria-hidden="true"></i></button></header> <div class="ow-modal-body"><p class="m-0">Are you sure you want to proceed? This action can be reverted.</p></div> <footer class="ow-modal-footer"><button class="ow-btn-base">Cancel</button> <button class="ow-btn-positive">Confirm</button></footer></div>'),H=s('<div class="relative h-64 w-full overflow-hidden rounded"><div class="ow-modal absolute" role="presentation"><div class="ow-modal-dialog ow-is-narrow" role="dialog" aria-modal="true" aria-labelledby="overlay-title"><header class="ow-modal-header"><h2 class="ow-modal-title" id="overlay-title">Heads up</h2> <button class="ow-modal-close" aria-label="Close modal"><i class="ow-icon-close" aria-hidden="true"></i></button></header> <div class="ow-modal-body"><p class="m-0">Your changes were saved.</p></div> <footer class="ow-modal-footer"><button class="ow-btn">Got it</button></footer></div></div></div>'),L=s('<div class="ow-modal-dialog ow-is-narrow w-full" role="dialog" aria-modal="true" aria-labelledby="narrow-title"><header class="ow-modal-header"><h2 class="ow-modal-title" id="narrow-title">Narrow</h2> <button class="ow-modal-close" aria-label="Close modal"><i class="ow-icon-close" aria-hidden="true"></i></button></header> <div class="ow-modal-body"><p class="m-0">A 28rem dialog for short confirmations.</p></div></div> <div class="ow-modal-dialog ow-is-wide w-full" role="dialog" aria-modal="true" aria-labelledby="wide-title"><header class="ow-modal-header"><h2 class="ow-modal-title" id="wide-title">Wide</h2> <button class="ow-modal-close" aria-label="Close modal"><i class="ow-icon-close" aria-hidden="true"></i></button></header> <div class="ow-modal-body"><p class="m-0">A 60rem dialog for summaries and tables.</p></div></div>',1),Y=s('<form class="ow-modal-dialog w-full" role="dialog" aria-modal="true" aria-labelledby="form-title"><header class="ow-modal-header"><h2 class="ow-modal-title" id="form-title">Edit profile</h2> <button type="button" class="ow-modal-close" aria-label="Close modal"><i class="ow-icon-close" aria-hidden="true"></i></button></header> <div class="ow-modal-body ow-form-stacked"><label for="form-name">Full name</label> <input id="form-name" type="text" value="Ada Lovelace"/> <label for="form-email">Email</label> <input id="form-email" type="email" value="ada@example.com"/></div> <footer class="ow-modal-footer"><button type="button" class="ow-btn-base">Cancel</button> <button type="submit" class="ow-btn-positive">Save changes</button></footer></form>'),D=s(`<div class="relative grid min-h-72 place-items-center overflow-hidden rounded border border-ow-surface-border p-8"><button type="button" class="ow-btn-positive" aria-haspopup="dialog">Show modal</button> <!></div> <p>A modal presents focused content in a dialog layered over the page. The <code>ow-modal</code> overlay normally covers the viewport (<code>position: fixed</code>); the previews below scope it inside the bordered box. A dialog stacks an <code>ow-modal-header</code>, <code>ow-modal-body</code> and <code>ow-modal-footer</code>, and the body
  scrolls independently when content overflows.</p> <h2 id="anatomy" class="ow-heading-2">Dialog anatomy</h2> <p>The <code>ow-modal-dialog</code> is a self-contained card: a header with a title
  and close button, a scrollable body, and a footer for actions. Shown here inline,
  without the overlay.</p> <!> <h2 id="overlay" class="ow-heading-2">With an overlay</h2> <p>Wrap the dialog in an <code>ow-modal</code> element to dim the page behind it.
  In production the overlay is fixed to the viewport; this preview pins it
  inside a bounded, <code>relative</code> container instead.</p> <!> <h2 id="sizes" class="ow-heading-2">Sizes</h2> <p>Add <code>ow-is-narrow</code> or <code>ow-is-wide</code> to the dialog to override
  its maximum width. The default sits between the two.</p> <!> <h2 id="form" class="ow-heading-2">Form modal</h2> <p>A dialog can host a form. Use <code>ow-form-stacked</code> on the body and put the
  submit and cancel actions in the footer.</p> <!>`,1);function B(_){let t=T(!1);var u=D(),b=E(u),h=r(b);h.__click=()=>i(t,!0);var C=l(h,2);{var k=o=>{var e=z();e.__click=c=>c.target===c.currentTarget&&i(t,!1),e.__keydown=c=>c.key==="Escape"&&i(t,!1);var a=r(e),w=r(a),x=l(r(w),2);x.__click=()=>i(t,!1),n(w);var y=l(w,4),g=r(y);g.__click=()=>i(t,!1);var A=l(g,2);A.__click=()=>i(t,!1),n(y),n(a),n(e),d(o,e)};W(C,o=>{S(t)&&o(k)})}n(b);var v=l(b,8);m(v,{block:!0,code:`<div class="ow-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <header class="ow-modal-header">
    <h2 class="ow-modal-title" id="dialog-title">Confirm action</h2>
    <button class="ow-modal-close" aria-label="Close modal">
      <i class="ow-icon-close" aria-hidden="true"></i>
    </button>
  </header>
  <div class="ow-modal-body">
    <p>Are you sure you want to proceed? This action can be reverted.</p>
  </div>
  <footer class="ow-modal-footer">
    <button class="ow-btn-base">Cancel</button>
    <button class="ow-btn-positive">Confirm</button>
  </footer>
</div>`,children:(o,e)=>{var a=G();d(o,a)},$$slots:{default:!0}});var f=l(v,6);m(f,{block:!0,code:`<div class="ow-modal" role="presentation">
  <div class="ow-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="overlay-title">
    <header class="ow-modal-header">
      <h2 class="ow-modal-title" id="overlay-title">Heads up</h2>
      <button class="ow-modal-close" aria-label="Close modal">
        <i class="ow-icon-close" aria-hidden="true"></i>
      </button>
    </header>
    <div class="ow-modal-body">
      <p>Your changes were saved.</p>
    </div>
    <footer class="ow-modal-footer">
      <button class="ow-btn">Got it</button>
    </footer>
  </div>
</div>`,children:(o,e)=>{var a=H();d(o,a)},$$slots:{default:!0}});var p=l(f,6);m(p,{block:!0,code:`<div class="ow-modal-dialog ow-is-narrow" role="dialog" aria-modal="true">…</div>
<div class="ow-modal-dialog ow-is-wide" role="dialog" aria-modal="true">…</div>`,children:(o,e)=>{var a=L();P(2),d(o,a)},$$slots:{default:!0}});var $=l(p,6);m($,{block:!0,code:`<form class="ow-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="form-title">
  <header class="ow-modal-header">
    <h2 class="ow-modal-title" id="form-title">Edit profile</h2>
    <button type="button" class="ow-modal-close" aria-label="Close modal">
      <i class="ow-icon-close" aria-hidden="true"></i>
    </button>
  </header>
  <div class="ow-modal-body ow-form-stacked">
    <label for="form-name">Full name</label>
    <input id="form-name" type="text" value="Ada Lovelace" />
    <label for="form-email">Email</label>
    <input id="form-email" type="email" value="ada@example.com" />
  </div>
  <footer class="ow-modal-footer">
    <button type="button" class="ow-btn-base">Cancel</button>
    <button type="submit" class="ow-btn-positive">Save changes</button>
  </footer>
</form>`,children:(o,e)=>{var a=Y();d(o,a)},$$slots:{default:!0}}),d(_,u)}F(["click","keydown"]);export{B as component};
