<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Notifications',
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

<Story
  name="Notifications"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'p-10 space-y-12',
        args?.dark && 'bg-[#111] text-[#fff]',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Base Notifications
        </p>

        <div class="ow-notification-information">
          <i class="ow-icon-information"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Information</h3>
            <p class="ow-notification-message">
              This is an informational message. It provides context or
              non-critical details.
            </p>
          </div>
        </div>

        <div class="ow-notification-positive">
          <i class="ow-icon-success"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Success</h3>
            <p class="ow-notification-message">
              The action was completed successfully.
            </p>
          </div>
        </div>

        <div class="ow-notification-caution">
          <i class="ow-icon-warning"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Caution</h3>
            <p class="ow-notification-message">
              Please be careful before proceeding with this action.
            </p>
          </div>
        </div>

        <div class="ow-notification-negative">
          <i class="ow-icon-error"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Error</h3>
            <p class="ow-notification-message">
              An error occurred while processing your request.
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Dismissible Notification
        </p>

        <div class="ow-notification-information">
          <i class="ow-icon-information"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Dismissible</h3>
            <p class="ow-notification-message">
              You can close this notification using the button on the right.
            </p>
          </div>
          <button
            class="ow-notification-close"
            aria-label="Close"
            title="Close"
          >
            <i class="ow-icon-close"></i>
          </button>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Meta and Actions
        </p>

        <div class="ow-notification-positive">
          <i class="ow-icon-success"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Task Complete</h3>
            <p class="ow-notification-message">
              Your deployment has finished successfully.
            </p>
          </div>
          <div class="ow-notification-meta">
            <span class="ow-notification-timestamp">Today at 14:00</span>
            <div class="ow-notification-actions">
              <a href="#test" class="ow-notification-action">View logs</a>
              <a href="#test" class="ow-notification-action">Dismiss</a>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Borderless Variants
        </p>

        <div class="ow-card mb-0 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="space-y-4">
            <h4 class="font-medium">Embedded Context</h4>
            <p class="text-sm opacity-80">
              Borderless notifications are designed to flow seamlessly inside
              other contained sections like cards or panels, without
              double-bordering.
            </p>

            <div
              class="ow-notification-information ow-notification-borderless pb-0 mb-0"
            >
              <i class="ow-icon-information"></i>
              <div class="ow-notification-content">
                <h3 class="ow-notification-title">System Update</h3>
                <p class="ow-notification-message">
                  A new background update is available. It will be installed on
                  next reboot.
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="font-medium">Form Feedback</h4>
            <p class="text-sm opacity-80">
              They also work well inline above forms or input groups.
            </p>

            <div
              class="ow-notification-negative ow-notification-borderless pb-0 mb-0"
            >
              <i class="ow-icon-error"></i>
              <div class="ow-notification-content">
                <h3 class="ow-notification-title">Validation Error</h3>
                <p class="ow-notification-message">
                  The email address provided is already in use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50">
          Inline Variants
        </p>

        <div class="ow-notification-negative ow-notification-inline">
          <i class="ow-icon-error"></i>
          <div class="ow-notification-content">
            <h3 class="ow-notification-title">Network Error.</h3>
            <p class="ow-notification-message">
              Failed to connect to the database.
            </p>
          </div>
          <button
            class="ow-notification-close"
            aria-label="Close"
            title="Close"
          >
            <i class="ow-icon-close"></i>
          </button>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
