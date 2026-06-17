<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/Blog',
    args: {
      dark: false,
      baselineGrid: false
    },
    argTypes: {
      dark: {
        name: 'Dark mode',
        control: 'boolean'
      },
      baselineGrid: {
        name: 'Baseline grid',
        control: 'boolean'
      }
    }
  })
</script>

<script lang="ts">
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  type Article = {
    author?: string
    authorLink?: boolean
    date?: string
    description?: string
    id: string
    title?: string
    titleLink?: boolean
  }

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  // Vanilla's blog macro wraps every article in a 16:9 cover image and falls
  // back to this asset when an article supplies no image of its own.
  const fallbackImage =
    'https://assets.ubuntu.com/v1/94c82a15-blog_fallback_image.png'

  const title = 'How to enable Real-time Ubuntu on your machine'
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  const date = '15 March 2025'

  // Static contents — four articles, authors linked (vf_blog 4-block example).
  const fourBlocks: Article[] = Array.from({ length: 4 }, (_, index) => ({
    author: 'John Doe',
    authorLink: true,
    date,
    description,
    id: `four-${index}`,
    title,
    titleLink: true
  }))

  // Static contents / 3 blocks — authors are plain text in the docs example.
  const threeBlocks: Article[] = Array.from({ length: 3 }, (_, index) => ({
    author: 'John Doe',
    date,
    description,
    id: `three-${index}`,
    title,
    titleLink: true
  }))

  // Mixed item inputs — each article omits a different field. Empty items keep
  // their grid slots so the remaining content stays aligned across the row.
  const mixedBlocks: Article[] = [
    {
      author: 'John Doe',
      authorLink: true,
      date,
      id: 'mixed-no-description',
      title: 'This example is missing a description',
      titleLink: true
    },
    {
      description,
      id: 'mixed-no-metadata',
      title: 'This example is missing all metadata',
      titleLink: true
    },
    {
      author: 'Missing title/desc',
      authorLink: true,
      date,
      id: 'mixed-no-title'
    },
    {
      author: 'John Doe',
      date,
      description,
      id: 'mixed-no-author-link',
      title: 'This example is missing an author link',
      titleLink: true
    }
  ]

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

{#snippet articleBlock(article: Article)}
  <article class="ow-article-block">
    <div class="ow-article-block-item">
      <div class="ow-image-container-16-9 ow-is-cover ow-article-block-image">
        <img class="ow-image-container-img" src={fallbackImage} alt="" />
      </div>
    </div>
    <div class="ow-article-block-item">
      <h3 class="ow-article-block-title">
        {#if article.titleLink}
          <a href="#article">{article.title ?? ''}</a>
        {:else}
          {article.title ?? ''}
        {/if}
      </h3>
    </div>
    <div class="ow-article-block-item">
      <p class="ow-article-block-description">{article.description ?? ''}</p>
    </div>
    <div class="ow-article-block-item">
      <div class="ow-article-block-metadata">
        <small class="ow-article-block-metadata-item">
          <span class="ow-article-author">
            {#if article.author && article.authorLink}
              <a href="#author">{article.author}</a>
            {:else}{article.author ?? ''}{/if}
          </span>
        </small>
        <small class="ow-article-block-metadata-item">
          <time class="ow-article-time" datetime={article.date}
            >{article.date ?? ''}</time
          >
        </small>
      </div>
    </div>
  </article>
{/snippet}

<!--
  The articles container uses `display: contents`, so each article block becomes
  a direct child of the `.ow-blog` grid and aligns its four rows (image, title,
  description, metadata) against neighbouring cards via the row subgrid.
-->
{#snippet fourBlockLayout(articles: Article[])}
  <section class="ow-section">
    <div class="ow-blog grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <hr class="ow-rule col-span-full" />
      <h2 class="ow-muted-heading col-span-full">Latest from our blog</h2>
      <div class="ow-blog-articles">
        {#each articles as article (article.id)}
          {@render articleBlock(article)}
        {/each}
      </div>
    </div>
  </section>
{/snippet}

{#snippet threeBlockLayout(articles: Article[])}
  <section class="ow-section">
    <div class="ow-blog grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <hr class="ow-rule col-span-full" />
      <h2 class="ow-muted-heading col-span-full lg:col-span-1">
        Latest from our blog
      </h2>
      <div class="ow-blog-articles">
        {#each articles as article (article.id)}
          {@render articleBlock(article)}
        {/each}
      </div>
    </div>
  </section>
{/snippet}

<Story name="Static contents">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <p class={sectionLabelClass}>Static contents — four blocks</p>
        {@render fourBlockLayout(fourBlocks)}
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Three blocks">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <p class={sectionLabelClass}>Static contents — three blocks</p>
        {@render threeBlockLayout(threeBlocks)}
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Mixed item inputs">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <p class={sectionLabelClass}>
          Mixed item inputs — missing fields keep their slots
        </p>
        {@render fourBlockLayout(mixedBlocks)}
      </div>
    </div>
  {/snippet}
</Story>
