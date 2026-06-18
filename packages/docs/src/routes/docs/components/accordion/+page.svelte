<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration.
  const headlineItems = [
    {
      id: 'what-is-maas',
      label: 'What is MAAS?',
      copy: 'MAAS turns bare metal into an API-driven pool so teams can commission, deploy and recycle machines without handling each one manually.'
    },
    {
      id: 'what-maas-offers',
      label: 'What MAAS offers',
      copy: 'MAAS manages large sets of physical machines through resource pools, automated provisioning and repeatable lifecycle operations.'
    },
    {
      id: 'how-maas-works',
      label: 'How MAAS works',
      copy: 'When new hardware is added, MAAS commissions it, validates the machine and makes it ready for deployment.'
    }
  ]

  let openItemId = $state<string | null>(headlineItems[0].id)

  function toggle(id: string) {
    openItemId = openItemId === id ? null : id
  }
</script>

<!-- Mandatory headline demonstration — a real, working accordion. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <aside class="ow-accordion">
    <ul class="ow-accordion-list">
      {#each headlineItems as item (item.id)}
        <li class="ow-accordion-group">
          <div class="ow-accordion-heading" role="heading" aria-level="3">
            <button
              type="button"
              class="ow-accordion-tab"
              id={`${item.id}-tab`}
              aria-controls={`${item.id}-panel`}
              aria-expanded={openItemId === item.id ? 'true' : 'false'}
              onclick={() => toggle(item.id)}
            >
              {item.label}
            </button>
          </div>
          <section
            class="ow-accordion-panel"
            id={`${item.id}-panel`}
            aria-hidden={openItemId === item.id ? 'false' : 'true'}
            aria-labelledby={`${item.id}-tab`}
          >
            <p>{item.copy}</p>
          </section>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<p>
  An accordion stacks collapsible sections so the page stays compact while one
  panel is open at a time. Each <code>ow-accordion-tab</code> button toggles its
  <code>ow-accordion-panel</code>, with state expressed through
  <code>aria-expanded</code> on the button and <code>aria-hidden</code> on the panel.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  Wrap each group in an <code>ow-accordion-heading</code> with a
  <code>role="heading"</code> and <code>aria-level</code> when no native heading
  element is used. The button points at its panel via
  <code>aria-controls</code>, and the panel references the button back through
  <code>aria-labelledby</code>.
</p>
<Example
  block
  code={`<aside class="ow-accordion">
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
</aside>`}
>
  <aside class="ow-accordion">
    <ul class="ow-accordion-list">
      <li class="ow-accordion-group">
        <div class="ow-accordion-heading" role="heading" aria-level="3">
          <button
            class="ow-accordion-tab"
            id="ex-what-is-maas-tab"
            aria-controls="ex-what-is-maas-panel"
            aria-expanded="true"
          >
            What is MAAS?
          </button>
        </div>
        <section
          class="ow-accordion-panel"
          id="ex-what-is-maas-panel"
          aria-hidden="false"
          aria-labelledby="ex-what-is-maas-tab"
        >
          <p>MAAS turns bare metal into an API-driven pool.</p>
        </section>
      </li>
      <li class="ow-accordion-group">
        <div class="ow-accordion-heading" role="heading" aria-level="3">
          <button
            class="ow-accordion-tab"
            id="ex-how-maas-works-tab"
            aria-controls="ex-how-maas-works-panel"
            aria-expanded="false"
          >
            How MAAS works
          </button>
        </div>
        <section
          class="ow-accordion-panel"
          id="ex-how-maas-works-panel"
          aria-hidden="true"
          aria-labelledby="ex-how-maas-works-tab"
        >
          <p>MAAS commissions and validates new hardware.</p>
        </section>
      </li>
    </ul>
  </aside>
</Example>

<h2 id="heading-elements" class="ow-heading-2">Heading elements</h2>
<p>
  When the accordion belongs to a content section, a native heading element such
  as <code>&lt;h3&gt;</code> can own the toggle button directly. Add a
  typographic class like <code>ow-heading-3</code> to keep the page outline meaningful.
</p>
<Example
  block
  code={`<aside class="ow-accordion">
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
</aside>`}
>
  <aside class="ow-accordion">
    <ul class="ow-accordion-list">
      <li class="ow-accordion-group">
        <h3 class="ow-accordion-heading ow-heading-3">
          <button
            class="ow-accordion-tab"
            id="ex-controller-layout-tab"
            aria-controls="ex-controller-layout-panel"
            aria-expanded="true"
          >
            Controller layout
          </button>
        </h3>
        <section
          class="ow-accordion-panel"
          id="ex-controller-layout-panel"
          aria-hidden="false"
          aria-labelledby="ex-controller-layout-tab"
        >
          <p>Nested sections can use smaller heading levels.</p>
        </section>
      </li>
    </ul>
  </aside>
</Example>

<h2 id="tick-elements" class="ow-heading-2">Tick elements</h2>
<p>
  Add <code>ow-has-tick-elements</code> to the panel when its content is a stack of
  checkboxes or radios; it adjusts the indentation to align the controls.
</p>
<Example
  block
  code={`<aside class="ow-accordion">
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
</aside>`}
>
  <aside class="ow-accordion">
    <ul class="ow-accordion-list">
      <li class="ow-accordion-group">
        <div class="ow-accordion-heading" role="heading" aria-level="3">
          <button
            class="ow-accordion-tab"
            id="ex-networking-tab"
            aria-controls="ex-networking-panel"
            aria-expanded="true"
          >
            Networking
          </button>
        </div>
        <section
          class="ow-accordion-panel ow-has-tick-elements"
          id="ex-networking-panel"
          aria-hidden="false"
          aria-labelledby="ex-networking-tab"
        >
          <div class="ow-checkbox">
            <input
              type="checkbox"
              id="ex-working-offline"
              class="ow-checkbox-input"
            />
            <label for="ex-working-offline" class="ow-checkbox-label">
              Working offline
            </label>
          </div>
          <div class="ow-checkbox">
            <input
              type="checkbox"
              id="ex-network-spaces"
              class="ow-checkbox-input"
            />
            <label for="ex-network-spaces" class="ow-checkbox-label">
              Network spaces
            </label>
          </div>
        </section>
      </li>
    </ul>
  </aside>
</Example>
