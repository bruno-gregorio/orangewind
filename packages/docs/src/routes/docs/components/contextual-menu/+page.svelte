<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // One open flag per demo menu; opening one closes the others.
  type MenuKey = 'headline' | 'left' | 'right' | 'indicator'
  const menus = $state<Record<MenuKey, boolean>>({
    headline: false,
    left: false,
    right: false,
    indicator: false
  })

  function toggle(key: MenuKey) {
    const wasOpen = menus[key]
    for (const id of Object.keys(menus) as MenuKey[]) menus[id] = false
    menus[key] = !wasOpen
  }
</script>

<!-- Mandatory headline demonstration — a real, toggleable contextual menu. -->
<div
  class="grid min-h-72 place-items-start rounded border border-ow-surface-border p-8"
>
  <span class="ow-contextual-menu-left">
    <button
      type="button"
      class="ow-btn ow-contextual-menu-toggle"
      aria-controls="headline-menu"
      aria-expanded={menus.headline}
      aria-haspopup="true"
      onclick={() => toggle('headline')}
    >
      Take action…
    </button>
    <span
      class="ow-contextual-menu-dropdown"
      id="headline-menu"
      aria-hidden={!menus.headline}
    >
      <span class="ow-contextual-menu-group">
        <button type="button" class="ow-contextual-menu-link">Commission</button
        >
        <button type="button" class="ow-contextual-menu-link">Acquire</button>
        <button type="button" class="ow-contextual-menu-link">Deploy</button>
      </span>
      <span class="ow-contextual-menu-group">
        <button type="button" class="ow-contextual-menu-link"
          >Rescue mode</button
        >
        <button type="button" class="ow-contextual-menu-link"
          >Mark broken</button
        >
      </span>
    </span>
  </span>
</div>

<p>
  A contextual menu reveals a dropdown of related actions from a toggle button.
  Toggle visibility by setting <code>aria-hidden</code> on the
  <code>ow-contextual-menu-dropdown</code>, and reflect the open state with
  <code>aria-expanded</code> on the toggle. Group related links with
  <code>ow-contextual-menu-group</code>; a divider appears between groups.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  A bare <code>ow-contextual-menu</code> aligns its dropdown to the right edge
  of the toggle. Each entry is an <code>ow-contextual-menu-link</code> — use a
  <code>&lt;button&gt;</code> for actions or an <code>&lt;a&gt;</code> for links.
</p>
<Example
  code={`<span class="ow-contextual-menu">
  <button
    class="ow-btn ow-contextual-menu-toggle"
    aria-controls="menu-right"
    aria-expanded="false"
    aria-haspopup="true"
  >
    Align right
  </button>
  <span class="ow-contextual-menu-dropdown" id="menu-right" aria-hidden="true">
    <span class="ow-contextual-menu-group">
      <button class="ow-contextual-menu-link">Commission</button>
      <button class="ow-contextual-menu-link">Acquire</button>
      <button class="ow-contextual-menu-link">Deploy</button>
    </span>
  </span>
</span>`}
>
  <div class="grid min-h-56 content-start">
    <span class="ow-contextual-menu">
      <button
        type="button"
        class="ow-btn ow-contextual-menu-toggle"
        aria-controls="right-menu"
        aria-expanded={menus.right}
        aria-haspopup="true"
        onclick={() => toggle('right')}
      >
        Align right
      </button>
      <span
        class="ow-contextual-menu-dropdown"
        id="right-menu"
        aria-hidden={!menus.right}
      >
        <span class="ow-contextual-menu-group">
          <button type="button" class="ow-contextual-menu-link"
            >Commission</button
          >
          <button type="button" class="ow-contextual-menu-link">Acquire</button>
          <button type="button" class="ow-contextual-menu-link">Deploy</button>
        </span>
      </span>
    </span>
  </div>
</Example>

<h2 id="alignment" class="ow-heading-2">Alignment</h2>
<p>
  Use <code>ow-contextual-menu-left</code> to align the dropdown to the toggle's
  left edge, or <code>ow-contextual-menu-center</code> to centre it. The base
  <code>ow-contextual-menu</code> aligns right.
</p>
<Example
  code={`<span class="ow-contextual-menu-left">
  <button class="ow-btn ow-contextual-menu-toggle" aria-controls="menu-left" aria-expanded="false" aria-haspopup="true">
    Align left
  </button>
  <span class="ow-contextual-menu-dropdown" id="menu-left" aria-hidden="true">
    <span class="ow-contextual-menu-group">
      <button class="ow-contextual-menu-link">Commission</button>
      <button class="ow-contextual-menu-link">Acquire</button>
      <button class="ow-contextual-menu-link">Deploy</button>
    </span>
  </span>
</span>`}
>
  <div class="grid min-h-56 content-start">
    <span class="ow-contextual-menu-left">
      <button
        type="button"
        class="ow-btn ow-contextual-menu-toggle"
        aria-controls="left-menu"
        aria-expanded={menus.left}
        aria-haspopup="true"
        onclick={() => toggle('left')}
      >
        Align left
      </button>
      <span
        class="ow-contextual-menu-dropdown"
        id="left-menu"
        aria-hidden={!menus.left}
      >
        <span class="ow-contextual-menu-group">
          <button type="button" class="ow-contextual-menu-link"
            >Commission</button
          >
          <button type="button" class="ow-contextual-menu-link">Acquire</button>
          <button type="button" class="ow-contextual-menu-link">Deploy</button>
        </span>
      </span>
    </span>
  </div>
</Example>

<h2 id="indicator" class="ow-heading-2">With an indicator</h2>
<p>
  Add an <code>ow-contextual-menu-indicator</code> chevron alongside the label
  (on an <code>ow-has-icon</code> toggle). It rotates 180° while the menu is expanded,
  signalling the current state.
</p>
<Example
  code={`<span class="ow-contextual-menu-left">
  <button class="ow-btn-positive ow-contextual-menu-toggle ow-has-icon" aria-controls="menu-indicator" aria-expanded="false" aria-haspopup="true">
    <span>Take action</span>
    <i class="ow-icon-chevron-down ow-contextual-menu-indicator" aria-hidden="true"></i>
  </button>
  <span class="ow-contextual-menu-dropdown" id="menu-indicator" aria-hidden="true">
    <span class="ow-contextual-menu-group">
      <a href="#commission" class="ow-contextual-menu-link">Commission</a>
      <a href="#acquire" class="ow-contextual-menu-link">Acquire</a>
      <a href="#deploy" class="ow-contextual-menu-link">Deploy</a>
    </span>
  </span>
</span>`}
>
  <div class="grid min-h-56 content-start">
    <span class="ow-contextual-menu-left">
      <button
        type="button"
        class="ow-btn-positive ow-contextual-menu-toggle ow-has-icon"
        aria-controls="indicator-menu"
        aria-expanded={menus.indicator}
        aria-haspopup="true"
        onclick={() => toggle('indicator')}
      >
        <span>Take action</span>
        <i
          class="ow-icon-chevron-down ow-contextual-menu-indicator"
          aria-hidden="true"
        ></i>
      </button>
      <span
        class="ow-contextual-menu-dropdown"
        id="indicator-menu"
        aria-hidden={!menus.indicator}
      >
        <span class="ow-contextual-menu-group">
          <a href="#commission" class="ow-contextual-menu-link">Commission</a>
          <a href="#acquire" class="ow-contextual-menu-link">Acquire</a>
          <a href="#deploy" class="ow-contextual-menu-link">Deploy</a>
        </span>
      </span>
    </span>
  </div>
</Example>
