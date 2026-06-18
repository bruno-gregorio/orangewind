<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  const wideImage =
    'https://assets.ubuntu.com/v1/cf1e2ddb-datacenter-wide-crop.jpeg'

  type Tab = { id: string; panelId: string; label: string; copy: string }
  const tabs: Tab[] = [
    {
      id: 'compute-tab',
      panelId: 'compute-panel',
      label: 'Compute',
      copy: 'Provision and operate VMs across every cloud you run.'
    },
    {
      id: 'storage-tab',
      panelId: 'storage-panel',
      label: 'Storage',
      copy: 'Resilient block, object and file storage for stateful workloads.'
    },
    {
      id: 'network-tab',
      panelId: 'network-panel',
      label: 'Networking',
      copy: 'Model software-defined networks in code and apply them anywhere.'
    }
  ]
  let activeTabId = $state(tabs[0].id)

  const columns = [
    {
      id: 'cloud',
      stat: '01',
      title: 'Public cloud',
      description: 'Run the same control plane across public clouds.',
      link: 'Explore clouds'
    },
    {
      id: 'private',
      stat: '02',
      title: 'Private cloud',
      description:
        'Bring workloads on-premise without changing the operations model.',
      link: 'Explore private cloud'
    },
    {
      id: 'edge',
      stat: '03',
      title: 'Edge',
      description: 'Push compute to the edge with a lightweight footprint.',
      link: 'Explore edge'
    }
  ]
</script>

<!-- Mandatory headline demonstration — a contained 50/50 hero. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <section class="ow-section-hero w-full">
    <div class="grid items-start gap-8 lg:grid-cols-2">
      <div>
        <div class="ow-section-shallow grid gap-2">
          <h1 class="ow-heading-2">Build for every workload</h1>
          <p class="ow-heading-4 m-0">
            One operations model spans cloud, data center and edge.
          </p>
        </div>
        <div class="ow-section-shallow">
          <p class="m-0">
            The right column of a 50/50 split usually carries more content than
            the left.
          </p>
        </div>
        <div class="ow-cta-block pb-0">
          <a class="ow-btn-positive" href="#hero">Learn more</a>
          <a class="ow-btn-link" href="#hero">Contact us ›</a>
        </div>
      </div>
      <div class="ow-image-container-3-2 ow-is-cover">
        <img class="ow-image-container-img" src={wideImage} alt="" />
      </div>
    </div>
  </section>
</div>

<p>
  These page-level patterns are composed from Orangewind primitives rather than
  a single class. A hero pairs an <code>ow-section-hero</code> with a responsive
  grid; <code>ow-tabs</code>, <code>ow-text-small-caps</code> and the
  <code>ow-equal-height-row</code> grid each provide a section layout. The examples
  below show one representative variant of each.
</p>

<h2 id="hero" class="ow-heading-2">Hero</h2>
<p>
  Wrap the hero in <code>ow-section-hero</code> for the first-page top padding,
  then split content and image with a grid. Group the title and subtitle in an
  <code>ow-section-shallow</code> unit, and put the calls to action in an
  <code>ow-cta-block</code>.
</p>
<Example
  block
  code={`<section class="ow-section-hero">
  <div class="grid items-start gap-8 lg:grid-cols-2">
    <div>
      <div class="ow-section-shallow grid gap-2">
        <h1 class="ow-heading-1">Build for every workload</h1>
        <p class="ow-heading-2">One operations model, everywhere.</p>
      </div>
      <div class="ow-section-shallow">
        <p>Supporting copy sits beneath the title.</p>
      </div>
      <div class="ow-cta-block pb-0">
        <a class="ow-btn-positive" href="#hero">Learn more</a>
        <a class="ow-btn-link" href="#hero">Contact us ›</a>
      </div>
    </div>
    <div class="ow-image-container-3-2 ow-is-cover">
      <img class="ow-image-container-img" src="hero.jpeg" alt="" />
    </div>
  </div>
</section>`}
>
  <section class="ow-section-hero w-full">
    <div class="grid items-start gap-8 lg:grid-cols-2">
      <div>
        <div class="ow-section-shallow grid gap-2">
          <h1 class="ow-heading-2">Build for every workload</h1>
          <p class="ow-heading-4 m-0">One operations model, everywhere.</p>
        </div>
        <div class="ow-section-shallow">
          <p class="m-0">Supporting copy sits beneath the title.</p>
        </div>
        <div class="ow-cta-block pb-0">
          <a class="ow-btn-positive" href="#hero">Learn more</a>
          <a class="ow-btn-link" href="#hero">Contact us ›</a>
        </div>
      </div>
      <div class="ow-image-container-3-2 ow-is-cover">
        <img class="ow-image-container-img" src={wideImage} alt="" />
      </div>
    </div>
  </section>
</Example>

<h2 id="tab-section" class="ow-heading-2">Tab section</h2>
<p>
  Lead a section with a 50/50 header, then switch between blocks of content with
  an <code>ow-tabs</code> tablist. Each <code>ow-tabs-link</code> controls a
  matching <code>ow-tabs-panel</code> that is hidden when inactive.
