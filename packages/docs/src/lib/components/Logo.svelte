<script lang="ts">
  // Orangewind brand mark — three curling gusts (the "wind") on the brand
  // orange. Two variants share one glyph so the favicon, the nav tag and the
  // hero stay in lock-step:
  //   - `badge` (default): the rounded orange square + white gusts. The fill
  //     pulls from `--color-ow-brand`, so it re-themes with the framework.
  //   - `glyph`: just the gusts in `currentColor`, for placing inside a surface
  //     that already supplies the orange (e.g. the navigation logo tag).
  type Props = {
    variant?: 'badge' | 'glyph'
    size?: number
    title?: string
    class?: string
  }

  const {
    variant = 'badge',
    size = 32,
    title = 'Orangewind',
    class: className = ''
  }: Props = $props()
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width={size}
  height={size}
  role="img"
  aria-label={title}
  class={className}
>
  {#if variant === 'badge'}
    <rect width="32" height="32" rx="7" fill="var(--color-ow-brand)" />
  {/if}
  <g
    transform="translate(4 4)"
    fill="none"
    stroke={variant === 'badge' ? '#fff' : 'currentColor'}
    stroke-width="2.1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9.8 4.4A2 2 0 1 1 11 8H3" />
    <path d="M17.5 8a2.5 2.5 0 1 1 2 4H3" />
    <path d="M12.8 19.6A2 2 0 1 0 14 16H3" />
  </g>
</svg>
