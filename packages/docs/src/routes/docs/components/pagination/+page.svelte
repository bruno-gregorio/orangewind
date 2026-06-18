<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <nav class="ow-pagination" aria-label="Search results pages">
    <ol class="ow-pagination-items">
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link-previous"
          href="#previous"
          title="Previous page"
        >
          <i class="ow-icon-chevron-left">Previous page</i>
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#1" aria-label="Page 1">1</a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#2" aria-label="Page 2">2</a>
      </li>
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link"
          href="#3"
          aria-current="page"
          aria-label="Page 3"
        >
          3
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#4" aria-label="Page 4">4</a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link-next" href="#next" title="Next page">
          <i class="ow-icon-chevron-right">Next page</i>
        </a>
      </li>
    </ol>
  </nav>
</div>

<p>
  Pagination splits a long list of results across multiple pages and lets users
  move between them. Numbered <code>ow-pagination-link</code> items sit between
  <code>ow-pagination-link-previous</code> and
  <code>ow-pagination-link-next</code> controls, with the active page marked by
  <code>aria-current="page"</code>.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  Each page is an <code>ow-pagination-item</code> containing an
  <code>ow-pagination-link</code>. Give every link an
  <code>aria-label</code> and mark the current page with
  <code>aria-current="page"</code>.
</p>
<Example
  block
  code={`<nav class="ow-pagination" aria-label="Search results pages">
  <ol class="ow-pagination-items">
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-previous" href="/previous" title="Previous page">
        <i class="ow-icon-chevron-left">Previous page</i>
      </a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/1" aria-label="Page 1">1</a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/2" aria-current="page" aria-label="Page 2">2</a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/3" aria-label="Page 3">3</a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-next" href="/next" title="Next page">
        <i class="ow-icon-chevron-right">Next page</i>
      </a>
    </li>
  </ol>
</nav>`}
>
  <nav class="ow-pagination" aria-label="Search results pages">
    <ol class="ow-pagination-items">
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link-previous"
          href="#previous"
          title="Previous page"
        >
          <i class="ow-icon-chevron-left">Previous page</i>
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#1" aria-label="Page 1">1</a>
      </li>
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link"
          href="#2"
          aria-current="page"
          aria-label="Page 2"
        >
          2
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#3" aria-label="Page 3">3</a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link-next" href="#next" title="Next page">
          <i class="ow-icon-chevron-right">Next page</i>
        </a>
      </li>
    </ol>
  </nav>
</Example>

<h2 id="disabled" class="ow-heading-2">Disabled control</h2>
<p>
  When a direction is unavailable, render it as a <code>&lt;span&gt;</code>
  with <code>ow-is-disabled</code> and <code>aria-disabled="true"</code> instead of
  a link.
</p>
<Example
  block
  code={`<nav class="ow-pagination" aria-label="Documentation pages">
  <ol class="ow-pagination-items">
    <li class="ow-pagination-item">
      <span class="ow-pagination-link-previous ow-is-disabled" aria-disabled="true">
        <i class="ow-icon-chevron-left">Previous page</i>
      </span>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/1" aria-current="page" aria-label="Page 1">1</a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/2" aria-label="Page 2">2</a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-next" href="/next" title="Next page">
        <i class="ow-icon-chevron-right">Next page</i>
      </a>
    </li>
  </ol>
</nav>`}
>
  <nav class="ow-pagination" aria-label="Documentation pages">
    <ol class="ow-pagination-items">
      <li class="ow-pagination-item">
        <span
          class="ow-pagination-link-previous ow-is-disabled"
          aria-disabled="true"
        >
          <i class="ow-icon-chevron-left">Previous page</i>
        </span>
      </li>
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link"
          href="#1"
          aria-current="page"
          aria-label="Page 1"
        >
          1
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#2" aria-label="Page 2">2</a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link-next" href="#next" title="Next page">
          <i class="ow-icon-chevron-right">Next page</i>
        </a>
      </li>
    </ol>
  </nav>
</Example>

<h2 id="truncated" class="ow-heading-2">Truncated</h2>
<p>
  For long ranges, collapse the middle with
  <code>ow-pagination-item-truncation</code> items so the outer bounds and the current
  page's neighbours stay visible.
