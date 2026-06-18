<script lang="ts">
  // In-page table of contents for the `meta` grid area. Generated client-side
  // from the `<h2>`/`<h3>[id]` headings rendered in the main content, with a
  // scroll-spy active state. (The static prerender ships an empty TOC that
  // fills in on hydration; server-side heading extraction is a later upgrade.)
  import { browser } from '$app/environment'
  import { page } from '$app/state'
  import { tick } from 'svelte'

  type Heading = { id: string; text: string; level: number }

  let headings = $state<Heading[]>([])
  let activeId = $state('')

  $effect(() => {
    // Touch the pathname so the effect re-runs (re-scans) on route changes.
    const _pathname = page.url.pathname
    if (!browser) return

    let observer: IntersectionObserver | undefined

    const build = async () => {
      await tick()
      const nodes = document.querySelectorAll<HTMLElement>(
        '.ow-docs-main :is(h2, h3)[id]'
      )
      headings = Array.from(nodes).map(el => ({
        id: el.id,
        text: el.textContent?.trim() ?? '',
        level: el.tagName === 'H3' ? 3 : 2
      }))
      activeId = headings[0]?.id ?? ''

      observer = new IntersectionObserver(
        entries => {
          for (const e of entries) {
            if (e.isIntersecting) activeId = e.target.id
          }
        },
        { rootMargin: '0px 0px -70% 0px', threshold: 0 }
      )
      for (const node of nodes) observer.observe(node)
    }

    build()

    return () => observer?.disconnect()
  })
</script>

{#if headings.length > 0}
  <aside class="ow-toc" aria-label="Table of contents">
    <div class="ow-toc-section">
      <h2 class="ow-toc-header">On this page</h2>
      <nav aria-label="On this page">
        <ul class="ow-toc-list">
          {#each headings as heading (heading.id)}
            <li>
              <a
                class={[
                  'ow-toc-link',
                  activeId === heading.id && 'ow-is-active',
                  heading.level === 3 && 'ps-6'
                ]
                  .filter(Boolean)
                  .join(' ')}
                href="#{heading.id}"
              >
                {heading.text}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </aside>
{/if}
