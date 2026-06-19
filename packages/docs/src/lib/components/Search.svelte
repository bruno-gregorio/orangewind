<script lang="ts">
  // Client-side search over the component manifest + guide pages. A small ARIA
  // combobox: type to filter, arrow keys to move, Enter to open. Everything is
  // in-memory (the manifest is tiny), so there is no index to build or ship.
  import { goto } from '$app/navigation'
  import { componentGroups, guides, pathForComponent } from '$lib/manifest'
  import { withBase } from '$lib/paths'

  type Result = { title: string; path: string; group: string }

  // Flatten the manifest into a single searchable list once. Only 'ready'
  // components are reachable, so 'todo' entries are left out.
  const index: Result[] = [
    ...guides.map(guide => ({
      title: guide.title,
      path: guide.path,
      group: 'Guides'
    })),
    ...componentGroups.flatMap(group =>
      group.items
        .filter(item => item.status === 'ready')
        .map(item => ({
          title: item.title,
          path: pathForComponent(item.slug),
          group: group.heading
        }))
    )
  ]

  let query = $state('')
  let active = $state(0)
  let focused = $state(false)

  const results = $derived.by<Result[]>(() => {
    const q = query.trim().toLowerCase()
    if (q === '') return []
    return index
      .filter(
        r =>
          r.title.toLowerCase().includes(q) || r.group.toLowerCase().includes(q)
      )
      .slice(0, 8)
  })

  // Keep the active option in range whenever the result set changes.
  $effect(() => {
    if (active >= results.length) active = 0
  })

  const isOpen = $derived(focused && results.length > 0)

  const select = (result: Result | undefined): void => {
    if (!result) return
    query = ''
    focused = false
    goto(withBase(result.path))
  }

  const onKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (results.length) active = (active + 1) % results.length
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (results.length)
        active = (active - 1 + results.length) % results.length
    } else if (event.key === 'Enter') {
      if (isOpen) {
        event.preventDefault()
        select(results[active])
      }
    } else if (event.key === 'Escape') {
      query = ''
      focused = false
    }
  }
</script>

<!-- Closing on focusout (rather than blur) lets a click on a result register
     first, since focus moves within the wrapper before it leaves. -->
<div
  class="ow-docs-search relative"
  onfocusin={() => (focused = true)}
  onfocusout={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node))
      focused = false
  }}
>
  <form
    class="ow-search-box mb-0 w-full"
    role="search"
    onsubmit={event => {
      event.preventDefault()
      select(results[active])
    }}
  >
    <label for="docs-search" class="sr-only">Search the documentation</label>
    <input
      id="docs-search"
      class="ow-search-box-input"
      type="search"
      placeholder="Search docs..."
      autocomplete="off"
      role="combobox"
      aria-expanded={isOpen}
      aria-controls="docs-search-results"
      aria-activedescendant={isOpen ? `docs-search-opt-${active}` : undefined}
      required
      bind:value={query}
      onkeydown={onKeydown}
    />
    <button type="reset" class="ow-search-box-reset" aria-label="Clear search">
      <i class="ow-icon-close"></i>
    </button>
    <button
      type="submit"
      class="ow-search-box-button"
      aria-label="Submit search"
    >
      <i class="ow-icon-search"></i>
    </button>
  </form>

  {#if isOpen}
    <ul
      id="docs-search-results"
      class="ow-docs-search-results"
      role="listbox"
      aria-label="Search results"
    >
      {#each results as result, i (result.path)}
        <li id="docs-search-opt-{i}" role="option" aria-selected={i === active}>
          <a
            class={['ow-docs-search-result', i === active && 'is-active']
              .filter(Boolean)
              .join(' ')}
            href={withBase(result.path)}
            tabindex="-1"
            onclick={event => {
              event.preventDefault()
              select(result)
            }}
            onmousemove={() => (active = i)}
          >
            <span class="ow-docs-search-result-title">{result.title}</span>
            <span class="ow-docs-search-result-group">{result.group}</span>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
