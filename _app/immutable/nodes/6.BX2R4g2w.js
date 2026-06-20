import{a as r,f as d}from"../chunks/BloWK6qd.js";import{b as I,e as N,f as P,s as w,c as l,r as s,g as e,t as H,h as E}from"../chunks/Cjeq8u6e.js";import{d as C,s as A}from"../chunks/BANAuLgK.js";import{e as T}from"../chunks/DaHokNY7.js";import{s as c}from"../chunks/BXUcxCK4.js";import{E as u}from"../chunks/CZfo3WOY.js";var j=d('<li class="ow-accordion-group"><div class="ow-accordion-heading" role="heading" aria-level="3"><button type="button" class="ow-accordion-tab"> </button></div> <section class="ow-accordion-panel"><p> </p></section></li>'),D=d('<aside class="ow-accordion"><ul class="ow-accordion-list"><li class="ow-accordion-group"><div class="ow-accordion-heading" role="heading" aria-level="3"><button class="ow-accordion-tab" id="ex-what-is-maas-tab" aria-controls="ex-what-is-maas-panel" aria-expanded="true">What is MAAS?</button></div> <section class="ow-accordion-panel" id="ex-what-is-maas-panel" aria-hidden="false" aria-labelledby="ex-what-is-maas-tab"><p>MAAS turns bare metal into an API-driven pool.</p></section></li> <li class="ow-accordion-group"><div class="ow-accordion-heading" role="heading" aria-level="3"><button class="ow-accordion-tab" id="ex-how-maas-works-tab" aria-controls="ex-how-maas-works-panel" aria-expanded="false">How MAAS works</button></div> <section class="ow-accordion-panel" id="ex-how-maas-works-panel" aria-hidden="true" aria-labelledby="ex-how-maas-works-tab"><p>MAAS commissions and validates new hardware.</p></section></li></ul></aside>'),q=d('<aside class="ow-accordion"><ul class="ow-accordion-list"><li class="ow-accordion-group"><h3 class="ow-accordion-heading ow-heading-3"><button class="ow-accordion-tab" id="ex-controller-layout-tab" aria-controls="ex-controller-layout-panel" aria-expanded="true">Controller layout</button></h3> <section class="ow-accordion-panel" id="ex-controller-layout-panel" aria-hidden="false" aria-labelledby="ex-controller-layout-tab"><p>Nested sections can use smaller heading levels.</p></section></li></ul></aside>'),z=d('<aside class="ow-accordion"><ul class="ow-accordion-list"><li class="ow-accordion-group"><div class="ow-accordion-heading" role="heading" aria-level="3"><button class="ow-accordion-tab" id="ex-networking-tab" aria-controls="ex-networking-panel" aria-expanded="true">Networking</button></div> <section class="ow-accordion-panel ow-has-tick-elements" id="ex-networking-panel" aria-hidden="false" aria-labelledby="ex-networking-tab"><div class="ow-checkbox"><input type="checkbox" id="ex-working-offline" class="ow-checkbox-input"/> <label for="ex-working-offline" class="ow-checkbox-label">Working offline</label></div> <div class="ow-checkbox"><input type="checkbox" id="ex-network-spaces" class="ow-checkbox-input"/> <label for="ex-network-spaces" class="ow-checkbox-label">Network spaces</label></div></section></li></ul></aside>'),B=d(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><aside class="ow-accordion"><ul class="ow-accordion-list"></ul></aside></div> <p>An accordion stacks collapsible sections so the page stays compact while one
  panel is open at a time. Each <code>ow-accordion-tab</code> button toggles its <code>ow-accordion-panel</code>, with state expressed through <code>aria-expanded</code> on the button and <code>aria-hidden</code> on the panel.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p>Wrap each group in an <code>ow-accordion-heading</code> with a <code>role="heading"</code> and <code>aria-level</code> when no native heading
  element is used. The button points at its panel via <code>aria-controls</code>, and the panel references the button back through <code>aria-labelledby</code>.</p> <!> <h2 id="heading-elements" class="ow-heading-2">Heading elements</h2> <p>When the accordion belongs to a content section, a native heading element such
  as <code>&lt;h3&gt;</code> can own the toggle button directly. Add a
  typographic class like <code>ow-heading-3</code> to keep the page outline meaningful.</p> <!> <h2 id="tick-elements" class="ow-heading-2">Tick elements</h2> <p>Add <code>ow-has-tick-elements</code> to the panel when its content is a stack of
  checkboxes or radios; it adjusts the indentation to align the controls.</p> <!>`,1);function Q(_){const g=[{id:"what-is-maas",label:"What is MAAS?",copy:"MAAS turns bare metal into an API-driven pool so teams can commission, deploy and recycle machines without handling each one manually."},{id:"what-maas-offers",label:"What MAAS offers",copy:"MAAS manages large sets of physical machines through resource pools, automated provisioning and repeatable lifecycle operations."},{id:"how-maas-works",label:"How MAAS works",copy:"When new hardware is added, MAAS commissions it, validates the machine and makes it ready for deployment."}];let h=I(N(g[0].id));function $(a){E(h,e(h)===a?null:a,!0)}var v=B(),p=P(v),k=l(p),m=l(k);T(m,21,()=>g,a=>a.id,(a,o)=>{var i=j(),b=l(i),n=l(b);n.__click=()=>$(e(o).id);var S=l(n,!0);s(n),s(b);var t=w(b,2),y=l(t),W=l(y,!0);s(y),s(t),s(i),H(()=>{c(n,"id",`${e(o).id}-tab`),c(n,"aria-controls",`${e(o).id}-panel`),c(n,"aria-expanded",e(h)===e(o).id?"true":"false"),A(S,e(o).label),c(t,"id",`${e(o).id}-panel`),c(t,"aria-hidden",e(h)===e(o).id?"false":"true"),c(t,"aria-labelledby",`${e(o).id}-tab`),A(W,e(o).copy)}),r(a,i)}),s(m),s(k),s(p);var f=w(p,8);u(f,{block:!0,code:`<aside class="ow-accordion">
  <ul class="ow-accordion-list">
    <li class="ow-accordion-group">
      <div class="ow-accordion-heading" role="heading" aria-level="3">
        <button
          class="ow-accordion-tab"
          id="what-is-maas-tab"
          aria-controls="what-is-maas-panel"
          aria-expanded="true"
        >
          What is MAAS?
        </button>
      </div>
      <section
        class="ow-accordion-panel"
        id="what-is-maas-panel"
        aria-hidden="false"
        aria-labelledby="what-is-maas-tab"
      >
        <p>MAAS turns bare metal into an API-driven pool.</p>
      </section>
    </li>
    <li class="ow-accordion-group">
      <div class="ow-accordion-heading" role="heading" aria-level="3">
        <button
          class="ow-accordion-tab"
          id="how-maas-works-tab"
          aria-controls="how-maas-works-panel"
          aria-expanded="false"
        >
          How MAAS works
        </button>
      </div>
      <section
        class="ow-accordion-panel"
        id="how-maas-works-panel"
        aria-hidden="true"
        aria-labelledby="how-maas-works-tab"
      >
        <p>MAAS commissions and validates new hardware.</p>
      </section>
    </li>
  </ul>
</aside>`,children:(a,o)=>{var i=D();r(a,i)},$$slots:{default:!0}});var x=w(f,6);u(x,{block:!0,code:`<aside class="ow-accordion">
  <ul class="ow-accordion-list">
    <li class="ow-accordion-group">
      <h3 class="ow-accordion-heading ow-heading-3">
        <button
          class="ow-accordion-tab"
          id="controller-layout-tab"
          aria-controls="controller-layout-panel"
          aria-expanded="true"
        >
          Controller layout
        </button>
      </h3>
      <section
        class="ow-accordion-panel"
        id="controller-layout-panel"
        aria-hidden="false"
        aria-labelledby="controller-layout-tab"
      >
        <p>Nested sections can use smaller heading levels.</p>
      </section>
    </li>
  </ul>
</aside>`,children:(a,o)=>{var i=q();r(a,i)},$$slots:{default:!0}});var M=w(x,6);u(M,{block:!0,code:`<aside class="ow-accordion">
  <ul class="ow-accordion-list">
    <li class="ow-accordion-group">
      <div class="ow-accordion-heading" role="heading" aria-level="3">
        <button
          class="ow-accordion-tab"
          id="networking-tab"
          aria-controls="networking-panel"
          aria-expanded="true"
        >
          Networking
        </button>
      </div>
      <section
        class="ow-accordion-panel ow-has-tick-elements"
        id="networking-panel"
        aria-hidden="false"
        aria-labelledby="networking-tab"
      >
        <div class="ow-checkbox">
          <input type="checkbox" id="working-offline" class="ow-checkbox-input" />
          <label for="working-offline" class="ow-checkbox-label">
            Working offline
          </label>
        </div>
        <div class="ow-checkbox">
          <input type="checkbox" id="network-spaces" class="ow-checkbox-input" />
          <label for="network-spaces" class="ow-checkbox-label">
            Network spaces
          </label>
        </div>
      </section>
    </li>
  </ul>
</aside>`,children:(a,o)=>{var i=z();r(a,i)},$$slots:{default:!0}}),r(_,v)}C(["click"]);export{Q as component};
