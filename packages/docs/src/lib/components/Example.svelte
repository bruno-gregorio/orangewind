<script lang="ts">
  // The core documentation primitive: a live, rendered preview of a component
  // shown above its source markup, with copy-to-clipboard. Mirrors the
  // "embedded example" pattern from the original Vanilla docs. Every component
  // page uses this for its headline demo and per-variant examples.
  import type { Snippet } from 'svelte'

  type Props = {
    /** Label shown in the code header (defaults to "Markup"). */
    title?: string
    /** Source shown beneath the preview and copied to the clipboard. */
    code: string
    /**
     * Stack previews vertically instead of laying them out in a row. Use for
     * block-level components (notifications, cards, lists) that want full width.
     */
    block?: boolean
    /** The live, rendered component. */
    children: Snippet
  }

  const { title, code, block = false, children }: Props = $props()

  let copied = $state(false)

  async function copy() {
    if (globalThis.navigator?.clipboard !== undefined) {
      await globalThis.navigator.clipboard.writeText(code)
    }
    copied = true
    globalThis.setTimeout(() => {
      copied = false
    }, 1500)
  }
</script>

<div class="grid gap-3">
  <div
    class={[
      'rounded border border-ow-surface-border p-6',
      block ? 'grid gap-4' : 'flex flex-wrap items-center gap-3'
    ].join(' ')}
  >
    {@render children()}
  </div>

  <div class="ow-code-snippet ow-is-bordered">
    <div class="ow-code-snippet-header">
      <h5 class="ow-code-snippet-title">{title ?? 'Markup'}</h5>
      <div class="ow-code-snippet-actions">
        <button
          type="button"
          class="ow-code-snippet-copy ow-btn-base ow-is-small"
          onclick={copy}
          aria-live="polite"
        >
          <i class="ow-icon-copy-to-clipboard" aria-hidden="true"></i>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
    <pre class="ow-code-snippet-block"><code>{code}</code></pre>
  </div>
</div>
