<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  const fallbackImage =
    'https://assets.ubuntu.com/v1/94c82a15-blog_fallback_image.png'

  type Article = {
    author?: string
    authorLink?: boolean
    date?: string
    description?: string
    id: string
    title?: string
    titleLink?: boolean
  }

  const title = 'How to enable Real-time Ubuntu on your machine'
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const date = '15 March 2025'

  const articles: Article[] = Array.from({ length: 4 }, (_, index) => ({
    author: 'John Doe',
    authorLink: true,
    date,
    description,
    id: `headline-${index}`,
    title,
    titleLink: true
  }))
</script>

<!-- Mandatory headline demonstration — a four-up blog grid. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="ow-blog grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
    <hr class="ow-rule col-span-full" />
    <h2 class="ow-muted-heading col-span-full">Latest from our blog</h2>
    <div class="ow-blog-articles">
      {#each articles as article (article.id)}
        <article class="ow-article-block">
          <div class="ow-article-block-item">
            <div
              class="ow-image-container-16-9 ow-is-cover ow-article-block-image"
            >
              <img class="ow-image-container-img" src={fallbackImage} alt="" />
            </div>
          </div>
          <div class="ow-article-block-item">
            <h3 class="ow-article-block-title">
              <a href="#article">{article.title}</a>
            </h3>
          </div>
          <div class="ow-article-block-item">
            <p class="ow-article-block-description">{article.description}</p>
          </div>
          <div class="ow-article-block-item">
            <div class="ow-article-block-metadata">
              <small class="ow-article-block-metadata-item">
                <span class="ow-article-author">
                  <a href="#author">{article.author}</a>
                </span>
              </small>
              <small class="ow-article-block-metadata-item">
                <time class="ow-article-time" datetime={article.date}>
                  {article.date}
                </time>
              </small>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>

<p>
  The blog pattern lays out a row of article cards whose cover image, title,
  description and metadata rows stay aligned across the row. The
  <code>ow-blog</code> grid hosts the cards directly: the
  <code>ow-blog-articles</code> wrapper uses <code>display: contents</code> so
  each <code>ow-article-block</code> becomes a grid child and aligns via a row subgrid.
</p>

<h2 id="article-block" class="ow-heading-2">Article block</h2>
<p>
  A single <code>ow-article-block</code> stacks four
  <code>ow-article-block-item</code> rows: a 16:9 cover image, the title, the description,
  and a metadata row. Empty items keep their slots so neighbouring cards stay level.
</p>
<Example
  block
  code={`<article class="ow-article-block">
  <div class="ow-article-block-item">
    <div class="ow-image-container-16-9 ow-is-cover ow-article-block-image">
      <img class="ow-image-container-img" src="cover.png" alt="" />
    </div>
  </div>
  <div class="ow-article-block-item">
    <h3 class="ow-article-block-title">
      <a href="#article">How to enable Real-time Ubuntu</a>
    </h3>
  </div>
  <div class="ow-article-block-item">
    <p class="ow-article-block-description">Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="ow-article-block-item">
    <div class="ow-article-block-metadata">
      <small class="ow-article-block-metadata-item">
        <span class="ow-article-author"><a href="#author">John Doe</a></span>
      </small>
      <small class="ow-article-block-metadata-item">
        <time class="ow-article-time" datetime="15 March 2025">15 March 2025</time>
      </small>
    </div>
  </div>
</article>`}
>
  <div class="ow-blog grid w-full max-w-sm gap-6">
    <div class="ow-blog-articles">
      <article class="ow-article-block">
        <div class="ow-article-block-item">
          <div
            class="ow-image-container-16-9 ow-is-cover ow-article-block-image"
          >
            <img class="ow-image-container-img" src={fallbackImage} alt="" />
          </div>
        </div>
        <div class="ow-article-block-item">
          <h3 class="ow-article-block-title">
            <a href="#article">How to enable Real-time Ubuntu</a>
          </h3>
        </div>
        <div class="ow-article-block-item">
          <p class="ow-article-block-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="ow-article-block-item">
          <div class="ow-article-block-metadata">
            <small class="ow-article-block-metadata-item">
              <span class="ow-article-author">
                <a href="#author">John Doe</a>
              </span>
            </small>
            <small class="ow-article-block-metadata-item">
              <time class="ow-article-time" datetime="15 March 2025">
                15 March 2025
              </time>
            </small>
          </div>
        </div>
      </article>
    </div>
  </div>
</Example>

<h2 id="metadata" class="ow-heading-2">Metadata</h2>
<p>
  The metadata row holds an <code>ow-article-author</code> and an
  <code>ow-article-time</code>, each wrapped in an
  <code>ow-article-block-metadata-item</code>. A middot is inserted
  automatically between consecutive non-empty items. The author may be a plain
  name or a link.
</p>
<Example
  block
  code={`<div class="ow-article-block-metadata">
  <small class="ow-article-block-metadata-item">
    <span class="ow-article-author">John Doe</span>
  </small>
  <small class="ow-article-block-metadata-item">
    <time class="ow-article-time" datetime="15 March 2025">15 March 2025</time>
  </small>
</div>`}
>
  <div class="ow-article-block-metadata w-full">
    <small class="ow-article-block-metadata-item">
      <span class="ow-article-author">John Doe</span>
    </small>
    <small class="ow-article-block-metadata-item">
      <time class="ow-article-time" datetime="15 March 2025">15 March 2025</time
      >
    </small>
  </div>
</Example>

<h2 id="three-up" class="ow-heading-2">Three-up layout</h2>
<p>
  Drop one card and let the heading take a column of its own at large sizes with
  <code>lg:col-span-1</code>. The grid still aligns each row of the remaining
  cards.
</p>
<Example
  block
  code={`<div class="ow-blog grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  <hr class="ow-rule col-span-full" />
  <h2 class="ow-muted-heading col-span-full lg:col-span-1">Latest from our blog</h2>
  <div class="ow-blog-articles">
    <!-- three ow-article-block cards -->
  </div>
</div>`}
>
  <div class="ow-blog grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
    <hr class="ow-rule col-span-full" />
    <h2 class="ow-muted-heading col-span-full lg:col-span-1">
      Latest from our blog
    </h2>
    <div class="ow-blog-articles">
      {#each articles.slice(0, 3) as article (article.id)}
        <article class="ow-article-block">
          <div class="ow-article-block-item">
            <div
              class="ow-image-container-16-9 ow-is-cover ow-article-block-image"
            >
              <img class="ow-image-container-img" src={fallbackImage} alt="" />
            </div>
          </div>
          <div class="ow-article-block-item">
            <h3 class="ow-article-block-title">
              <a href="#article">{article.title}</a>
            </h3>
          </div>
          <div class="ow-article-block-item">
            <p class="ow-article-block-description">{article.description}</p>
          </div>
          <div class="ow-article-block-item">
            <div class="ow-article-block-metadata">
              <small class="ow-article-block-metadata-item">
                <span class="ow-article-author">{article.author}</span>
              </small>
              <small class="ow-article-block-metadata-item">
                <time class="ow-article-time" datetime={article.date}>
                  {article.date}
                </time>
              </small>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</Example>