</p>
<Example
  block
  code={`<nav class="ow-pagination" aria-label="Archive pages">
  <ol class="ow-pagination-items">
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-previous" href="/previous" title="Previous page">
        <i class="ow-icon-chevron-left">Previous page</i>
      </a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/1" aria-label="First page, page 1">1</a>
    </li>
    <li class="ow-pagination-item ow-pagination-item-truncation">&hellip;</li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/34" aria-current="page" aria-label="Page 34">34</a>
    </li>
    <li class="ow-pagination-item ow-pagination-item-truncation">&hellip;</li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link" href="/100" aria-label="Last page, page 100">100</a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-next" href="/next" title="Next page">
        <i class="ow-icon-chevron-right">Next page</i>
      </a>
    </li>
  </ol>
</nav>`}
>
  <nav class="ow-pagination" aria-label="Archive pages">
    <ol class="ow-pagination-items">
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link-previous"
          href="#previous"
          title="Previous page"
        >
          <i class="ow-icon-chevron-left">Previous page</i>
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link" href="#1" aria-label="First page, page 1">
          1
        </a>
      </li>
      <li class="ow-pagination-item ow-pagination-item-truncation">&hellip;</li>
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link"
          href="#34"
          aria-current="page"
          aria-label="Page 34"
        >
          34
        </a>
      </li>
      <li class="ow-pagination-item ow-pagination-item-truncation">&hellip;</li>
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link"
          href="#100"
          aria-label="Last page, page 100"
        >
          100
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link-next" href="#next" title="Next page">
          <i class="ow-icon-chevron-right">Next page</i>
        </a>
      </li>
    </ol>
  </nav>
</Example>

<h2 id="verbose" class="ow-heading-2">Verbose controls</h2>
<p>
  Previous and next controls can expand to include readable labels alongside the
  chevron. Mark the icon <code>aria-hidden="true"</code> when a visible label is present.
</p>
<Example
  block
  code={`<nav class="ow-pagination" aria-label="Sequential pages">
  <ol class="ow-pagination-items">
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-previous" href="/previous" title="Previous page">
        <i class="ow-icon-chevron-left" aria-hidden="true"></i>
        <span>Previous page</span>
      </a>
    </li>
    <li class="ow-pagination-item">
      <a class="ow-pagination-link-next" href="/next" title="Next page">
        <span>Next page</span>
        <i class="ow-icon-chevron-right" aria-hidden="true"></i>
      </a>
    </li>
  </ol>
</nav>`}
>
  <nav class="ow-pagination" aria-label="Sequential pages">
    <ol class="ow-pagination-items">
      <li class="ow-pagination-item">
        <a
          class="ow-pagination-link-previous"
          href="#previous"
          title="Previous page"
        >
          <i class="ow-icon-chevron-left" aria-hidden="true"></i>
          <span>Previous page</span>
        </a>
      </li>
      <li class="ow-pagination-item">
        <a class="ow-pagination-link-next" href="#next" title="Next page">
          <span>Next page</span>
          <i class="ow-icon-chevron-right" aria-hidden="true"></i>
        </a>
      </li>
    </ol>
  </nav>
</Example>

<h2 id="article" class="ow-heading-2">Article pagination</h2>
<p>
  For sequential reading, <code>ow-article-pagination</code> links to the
  neighbouring articles by title rather than to page numbers. Each link pairs an
  <code>ow-article-pagination-label</code> with an
  <code>ow-article-pagination-title</code>.
</p>
<Example
  block
  code={`<footer class="ow-article-pagination">
  <a class="ow-article-pagination-link-previous" href="/previous">
    <span class="ow-article-pagination-label">Previous</span>
    <span class="ow-article-pagination-title">Lorem ipsum dolor sit amet</span>
  </a>
  <a class="ow-article-pagination-link-next" href="/next">
    <span class="ow-article-pagination-label">Next</span>
    <span class="ow-article-pagination-title">Consectetur adipisicing elit</span>
  </a>
</footer>`}
>
  <footer class="ow-article-pagination">
    <a class="ow-article-pagination-link-previous" href="#previous">
      <span class="ow-article-pagination-label">Previous</span>
      <span class="ow-article-pagination-title">Lorem ipsum dolor sit amet</span
      >
    </a>
    <a class="ow-article-pagination-link-next" href="#next">
      <span class="ow-article-pagination-label">Next</span>
      <span class="ow-article-pagination-title">
        Consectetur adipisicing elit
      </span>
    </a>
  </footer>
</Example>
