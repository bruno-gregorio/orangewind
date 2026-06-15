<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Feature Blocks/CTA Section',
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

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'

  const fox = 'The quick brown fox jumps over the lazy dog'

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen py-10',
      args?.dark ? 'bg-zinc-950 text-white' : 'bg-neutral-100 text-zinc-950',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }
</script>

<Story name="CTA Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class="grid gap-4">
          <p class={sectionLabelClass}>Default · full width</p>
          <hr class="ow-rule ow-is-fixed-width" />
          <div class="ow-strip ow-is-deep">
            <h2 class="ow-heading-2">
              {fox}<br />
              <a href="#cta">{fox} ›</a>
            </h2>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Default · 25-75</p>
          <hr class="ow-rule ow-is-fixed-width" />
          <div class="ow-strip ow-is-deep">
            <div class="grid lg:grid-cols-12">
              <div class="lg:col-span-9 lg:col-start-4">
                <h2 class="ow-heading-2">
                  {fox}<br />
                  <a href="#cta">{fox} ›</a>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>Default · links within text</p>
          <hr class="ow-rule ow-is-fixed-width" />
          <div class="ow-strip ow-is-deep">
            <h2 class="ow-heading-2">
              For more information, <a href="#docs">read the docs</a><br />
              or <a href="#contact">contact us</a> to let our experts help you take
              the next step
            </h2>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>With CTA block · full width</p>
          <hr class="ow-rule ow-is-fixed-width" />
          <div class="ow-strip ow-is-deep">
            <div class="grid gap-4">
              <h2 class="ow-heading-2">{fox}</h2>
              <p>{fox}.</p>
              <div class="ow-cta-block">
                <a class="ow-btn-positive" href="#action">Action</a>
                <a class="ow-btn" href="#action">Action</a>
                <a class="ow-btn-link" href="#more">
                  Lorem ipsum dolor sit amet ›
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="grid gap-4">
          <p class={sectionLabelClass}>With CTA block · 25-75</p>
          <hr class="ow-rule ow-is-fixed-width" />
          <div class="ow-strip ow-is-deep">
            <div class="grid lg:grid-cols-12">
              <div class="grid gap-4 lg:col-span-9 lg:col-start-4">
                <h2 class="ow-heading-2">{fox}</h2>
                <p>{fox}.</p>
                <div class="ow-cta-block">
                  <a class="ow-btn-positive" href="#action">Action</a>
                  <a class="ow-btn" href="#action">Secondary action</a>
                  <a class="ow-btn-link" href="#more">
                    Lorem ipsum dolor sit amet ›
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
