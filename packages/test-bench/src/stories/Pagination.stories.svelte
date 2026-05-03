<script module lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Pagination',
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
  type PaginationDirection = 'previous' | 'next'

  type PaginationPageItem = {
    ariaLabel: string
    current?: boolean
    href: string
    id: string
    kind: 'page'
    page: number
  }

  type PaginationTruncationItem = {
    id: string
    kind: 'truncation'
  }

  type PaginationControlItem = {
    direction: PaginationDirection
    disabled?: boolean
    href?: string
    id: string
    kind: 'control'
    label: string
  }

  type PaginationItem =
    | PaginationPageItem
    | PaginationTruncationItem
    | PaginationControlItem

  type ArticlePaginationLink = {
    direction: PaginationDirection
    href: string
    id: string
    label: string
    title: string
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass = 'ow-card mb-0 grid gap-4'

  const defaultPaginationItems: PaginationItem[] = [
    {
      direction: 'previous',
      href: 'previous',
      id: 'default-previous',
      kind: 'control',
      label: 'Previous page'
    },
    {
      ariaLabel: 'First page, page 1',
      href: '1',
      id: 'default-1',
      kind: 'page',
      page: 1
    },
    {
      ariaLabel: 'Page 2',
      href: '2',
      id: 'default-2',
      kind: 'page',
      page: 2
    },
    {
      ariaLabel: 'Page 3',
      current: true,
      href: '3',
      id: 'default-3',
      kind: 'page',
      page: 3
    },
    {
      ariaLabel: 'Page 4',
      href: '4',
      id: 'default-4',
      kind: 'page',
      page: 4
    },
    {
      ariaLabel: 'Last page, page 5',
      href: '5',
      id: 'default-5',
      kind: 'page',
      page: 5
    },
    {
      direction: 'next',
      href: 'next',
      id: 'default-next',
      kind: 'control',
      label: 'Next page'
    }
  ]

  const disabledPaginationItems: PaginationItem[] = [
    {
      direction: 'previous',
      disabled: true,
      id: 'disabled-previous',
      kind: 'control',
      label: 'Previous page'
    },
    {
      ariaLabel: 'First page, page 1',
      current: true,
      href: '1',
      id: 'disabled-1',
      kind: 'page',
      page: 1
    },
    {
      ariaLabel: 'Page 2',
      href: '2',
      id: 'disabled-2',
      kind: 'page',
      page: 2
    },
    {
      ariaLabel: 'Page 3',
      href: '3',
      id: 'disabled-3',
      kind: 'page',
      page: 3
    },
    {
      ariaLabel: 'Page 4',
      href: '4',
      id: 'disabled-4',
      kind: 'page',
      page: 4
    },
    {
      ariaLabel: 'Last page, page 5',
      href: '5',
      id: 'disabled-5',
      kind: 'page',
      page: 5
    },
    {
      direction: 'next',
      href: 'next',
      id: 'disabled-next',
      kind: 'control',
      label: 'Next page'
    }
  ]

  const truncatedPaginationItems: PaginationItem[] = [
    {
      direction: 'previous',
      href: 'previous',
      id: 'truncated-previous',
      kind: 'control',
      label: 'Previous page'
    },
    {
      ariaLabel: 'First page, page 1',
      href: '1',
      id: 'truncated-1',
      kind: 'page',
      page: 1
    },
    {
      id: 'truncated-leading',
      kind: 'truncation'
    },
    {
      ariaLabel: 'Page 33',
      href: '33',
      id: 'truncated-33',
      kind: 'page',
      page: 33
    },
    {
      ariaLabel: 'Page 34',
      current: true,
      href: '34',
      id: 'truncated-34',
      kind: 'page',
      page: 34
    },
    {
      ariaLabel: 'Page 35',
      href: '35',
      id: 'truncated-35',
      kind: 'page',
      page: 35
    },
    {
      id: 'truncated-trailing',
      kind: 'truncation'
    },
    {
      ariaLabel: 'Last page, page 100',
      href: '100',
      id: 'truncated-100',
      kind: 'page',
      page: 100
    },
    {
      direction: 'next',
      href: 'next',
      id: 'truncated-next',
      kind: 'control',
      label: 'Next page'
    }
  ]

  const verbosePaginationItems: PaginationItem[] = [
    {
      direction: 'previous',
      href: 'previous',
      id: 'verbose-previous',
      kind: 'control',
      label: 'Previous page'
    },
    {
      direction: 'next',
      href: 'next',
      id: 'verbose-next',
      kind: 'control',
      label: 'Next page'
    }
  ]

  const articlePaginationLinks: ArticlePaginationLink[] = [
    {
      direction: 'previous',
      href: 'article-previous',
      id: 'article-previous',
      label: 'Previous',
      title: 'Lorem ipsum dolor sit amet'
    },
    {
      direction: 'next',
      href: 'article-next',
      id: 'article-next',
      label: 'Next',
      title: 'Consectetur adipisicing elit'
    }
  ]

  const singleArticlePaginationLink: ArticlePaginationLink[] = [
    {
      direction: 'next',
      href: 'single-article-next',
      id: 'article-next-only',
      label: 'Next',
      title: 'Build a reproducible release checklist'
    }
  ]

  function getDemoHref(hash: string) {
    return `#${hash}`
  }

  function preventNavigation(event: globalThis.MouseEvent) {
    event.preventDefault()
  }

  function getPaginationControlClass(direction: PaginationDirection) {
    return direction === 'previous'
      ? 'ow-pagination-link-previous'
      : 'ow-pagination-link-next'
  }

  function getPaginationIconClass(direction: PaginationDirection) {
    return direction === 'previous'
      ? 'ow-icon-chevron-left'
      : 'ow-icon-chevron-right'
  }

  function getPaginationItemClass(item: PaginationItem) {
    return [
      'ow-pagination-item',
      item.kind === 'truncation' && 'ow-pagination-item-truncation'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function getArticleLinkClass(direction: PaginationDirection) {
    return direction === 'previous'
      ? 'ow-article-pagination-link-previous'
      : 'ow-article-pagination-link-next'
  }
</script>

<Story
  name="Pagination"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'space-y-14 p-10',
        args?.dark && 'bg-[#111] text-[#fff]',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default pagination</p>

        <div class={[demoContainerClass, 'max-w-max overflow-auto'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Numbered pages stay grouped between previous and next controls,
            following the spacing from Vanilla Framework.
          </p>

          <nav class="ow-pagination" aria-label="Search results pages">
            <ol class="ow-pagination-items">
              {#each defaultPaginationItems as item (item.id)}
                <li class={getPaginationItemClass(item)}>
                  {#if item.kind === 'page'}
                    <a
                      class="ow-pagination-link"
                      href={getDemoHref(item.href)}
                      aria-current={item.current ? 'page' : undefined}
                      aria-label={item.ariaLabel}
                      onclick={preventNavigation}
                    >
                      {item.page}
                    </a>
                  {:else if item.kind === 'truncation'}
                    &hellip;
                  {:else if item.disabled}
                    <span
                      class={[
                        getPaginationControlClass(item.direction),
                        'is-disabled'
                      ].join(' ')}
                      aria-disabled="true"
                    >
                      <i class={getPaginationIconClass(item.direction)}>
                        {item.label}
                      </i>
                    </span>
                  {:else}
                    <a
                      class={getPaginationControlClass(item.direction)}
                      href={getDemoHref(item.href ?? item.id)}
                      title={item.label}
                      onclick={preventNavigation}
                    >
                      <i class={getPaginationIconClass(item.direction)}>
                        {item.label}
                      </i>
                    </a>
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Disabled state</p>

        <div class={[demoContainerClass, 'max-w-max overflow-auto'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            The current page remains active while the unavailable direction uses
            `aria-disabled`.
          </p>

          <nav class="ow-pagination" aria-label="Documentation pages">
            <ol class="ow-pagination-items">
              {#each disabledPaginationItems as item (item.id)}
                <li class={getPaginationItemClass(item)}>
                  {#if item.kind === 'page'}
                    <a
                      class="ow-pagination-link"
                      href={getDemoHref(item.href)}
                      aria-current={item.current ? 'page' : undefined}
                      aria-label={item.ariaLabel}
                      onclick={preventNavigation}
                    >
                      {item.page}
                    </a>
                  {:else if item.kind === 'truncation'}
                    &hellip;
                  {:else if item.disabled}
                    <span
                      class={[
                        getPaginationControlClass(item.direction),
                        'is-disabled'
                      ].join(' ')}
                      aria-disabled="true"
                    >
                      <i class={getPaginationIconClass(item.direction)}>
                        {item.label}
                      </i>
                    </span>
                  {:else}
                    <a
                      class={getPaginationControlClass(item.direction)}
                      href={getDemoHref(item.href ?? item.id)}
                      title={item.label}
                      onclick={preventNavigation}
                    >
                      <i class={getPaginationIconClass(item.direction)}>
                        {item.label}
                      </i>
                    </a>
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Truncated pagination</p>

        <div class={[demoContainerClass, 'max-w-max overflow-auto'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Truncation keeps the outer bounds visible while preserving the
            current page and its immediate neighbors.
          </p>

          <nav class="ow-pagination" aria-label="Archive pages">
            <ol class="ow-pagination-items">
              {#each truncatedPaginationItems as item (item.id)}
                <li class={getPaginationItemClass(item)}>
                  {#if item.kind === 'page'}
                    <a
                      class="ow-pagination-link"
                      href={getDemoHref(item.href)}
                      aria-current={item.current ? 'page' : undefined}
                      aria-label={item.ariaLabel}
                      onclick={preventNavigation}
                    >
                      {item.page}
                    </a>
                  {:else if item.kind === 'truncation'}
                    &hellip;
                  {:else if item.disabled}
                    <span
                      class={[
                        getPaginationControlClass(item.direction),
                        'is-disabled'
                      ].join(' ')}
                      aria-disabled="true"
                    >
                      <i class={getPaginationIconClass(item.direction)}>
                        {item.label}
                      </i>
                    </span>
                  {:else}
                    <a
                      class={getPaginationControlClass(item.direction)}
                      href={getDemoHref(item.href ?? item.id)}
                      title={item.label}
                      onclick={preventNavigation}
                    >
                      <i class={getPaginationIconClass(item.direction)}>
                        {item.label}
                      </i>
                    </a>
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Verbose previous and next</p>

        <div class={[demoContainerClass, 'max-w-max overflow-auto'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            The icon placement follows the same spacing rules, but the controls
            can expand to include readable labels.
          </p>

          <nav class="ow-pagination" aria-label="Sequential pages">
            <ol class="ow-pagination-items">
              {#each verbosePaginationItems as item (item.id)}
                <li class={getPaginationItemClass(item)}>
                  {#if item.kind === 'control' && !item.disabled}
                    <a
                      class={getPaginationControlClass(item.direction)}
                      href={getDemoHref(item.href ?? item.id)}
                      title={item.label}
                      onclick={preventNavigation}
                    >
                      {#if item.direction === 'previous'}
                        <i
                          class={getPaginationIconClass(item.direction)}
                          aria-hidden="true"
                        ></i>
                        <span>{item.label}</span>
                      {:else}
                        <span>{item.label}</span>
                        <i
                          class={getPaginationIconClass(item.direction)}
                          aria-hidden="true"
                        ></i>
                      {/if}
                    </a>
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Article pagination</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Article pagination prioritizes the neighboring content over jumping
            to arbitrary page numbers.
          </p>

          <div class="space-y-6">
            <footer class="ow-article-pagination">
              {#each articlePaginationLinks as link (link.id)}
                <a
                  class={getArticleLinkClass(link.direction)}
                  href={getDemoHref(link.href)}
                  onclick={preventNavigation}
                >
                  <span class="ow-article-pagination-label">{link.label}</span>
                  <span class="ow-article-pagination-title">{link.title}</span>
                </a>
              {/each}
            </footer>

            <footer class="ow-article-pagination">
              {#each singleArticlePaginationLink as link (link.id)}
                <a
                  class={getArticleLinkClass(link.direction)}
                  href={getDemoHref(link.href)}
                  onclick={preventNavigation}
                >
                  <span class="ow-article-pagination-label">{link.label}</span>
                  <span class="ow-article-pagination-title">{link.title}</span>
                </a>
              {/each}
            </footer>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
