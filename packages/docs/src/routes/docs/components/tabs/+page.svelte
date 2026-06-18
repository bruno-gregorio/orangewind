<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration.
  const headlineTabs = [
    {
      id: 'olm-tab',
      panelId: 'olm-panel',
      label: 'Lifecycle Manager',
      title: 'Operate applications across clouds',
      copy: 'Move from configuration management to application management across your hybrid cloud estate.'
    },
    {
      id: 'sdk-tab',
      panelId: 'sdk-panel',
      label: 'Operator SDK',
      title: 'Build operators with a focused toolkit',
      copy: 'A set of tools to help you write operators, model workloads clearly and package them for delivery.'
    },
    {
      id: 'charmhub-tab',
      panelId: 'charmhub-panel',
      label: 'Charmhub',
      title: 'Discover reusable building blocks',
      copy: 'A repository for charms, bundles and related artifacts spanning observability, data and identity.'
    }
  ]

  let activeTabId = $state(headlineTabs[0].id)
</script>

<!-- Mandatory headline demonstration — a real, working tabset. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="ow-tabs">
    <div class="ow-tabs-list" role="tablist" aria-label="Juju technology">
      {#each headlineTabs as tab (tab.id)}
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

    {#each headlineTabs as tab (tab.panelId)}
      <div
        class="ow-tabs-panel"
        tabindex="0"
        role="tabpanel"
        id={tab.panelId}
        aria-labelledby={tab.id}
        hidden={activeTabId !== tab.id}
      >
        <h3 class="ow-heading-5">{tab.title}</h3>
        <p>{tab.copy}</p>
      </div>
    {/each}
  </div>
</div>

<p>
  Tabs let users switch between related views or sections within the same
  context. Use a <code>role="tablist"</code> set of
  <code>ow-tabs-link</code> buttons to control matching
  <code>ow-tabs-panel</code> regions, or use plain links with
  <code>aria-current</code> to navigate between pages.
</p>

<h2 id="tabbed-content" class="ow-heading-2">Tabbed content</h2>
<p>
  For switching panels in place, give each <code>ow-tabs-link</code> button
  <code>role="tab"</code>, <code>aria-selected</code> and an
  <code>aria-controls</code> pointing at its panel. Each
  <code>ow-tabs-panel</code> carries <code>role="tabpanel"</code> and an
  <code>aria-labelledby</code> back-reference, and is hidden when inactive.
</p>
<Example
  code={`<div class="ow-tabs">
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
</div>`}
>
  <div class="ow-tabs">
    <div class="ow-tabs-list" role="tablist" aria-label="Juju technology">
      <div class="ow-tabs-item">
        <button
          class="ow-tabs-link"
          id="ex-olm-tab"
          role="tab"
          aria-selected="true"
          aria-controls="ex-olm-panel"
        >
          Lifecycle Manager
        </button>
      </div>
      <div class="ow-tabs-item">
        <button
          class="ow-tabs-link"
          id="ex-sdk-tab"
          role="tab"
          aria-selected="false"
          aria-controls="ex-sdk-panel"
          tabindex="-1"
        >
          Operator SDK
        </button>
      </div>
    </div>
    <div
      class="ow-tabs-panel"
      role="tabpanel"
      id="ex-olm-panel"
      aria-labelledby="ex-olm-tab"
      tabindex="0"
    >
      <h3 class="ow-heading-5">Operate applications across clouds</h3>
      <p>Move from configuration to application management.</p>
    </div>
    <div
      class="ow-tabs-panel"
      role="tabpanel"
      id="ex-sdk-panel"
      aria-labelledby="ex-sdk-tab"
      tabindex="0"
      hidden
    >
      <h3 class="ow-heading-5">Build operators with a focused toolkit</h3>
      <p>Tools to help you write operators and model workloads.</p>
    </div>
  </div>
</Example>

<h2 id="navigation" class="ow-heading-2">Navigation tabs</h2>
<p>
  When tabs link to separate pages or sections, use a
  <code>&lt;nav&gt;</code> with <code>&lt;a&gt;</code> elements and mark the
  active one with <code>aria-current="page"</code> instead of the tablist roles.
</p>
<Example
  code={`<nav class="ow-tabs" aria-label="Documentation sections">
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
</nav>`}
>
  <nav class="ow-tabs" aria-label="Documentation sections">
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
  </nav>
</Example>
