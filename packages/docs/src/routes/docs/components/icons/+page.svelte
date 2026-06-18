<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="flex flex-wrap items-center gap-6 rounded border border-ow-surface-border p-8"
>
  <i class="ow-icon-home h-8 w-8">home</i>
  <i class="ow-icon-search h-8 w-8">search</i>
  <i class="ow-icon-settings h-8 w-8">settings</i>
  <i class="ow-icon-user h-8 w-8">user</i>
  <i class="ow-icon-share h-8 w-8">share</i>
  <i class="ow-icon-delete h-8 w-8">delete</i>
  <i class="ow-icon-plus h-8 w-8">plus</i>
  <i class="ow-icon-chevron-down h-8 w-8">chevron-down</i>
</div>

<p>
  Icons are single-glyph elements rendered as a CSS mask, so they take their
  colour from the current text colour and scale with width and height utilities.
  Apply an <code>ow-icon-*</code> class to an empty
  <code>&lt;i&gt;</code> (or <code>&lt;span&gt;</code>); include a text label as
  its content for assistive technology, which is visually hidden by the icon
  styles.
</p>

<h2 id="default" class="ow-heading-2">Default icons</h2>
<p>
  Each icon has its own <code>ow-icon-*</code> class. At their default size they match
  the surrounding text, making them easy to drop inline.
</p>
<Example
  code={`<i class="ow-icon-information">information</i>
<i class="ow-icon-success">success</i>
<i class="ow-icon-warning">warning</i>
<i class="ow-icon-error">error</i>
<i class="ow-icon-help">help</i>`}
>
  <i class="ow-icon-information">information</i>
  <i class="ow-icon-success">success</i>
  <i class="ow-icon-warning">warning</i>
  <i class="ow-icon-error">error</i>
  <i class="ow-icon-help">help</i>
</Example>

<h2 id="sizing" class="ow-heading-2">Sizing</h2>
<p>
  Icons render at <code>1rem</code> by default. Set explicit width and height
  utilities such as <code>h-6 w-6</code> or <code>h-10 w-10</code> to scale them up;
  keep the two equal so the icon stays square.
</p>
<Example
  code={`<i class="ow-icon-settings h-4 w-4">settings</i>
<i class="ow-icon-settings h-6 w-6">settings</i>
<i class="ow-icon-settings h-10 w-10">settings</i>`}
>
  <i class="ow-icon-settings h-4 w-4">settings</i>
  <i class="ow-icon-settings h-6 w-6">settings</i>
  <i class="ow-icon-settings h-10 w-10">settings</i>
</Example>

<h2 id="colour" class="ow-heading-2">Colour</h2>
<p>
  Most icons inherit the current text colour, so a text colour utility recolours
  them. The semantic status icons — <code>ow-icon-error</code>,
  <code>ow-icon-warning</code> and <code>ow-icon-success</code> — carry their own
  meaningful colour and ignore the text colour.
</p>
<Example
  code={`<i class="ow-icon-starred text-ow-brand">starred</i>
<i class="ow-icon-starred text-ow-positive">starred</i>
<i class="ow-icon-starred text-ow-information">starred</i>`}
>
  <i class="ow-icon-starred h-8 w-8 text-ow-brand">starred</i>
  <i class="ow-icon-starred h-8 w-8 text-ow-positive">starred</i>
  <i class="ow-icon-starred h-8 w-8 text-ow-information">starred</i>
</Example>

<h2 id="in-context" class="ow-heading-2">Icons in context</h2>
<p>
  Because an icon inherits colour and aligns to the middle of the line, it sits
  naturally inside buttons, links and headings. Inside a button, combine it with
  <code>ow-has-icon</code>.
</p>
<Example
  code={`<button class="ow-btn-positive ow-has-icon">
  <i class="ow-icon-plus"></i>
  <span>Add item</span>
</button>
<h3 class="ow-heading-3">
  <i class="ow-icon-security"></i>
  Security
</h3>`}
>
  <div class="flex w-full flex-wrap items-center gap-4">
    <button class="ow-btn-positive ow-has-icon">
      <i class="ow-icon-plus"></i>
      <span>Add item</span>
    </button>
    <h3 class="ow-heading-3">
      <i class="ow-icon-security h-6 w-6">security</i>
      Security
    </h3>
  </div>
</Example>

<h2 id="status" class="ow-heading-2">Status icons</h2>
<p>
  Small status icons such as <code>ow-icon-status-succeeded-small</code> and
  <code>ow-icon-status-waiting-small</code> are designed to annotate rows and list
  items at a glance.
</p>
<Example
  code={`<i class="ow-icon-status-succeeded-small">succeeded</i>
<i class="ow-icon-status-in-progress-small">in progress</i>
<i class="ow-icon-status-waiting-small">waiting</i>
<i class="ow-icon-status-failed-small">failed</i>`}
>
  <i class="ow-icon-status-succeeded-small">succeeded</i>
  <i class="ow-icon-status-in-progress-small">in progress</i>
  <i class="ow-icon-status-waiting-small">waiting</i>
  <i class="ow-icon-status-failed-small">failed</i>
</Example>
