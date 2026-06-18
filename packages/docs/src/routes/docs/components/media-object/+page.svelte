<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="grid gap-3 rounded border border-ow-surface-border bg-ow-background-alt p-8"
>
  <div class="ow-media-object mb-0">
    <img
      class="ow-media-object-image"
      src="https://assets.ubuntu.com/v1/60d9b81e-picto-canonical.svg"
      alt=""
      loading="lazy"
      decoding="async"
    />
    <div class="ow-media-object-details">
      <h3 class="ow-media-object-title">
        <a href="#nvidia-gtc">NVIDIA GTC 2019</a>
      </h3>
      <p class="ow-media-object-content">
        Ubuntu powered everything from autonomous cars to inference at the edge.
      </p>
      <ul class="ow-media-object-meta-list">
        <li class="ow-media-object-meta-item-date">
          <span class="sr-only">Date: </span>
          <span>18 - 21 March 2019</span>
        </li>
        <li class="ow-media-object-meta-item-location">
          <span class="sr-only">Location: </span>
          <span>Silicon Valley, CA</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<p>
  A media object places an image alongside a block of text, such as an event, a
  person or a resource. Pair an <code>ow-media-object-image</code> with an
  <code>ow-media-object-details</code> block; this page also covers the image
  helpers (<code>ow-image-container-*</code>,
  <code>ow-image-bordered</code> and <code>ow-image-shadowed</code>) used to
  frame imagery elsewhere.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  The image sits to the left of a title, a line of content and an optional meta
  list. Meta items can use the typed classes
  <code>ow-media-object-meta-item-date</code>,
  <code>-location</code> and <code>-venue</code> to show an icon, or the plain
  <code>ow-media-object-meta-item</code> for none.
</p>
<Example
  block
  code={`<div class="ow-media-object">
  <img class="ow-media-object-image" src="/path/to/icon.svg" alt="" />
  <div class="ow-media-object-details">
    <h3 class="ow-media-object-title">
      <a href="#nvidia-gtc">NVIDIA GTC 2019</a>
    </h3>
    <p class="ow-media-object-content">
      Ubuntu powered everything from autonomous cars to inference at the edge.
    </p>
    <ul class="ow-media-object-meta-list">
      <li class="ow-media-object-meta-item-date">
        <span class="sr-only">Date: </span>
        <span>18 - 21 March 2019</span>
      </li>
      <li class="ow-media-object-meta-item-venue">
        <span class="sr-only">Venue: </span>
        <span>San Jose McEnery Convention Center</span>
      </li>
    </ul>
  </div>
</div>`}
>
  <div class="ow-media-object mb-0">
    <img
      class="ow-media-object-image"
      src="https://assets.ubuntu.com/v1/60d9b81e-picto-canonical.svg"
      alt=""
      loading="lazy"
      decoding="async"
    />
    <div class="ow-media-object-details">
      <h3 class="ow-media-object-title">
        <a href="#nvidia-gtc">NVIDIA GTC 2019</a>
      </h3>
      <p class="ow-media-object-content">
        Ubuntu powered everything from autonomous cars to inference at the edge.
      </p>
      <ul class="ow-media-object-meta-list">
        <li class="ow-media-object-meta-item-date">
          <span class="sr-only">Date: </span>
          <span>18 - 21 March 2019</span>
        </li>
        <li class="ow-media-object-meta-item-venue">
          <span class="sr-only">Venue: </span>
          <span>San Jose McEnery Convention Center</span>
        </li>
      </ul>
    </div>
  </div>
</Example>

<h2 id="round" class="ow-heading-2">Circular image</h2>
<p>
  Add <code>ow-is-round</code> to the image to crop it to a circle, which suits avatars
  and profiles.
</p>
<Example
  block
  code={`<div class="ow-media-object">
  <img class="ow-media-object-image ow-is-round" src="/path/to/avatar.jpeg" alt="" />
  <div class="ow-media-object-details">
    <h3 class="ow-media-object-title">
      <a href="#karl">Karl Waghorn-Moyce</a>
    </h3>
    <p class="ow-media-object-content">Lead Visual Designer</p>
    <ul class="ow-media-object-meta-list">
      <li class="ow-media-object-meta-item-location">
        <span class="sr-only">Location: </span>
        <span>London, UK</span>
      </li>
    </ul>
  </div>
</div>`}
>
  <div class="ow-media-object mb-0">
    <img
      class="ow-media-object-image ow-is-round"
      src="https://assets.ubuntu.com/v1/0a529437-karlos.jpeg"
      alt=""
      loading="lazy"
      decoding="async"
    />
    <div class="ow-media-object-details">
      <h3 class="ow-media-object-title">
        <a href="#karl">Karl Waghorn-Moyce</a>
      </h3>
      <p class="ow-media-object-content">Lead Visual Designer</p>
      <ul class="ow-media-object-meta-list">
        <li class="ow-media-object-meta-item-location">
          <span class="sr-only">Location: </span>
          <span>London, UK</span>
        </li>
      </ul>
    </div>
  </div>
