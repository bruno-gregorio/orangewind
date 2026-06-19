import{a as s,f as d}from"../chunks/BrLxys79.js";import"../chunks/DSA0q87l.js";import{s as c,f as h,n as v}from"../chunks/DAFKDzfT.js";import{E as t}from"../chunks/5gGF761m.js";var m=d('<div class="ow-code-snippet"><div class="ow-code-snippet-header"><h5 class="ow-code-snippet-title">Install Thunderbird as a snap</h5> <div class="ow-code-snippet-actions"><button type="button" class="ow-code-snippet-copy ow-btn-base ow-is-small"><i class="ow-icon-copy-to-clipboard" aria-hidden="true"></i> Copy</button></div></div> <pre class="ow-code-snippet-block-icon"><code>sudo snap install thunderbird --channel=latest/stable</code></pre></div>'),k=d('<div class="ow-code-snippet"><pre class="ow-code-snippet-block-icon"><code>snap --version</code></pre></div> <div class="ow-code-snippet"><pre class="ow-code-snippet-block-icon ow-is-windows-prompt"><code>multipass version</code></pre></div> <div class="ow-code-snippet"><pre class="ow-code-snippet-block-icon ow-is-url"><code>https://ubuntu.com/server/docs</code></pre></div>',1),f=d(`<div class="ow-code-snippet"><pre class="ow-code-snippet-block-numbered"><code><span class="ow-code-snippet-line">#!/bin/bash</span>
<span class="ow-code-snippet-line">set -eu</span>
<span class="ow-code-snippet-line">snap refresh --hold=24h</span></code></pre></div>`),g=d('<div class="ow-code-snippet"><pre class="ow-code-snippet-block ow-is-wrapped"><code>microk8s kubectl create secret generic image-pull-secret --from-file=.dockerconfigjson=/home/ubuntu/.docker/config.json</code></pre></div>'),$=d('<div class="ow-code-snippet"><div class="ow-code-snippet-header"><h5 class="ow-code-snippet-title">Installing Thunderbird as a snap</h5> <div class="ow-code-snippet-dropdowns"><select class="ow-code-snippet-dropdown" aria-label="Track"><option>latest</option><option>esr</option></select> <select class="ow-code-snippet-dropdown" aria-label="Channel"><option>stable</option><option>beta</option></select></div></div> <pre class="ow-code-snippet-block-icon"><code>sudo snap install thunderbird --channel=latest/stable</code></pre></div>'),y=d('<div class="ow-code-snippet ow-is-bordered"><div class="ow-code-snippet-header"><h5 class="ow-code-snippet-title">Rendered result</h5></div> <pre class="ow-code-snippet-block"><code>&lt;button class="ow-btn-positive"&gt;Launch&lt;/button&gt;</code></pre></div>'),_=d(`<div class="grid min-w-0 gap-3 overflow-x-auto rounded border border-ow-surface-border p-8"><div class="ow-code-snippet ow-is-bordered min-w-0"><div class="ow-code-snippet-header"><h5 class="ow-code-snippet-title">Install Thunderbird as a snap</h5> <div class="ow-code-snippet-actions"><button type="button" class="ow-code-snippet-copy ow-btn-base ow-is-small"><i class="ow-icon-copy-to-clipboard" aria-hidden="true"></i> Copy</button></div></div> <pre class="ow-code-snippet-block-icon"><code>sudo snap install thunderbird --channel=latest/stable</code></pre></div></div> <p>A code snippet presents commands, output or source in a contained block with
  an optional <code>ow-code-snippet-header</code> for a title and actions.
  Choose a block class to suit the content: a plain <code>ow-code-snippet-block</code>, a prompt <code>ow-code-snippet-block-icon</code> or a line-numbered <code>ow-code-snippet-block-numbered</code>.</p> <h2 id="default" class="ow-heading-2">Default with copy</h2> <p>The header holds an <code>ow-code-snippet-title</code> and an <code>ow-code-snippet-actions</code> group. The copy button reuses the base
  button styles via <code>ow-code-snippet-copy</code>. A leading-prompt block
  uses <code>ow-code-snippet-block-icon</code>.</p> <!> <h2 id="icon-variants" class="ow-heading-2">Prompt icons</h2> <p><code>ow-code-snippet-block-icon</code> shows a Linux prompt by default. Add <code>ow-is-windows-prompt</code> for a Windows command prompt or <code>ow-is-url</code> to mark the line as a link.</p> <!> <h2 id="numbered" class="ow-heading-2">Numbered</h2> <p><code>ow-code-snippet-block-numbered</code> renders a line gutter. Wrap each
  line in an <code>ow-code-snippet-line</code> span so the numbering counter increments
  correctly.</p> <!> <h2 id="wrapped" class="ow-heading-2">Wrapped</h2> <p>Long single-line commands overflow horizontally by default. Add <code>ow-is-wrapped</code> to the block to wrap them instead.</p> <!> <h2 id="dropdowns" class="ow-heading-2">Header dropdowns</h2> <p>Swap the actions for an <code>ow-code-snippet-dropdowns</code> group of <code>ow-code-snippet-dropdown</code> selects to let users choose a variant of
  the command. Add <code>ow-is-stacked</code> to the header to place the dropdowns
  below a long title.</p> <!> <h2 id="bordered" class="ow-heading-2">Bordered</h2> <p>Add <code>ow-is-bordered</code> to outline the whole snippet, which suits showing
  source above its rendered result.</p> <!>`,1);function x(b){var p=_(),n=c(h(p),8);t(n,{block:!0,code:`<div class="ow-code-snippet">
  <div class="ow-code-snippet-header">
    <h5 class="ow-code-snippet-title">Install Thunderbird as a snap</h5>
    <div class="ow-code-snippet-actions">
      <button type="button" class="ow-code-snippet-copy ow-btn-base ow-is-small">
        <i class="ow-icon-copy-to-clipboard" aria-hidden="true"></i>
        Copy
      </button>
    </div>
  </div>
  <pre class="ow-code-snippet-block-icon"><code>sudo snap install thunderbird --channel=latest/stable</code></pre>
</div>`,children:(e,i)=>{var o=m();s(e,o)},$$slots:{default:!0}});var a=c(n,6);t(a,{block:!0,code:`<div class="ow-code-snippet">
  <pre class="ow-code-snippet-block-icon"><code>snap --version</code></pre>
</div>
<div class="ow-code-snippet">
  <pre class="ow-code-snippet-block-icon ow-is-windows-prompt"><code>multipass version</code></pre>
</div>
<div class="ow-code-snippet">
  <pre class="ow-code-snippet-block-icon ow-is-url"><code>https://ubuntu.com/server/docs</code></pre>
</div>`,children:(e,i)=>{var o=k();v(4),s(e,o)},$$slots:{default:!0}});var l=c(a,6);t(l,{block:!0,code:`<div class="ow-code-snippet">
  <pre class="ow-code-snippet-block-numbered"><code><span class="ow-code-snippet-line">#!/bin/bash</span>
<span class="ow-code-snippet-line">set -eu</span>
<span class="ow-code-snippet-line">snap refresh --hold=24h</span></code></pre>
</div>`,children:(e,i)=>{var o=f();s(e,o)},$$slots:{default:!0}});var r=c(l,6);t(r,{block:!0,code:`<div class="ow-code-snippet">
  <pre class="ow-code-snippet-block ow-is-wrapped"><code>microk8s kubectl create secret generic image-pull-secret --from-file=.dockerconfigjson=/home/ubuntu/.docker/config.json</code></pre>
</div>`,children:(e,i)=>{var o=g();s(e,o)},$$slots:{default:!0}});var w=c(r,6);t(w,{block:!0,code:`<div class="ow-code-snippet">
  <div class="ow-code-snippet-header">
    <h5 class="ow-code-snippet-title">Installing Thunderbird as a snap</h5>
    <div class="ow-code-snippet-dropdowns">
      <select class="ow-code-snippet-dropdown" aria-label="Track">
        <option>latest</option>
        <option>esr</option>
      </select>
      <select class="ow-code-snippet-dropdown" aria-label="Channel">
        <option>stable</option>
        <option>beta</option>
      </select>
    </div>
  </div>
  <pre class="ow-code-snippet-block-icon"><code>sudo snap install thunderbird --channel=latest/stable</code></pre>
</div>`,children:(e,i)=>{var o=$();s(e,o)},$$slots:{default:!0}});var u=c(w,6);t(u,{block:!0,code:`<div class="ow-code-snippet ow-is-bordered">
  <div class="ow-code-snippet-header">
    <h5 class="ow-code-snippet-title">Rendered result</h5>
  </div>
  <pre class="ow-code-snippet-block"><code>&lt;button class="ow-btn-positive"&gt;Launch&lt;/button&gt;</code></pre>
</div>`,children:(e,i)=>{var o=y();s(e,o)},$$slots:{default:!0}}),s(b,p)}export{x as component};
