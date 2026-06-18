<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <div class="ow-notification-positive">
    <div class="ow-notification-content">
      <span class="ow-notification-title">Success</span>
      <span class="ow-notification-message">Your changes have been saved.</span>
    </div>
  </div>
  <div class="ow-notification-caution">
    <div class="ow-notification-content">
      <span class="ow-notification-title">Caution</span>
      <span class="ow-notification-message">
        Your trial ends in three days.
      </span>
    </div>
  </div>
</div>

<p>
  Notifications communicate the outcome of an action or an important system
  message. The colour conveys severity; an optional title summarises the
  message.
</p>

<h2 id="information" class="ow-heading-2">Information</h2>
<p>Use an information notification for neutral, contextual messages.</p>
<Example
  block
  code={`<div class="ow-notification-information">
  <div class="ow-notification-content">
    <span class="ow-notification-title">Note</span>
    <span class="ow-notification-message">A new version is available.</span>
  </div>
</div>`}
>
  <div class="ow-notification-information">
    <div class="ow-notification-content">
      <span class="ow-notification-title">Note</span>
      <span class="ow-notification-message">A new version is available.</span>
    </div>
  </div>
</Example>

<h2 id="positive" class="ow-heading-2">Positive</h2>
<p>Confirm that an action succeeded.</p>
<Example
  block
  code={`<div class="ow-notification-positive">
  <div class="ow-notification-content">
    <span class="ow-notification-message">Your changes have been saved.</span>
  </div>
</div>`}
>
  <div class="ow-notification-positive">
    <div class="ow-notification-content">
      <span class="ow-notification-message">Your changes have been saved.</span>
    </div>
  </div>
</Example>

<h2 id="caution" class="ow-heading-2">Caution</h2>
<p>Warn the user about something that may need their attention.</p>
<Example
  block
  code={`<div class="ow-notification-caution">
  <div class="ow-notification-content">
    <span class="ow-notification-message">Your trial ends in three days.</span>
  </div>
</div>`}
>
  <div class="ow-notification-caution">
    <div class="ow-notification-content">
      <span class="ow-notification-message">Your trial ends in three days.</span
      >
    </div>
  </div>
</Example>

<h2 id="negative" class="ow-heading-2">Negative</h2>
<p>Report an error or a failed action.</p>
<Example
  block
  code={`<div class="ow-notification-negative">
  <div class="ow-notification-content">
    <span class="ow-notification-title">Error</span>
    <span class="ow-notification-message">The upload could not be completed.</span>
  </div>
</div>`}
>
  <div class="ow-notification-negative">
    <div class="ow-notification-content">
      <span class="ow-notification-title">Error</span>
      <span class="ow-notification-message">
        The upload could not be completed.
      </span>
    </div>
  </div>
</Example>