</Example>

<h2 id="large" class="ow-heading-2">Large</h2>
<p>
  <code>ow-media-object-large</code> increases the image size and title weight, making
  it suitable as a page or section header.
</p>
<Example
  block
  code={`<div class="ow-media-object-large">
  <img class="ow-media-object-image" src="/path/to/logo.svg" alt="" />
  <div class="ow-media-object-details">
    <h1 class="ow-media-object-title">MySQL</h1>
    <p class="ow-media-object-content">By mysql-charmers</p>
    <ul class="ow-media-object-meta-list">
      <li class="ow-media-object-meta-item">Production database charm</li>
    </ul>
  </div>
</div>`}
>
  <div class="ow-media-object-large mb-0">
    <img
      class="ow-media-object-image"
      src="https://assets.ubuntu.com/v1/80cd67d3-mysql.svg"
      alt=""
      loading="lazy"
      decoding="async"
    />
    <div class="ow-media-object-details">
      <h1 class="ow-media-object-title">MySQL</h1>
      <p class="ow-media-object-content">By mysql-charmers</p>
      <ul class="ow-media-object-meta-list">
        <li class="ow-media-object-meta-item">Production database charm</li>
      </ul>
    </div>
  </div>
</Example>

<h2 id="image-frames" class="ow-heading-2">Image frames</h2>
<p>
  Frame a standalone image with <code>ow-image-bordered</code> for a hairline
  border or <code>ow-image-shadowed</code> for a soft shadow.
</p>
<Example
  block
  code={`<img class="ow-image-bordered" src="/path/to/photo.png" alt="" width="640" height="360" />
<img class="ow-image-shadowed" src="/path/to/photo.png" alt="" width="640" height="360" />`}
>
  <img
    class="ow-image-bordered"
    src="https://assets.ubuntu.com/v1/584903f3-iot-drone.png"
    alt=""
    width="640"
    height="360"
    loading="lazy"
    decoding="async"
  />
  <img
    class="ow-image-shadowed"
    src="https://assets.ubuntu.com/v1/584903f3-iot-drone.png"
    alt=""
    width="640"
    height="360"
    loading="lazy"
    decoding="async"
  />
</Example>

<h2 id="aspect-ratio" class="ow-heading-2">Aspect ratio containers</h2>
<p>
  Wrap an <code>ow-image-container-img</code> in a ratio container such as
  <code>ow-image-container-16-9</code>,
  <code>ow-image-container-3-2</code>, <code>-2-3</code>,
  <code>-cinematic</code> or <code>-square</code> to lock its proportions. Add
  <code>ow-is-highlighted</code> for a placeholder background, or
  <code>ow-is-cover</code> to crop the image to fill the frame.
</p>
<Example
  block
  code={`<div class="ow-image-container-16-9 ow-is-cover">
  <img class="ow-image-container-img" src="/path/to/landscape.jpeg" alt="" />
</div>
<div class="ow-image-container-square ow-is-highlighted">
  <img class="ow-image-container-img" src="/path/to/product.png" alt="" />
</div>`}
>
  <div class="ow-image-container-16-9 ow-is-cover">
    <img
      class="ow-image-container-img"
      src="https://assets.ubuntu.com/v1/44095efb-photo-1580536793208-117fdb20ffc1%20(1).jpeg"
      alt=""
      width="1000"
      loading="lazy"
      decoding="async"
    />
  </div>
  <div class="ow-image-container-square ow-is-highlighted">
    <img
      class="ow-image-container-img"
      src="https://assets.ubuntu.com/v1/9b4c074f-Kernelt%20industries-80-short.png"
      alt=""
      width="300"
      loading="lazy"
      decoding="async"
    />
  </div>
</Example>

<h2 id="media-spacing" class="ow-heading-2">Media spacing</h2>
<p>
  <code>ow-media-container</code> adds a small amount of top padding, useful for separating
  an image from a preceding rule or heading.
</p>
<Example
  block
  code={`<hr class="ow-rule" />
<div class="ow-media-container">
  <img src="/path/to/photo.png" alt="" width="640" height="360" />
</div>`}
>
  <hr class="ow-rule mb-0" />
  <div class="ow-media-container">
    <img
      src="https://assets.ubuntu.com/v1/584903f3-iot-drone.png"
      alt=""
      width="640"
      height="360"
      loading="lazy"
      decoding="async"
    />
  </div>
</Example>
