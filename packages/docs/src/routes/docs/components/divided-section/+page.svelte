<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration: a divided heading list in context. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <section class="ow-section w-full">
    <hr class="ow-rule" />
    <div class="grid gap-6 pt-4 lg:grid-cols-2">
      <div>
        <h2 class="ow-heading-3 m-0">A coherent model for operations</h2>
      </div>
      <ul class="ow-divided-block ow-list">
        <li class="ow-divided-heading ow-list-item ow-has-bullet">
          <h3 class="ow-heading-5">Reusable operators</h3>
          <p class="m-0">
            Operators encode the operational knowledge for each service.
          </p>
        </li>
        <hr class="ow-rule-muted" />
        <li class="ow-divided-heading ow-list-item ow-has-bullet">
          <h3 class="ow-heading-5">Grouped models</h3>
          <p class="m-0">
            Models group applications so related workloads share a lifecycle.
          </p>
        </li>
      </ul>
    </div>
  </section>
</div>

<p>
  A divided section pairs a heading column with a list of sub-items separated by
  muted rules. The <code>ow-divided-block</code> wrapper removes default list
  spacing so each <code>ow-divided-heading</code> item and its trailing
  <code>ow-rule-muted</code> sit on an even rhythm. Combine it with
  <code>ow-list</code> markers (<code>ow-has-bullet</code>,
  <code>ow-is-ticked</code>) or a stepped list.
</p>

<h2 id="bulleted" class="ow-heading-2">Bulleted headings</h2>
<p>
  Add <code>ow-has-bullet</code> to each <code>ow-divided-heading</code> item to
  prefix a bold bullet, and separate items with <code>ow-rule-muted</code>.
</p>
<Example
  block
  code={`<ul class="ow-divided-block ow-list">
  <li class="ow-divided-heading ow-list-item ow-has-bullet">
    <h3 class="ow-heading-5">Reusable operators</h3>
    <p>Operators encode operational knowledge for each service.</p>
  </li>
  <hr class="ow-rule-muted" />
  <li class="ow-divided-heading ow-list-item ow-has-bullet">
    <h3 class="ow-heading-5">Grouped models</h3>
    <p>Models group applications so workloads share a lifecycle.</p>
  </li>
</ul>`}
>
  <ul class="ow-divided-block ow-list w-full">
    <li class="ow-divided-heading ow-list-item ow-has-bullet">
      <h3 class="ow-heading-5">Reusable operators</h3>
      <p class="m-0">
        Operators encode operational knowledge for each service.
      </p>
    </li>
    <hr class="ow-rule-muted" />
    <li class="ow-divided-heading ow-list-item ow-has-bullet">
      <h3 class="ow-heading-5">Grouped models</h3>
      <p class="m-0">
        Models group applications so workloads share a lifecycle.
      </p>
    </li>
  </ul>
</Example>

<h2 id="ticked" class="ow-heading-2">Checked headings</h2>
<p>
  Swap the bullet for <code>ow-is-ticked</code> to mark each heading with a checkmark
  — useful for lists of capabilities or guarantees.
</p>
<Example
  block
  code={`<ul class="ow-divided-block ow-list">
  <li class="ow-divided-heading ow-list-item ow-is-ticked">
    <h3 class="ow-heading-5">Backed by a 10-year support promise</h3>
    <p>Long-term commercial support covers every long-term release.</p>
  </li>
  <hr class="ow-rule-muted" />
  <li class="ow-divided-heading ow-list-item ow-is-ticked">
    <h3 class="ow-heading-5">Compliance-ready defaults</h3>
    <p>Hardened defaults and signed images keep production aligned.</p>
  </li>
</ul>`}
>
  <ul class="ow-divided-block ow-list w-full">
    <li class="ow-divided-heading ow-list-item ow-is-ticked">
      <h3 class="ow-heading-5">Backed by a 10-year support promise</h3>
      <p class="m-0">
        Long-term commercial support covers every long-term release.
      </p>
    </li>
    <hr class="ow-rule-muted" />
    <li class="ow-divided-heading ow-list-item ow-is-ticked">
      <h3 class="ow-heading-5">Compliance-ready defaults</h3>
      <p class="m-0">
        Hardened defaults and signed images keep production aligned.
      </p>
    </li>
  </ul>
</Example>

<h2 id="stepped" class="ow-heading-2">Numbered steps</h2>
<p>
  Wrap an <code>ow-stepped-list</code> in <code>ow-divided-block</code> to
  number each <code>ow-divided-heading ow-stepped-list-item</code>. Each step
  nests its title and content, with rules between steps.
</p>
<Example
  block
  code={`<ol class="ow-divided-block ow-stepped-list">
  <li class="ow-divided-heading ow-stepped-list-item">
    <div class="ow-stepped-list-title">
      <h3 class="ow-heading-5">Install the MicroCeph snap on each node:</h3>
      <div class="ow-stepped-list-content">
        <pre class="ow-code-snippet"><code>sudo snap install microceph</code></pre>
      </div>
    </div>
  </li>
  <hr class="ow-rule-muted" />
  <li class="ow-divided-heading ow-stepped-list-item">
    <div class="ow-stepped-list-title">
      <h3 class="ow-heading-5">Then bootstrap the cluster:</h3>
      <div class="ow-stepped-list-content">
        <pre class="ow-code-snippet"><code>sudo microceph cluster bootstrap</code></pre>
      </div>
    </div>
  </li>
</ol>`}
>
  <ol class="ow-divided-block ow-stepped-list w-full">
    <li class="ow-divided-heading ow-stepped-list-item">
      <div class="ow-stepped-list-title">
        <h3 class="ow-heading-5">Install the MicroCeph snap on each node:</h3>
        <div class="ow-stepped-list-content grid gap-3 pt-2">
          <pre class="ow-code-snippet"><code>sudo snap install microceph</code
            ></pre>
        </div>
      </div>
    </li>
    <hr class="ow-rule-muted" />
    <li class="ow-divided-heading ow-stepped-list-item">
      <div class="ow-stepped-list-title">
        <h3 class="ow-heading-5">Then bootstrap the cluster:</h3>
        <div class="ow-stepped-list-content grid gap-3 pt-2">
          <pre class="ow-code-snippet"><code
              >sudo microceph cluster bootstrap</code
            ></pre>
        </div>
      </div>
    </li>
  </ol>
</Example>

<h2 id="plain" class="ow-heading-2">Plain blocks</h2>
<p>
  Omit the marker classes for a list of plain blocks — for example code-only
  items — keeping the divided rhythm without bullets or numbers.
</p>
<Example
  block
  code={`<ul class="ow-divided-block ow-list">
  <li class="ow-divided-heading ow-list-item">
    <pre class="ow-code-snippet"><code>sudo apt-get update</code></pre>
  </li>
  <hr class="ow-rule-muted" />
  <li class="ow-divided-heading ow-list-item">
    <pre class="ow-code-snippet"><code>sudo apt-get install --yes ubuntu-server</code></pre>
  </li>
</ul>`}
>
  <ul class="ow-divided-block ow-list w-full">
    <li class="ow-divided-heading ow-list-item">
      <pre class="ow-code-snippet"><code>sudo apt-get update</code></pre>
    </li>
    <hr class="ow-rule-muted" />
    <li class="ow-divided-heading ow-list-item">
      <pre class="ow-code-snippet"><code
          >sudo apt-get install --yes ubuntu-server</code
        ></pre>
    </li>
  </ul>
</Example>
