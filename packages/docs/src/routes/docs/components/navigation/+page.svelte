<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration's dropdown.
  let dropdownOpen = $state(false)
</script>

<!-- Mandatory headline demonstration: a contained navigation bar. The real
     component is sticky and full-width; here it is scoped inside a bounded,
     scrollable box so it never hijacks the viewport. -->
<div class="overflow-hidden rounded border border-ow-surface-border">
  <div class="max-h-80 overflow-auto">
    <header class="ow-navigation">
      <div class="ow-navigation-row">
        <div class="ow-navigation-banner">
          <div class="ow-navigation-tagged-logo">
            <a class="ow-navigation-link" href="#home">
              <span class="ow-navigation-logo-tag">
                <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
              </span>
              <span class="ow-navigation-logo-title">Orangewind</span>
            </a>
          </div>
        </div>
        <nav class="ow-navigation-nav">
          <ul class="ow-navigation-items">
            <li class="ow-navigation-item ow-is-selected">
              <a class="ow-navigation-link" href="#products">Products</a>
            </li>
            <li
              class="ow-navigation-item-dropdown-toggle"
              class:ow-is-active={dropdownOpen}
            >
              <button
                type="button"
                class="ow-navigation-link"
                aria-expanded={dropdownOpen}
                onclick={() => (dropdownOpen = !dropdownOpen)}
              >
                Solutions
              </button>
              <ul class="ow-navigation-dropdown" aria-hidden={!dropdownOpen}>
                <li>
                  <a class="ow-navigation-dropdown-item" href="#cloud">Cloud</a>
                </li>
                <li>
                  <a class="ow-navigation-dropdown-item" href="#edge">Edge</a>
                </li>
              </ul>
            </li>
            <li class="ow-navigation-item">
              <a class="ow-navigation-link" href="#docs">Docs</a>
            </li>
          </ul>
          <ul class="ow-navigation-items ow-is-right-shifted">
            <li class="ow-navigation-item">
              <a class="ow-navigation-link" href="#login">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</div>

<p>
  The navigation bar holds a site's primary links and branding. The real
  component is full-width and sticks to the top of the viewport with
  <code>ow-is-sticky</code>; below the large breakpoint it collapses behind
  <strong>Menu</strong> and <strong>Search</strong> toggles. The previews here are
  bounded inside a scrollable box so they never take over the page.
</p>

<h2 id="banner" class="ow-heading-2">Banner and tagged logo</h2>
<p>
  A <code>ow-navigation-banner</code> holds the logo and the mobile toggles. The
  tagged logo pairs the orange <code>ow-navigation-logo-tag</code> mark with a
  <code>ow-navigation-logo-title</code>.
</p>
<Example
  code={`<header class="ow-navigation">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="#home">
          <span class="ow-navigation-logo-tag">
            <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
          </span>
          <span class="ow-navigation-logo-title">Orangewind</span>
        </a>
      </div>
    </div>
  </div>
</header>`}
>
  <header class="ow-navigation w-full">
    <div class="ow-navigation-row">
      <div class="ow-navigation-banner">
        <div class="ow-navigation-tagged-logo">
          <a class="ow-navigation-link" href="#home">
            <span class="ow-navigation-logo-tag">
              <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
            </span>
            <span class="ow-navigation-logo-title">Orangewind</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</Example>

<h2 id="reduced" class="ow-heading-2">Reduced</h2>
<p>
  A <code>ow-navigation-reduced</code> bar is a secondary, muted strip that sits above
  the main bar — useful for cross-site or account links. Its orange logo tag is hidden
  automatically.
</p>
<Example
  code={`<header class="ow-navigation-reduced">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="#home">
          <span class="ow-navigation-logo-title">Orangewind Labs</span>
        </a>
      </div>
    </div>
    <nav class="ow-navigation-nav">
      <ul class="ow-navigation-items ow-is-right-shifted">
        <li class="ow-navigation-item">
          <a class="ow-navigation-link" href="#about">About</a>
        </li>
        <li class="ow-navigation-item">
          <a class="ow-navigation-link" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`}
>
  <header class="ow-navigation-reduced w-full">
    <div class="ow-navigation-row">
      <div class="ow-navigation-banner">
        <div class="ow-navigation-tagged-logo">
          <a class="ow-navigation-link" href="#home">
            <span class="ow-navigation-logo-title">Orangewind Labs</span>
          </a>
        </div>
      </div>
      <nav class="ow-navigation-nav">
        <ul class="ow-navigation-items ow-is-right-shifted">
          <li class="ow-navigation-item">
            <a class="ow-navigation-link" href="#about">About</a>
          </li>
          <li class="ow-navigation-item">
            <a class="ow-navigation-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</Example>

<h2 id="items" class="ow-heading-2">Items and selected state</h2>
<p>
  Links live in a <code>ow-navigation-items</code> list. Mark the current page
  with <code>ow-is-selected</code> on its item, and push a list (or a single
  item) to the trailing edge with <code>ow-is-right-shifted</code>.
