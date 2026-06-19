import{a as n,f as r}from"../chunks/BrLxys79.js";import{b as O,e as T,f as A,s as b,c as l,r as i,h as j,g as t,t as y}from"../chunks/DAFKDzfT.js";import{d as B,s as m}from"../chunks/xUn5-6LJ.js";import{e as x}from"../chunks/BOpFwN6B.js";import{s as d}from"../chunks/CrM5BQoy.js";import{E as _}from"../chunks/5gGF761m.js";var E=r('<div class="ow-tabs-item"><button type="button" class="ow-tabs-link" role="tab"> </button></div>'),J=r('<div class="ow-tabs-panel" tabindex="0" role="tabpanel"><h3 class="ow-heading-5"> </h3> <p> </p></div>'),K=r('<div class="ow-tabs"><div class="ow-tabs-list" role="tablist" aria-label="Juju technology"><div class="ow-tabs-item"><button class="ow-tabs-link" id="ex-olm-tab" role="tab" aria-selected="true" aria-controls="ex-olm-panel">Lifecycle Manager</button></div> <div class="ow-tabs-item"><button class="ow-tabs-link" id="ex-sdk-tab" role="tab" aria-selected="false" aria-controls="ex-sdk-panel" tabindex="-1">Operator SDK</button></div></div> <div class="ow-tabs-panel" role="tabpanel" id="ex-olm-panel" aria-labelledby="ex-olm-tab" tabindex="0"><h3 class="ow-heading-5">Operate applications across clouds</h3> <p>Move from configuration to application management.</p></div> <div class="ow-tabs-panel" role="tabpanel" id="ex-sdk-panel" aria-labelledby="ex-sdk-tab" tabindex="0" hidden=""><h3 class="ow-heading-5">Build operators with a focused toolkit</h3> <p>Tools to help you write operators and model workloads.</p></div></div>'),L=r('<nav class="ow-tabs" aria-label="Documentation sections"><ul class="ow-tabs-list"><li class="ow-tabs-item"><a class="ow-tabs-link" href="#implementation" aria-current="page">Implementation</a></li> <li class="ow-tabs-item"><a class="ow-tabs-link" href="#accessibility">Accessibility</a></li> <li class="ow-tabs-item"><a class="ow-tabs-link" href="#design-guidelines">Design guidelines</a></li></ul></nav>'),S=r(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><div class="ow-tabs"><div class="ow-tabs-list" role="tablist" aria-label="Juju technology"></div> <!></div></div> <p>Tabs let users switch between related views or sections within the same
  context. Use a <code>role="tablist"</code> set of <code>ow-tabs-link</code> buttons to control matching <code>ow-tabs-panel</code> regions, or use plain links with <code>aria-current</code> to navigate between pages.</p> <h2 id="tabbed-content" class="ow-heading-2">Tabbed content</h2> <p>For switching panels in place, give each <code>ow-tabs-link</code> button <code>role="tab"</code>, <code>aria-selected</code> and an <code>aria-controls</code> pointing at its panel. Each <code>ow-tabs-panel</code> carries <code>role="tabpanel"</code> and an <code>aria-labelledby</code> back-reference, and is hidden when inactive.</p> <!> <h2 id="navigation" class="ow-heading-2">Navigation tabs</h2> <p>When tabs link to separate pages or sections, use a <code>&lt;nav&gt;</code> with <code>&lt;a&gt;</code> elements and mark the
  active one with <code>aria-current="page"</code> instead of the tablist roles.</p> <!>`,1);function q(I){const p=[{id:"olm-tab",panelId:"olm-panel",label:"Lifecycle Manager",title:"Operate applications across clouds",copy:"Move from configuration management to application management across your hybrid cloud estate."},{id:"sdk-tab",panelId:"sdk-panel",label:"Operator SDK",title:"Build operators with a focused toolkit",copy:"A set of tools to help you write operators, model workloads clearly and package them for delivery."},{id:"charmhub-tab",panelId:"charmhub-panel",label:"Charmhub",title:"Discover reusable building blocks",copy:"A repository for charms, bundles and related artifacts spanning observability, data and identity."}];let c=O(T(p[0].id));var w=S(),v=A(w),g=l(v),u=l(g);x(u,21,()=>p,o=>o.id,(o,a)=>{var e=E(),s=l(e);s.__click=()=>j(c,t(a).id,!0);var h=l(s,!0);i(s),i(e),y(()=>{d(s,"id",t(a).id),d(s,"aria-selected",t(c)===t(a).id),d(s,"aria-controls",t(a).panelId),d(s,"tabindex",t(c)===t(a).id?0:-1),m(h,t(a).label)}),n(o,e)}),i(u);var D=b(u,2);x(D,17,()=>p,o=>o.panelId,(o,a)=>{var e=J(),s=l(e),h=l(s,!0);i(s);var k=b(s,2),M=l(k,!0);i(k),i(e),y(()=>{d(e,"id",t(a).panelId),d(e,"aria-labelledby",t(a).id),d(e,"hidden",t(c)!==t(a).id),m(h,t(a).title),m(M,t(a).copy)}),n(o,e)}),i(g),i(v);var f=b(v,8);_(f,{code:`<div class="ow-tabs">
  <div class="ow-tabs-list" role="tablist" aria-label="Juju technology">
    <div class="ow-tabs-item">
      <button
        class="ow-tabs-link"
        id="olm-tab"
        role="tab"
        aria-selected="true"
        aria-controls="olm-panel"
      >
        Lifecycle Manager
      </button>
    </div>
    <div class="ow-tabs-item">
      <button
        class="ow-tabs-link"
        id="sdk-tab"
        role="tab"
        aria-selected="false"
        aria-controls="sdk-panel"
        tabindex="-1"
      >
        Operator SDK
      </button>
    </div>
  </div>
  <div
    class="ow-tabs-panel"
    role="tabpanel"
    id="olm-panel"
    aria-labelledby="olm-tab"
    tabindex="0"
  >
    <h3 class="ow-heading-5">Operate applications across clouds</h3>
    <p>Move from configuration to application management.</p>
  </div>
  <div
    class="ow-tabs-panel"
    role="tabpanel"
    id="sdk-panel"
    aria-labelledby="sdk-tab"
    tabindex="0"
    hidden
  >
    <h3 class="ow-heading-5">Build operators with a focused toolkit</h3>
    <p>Tools to help you write operators and model workloads.</p>
  </div>
</div>`,children:(o,a)=>{var e=K();n(o,e)},$$slots:{default:!0}});var $=b(f,6);_($,{code:`<nav class="ow-tabs" aria-label="Documentation sections">
  <ul class="ow-tabs-list">
    <li class="ow-tabs-item">
      <a class="ow-tabs-link" href="#implementation" aria-current="page">
        Implementation
      </a>
    </li>
    <li class="ow-tabs-item">
      <a class="ow-tabs-link" href="#accessibility">Accessibility</a>
    </li>
    <li class="ow-tabs-item">
      <a class="ow-tabs-link" href="#design-guidelines">Design guidelines</a>
    </li>
  </ul>
</nav>`,children:(o,a)=>{var e=L();n(o,e)},$$slots:{default:!0}}),n(I,w)}B(["click"]);export{q as component};
