<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <p>Section one of the content.</p>
  <hr class="ow-rule" />
  <p>Section two, separated by a rule.</p>
  <hr class="ow-rule-highlight" />
  <p>Section three, after a highlight rule.</p>
</div>

<p>
  A rule is a horizontal line that separates blocks of content. Apply a rule
  class to an <code>&lt;hr&gt;</code> element; variants adjust its contrast and weight
  while keeping it a single, self-closing element.
</p>

<h2 id="standard" class="ow-heading-2">Standard</h2>
<p>
  <code>ow-rule</code> draws a one-pixel line in the default border colour. Use it
  to divide sections vertically — it is the rule these docs use between articles.
</p>
<Example block code={'<hr class="ow-rule" />'}>
  <hr class="ow-rule" />
</Example>

<h2 id="muted" class="ow-heading-2">Muted</h2>
<p>
  <code>ow-rule-muted</code> lowers the opacity for a softer divide, ideal for grouping
  related elements where a full-contrast line would be too heavy.
</p>
<Example block code={'<hr class="ow-rule-muted" />'}>
  <hr class="ow-rule-muted" />
</Example>

<h2 id="highlight" class="ow-heading-2">Highlight</h2>
<p>
  <code>ow-rule-highlight</code> is a thicker, higher-contrast bar for a more emphatic
  break between major sections.
</p>
<Example block code={'<hr class="ow-rule-highlight" />'}>
  <hr class="ow-rule-highlight" />
</Example>

<h2 id="accent" class="ow-heading-2">Accent highlight</h2>
<p>
  Add <code>ow-is-accent</code> to a highlight rule to colour the bar with the brand
  accent, drawing the eye to a key division.
</p>
<Example block code={'<hr class="ow-rule-highlight ow-is-accent" />'}>
  <hr class="ow-rule-highlight ow-is-accent" />
</Example>

<h2 id="fixed-width" class="ow-heading-2">Fixed width</h2>
<p>
  Add <code>ow-is-fixed-width</code> to a standard rule to cap its width and centre
  it, so it aligns with fixed-width page content instead of spanning the full viewport.
</p>
<Example block code={'<hr class="ow-rule ow-is-fixed-width" />'}>
  <hr class="ow-rule ow-is-fixed-width" />
</Example>
