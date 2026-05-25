<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Application Layouts/Divided Section',
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

  type NumberedStep = {
    code: string
    description?: string
    id: string
    title: string
  }

  type BulletedItem = {
    content: string
    id: string
    title: string
  }

  type StatusItem = {
    content: string
    id: string
    title: string
  }

  const sectionLabelClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const sectionClass = 'grid gap-4'
  const gridLayoutClass = 'grid gap-6 lg:grid-cols-2'
  const descriptionItems = [
    'Enhanced security with AppArmor and live kernel patching',
    'Optimized performance for cloud and container workloads',
    '10-year long term support with regular security updates'
  ]

  const numberedSteps: NumberedStep[] = [
    {
      code: 'sudo snap install microceph',
      id: 'install',
      title:
        'To get started, install the MicroCeph snap with the following command on each node:'
    },
    {
      code: 'sudo microceph cluster bootstrap',
      id: 'bootstrap',
      title: 'Then bootstrap the cluster:'
    },
    {
      code: 'sudo microceph.ceph status',
      description:
        'Here you should see that there is a single node in the cluster.',
      id: 'status',
      title: 'Check the cluster status with the following command:'
    },
    {
      code: 'sudo microceph disk add /dev/sd[x] --wipe',
      description:
        'Repeat for each disk you would like to use as an OSD on that node.',
      id: 'osds',
      title: 'Next, add some disks that will be used as OSDs:'
    }
  ]

  const bulletedItems: BulletedItem[] = [
    {
      content:
        'Charm operators encode the operational knowledge for each service so teams reuse the same model in every environment.',
      id: 'charms',
      title: 'Reusable operators'
    },
    {
      content:
        'Models group applications together so related workloads share lifecycle commands and observability.',
      id: 'models',
      title: 'Grouped models'
    },
    {
      content:
        'Relations express dependencies between applications, letting Juju coordinate hooks without bespoke glue code.',
      id: 'relations',
      title: 'Declarative relations'
    }
  ]

  const statusItems: StatusItem[] = [
    {
      content:
        'Long-term commercial support covers every long-term release, with regular security maintenance.',
      id: 'support',
      title: 'Backed by a 10-year support promise'
    },
    {
      content:
        'Hardened defaults and signed images keep production environments aligned with internal compliance.',
      id: 'compliance',
      title: 'Compliance-ready defaults'
    },
    {
      content:
        'Lifecycle alignment between snaps, packages and images keeps every layer current.',
      id: 'lifecycle',
      title: 'Aligned across layers'
    }
  ]

  const codeOnlyItems = [
    'sudo apt-get update',
    'sudo apt-get install --yes ubuntu-server',
    'sudo systemctl enable --now ssh'
  ]

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

<Story name="Divided Section">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <div class="mx-auto grid max-w-6xl gap-12 px-6">
        <section class={sectionClass}>
          <p class={sectionLabelClass}>Numbered steps with description block</p>

          <section class="ow-section">
            <hr class="ow-rule" />
            <div class={`pt-4 ${gridLayoutClass}`}>
              <div>
                <h2 class="ow-heading-2">
                  The quick brown fox jumps over the lazy dog
                </h2>
              </div>
              <div class="grid gap-4">
                <ul class="ow-list">
                  {#each descriptionItems as item (item)}
                    <li class="ow-list-item is-ticked">{item}</li>
                  {/each}
                </ul>
                <p class="ow-section-shallow">
                  This description has shallow padding applied, increasing the
                  vertical space between it and the next item.
                </p>
                <hr class="ow-rule-muted" />
                <ol class="ow-divided-block ow-stepped-list">
                  {#each numberedSteps as step, index (step.id)}
                    <li class="ow-divided-heading ow-stepped-list-item">
                      <div class="ow-stepped-list-title">
                        <h3 class="ow-heading-5">{step.title}</h3>
                        <div class="ow-stepped-list-content grid gap-3 pt-2">
                          <pre class="ow-code-snippet"><code
                              >{step.code}</code
                            ></pre>
                          {#if step.description}
                            <p>{step.description}</p>
                          {/if}
                        </div>
                      </div>
                    </li>
                    {#if index < numberedSteps.length - 1}
                      <hr class="ow-rule-muted" />
                    {/if}
                  {/each}
                </ol>
              </div>
            </div>
          </section>
        </section>

        <section class={sectionClass}>
          <p class={sectionLabelClass}>Bulleted headings</p>

          <section class="ow-section">
            <hr class="ow-rule" />
            <div class={`pt-4 ${gridLayoutClass}`}>
              <div>
                <h2 class="ow-heading-2">A coherent model for operations</h2>
              </div>
              <div>
                <ul class="ow-divided-block ow-list">
                  {#each bulletedItems as item, index (item.id)}
                    <li class="ow-divided-heading ow-list-item has-bullet">
                      <h3 class="ow-heading-5">{item.title}</h3>
                      <p>{item.content}</p>
                    </li>
                    {#if index < bulletedItems.length - 1}
                      <hr class="ow-rule-muted" />
                    {/if}
                  {/each}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section class={sectionClass}>
          <p class={sectionLabelClass}>Checked headings</p>

          <section class="ow-section">
            <hr class="ow-rule" />
            <div class={`pt-4 ${gridLayoutClass}`}>
              <div>
                <h2 class="ow-heading-2">Built for production from day one</h2>
              </div>
              <div>
                <ul class="ow-divided-block ow-list">
                  {#each statusItems as item, index (item.id)}
                    <li class="ow-divided-heading ow-list-item is-ticked">
                      <h3 class="ow-heading-5">{item.title}</h3>
                      <p>{item.content}</p>
                    </li>
                    {#if index < statusItems.length - 1}
                      <hr class="ow-rule-muted" />
                    {/if}
                  {/each}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section class={sectionClass}>
          <p class={sectionLabelClass}>No bullets, code-only blocks</p>

          <section class="ow-section">
            <hr class="ow-rule-muted" />
            <div class={`pt-4 ${gridLayoutClass}`}>
              <div>
                <h2 class="ow-heading-2">Bring up a host with three commands</h2>
              </div>
              <div>
                <ul class="ow-divided-block ow-list">
                  {#each codeOnlyItems as command, index (command)}
                    <li class="ow-divided-heading ow-list-item">
                      <pre class="ow-code-snippet"><code
                          >{command}</code
                        ></pre>
                    </li>
                    {#if index < codeOnlyItems.length - 1}
                      <hr class="ow-rule-muted" />
                    {/if}
                  {/each}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section class={sectionClass}>
          <p class={sectionLabelClass}>Split-on-medium layout</p>

          <section class="ow-section">
            <hr class="ow-rule" />
            <div class="grid gap-6 pt-4 md:grid-cols-2">
              <div>
                <h2 class="ow-heading-2">Compact narrative on tablet sizes</h2>
              </div>
              <div>
                <ul class="ow-divided-block ow-list">
                  {#each bulletedItems.slice(0, 2) as item, index (item.id)}
                    <li class="ow-divided-heading ow-list-item has-bullet">
                      <h3 class="ow-heading-5">{item.title}</h3>
                      <p>{item.content}</p>
                    </li>
                    {#if index < 1}
                      <hr class="ow-rule-muted" />
                    {/if}
                  {/each}
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
