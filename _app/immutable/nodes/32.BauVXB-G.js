import{a as l,f as s}from"../chunks/DLhIqdvp.js";import"../chunks/Nz-WpKIz.js";import{s as i,f as g}from"../chunks/Cjeq8u6e.js";import{E as o}from"../chunks/CDnnywVE.js";var f=s('<ul class="ow-list"><li class="ow-list-item">Community</li> <li class="ow-list-item">Careers</li> <li class="ow-list-item">Press centre</li></ul>'),b=s('<ul class="ow-list"><li class="ow-list-item ow-is-ticked">Hardware guidance and sizing</li> <li class="ow-list-item ow-has-bullet">Deployment automation</li> <li class="ow-list-item ow-is-crossed">24 x 7 support</li></ul>'),v=s('<ol class="ow-list-divided"><li class="ow-list-item">Bootstrap the controller</li> <li class="ow-list-item">Add the model</li> <li class="ow-list-item">Register credentials</li> <li class="ow-list-item">Start the deployment</li></ol>'),k=s('<ul class="ow-inline-list-middot"><li class="ow-inline-list-item">Community</li> <li class="ow-inline-list-item">Careers</li> <li class="ow-inline-list-item">Press centre</li> <li class="ow-inline-list-item">Contact</li></ul>'),y=s('<ol class="ow-list-nested-counter"><li>Install the base system</li> <li>Choose the deployment target <ol><li>Ubuntu Server</li> <li>MAAS image stream</li></ol></li> <li>Proceed with the relevant install steps</li></ol>'),$=s(`<ol class="ow-stepped-list"><li class="ow-stepped-list-item"><h2 class="ow-stepped-list-title ow-heading-2">Create a model</h2> <p class="ow-stepped-list-content">Create the model and confirm operators can reach the controller.</p></li> <li class="ow-stepped-list-item"><h2 class="ow-stepped-list-title ow-heading-2">Deploy charms</h2> <p class="ow-stepped-list-content">Add the charms that make up the workload and expose only what needs
        traffic.</p></li></ol>`),_=s('<ul class="ow-list-tree" role="tree"><li class="ow-list-tree-item ow-list-tree-item-group" role="treeitem" aria-selected="true"><button type="button" class="ow-list-tree-toggle ow-is-active" aria-controls="source-tree" aria-expanded="true">/packages</button> <ul class="ow-list-tree" role="group" id="source-tree" aria-hidden="false"><li class="ow-list-tree-item" role="treeitem" aria-selected="false"><a class="ow-list-tree-link" href="#orangewind" tabindex="0">orangewind</a></li> <li class="ow-list-tree-item" role="treeitem" aria-selected="false"><a class="ow-list-tree-link" href="#test-bench" tabindex="0">test-bench</a></li></ul></li> <li class="ow-list-tree-item" role="treeitem" aria-selected="false"><a class="ow-list-tree-link" href="#todo" tabindex="0">TODO.md</a></li></ul>'),x=s(`<div class="grid gap-3 rounded border border-ow-surface-border p-8"><ul class="ow-list-divided"><li class="ow-list-item ow-is-ticked">Inventory every machine and image</li> <li class="ow-list-item ow-is-ticked">Run commissioning scripts on enrol</li> <li class="ow-list-item ow-has-bullet">Coordinate network spaces</li> <li class="ow-list-item ow-is-crossed">Manual rack-by-rack provisioning</li></ul></div> <p>Lists group related items. Apply <code>ow-list-item</code> to each entry, then
  reach for a list class such as <code>ow-list</code>, <code>ow-list-divided</code> or <code>ow-inline-list</code> on the wrapping <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code>. State classes mark individual items as ticked, crossed or bulleted.</p> <h2 id="default" class="ow-heading-2">Default</h2> <p><code>ow-list</code> removes the browser list styling for a clean, flush list of
  items.</p> <!> <h2 id="ticked" class="ow-heading-2">Item states</h2> <p>Add <code>ow-is-ticked</code>, <code>ow-is-crossed</code> or <code>ow-has-bullet</code> to an item to prefix it with a tick, cross or bullet
  marker.</p> <!> <h2 id="divided" class="ow-heading-2">Divided</h2> <p><code>ow-list-divided</code> separates items with a horizontal rule. On an <code>&lt;ol&gt;</code> the items are automatically numbered.</p> <!> <h2 id="inline" class="ow-heading-2">Inline</h2> <p><code>ow-inline-list</code> lays items out horizontally. Swap in <code>ow-inline-list-middot</code> to separate them with a middot, or <code>ow-inline-list-stretch</code> to distribute them across the full width.</p> <!> <h2 id="nested-counter" class="ow-heading-2">Nested counter</h2> <p><code>ow-list-nested-counter</code> prefixes nested ordered lists with a compound
  counter (1, 1.1, 1.2) so deep numbering stays readable.</p> <!> <h2 id="stepped" class="ow-heading-2">Stepped</h2> <p><code>ow-stepped-list</code> presents a numbered sequence of steps, each with
  a <code>ow-stepped-list-title</code> and an optional <code>ow-stepped-list-content</code>. Use <code>ow-stepped-list-detailed</code> for a wider, two-column layout.</p> <!> <h2 id="list-tree" class="ow-heading-2">List tree</h2> <p><code>ow-list-tree</code> renders a nested, expandable tree. Group nodes use <code>ow-list-tree-item-group</code> with an <code>ow-list-tree-toggle</code> button that controls a nested <code>ow-list-tree</code>; leaf nodes use <code>ow-list-tree-link</code>. Add <code>ow-is-active</code> to mark the current
  node. The example below is a static, expanded fragment.</p> <!>`,1);function D(u){var r=x(),d=i(g(r),8);o(d,{block:!0,code:`<ul class="ow-list">
  <li class="ow-list-item">Community</li>
  <li class="ow-list-item">Careers</li>
  <li class="ow-list-item">Press centre</li>
</ul>`,children:(e,a)=>{var t=f();l(e,t)},$$slots:{default:!0}});var c=i(d,6);o(c,{block:!0,code:`<ul class="ow-list">
  <li class="ow-list-item ow-is-ticked">Hardware guidance and sizing</li>
  <li class="ow-list-item ow-has-bullet">Deployment automation</li>
  <li class="ow-list-item ow-is-crossed">24 x 7 support</li>
</ul>`,children:(e,a)=>{var t=b();l(e,t)},$$slots:{default:!0}});var n=i(c,6);o(n,{block:!0,code:`<ol class="ow-list-divided">
  <li class="ow-list-item">Bootstrap the controller</li>
  <li class="ow-list-item">Add the model</li>
  <li class="ow-list-item">Register credentials</li>
  <li class="ow-list-item">Start the deployment</li>
</ol>`,children:(e,a)=>{var t=v();l(e,t)},$$slots:{default:!0}});var w=i(n,6);o(w,{block:!0,code:`<ul class="ow-inline-list-middot">
  <li class="ow-inline-list-item">Community</li>
  <li class="ow-inline-list-item">Careers</li>
  <li class="ow-inline-list-item">Press centre</li>
  <li class="ow-inline-list-item">Contact</li>
</ul>`,children:(e,a)=>{var t=k();l(e,t)},$$slots:{default:!0}});var p=i(w,6);o(p,{block:!0,code:`<ol class="ow-list-nested-counter">
  <li>Install the base system</li>
  <li>
    Choose the deployment target
    <ol>
      <li>Ubuntu Server</li>
      <li>MAAS image stream</li>
    </ol>
  </li>
  <li>Proceed with the relevant install steps</li>
</ol>`,children:(e,a)=>{var t=y();l(e,t)},$$slots:{default:!0}});var m=i(p,6);o(m,{block:!0,code:`<ol class="ow-stepped-list">
  <li class="ow-stepped-list-item">
    <h2 class="ow-stepped-list-title ow-heading-2">Create a model</h2>
    <p class="ow-stepped-list-content">
      Create the model and confirm operators can reach the controller.
    </p>
  </li>
  <li class="ow-stepped-list-item">
    <h2 class="ow-stepped-list-title ow-heading-2">Deploy charms</h2>
    <p class="ow-stepped-list-content">
      Add the charms that make up the workload and expose only what needs traffic.
    </p>
  </li>
</ol>`,children:(e,a)=>{var t=$();l(e,t)},$$slots:{default:!0}});var h=i(m,6);o(h,{block:!0,code:`<ul class="ow-list-tree" role="tree">
  <li class="ow-list-tree-item ow-list-tree-item-group" role="treeitem" aria-selected="true">
    <button
      type="button"
      class="ow-list-tree-toggle ow-is-active"
      aria-controls="source-tree"
      aria-expanded="true"
    >
      /packages
    </button>
    <ul class="ow-list-tree" role="group" id="source-tree" aria-hidden="false">
      <li class="ow-list-tree-item" role="treeitem" aria-selected="false">
        <a class="ow-list-tree-link" href="#orangewind" tabindex="0">orangewind</a>
      </li>
      <li class="ow-list-tree-item" role="treeitem" aria-selected="false">
        <a class="ow-list-tree-link" href="#test-bench" tabindex="0">test-bench</a>
      </li>
    </ul>
  </li>
  <li class="ow-list-tree-item" role="treeitem" aria-selected="false">
    <a class="ow-list-tree-link" href="#todo" tabindex="0">TODO.md</a>
  </li>
</ul>`,children:(e,a)=>{var t=_();l(e,t)},$$slots:{default:!0}}),l(u,r)}export{D as component};
