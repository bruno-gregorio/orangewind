<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Modal',
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
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  type ModalKey = 'default' | 'narrow' | 'wide' | 'scroll' | 'form'

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const openModals = $state<Record<ModalKey, boolean>>({
    default: false,
    narrow: false,
    wide: false,
    scroll: false,
    form: false
  })

  const scrollParagraphs = Array.from({ length: 12 }, (_, index) => index + 1)

  function open(key: ModalKey) {
    openModals[key] = true
  }

  function close(key: ModalKey) {
    openModals[key] = false
  }

  function backdropClose(event: MouseEvent, key: ModalKey) {
    if (event.target === event.currentTarget) {
      close(key)
    }
  }

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen space-y-10 p-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<Story name="Modal">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default</p>
        <div class="ow-card mb-0">
          <p class="mb-4">
            A standard modal dialog with a header, body content and a footer
            action row.
          </p>
          <button
            type="button"
            class="ow-btn-positive"
            aria-controls="modal-default"
            aria-haspopup="dialog"
            onclick={() => open('default')}
          >
            Show modal
          </button>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Sizes</p>
        <div class="ow-card mb-0 flex flex-wrap gap-3">
          <button
            type="button"
            class="ow-btn"
            aria-controls="modal-narrow"
            aria-haspopup="dialog"
            onclick={() => open('narrow')}
          >
            Narrow modal
          </button>
          <button
            type="button"
            class="ow-btn"
            aria-controls="modal-wide"
            aria-haspopup="dialog"
            onclick={() => open('wide')}
          >
            Wide modal
          </button>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Scrollable content</p>
        <div class="ow-card mb-0">
          <p class="mb-4">
            When the dialog body exceeds the viewport, only the body scrolls
            while the header and footer remain visible.
          </p>
          <button
            type="button"
            class="ow-btn"
            aria-controls="modal-scroll"
            aria-haspopup="dialog"
            onclick={() => open('scroll')}
          >
            Show scrollable modal
          </button>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Form modal</p>
        <div class="ow-card mb-0">
          <p class="mb-4">
            A modal can host a form. Submit and cancel actions live in the
            footer.
          </p>
          <button
            type="button"
            class="ow-btn"
            aria-controls="modal-form"
            aria-haspopup="dialog"
            onclick={() => open('form')}
          >
            Edit profile
          </button>
        </div>
      </section>
    </div>

    {#if openModals.default}
      <div
        class="ow-modal"
        id="modal-default"
        role="presentation"
        onclick={event => backdropClose(event, 'default')}
        onkeydown={event => event.key === 'Escape' && close('default')}
      >
        <div
          class="ow-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-default-title"
        >
          <header class="ow-modal-header">
            <h2 class="ow-modal-title" id="modal-default-title">Confirm action</h2>
            <button
              type="button"
              class="ow-modal-close"
              aria-label="Close modal"
              aria-controls="modal-default"
              onclick={() => close('default')}
            >
              <i class="ow-icon-close" aria-hidden="true"></i>
            </button>
          </header>
          <div class="ow-modal-body">
            <p>
              Are you sure you want to proceed? This action can be reverted from
              the audit log within 24 hours.
            </p>
          </div>
          <footer class="ow-modal-footer">
            <button
              type="button"
              class="ow-btn-base"
              onclick={() => close('default')}
            >
              Cancel
            </button>
            <button
              type="button"
              class="ow-btn-positive"
              onclick={() => close('default')}
            >
              Confirm
            </button>
          </footer>
        </div>
      </div>
    {/if}

    {#if openModals.narrow}
      <div
        class="ow-modal"
        id="modal-narrow"
        role="presentation"
        onclick={event => backdropClose(event, 'narrow')}
        onkeydown={event => event.key === 'Escape' && close('narrow')}
      >
        <div
          class="ow-modal-dialog is-narrow"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-narrow-title"
        >
          <header class="ow-modal-header">
            <h2 class="ow-modal-title" id="modal-narrow-title">Heads up</h2>
            <button
              type="button"
              class="ow-modal-close"
              aria-label="Close modal"
              aria-controls="modal-narrow"
              onclick={() => close('narrow')}
            >
              <i class="ow-icon-close" aria-hidden="true"></i>
            </button>
          </header>
          <div class="ow-modal-body">
            <p>Your changes were saved.</p>
          </div>
          <footer class="ow-modal-footer">
            <button
              type="button"
              class="ow-btn"
              onclick={() => close('narrow')}
            >
              Got it
            </button>
          </footer>
        </div>
      </div>
    {/if}

    {#if openModals.wide}
      <div
        class="ow-modal"
        id="modal-wide"
        role="presentation"
        onclick={event => backdropClose(event, 'wide')}
        onkeydown={event => event.key === 'Escape' && close('wide')}
      >
        <div
          class="ow-modal-dialog is-wide"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-wide-title"
        >
          <header class="ow-modal-header">
            <h2 class="ow-modal-title" id="modal-wide-title">
              Cluster deployment summary
            </h2>
            <button
              type="button"
              class="ow-modal-close"
              aria-label="Close modal"
              aria-controls="modal-wide"
              onclick={() => close('wide')}
            >
              <i class="ow-icon-close" aria-hidden="true"></i>
            </button>
          </header>
          <div class="ow-modal-body space-y-3">
            <p>
              Review the targets selected for this deployment before promoting
              the build. The cluster will receive a rolling update beginning
              with the canary region.
            </p>
            <ul class="ow-list">
              <li class="ow-list-item is-ticked">
                Canary: 2 nodes across one availability zone
              </li>
              <li class="ow-list-item is-ticked">
                Production: 18 nodes across three regions
              </li>
              <li class="ow-list-item is-ticked">
                Edge: 4 nodes across the perimeter network
              </li>
            </ul>
          </div>
          <footer class="ow-modal-footer">
            <button
              type="button"
              class="ow-btn-base"
              onclick={() => close('wide')}
            >
              Cancel
            </button>
            <button
              type="button"
              class="ow-btn-positive"
              onclick={() => close('wide')}
            >
              Promote build
            </button>
          </footer>
        </div>
      </div>
    {/if}

    {#if openModals.scroll}
      <div
        class="ow-modal"
        id="modal-scroll"
        role="presentation"
        onclick={event => backdropClose(event, 'scroll')}
        onkeydown={event => event.key === 'Escape' && close('scroll')}
      >
        <div
          class="ow-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-scroll-title"
        >
          <header class="ow-modal-header">
            <h2 class="ow-modal-title" id="modal-scroll-title">Release notes</h2>
            <button
              type="button"
              class="ow-modal-close"
              aria-label="Close modal"
              aria-controls="modal-scroll"
              onclick={() => close('scroll')}
            >
              <i class="ow-icon-close" aria-hidden="true"></i>
            </button>
          </header>
          <div class="ow-modal-body space-y-3">
            {#each scrollParagraphs as paragraph (paragraph)}
              <p>
                Paragraph {paragraph}: Juju takes care of ensuring that the
                compute node satisfies the size constraints that you specify,
                installing software, increasing their scale, setting up
                networking and storage capacity rules. This functionality is
                provided within software packages called charms.
              </p>
            {/each}
          </div>
          <footer class="ow-modal-footer">
            <button
              type="button"
              class="ow-btn"
              onclick={() => close('scroll')}
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    {/if}

    {#if openModals.form}
      <div
        class="ow-modal"
        id="modal-form"
        role="presentation"
        onclick={event => backdropClose(event, 'form')}
        onkeydown={event => event.key === 'Escape' && close('form')}
      >
        <form
          class="ow-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-form-title"
          onsubmit={event => {
            event.preventDefault()
            close('form')
          }}
        >
          <header class="ow-modal-header">
            <h2 class="ow-modal-title" id="modal-form-title">Edit profile</h2>
            <button
              type="button"
              class="ow-modal-close"
              aria-label="Close modal"
              aria-controls="modal-form"
              onclick={() => close('form')}
            >
              <i class="ow-icon-close" aria-hidden="true"></i>
            </button>
          </header>
          <div class="ow-modal-body ow-form-stacked">
            <label for="modal-form-name">Full name</label>
            <input id="modal-form-name" type="text" value="Ada Lovelace" />
            <label for="modal-form-email">Email</label>
            <input id="modal-form-email" type="email" value="ada@example.com" />
          </div>
          <footer class="ow-modal-footer">
            <button
              type="button"
              class="ow-btn-base"
              onclick={() => close('form')}
            >
              Cancel
            </button>
            <button type="submit" class="ow-btn-positive">Save changes</button>
          </footer>
        </form>
      </div>
    {/if}
  {/snippet}
</Story>