</p>
<Example
  code={`<nav class="ow-navigation-nav">
  <ul class="ow-navigation-items">
    <li class="ow-navigation-item ow-is-selected">
      <a class="ow-navigation-link" href="#products">Products</a>
    </li>
    <li class="ow-navigation-item">
      <a class="ow-navigation-link" href="#pricing">Pricing</a>
    </li>
    <li class="ow-navigation-item">
      <a class="ow-navigation-link" href="#docs">Docs</a>
    </li>
  </ul>
  <ul class="ow-navigation-items ow-is-right-shifted">
    <li class="ow-navigation-item">
      <a class="ow-navigation-link" href="#login">Sign in</a>
    </li>
  </ul>
</nav>`}
>
  <nav class="ow-navigation ow-navigation-nav w-full">
    <ul class="ow-navigation-items">
      <li class="ow-navigation-item ow-is-selected">
        <a class="ow-navigation-link" href="#products">Products</a>
      </li>
      <li class="ow-navigation-item">
        <a class="ow-navigation-link" href="#pricing">Pricing</a>
      </li>
      <li class="ow-navigation-item">
        <a class="ow-navigation-link" href="#docs">Docs</a>
      </li>
    </ul>
    <ul class="ow-navigation-items ow-is-right-shifted">
      <li class="ow-navigation-item">
        <a class="ow-navigation-link" href="#login">Sign in</a>
      </li>
    </ul>
  </nav>
</Example>

<h2 id="dropdown" class="ow-heading-2">Dropdown</h2>
<p>
  Use <code>ow-navigation-item-dropdown-toggle</code> for a link that reveals a
  <code>ow-navigation-dropdown</code> panel. Toggle <code>ow-is-active</code> on the
  item to open it; the chevron rotates to match.
</p>
<Example
  code={`<ul class="ow-navigation-items">
  <li class="ow-navigation-item-dropdown-toggle ow-is-active">
    <button type="button" class="ow-navigation-link" aria-expanded="true">
      Solutions
    </button>
    <ul class="ow-navigation-dropdown" aria-hidden="false">
      <li><a class="ow-navigation-dropdown-item" href="#cloud">Cloud</a></li>
      <li><a class="ow-navigation-dropdown-item" href="#edge">Edge</a></li>
      <li><a class="ow-navigation-dropdown-item" href="#iot">IoT</a></li>
    </ul>
  </li>
</ul>`}
>
  <nav class="ow-navigation ow-navigation-nav w-full">
    <ul class="ow-navigation-items">
      <li class="ow-navigation-item-dropdown-toggle ow-is-active">
        <button type="button" class="ow-navigation-link" aria-expanded="true">
          Solutions
        </button>
        <ul class="ow-navigation-dropdown" aria-hidden="false">
          <li>
            <a class="ow-navigation-dropdown-item" href="#cloud">Cloud</a>
          </li>
          <li><a class="ow-navigation-dropdown-item" href="#edge">Edge</a></li>
          <li><a class="ow-navigation-dropdown-item" href="#iot">IoT</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</Example>

<h2 id="dark" class="ow-heading-2">Dark</h2>
<p>
  Within a <code>dark</code> context the bar recolours its surface and text.
  Wrap the navigation (or any ancestor) in the <code>dark</code> class to opt in.
</p>
<Example
  code={`<header class="ow-navigation">
  <div class="ow-navigation-row">
    <div class="ow-navigation-banner">
      <div class="ow-navigation-tagged-logo">
        <a class="ow-navigation-link" href="#home">
          <span class="ow-navigation-logo-tag">
            <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
          </span>
          <span class="ow-navigation-logo-title">Orangewind</span>
        </a>
      </div>
    </div>
    <nav class="ow-navigation-nav">
      <ul class="ow-navigation-items">
        <li class="ow-navigation-item ow-is-selected">
          <a class="ow-navigation-link" href="#products">Products</a>
        </li>
        <li class="ow-navigation-item">
          <a class="ow-navigation-link" href="#docs">Docs</a>
        </li>
      </ul>
    </nav>
  </div>
</header>`}
>
  <div class="dark w-full">
    <header class="ow-navigation w-full">
      <div class="ow-navigation-row">
        <div class="ow-navigation-banner">
          <div class="ow-navigation-tagged-logo">
            <a class="ow-navigation-link" href="#home">
              <span class="ow-navigation-logo-tag">
                <i class="ow-navigation-logo-icon ow-icon-blueprint"></i>
              </span>
              <span class="ow-navigation-logo-title">Orangewind</span>
            </a>
          </div>
        </div>
        <nav class="ow-navigation-nav">
          <ul class="ow-navigation-items">
            <li class="ow-navigation-item ow-is-selected">
              <a class="ow-navigation-link" href="#products">Products</a>
            </li>
            <li class="ow-navigation-item">
              <a class="ow-navigation-link" href="#docs">Docs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</Example>