</p>
<Example
  block
  code={`<div class="ow-tabs">
  <div class="ow-tabs-list" role="tablist" aria-label="Platform capabilities">
    <div class="ow-tabs-item">
      <button class="ow-tabs-link" id="compute-tab" role="tab" aria-selected="true" aria-controls="compute-panel">
        Compute
      </button>
    </div>
    <div class="ow-tabs-item">
      <button class="ow-tabs-link" id="storage-tab" role="tab" aria-selected="false" aria-controls="storage-panel" tabindex="-1">
        Storage
      </button>
    </div>
  </div>
  <div class="ow-tabs-panel" role="tabpanel" id="compute-panel" aria-labelledby="compute-tab" tabindex="0">
    <p>Provision and operate VMs across every cloud you run.</p>
  </div>
  <div class="ow-tabs-panel" role="tabpanel" id="storage-panel" aria-labelledby="storage-tab" tabindex="0" hidden>
    <p>Resilient storage for stateful workloads.</p>
  </div>
</div>`}
>
  <section class="ow-section w-full">
    <div class="ow-section-shallow">
      <hr class="ow-rule" />
      <div class="grid gap-6 pt-4 lg:grid-cols-2">
        <h2 class="ow-heading-3 m-0">A platform for every workload</h2>
        <p class="m-0">
          Switch between layers of the stack to see how the same operations
          model carries across them.
        </p>
      </div>
    </div>
    <div class="ow-tabs">
      <div
        class="ow-tabs-list"
        role="tablist"
        aria-label="Platform capabilities"
      >
        {#each tabs as tab (tab.id)}
          <div class="ow-tabs-item">
            <button
              type="button"
              class="ow-tabs-link"
              id={tab.id}
              role="tab"
              aria-selected={activeTabId === tab.id}
              aria-controls={tab.panelId}
              tabindex={activeTabId === tab.id ? 0 : -1}
              onclick={() => (activeTabId = tab.id)}
            >
              {tab.label}
            </button>
          </div>
        {/each}
      </div>
      {#each tabs as tab (tab.panelId)}
        <div
          class="ow-tabs-panel"
          role="tabpanel"
          id={tab.panelId}
          aria-labelledby={tab.id}
          tabindex="0"
          hidden={activeTabId !== tab.id}
        >
          <p class="m-0">{tab.copy}</p>
        </div>
      {/each}
    </div>
  </section>
</Example>

<h2 id="text-spotlight" class="ow-heading-2">Text spotlight</h2>
<p>
  A text spotlight pairs a small-caps heading with a column of short statements
  separated by muted rules. Lead with a fixed-width
  <code>ow-rule ow-is-fixed-width</code> and label the column using
  <code>ow-text-small-caps</code>.
</p>
<Example
  block
  code={`<section class="ow-section">
  <hr class="ow-rule ow-is-fixed-width" />
  <div class="grid gap-6 lg:grid-cols-4">
    <div class="lg:col-span-1">
      <h2 class="ow-text-small-caps">Why Ubuntu</h2>
    </div>
    <div class="lg:col-span-3">
      <p class="ow-heading-2">Every layer is open source.</p>
      <hr class="ow-rule-muted" />
      <p class="ow-heading-2">One operations model spans every environment.</p>
    </div>
  </div>
</section>`}
>
  <section class="ow-section w-full">
    <hr class="ow-rule ow-is-fixed-width" />
    <div class="grid gap-6 lg:grid-cols-4">
      <div class="lg:col-span-1">
        <h2 class="ow-text-small-caps">Why Ubuntu</h2>
      </div>
      <div class="lg:col-span-3">
        <p class="ow-heading-3">
          Every layer is open source, from the kernel to the control plane.
        </p>
        <hr class="ow-rule-muted" />
        <p class="ow-heading-3">
          One operations model spans cloud, data center and edge.
        </p>
      </div>
    </div>
  </section>
</Example>

<h2 id="equal-height-row" class="ow-heading-2">Equal-height row</h2>
<p>
  An <code>ow-equal-height-row</code> aligns each row of its columns — stat,
  title, description and link — across the whole row using a subgrid, even when
  the copy differs in length. Add <code>ow-has-divider-1</code> /
  <code>-2</code> / <code>-3</code> for vertical dividers between columns.
</p>
<Example
  block
  code={`<div class="ow-equal-height-row">
  <div class="ow-equal-height-row-col">
    <div class="ow-equal-height-row-item"><p class="ow-heading-1 m-0 p-0">01</p></div>
    <div class="ow-equal-height-row-item"><h3 class="ow-heading-5 m-0 p-0">Public cloud</h3></div>
    <div class="ow-equal-height-row-item"><p class="m-0 p-0">Run the same control plane across public clouds.</p></div>
    <div class="ow-equal-height-row-item"><a href="#col">Explore clouds ›</a></div>
  </div>
  <!-- more ow-equal-height-row-col children -->
</div>`}
>
  <div class="ow-equal-height-row w-full">
    {#each columns as item (item.id)}
      <div class="ow-equal-height-row-col">
        <div class="ow-equal-height-row-item">
          <p class="ow-heading-1 m-0 p-0">{item.stat}</p>
        </div>
        <div class="ow-equal-height-row-item">
          <h3 class="ow-heading-5 m-0 p-0">{item.title}</h3>
        </div>
        <div class="ow-equal-height-row-item">
          <p class="m-0 p-0">{item.description}</p>
        </div>
        <div class="ow-equal-height-row-item">
          <a href="#col">{item.link} ›</a>
        </div>
      </div>
    {/each}
  </div>
</Example>
