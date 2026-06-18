<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  const screenshot =
    'https://assets.ubuntu.com/v1/0a98afcd-screenshot_desktop.jpg'

  type Offering = { included: boolean; text: string }
  const offerings: Offering[] = [
    { included: true, text: 'High availability' },
    { included: true, text: 'Public clouds, VMware, OpenStack' },
    { included: true, text: 'Logging, monitoring, alerting' },
    { included: false, text: 'Support or Fully Managed' },
    { included: false, text: 'GPU acceleration' }
  ]
  const tiers = [
    { id: 'explorer', name: 'Kubernetes Explorer' },
    { id: 'builder', name: 'Kubernetes Builder' }
  ]

  const stats = [
    {
      id: 'clusters',
      stat: '12k+',
      headline: 'production clusters',
      description: 'Across public clouds, private clouds and the edge.',
      link: 'Read the report'
    },
    {
      id: 'time',
      stat: '8 min',
      headline: 'to first workload',
      description: 'Median time to bootstrap a new cluster end to end.'
    },
    {
      id: 'cost',
      stat: '5×',
      headline: 'cost reduction',
      description: 'Lower total cost of ownership than managed cloud K8s.',
      link: 'See the case study'
    }
  ]
</script>

<!-- Mandatory headline demonstration — a data spotlight feature block. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="ow-section w-full">
    <h2 class="ow-muted-heading">Kubernetes at scale</h2>
    <div class="ow-data-spotlight-row pt-2 md:grid-cols-3">
      {#each stats as item (item.id)}
        <div class="ow-data-spotlight-block">
          <div>
            <hr class="ow-rule-highlight" />
            <p class="ow-heading-1 ow-data-spotlight-stat">{item.stat}</p>
          </div>
          <p class="ow-heading-3 m-0 p-0">{item.headline}</p>
          <p>{item.description}</p>
          {#if item.link}<a href="#stat">{item.link}</a>{/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<p>
  Feature blocks are the marketing-page building blocks: pricing tables,
  resource lists, logo walls, calls to action, data spotlights and newsletter
  sign-ups. Each composes Orangewind primitives — sections, rules, the
  <code>ow-cta-block</code> and image containers — into a self-contained region. This
  page shows one representative example of each block.
</p>

<h2 id="pricing-block" class="ow-heading-2">Pricing block</h2>
<p>
  The <code>ow-pricing-block</code> grid lays tiers side by side, each a subgrid
  so their sections align row by row. Variants
  <code>ow-pricing-block-25-75</code> and <code>ow-pricing-block-50-50</code>
  centre three or two tiers. List features with
  <code>ow-list-divided</code> and <code>ow-is-ticked</code> /
  <code>ow-is-crossed</code> markers.
</p>
<Example
  block
  code={`<div class="ow-section">
  <hr class="ow-rule ow-is-fixed-width" />
  <h2 class="ow-heading-2 pt-4">Kubernetes pricing</h2>
  <div class="ow-pricing-block pt-4">
    <div class="ow-pricing-block-tier">
      <div class="ow-pricing-block-section">
        <h3 class="ow-heading-4">Kubernetes Explorer<br /><strong>$3099</strong>
          <span class="opacity-60">per year, per VM</span></h3>
      </div>
      <div class="ow-pricing-block-section">
        <p class="opacity-60">What's included</p>
        <hr class="ow-rule-muted" />
        <ul class="ow-list-divided">
          <li class="ow-list-item ow-is-ticked">High availability</li>
          <li class="ow-list-item ow-is-crossed opacity-60">GPU acceleration</li>
        </ul>
      </div>
      <div class="ow-pricing-block-section">
        <a class="ow-btn-positive" href="#pricing">Get started</a>
      </div>
    </div>
  </div>
</div>`}
>
  <div class="ow-section w-full">
    <hr class="ow-rule ow-is-fixed-width" />
    <h2 class="ow-heading-3 pt-4">Kubernetes pricing</h2>
    <div class="ow-pricing-block-50-50 pt-4">
      {#each tiers as item (item.id)}
        <div class="ow-pricing-block-tier">
          <div class="ow-pricing-block-section">
            <h3 class="ow-heading-4">
              {item.name}<br />
              <strong>$3099</strong>
              <span class="opacity-60">per year, per VM</span>
            </h3>
          </div>
          <div class="ow-pricing-block-section">
            <p class="opacity-60">What's included</p>
            <hr class="ow-rule-muted" />
            <ul class="ow-list-divided">
              {#each offerings as offering (offering.text)}
                <li
                  class={`ow-list-item ${offering.included ? 'ow-is-ticked' : 'ow-is-crossed opacity-60'}`}
                >
                  {offering.text}
                </li>
              {/each}
            </ul>
          </div>
          <div class="ow-pricing-block-section">
            <a class="ow-btn-positive" href="#pricing">Get started</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Example>

<h2 id="resources-block" class="ow-heading-2">Resources block</h2>
<p>
  An <code>ow-resources-block</code> pairs a media column with a content column,
  splitting 25/75 on large screens. Stack several behind a section header and
  separate them with <code>ow-rule-muted</code>.
</p>
<Example
  block
  code={`<div class="ow-resources-block">
  <div class="ow-resources-block-col">
    <div class="ow-image-container-16-9 ow-is-cover">
      <img class="ow-image-container-img" src="cover.jpg" alt="" />
    </div>
  </div>
  <div class="ow-resources-block-col grid gap-2">
    <h3 class="ow-heading-3"><a href="#resource">Multi-cloud Kubernetes operations</a></h3>
    <p>A practical guide to running Kubernetes across hybrid estates.</p>
    <p class="opacity-60">Canonical · 20th April 2024</p>
  </div>
</div>`}
>
  <div class="ow-resources-block w-full">
    <div class="ow-resources-block-col">
      <div class="ow-image-container-16-9 ow-is-cover">
        <img class="ow-image-container-img" src={screenshot} alt="" />
      </div>
    </div>
    <div class="ow-resources-block-col grid gap-2">
      <h3 class="ow-heading-3">
        <a href="#resource">Multi-cloud Kubernetes operations</a>
      </h3>
      <p>A practical guide to running Kubernetes across hybrid estates.</p>
      <p class="opacity-60">Canonical · 20th April 2024</p>
    </div>
  </div>
</Example>

<h2 id="logo-section" class="ow-heading-2">Logo section</h2>
<p>
  An <code>ow-logo-section</code> arranges partner logos in a wrapping flex row.
  Each <code>ow-logo-section-logo</code> keeps a consistent height. Introduce it with
  a header and a fixed-width rule.
</p>
<Example
  block
  code={`<div class="ow-section">
  <hr class="ow-rule ow-is-fixed-width" />
  <h2 class="ow-muted-heading pt-4">Trusted by industry leaders</h2>
  <div class="ow-logo-section pt-4">
    <div class="ow-logo-section-items">
      <img class="ow-logo-section-logo" src="dell.png" alt="Dell Technologies" />
      <img class="ow-logo-section-logo" src="hp.png" alt="Hewlett Packard" />
    </div>
  </div>
</div>`}
>
  <div class="ow-section w-full">
    <hr class="ow-rule ow-is-fixed-width" />
    <h2 class="ow-muted-heading pt-4">Trusted by industry leaders</h2>
    <div class="ow-logo-section pt-4">
      <div class="ow-logo-section-items">
        <img
          class="ow-logo-section-logo"
          src="https://assets.ubuntu.com/v1/38fdfd23-Dell-logo.png"
          alt="Dell Technologies"
        />
        <img
          class="ow-logo-section-logo"
          src="https://assets.ubuntu.com/v1/cd5f636a-hp-logo.png"
          alt="Hewlett Packard"
        />
        <img
          class="ow-logo-section-logo"
          src="https://assets.ubuntu.com/v1/f90702cd-lenovo-logo.png"
          alt="Lenovo"
        />
      </div>
    </div>
  </div>
</Example>

<h2 id="cta-section" class="ow-heading-2">CTA section</h2>
<p>
  A call-to-action section sets a headline (often with an inline link) on an
  emphasis strip. Pair it with an <code>ow-cta-block</code> when you need buttons.
  The block aligns its actions on a shared baseline and wraps as needed.
</p>
<Example
  block
  code={`<hr class="ow-rule ow-is-fixed-width" />
<div class="ow-strip ow-is-deep">
  <div class="grid gap-4">
    <h2 class="ow-heading-2">The quick brown fox jumps over the lazy dog</h2>
    <p>The quick brown fox jumps over the lazy dog.</p>
    <div class="ow-cta-block">
      <a class="ow-btn-positive" href="#action">Action</a>
      <a class="ow-btn" href="#action">Secondary action</a>
      <a class="ow-btn-link" href="#more">Lorem ipsum dolor sit amet ›</a>
    </div>
  </div>
</div>`}
>
  <div class="w-full">
    <hr class="ow-rule ow-is-fixed-width" />
    <div class="ow-strip ow-is-shallow">
      <div class="grid gap-4">
        <h2 class="ow-heading-3">
          The quick brown fox jumps over the lazy dog
        </h2>
        <p class="m-0">The quick brown fox jumps over the lazy dog.</p>
        <div class="ow-cta-block">
          <a class="ow-btn-positive" href="#action">Action</a>
          <a class="ow-btn" href="#action">Secondary action</a>
          <a class="ow-btn-link" href="#more">Lorem ipsum dolor sit amet ›</a>
        </div>
      </div>
    </div>
  </div>
</Example>

<h2 id="data-spotlight" class="ow-heading-2">Data spotlight</h2>
<p>
  An <code>ow-data-spotlight-row</code> highlights key statistics. Each
  <code>ow-data-spotlight-block</code> leads with a highlight rule and a large
  <code>ow-data-spotlight-stat</code>, then a headline, description and optional
  link, all aligned across the row by a subgrid.
</p>
<Example
  block
  code={`<div class="ow-section">
  <h2 class="ow-muted-heading">By the numbers</h2>
  <div class="ow-data-spotlight-row pt-2 md:grid-cols-3">
    <div class="ow-data-spotlight-block">
      <div>
        <hr class="ow-rule-highlight" />
        <p class="ow-heading-1 ow-data-spotlight-stat">12k+</p>
      </div>
      <p class="ow-heading-3 m-0 p-0">production clusters</p>
      <p>Across public clouds, private clouds and the edge.</p>
      <a href="#stat">Read the report</a>
    </div>
  </div>
</div>`}
>
  <div class="ow-section w-full">
    <h2 class="ow-muted-heading">By the numbers</h2>
    <div class="ow-data-spotlight-row pt-2 md:grid-cols-3">
      {#each stats as item (item.id)}
        <div class="ow-data-spotlight-block">
          <div>
            <hr class="ow-rule-highlight" />
            <p class="ow-heading-1 ow-data-spotlight-stat">{item.stat}</p>
          </div>
          <p class="ow-heading-3 m-0 p-0">{item.headline}</p>
          <p>{item.description}</p>
          {#if item.link}<a href="#stat">{item.link}</a>{/if}
        </div>
      {/each}
    </div>
  </div>
</Example>

<h2 id="newsletter-signup" class="ow-heading-2">Newsletter signup</h2>
<p>
  A newsletter block introduces a stacked sign-up form. Use
  <code>ow-form ow-form-stacked</code> for the fields and an
  <code>ow-checkbox</code> for the opt-in. The 25/75 layout puts the heading beside
  the form on large screens.
</p>
<Example
  block
  code={`<div class="ow-section">
  <hr class="ow-rule ow-is-fixed-width" />
  <div class="grid gap-6 pt-4 lg:grid-cols-[1fr_3fr]">
    <h2 class="ow-heading-2">Newsletter signup</h2>
    <div class="grid gap-4">
      <p>Get the latest Ubuntu news and updates in your inbox.</p>
      <form action="#subscribe" method="post" class="ow-form ow-form-stacked">
        <label class="ow-is-required" for="email">Work email:</label>
        <input required id="email" name="email" type="email" placeholder="you@example.com" />
        <div class="ow-checkbox">
          <input required type="checkbox" id="optin" class="ow-checkbox-input" />
          <label for="optin" class="ow-checkbox-label">I agree to receive product news.</label>
        </div>
        <button type="submit" class="ow-btn-positive">Sign up</button>
      </form>
    </div>
  </div>
</div>`}
>
  <div class="ow-section w-full">
    <hr class="ow-rule ow-is-fixed-width" />
    <div class="grid gap-6 pt-4 lg:grid-cols-[1fr_3fr]">
      <h2 class="ow-heading-3">Newsletter signup</h2>
      <div class="grid gap-4">
        <p>Get the latest Ubuntu news and updates in your inbox.</p>
        <form action="#subscribe" method="post" class="ow-form ow-form-stacked">
          <label class="ow-is-required" for="feature-email">Work email:</label>
          <input
            required
            id="feature-email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          <div class="ow-checkbox">
            <input
              required
              type="checkbox"
              id="feature-optin"
              class="ow-checkbox-input"
            />
            <label for="feature-optin" class="ow-checkbox-label">
              I agree to receive product news and updates.
            </label>
          </div>
          <button type="submit" class="ow-btn-positive">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</Example>
