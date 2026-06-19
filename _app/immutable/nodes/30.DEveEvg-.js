import{a as v,f as c}from"../chunks/DLhIqdvp.js";import{p as aa,b as H,e as ea,f as ia,a as na,s as _,c as i,h as k,g as a,t as I,r as e,n as sa}from"../chunks/Cjeq8u6e.js";import{d as la,s as T}from"../chunks/BYU81E74.js";import{i as J}from"../chunks/D4HlAJzU.js";import{e as q}from"../chunks/DaHokNY7.js";import{s as u}from"../chunks/BXUcxCK4.js";import{c as $,s as O}from"../chunks/BH4sgpHL.js";import{E as M}from"../chunks/CDnnywVE.js";var ta=c('<li class="ow-in-page-nav-item"><a> </a></li>'),oa=c('<ul class="ow-in-page-nav-list"></ul>'),ra=c('<li class="ow-in-page-nav-item"><a> </a> <!></li>'),va=c('<div class="max-w-xs"><div class="ow-in-page-nav"><nav class="ow-in-page-nav-container" aria-label="In-page navigation"><h3 class="ow-in-page-nav-heading">On this page</h3> <ul class="ow-in-page-nav-list"><li class="ow-in-page-nav-item"><a class="ow-in-page-nav-link ow-is-active" href="#overview" aria-current="true">Overview</a></li> <li class="ow-in-page-nav-item"><a class="ow-in-page-nav-link" href="#install">Installation</a> <ul class="ow-in-page-nav-list"><li class="ow-in-page-nav-item"><a class="ow-in-page-nav-link" href="#requirements">Requirements</a></li></ul></li></ul></nav></div></div>'),ca=c('<li class="ow-in-page-nav-item"><a class="ow-in-page-nav-link"> </a></li>'),da=c('<ul class="ow-in-page-nav-list"></ul>'),pa=c('<li class="ow-in-page-nav-item"><a> </a> <!></li>'),ga=c('<div class="w-full"><div><nav class="ow-in-page-nav-container" aria-label="In-page navigation"><ul class="ow-in-page-nav-list" id="collapsible-nav-list"></ul> <button type="button" class="ow-in-page-nav-dropdown-toggle" aria-controls="collapsible-nav-list" aria-label="Toggle navigation"><i aria-hidden="true"></i></button></nav></div></div>'),wa=c('<div class="max-w-xs"><div class="ow-in-page-nav"><nav class="ow-in-page-nav-container" aria-label="In-page navigation"><h3 class="ow-in-page-nav-heading">On this page</h3> <ul class="ow-in-page-nav-list"><li class="ow-in-page-nav-item"><a class="ow-in-page-nav-link ow-is-active" href="#intro" aria-current="true">Introduction</a></li> <li class="ow-in-page-nav-item"><a class="ow-in-page-nav-link" href="#usage">Usage</a></li></ul></nav></div></div>'),ua=c(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><div class="grid grid-cols-12 gap-6"><aside class="col-span-12 sm:col-span-5 lg:col-span-4"><div class="ow-in-page-nav"><nav class="ow-in-page-nav-container" aria-label="In-page navigation"><h3 class="ow-in-page-nav-heading">On this page</h3> <ul class="ow-in-page-nav-list"></ul></nav></div></aside> <div class="col-span-12 space-y-3 sm:col-span-7 lg:col-span-8"><h2 class="ow-heading-3 m-0">The main content goes here</h2> <p class="m-0">In a narrow column the navigation renders as a vertical list with a left
        highlight rail. Clicking an item updates the active state.</p></div></div></div> <p>In-page navigation lists the sections of a long document and highlights the
  current one. The <code>ow-in-page-nav</code> wrapper is a container: in a
  narrow column it renders as a vertical sidebar list, and once the container
  passes 22rem it becomes a horizontal scroller with a dropdown toggle. It is <strong>not</strong> sticky by default — add Tailwind utilities like <code>sticky top-6</code> when you want it to follow the scroll.</p> <h2 id="sidebar" class="ow-heading-2">Sidebar list</h2> <p>Mark the active link with <code>ow-is-active</code> and <code>aria-current="true"</code>. Nest a second <code>ow-in-page-nav-list</code> inside an item to indent child sections.</p> <!> <h2 id="collapsible" class="ow-heading-2">Collapsible scroller</h2> <p>When the container is wider than 22rem the list collapses into a horizontal
  scroller with a dropdown toggle. Add <code>ow-is-expanded</code> to the
  wrapper to reveal the full list, and keep <code>aria-expanded</code> on the toggle
  in sync.</p> <!> <h2 id="sticky" class="ow-heading-2">Making it sticky</h2> <p>To keep the navigation reachable while the page scrolls — as the right rail of
  this docs site does — wrap it in an element carrying <code>sticky top-6 max-h-screen overflow-y-auto</code>. Stickiness is
  intentionally left to the consumer so the component works in any layout.</p> <!>`,1);function Ia(L,Q){aa(Q,!0);const z=[{id:"identifying-a-kernel",text:"Identifying a kernel"},{id:"kernel-security",text:"Kernel security",children:[{id:"general-availability",text:"General availability kernels"},{id:"optimized-kernels",text:"Optimized kernels"}]},{id:"variant-categories",text:"Variant categories"},{id:"current-variant-kernels",text:"Current variant kernels"}];let o=H(ea(z[0].id)),h=H(!1);var R=ua(),D=ia(R),G=i(D),K=i(G),N=i(K),U=i(N),V=_(i(U),2);q(V,21,()=>z,d=>d.id,(d,r)=>{var s=ra(),l=i(s);l.__click=p=>{p.preventDefault(),k(o,a(r).id,!0)};var j=i(l,!0);e(l);var b=_(l,2);{var x=p=>{var g=oa();q(g,21,()=>a(r).children,n=>n.id,(n,w)=>{var t=ta(),f=i(t);f.__click=y=>{y.preventDefault(),k(o,a(w).id,!0)};var S=i(f,!0);e(f),e(t),I(y=>{O(f,1,y),u(f,"href",`#${a(w).id}`),u(f,"aria-current",a(o)===a(w).id?"true":void 0),T(S,a(w).text)},[()=>$(["ow-in-page-nav-link",a(o)===a(w).id&&"ow-is-active"].filter(Boolean).join(" "))]),v(n,t)}),e(g),v(p,g)};J(b,p=>{a(r).children&&p(x)})}e(s),I(p=>{O(l,1,p),u(l,"href",`#${a(r).id}`),u(l,"aria-current",a(o)===a(r).id?"true":void 0),T(j,a(r).text)},[()=>$(["ow-in-page-nav-link",a(o)===a(r).id&&"ow-is-active"].filter(Boolean).join(" "))]),v(d,s)}),e(V),e(U),e(N),e(K),sa(2),e(G),e(D);var W=_(D,8);M(W,{block:!0,code:`<div class="ow-in-page-nav">
  <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
    <h3 class="ow-in-page-nav-heading">On this page</h3>
    <ul class="ow-in-page-nav-list">
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link ow-is-active" href="#overview" aria-current="true">
          Overview
        </a>
      </li>
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link" href="#install">Installation</a>
        <ul class="ow-in-page-nav-list">
          <li class="ow-in-page-nav-item">
            <a class="ow-in-page-nav-link" href="#requirements">Requirements</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`,children:(d,r)=>{var s=va();v(d,s)},$$slots:{default:!0}});var F=_(W,6);M(F,{block:!0,code:`<div class="ow-in-page-nav">
  <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
    <ul class="ow-in-page-nav-list" id="nav-list" aria-expanded="false">
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link ow-is-active" href="#a" aria-current="true">Section A</a>
      </li>
      <li class="ow-in-page-nav-item">
        <a class="ow-in-page-nav-link" href="#b">Section B</a>
      </li>
    </ul>
    <button class="ow-in-page-nav-dropdown-toggle" aria-expanded="false" aria-controls="nav-list">
      <i class="ow-icon-chevron-down ow-in-page-nav-dropdown-toggle-icon" aria-hidden="true"></i>
    </button>
  </nav>
</div>`,children:(d,r)=>{var s=ga(),l=i(s),j=i(l),b=i(j);q(b,21,()=>z,g=>g.id,(g,n)=>{var w=pa(),t=i(w);t.__click=m=>{m.preventDefault(),k(o,a(n).id,!0),k(h,!1)};var f=i(t,!0);e(t);var S=_(t,2);{var y=m=>{var C=da();q(C,21,()=>a(n).children,P=>P.id,(P,A)=>{var E=ca(),B=i(E);B.__click=Z=>{Z.preventDefault(),k(o,a(A).id,!0),k(h,!1)};var Y=i(B,!0);e(B),e(E),I(()=>{u(B,"href",`#${a(A).id}`),T(Y,a(A).text)}),v(P,E)}),e(C),v(m,C)};J(S,m=>{a(n).children&&m(y)})}e(w),I(m=>{O(t,1,m),u(t,"href",`#${a(n).id}`),u(t,"aria-current",a(o)===a(n).id?"true":void 0),T(f,a(n).text)},[()=>$(["ow-in-page-nav-link",a(o)===a(n).id&&"ow-is-active"].filter(Boolean).join(" "))]),v(g,w)}),e(b);var x=_(b,2);x.__click=()=>k(h,!a(h));var p=i(x);e(x),e(j),e(l),e(s),I((g,n)=>{O(l,1,g),u(b,"aria-expanded",a(h)),u(x,"aria-expanded",a(h)),O(p,1,n)},[()=>$(["ow-in-page-nav",a(h)&&"ow-is-expanded"].filter(Boolean).join(" ")),()=>$([a(h)?"ow-icon-chevron-up":"ow-icon-chevron-down","ow-in-page-nav-dropdown-toggle-icon"].join(" "))]),v(d,s)},$$slots:{default:!0}});var X=_(F,6);M(X,{block:!0,lang:"svelte",code:`<aside class="sticky top-6 max-h-screen overflow-y-auto">
  <div class="ow-in-page-nav">
    <nav class="ow-in-page-nav-container" aria-label="In-page navigation">
      <!-- list as above -->
    </nav>
  </div>
</aside>`,children:(d,r)=>{var s=wa();v(d,s)},$$slots:{default:!0}}),v(L,R),na()}la(["click"]);export{Ia as component};
