<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="flex flex-wrap items-center gap-8 rounded border border-ow-surface-border p-8"
>
  <span class="inline-flex items-center gap-2">
    Inbox <span class="ow-badge">24</span>
  </span>
  <span class="inline-flex items-center gap-2">
    Failures <span class="ow-badge-negative">3</span>
  </span>
</div>

<p>
  Badges display a count or other short numeric value, usually next to a label
  or heading. They draw attention to a quantity without taking up much space.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>The default badge suits neutral counts such as totals or unread items.</p>
<Example code={'<span class="ow-badge">24</span>'}>
  <span class="ow-badge">24</span>
</Example>

<h2 id="negative" class="ow-heading-2">Negative</h2>
<p>
  Use the negative badge to highlight counts that need attention, such as errors
  or failures.
</p>
<Example code={'<span class="ow-badge-negative">3</span>'}>
  <span class="ow-badge-negative">3</span>
</Example>

<h2 id="in-context" class="ow-heading-2">Alongside a label</h2>
<p>Pair a badge with text to annotate a count in navigation or headings.</p>
<Example
  code={`<span class="inline-flex items-center gap-2">
  Notifications <span class="ow-badge">12</span>
</span>`}
>
  <span class="inline-flex items-center gap-2">
    Notifications <span class="ow-badge">12</span>
  </span>
</Example>
