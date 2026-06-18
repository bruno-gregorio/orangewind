<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration. The overlay is scoped to
  // the bordered preview box (absolute inset-0) rather than the viewport.
  let open = $state(false)
</script>

<!-- Mandatory headline demonstration — a real modal scoped inside the box. -->
<div
  class="relative grid min-h-72 place-items-center overflow-hidden rounded border border-ow-surface-border p-8"
>
  <button
    type="button"
    class="ow-btn-positive"
    aria-haspopup="dialog"
    onclick={() => (open = true)}
  >
    Show modal
  </button>

  {#if open}
    <div
      class="ow-modal absolute"
      role="presentation"
      onclick={event => event.target === event.currentTarget && (open = false)}
      onkeydown={event => event.key === 'Escape' && (open = false)}
    >
      <div
        class="ow-modal-dialog ow-is-narrow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="headline-modal-title"
      >
        <header class="ow-modal-header">
          <h2 class="ow-modal-title" id="headline-modal-title">
            Confirm action
          </h2>
          <button
            type="button"
            class="ow-modal-close"
            aria-label="Close modal"
            onclick={() => (open = false)}
          >
            <i class="ow-icon-close" aria-hidden="true"></i>
          </button>
        </header>
        <div class="ow-modal-body">
          <p class="m-0">Are you sure you want to proceed?</p>
        </div>
        <footer class="ow-modal-footer">
          <button
            type="button"
            class="ow-btn-base"
            onclick={() => (open = false)}
          >
            Cancel
          </button>
          <button
            type="button"
            class="ow-btn-positive"
            onclick={() => (open = false)}
          >
            Confirm
          </button>
        </footer>
      </div>
    </div>
  {/if}
</div>

<p>
  A modal presents focused content in a dialog layered over the page. The
  <code>ow-modal</code> overlay normally covers the viewport (<code
    >position: fixed</code
  >); the previews below scope it inside the bordered box. A dialog stacks an
  <code>ow-modal-header</code>,
  <code>ow-modal-body</code> and <code>ow-modal-footer</code>, and the body
  scrolls independently when content overflows.
</p>

<h2 id="anatomy" class="ow-heading-2">Dialog anatomy</h2>
<p>
  The <code>ow-modal-dialog</code> is a self-contained card: a header with a title
  and close button, a scrollable body, and a footer for actions. Shown here inline,
  without the overlay.
</p>
<Example
  block
  code={`<div class="ow-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <header class="ow-modal-header">
    <h2 class="ow-modal-title" id="dialog-title">Confirm action</h2>
    <button class="ow-modal-close" aria-label="Close modal">
      <i class="ow-icon-close" aria-hidden="true"></i>
    </button>
  </header>
  <div class="ow-modal-body">
    <p>Are you sure you want to proceed? This action can be reverted.</p>
  </div>
  <footer class="ow-modal-footer">
    <button class="ow-btn-base">Cancel</button>
    <button class="ow-btn-positive">Confirm</button>
  </footer>
</div>`}
>
  <div
    class="ow-modal-dialog w-full"
    role="dialog"
    aria-modal="true"
    aria-labelledby="anatomy-title"
  >
    <header class="ow-modal-header">
      <h2 class="ow-modal-title" id="anatomy-title">Confirm action</h2>
      <button class="ow-modal-close" aria-label="Close modal">
        <i class="ow-icon-close" aria-hidden="true"></i>
      </button>
    </header>
    <div class="ow-modal-body">
      <p class="m-0">
        Are you sure you want to proceed? This action can be reverted.
      </p>
    </div>
    <footer class="ow-modal-footer">
      <button class="ow-btn-base">Cancel</button>
      <button class="ow-btn-positive">Confirm</button>
    </footer>
  </div>
</Example>

<h2 id="overlay" class="ow-heading-2">With an overlay</h2>
<p>
  Wrap the dialog in an <code>ow-modal</code> element to dim the page behind it.
  In production the overlay is fixed to the viewport; this preview pins it
  inside a bounded, <code>relative</code> container instead.
</p>
<Example
  block
  code={`<div class="ow-modal" role="presentation">
  <div class="ow-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="overlay-title">
    <header class="ow-modal-header">
      <h2 class="ow-modal-title" id="overlay-title">Heads up</h2>
      <button class="ow-modal-close" aria-label="Close modal">
        <i class="ow-icon-close" aria-hidden="true"></i>
      </button>
    </header>
    <div class="ow-modal-body">
      <p>Your changes were saved.</p>
    </div>
    <footer class="ow-modal-footer">
      <button class="ow-btn">Got it</button>
    </footer>
  </div>
</div>`}
>
  <div class="relative h-64 w-full overflow-hidden rounded">
    <div class="ow-modal absolute" role="presentation">
      <div
        class="ow-modal-dialog ow-is-narrow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="overlay-title"
      >
        <header class="ow-modal-header">
          <h2 class="ow-modal-title" id="overlay-title">Heads up</h2>
          <button class="ow-modal-close" aria-label="Close modal">
            <i class="ow-icon-close" aria-hidden="true"></i>
          </button>
        </header>
        <div class="ow-modal-body">
          <p class="m-0">Your changes were saved.</p>
        </div>
        <footer class="ow-modal-footer">
          <button class="ow-btn">Got it</button>
        </footer>
      </div>
    </div>
  </div>
</Example>

<h2 id="sizes" class="ow-heading-2">Sizes</h2>
<p>
  Add <code>ow-is-narrow</code> or <code>ow-is-wide</code> to the dialog to override
  its maximum width. The default sits between the two.
</p>
<Example
  block
  code={`<div class="ow-modal-dialog ow-is-narrow" role="dialog" aria-modal="true">…</div>
<div class="ow-modal-dialog ow-is-wide" role="dialog" aria-modal="true">…</div>`}
>
  <div
    class="ow-modal-dialog ow-is-narrow w-full"
    role="dialog"
    aria-modal="true"
    aria-labelledby="narrow-title"
  >
    <header class="ow-modal-header">
      <h2 class="ow-modal-title" id="narrow-title">Narrow</h2>
      <button class="ow-modal-close" aria-label="Close modal">
        <i class="ow-icon-close" aria-hidden="true"></i>
      </button>
    </header>
    <div class="ow-modal-body">
      <p class="m-0">A 28rem dialog for short confirmations.</p>
    </div>
  </div>
  <div
    class="ow-modal-dialog ow-is-wide w-full"
    role="dialog"
    aria-modal="true"
    aria-labelledby="wide-title"
  >
    <header class="ow-modal-header">
      <h2 class="ow-modal-title" id="wide-title">Wide</h2>
      <button class="ow-modal-close" aria-label="Close modal">
        <i class="ow-icon-close" aria-hidden="true"></i>
      </button>
    </header>
    <div class="ow-modal-body">
      <p class="m-0">A 60rem dialog for summaries and tables.</p>
    </div>
  </div>
</Example>

<h2 id="form" class="ow-heading-2">Form modal</h2>
<p>
  A dialog can host a form. Use <code>ow-form-stacked</code> on the body and put the
  submit and cancel actions in the footer.
</p>
<Example
  block
  code={`<form class="ow-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="form-title">
  <header class="ow-modal-header">
    <h2 class="ow-modal-title" id="form-title">Edit profile</h2>
    <button type="button" class="ow-modal-close" aria-label="Close modal">
      <i class="ow-icon-close" aria-hidden="true"></i>
    </button>
  </header>
  <div class="ow-modal-body ow-form-stacked">
    <label for="form-name">Full name</label>
    <input id="form-name" type="text" value="Ada Lovelace" />
    <label for="form-email">Email</label>
    <input id="form-email" type="email" value="ada@example.com" />
  </div>
  <footer class="ow-modal-footer">
    <button type="button" class="ow-btn-base">Cancel</button>
    <button type="submit" class="ow-btn-positive">Save changes</button>
  </footer>
</form>`}
>
  <!-- A modal that is itself a form; `role="dialog"` makes it a dialog to AT. -->
  <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
  <form
    class="ow-modal-dialog w-full"
    role="dialog"
    aria-modal="true"
    aria-labelledby="form-title"
  >
    <header class="ow-modal-header">
      <h2 class="ow-modal-title" id="form-title">Edit profile</h2>
      <button type="button" class="ow-modal-close" aria-label="Close modal">
        <i class="ow-icon-close" aria-hidden="true"></i>
      </button>
    </header>
    <div class="ow-modal-body ow-form-stacked">
      <label for="form-name">Full name</label>
      <input id="form-name" type="text" value="Ada Lovelace" />
      <label for="form-email">Email</label>
      <input id="form-email" type="email" value="ada@example.com" />
    </div>
    <footer class="ow-modal-footer">
      <button type="button" class="ow-btn-base">Cancel</button>
      <button type="submit" class="ow-btn-positive">Save changes</button>
    </footer>
  </form>
</Example>
