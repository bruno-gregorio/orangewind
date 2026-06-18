<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <ul class="ow-matrix">
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/60d9b81e-picto-canonical.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#canonical">Canonical</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>
            Commercial engineering and support for open source infrastructure,
            from planning through operations.
          </p>
        </div>
      </div>
    </li>
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/0de4fcd5-logo-maas-icon.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#maas">MAAS</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>
            Bare metal provisioning, IP address management and inventory for
            datacentres that need repeatable deployments.
          </p>
        </div>
      </div>
    </li>
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/6d382a53-image-juju-256.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#juju">Juju</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>
            Model-driven operations for applications that move cleanly across
            machines, clouds and Kubernetes.
          </p>
        </div>
      </div>
    </li>
  </ul>
</div>

<p>
  The matrix lays a set of icon-led entries out in a responsive grid (one column
  on small screens, up to three on large), ideal for a product index or feature
  overview. Each <code>ow-matrix-item</code> pairs an
  <code>ow-matrix-img</code> with an <code>ow-matrix-content</code> block.
</p>

<h2 id="item" class="ow-heading-2">A single item</h2>
<p>
  An item is an icon plus a title and description. The
  <code>ow-matrix-title</code> wraps an <code>ow-matrix-link</code>, and the
  supporting copy lives inside <code>ow-matrix-desc</code>.
</p>
<Example
  block
  code={`<ul class="ow-matrix">
  <li class="ow-matrix-item">
    <img
      class="ow-matrix-img"
      src="/path/to/product-icon.svg"
      alt=""
    />
    <div class="ow-matrix-content">
      <h3 class="ow-matrix-title">
        <a class="ow-matrix-link" href="#ubuntu">Ubuntu</a>
      </h3>
      <div class="ow-matrix-desc">
        <p>A secure Linux platform with predictable long term maintenance.</p>
      </div>
    </div>
  </li>
</ul>`}
>
  <ul class="ow-matrix">
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/c4f35e06-products-hero-ubuntu.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#ubuntu">Ubuntu</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>A secure Linux platform with predictable long term maintenance.</p>
        </div>
      </div>
    </li>
  </ul>
</Example>

<h2 id="grid" class="ow-heading-2">Full grid</h2>
<p>
  Add more items to fill the grid. Borders between rows and columns are drawn
  automatically, so no extra markup is needed as the matrix grows.
</p>
<Example
  block
  code={`<ul class="ow-matrix">
  <li class="ow-matrix-item">
    <img class="ow-matrix-img" src="/path/to/maas.svg" alt="" />
    <div class="ow-matrix-content">
      <h3 class="ow-matrix-title"><a class="ow-matrix-link" href="#maas">MAAS</a></h3>
      <div class="ow-matrix-desc"><p>Bare metal provisioning and inventory.</p></div>
    </div>
  </li>
  <li class="ow-matrix-item">
    <img class="ow-matrix-img" src="/path/to/lxd.svg" alt="" />
    <div class="ow-matrix-content">
      <h3 class="ow-matrix-title"><a class="ow-matrix-link" href="#lxd">LXD</a></h3>
      <div class="ow-matrix-desc"><p>Fast system containers and virtual machines.</p></div>
    </div>
  </li>
  <li class="ow-matrix-item">
    <img class="ow-matrix-img" src="/path/to/openstack.svg" alt="" />
    <div class="ow-matrix-content">
      <h3 class="ow-matrix-title"><a class="ow-matrix-link" href="#openstack">OpenStack</a></h3>
      <div class="ow-matrix-desc"><p>Private cloud infrastructure with strong automation.</p></div>
    </div>
  </li>
</ul>`}
>
  <ul class="ow-matrix">
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/0de4fcd5-logo-maas-icon.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#maas">MAAS</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>Bare metal provisioning and inventory.</p>
        </div>
      </div>
    </li>
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/fffc8205-lxd-logo_smaller.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#lxd">LXD</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>Fast system containers and virtual machines.</p>
        </div>
      </div>
    </li>
    <li class="ow-matrix-item">
      <img
        class="ow-matrix-img"
        src="https://assets.ubuntu.com/v1/a7916513-picto-openstack.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div class="ow-matrix-content">
        <h3 class="ow-matrix-title">
          <a class="ow-matrix-link" href="#openstack">OpenStack</a>
        </h3>
        <div class="ow-matrix-desc">
          <p>Private cloud infrastructure with strong automation.</p>
        </div>
      </div>
    </li>
  </ul>
</Example>
