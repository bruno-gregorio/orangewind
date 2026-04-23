<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Accordion',
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
  type HeadingTag = 'div' | 'h2' | 'h3' | 'h4' | 'h5'

  type ContentAccordionItem = {
    copy: string
    headingClass?: string
    headingLevel?: number
    headingTag: HeadingTag
    id: string
    label: string
  }

  type TickAccordionItem = {
    headingClass?: string
    headingLevel: number
    id: string
    inputType: 'checkbox' | 'radio'
    label: string
    options: Array<{
      id: string
      label: string
    }>
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass =
    'grid gap-6 rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5'

  const defaultAccordionItems: ContentAccordionItem[] = [
    {
      copy: 'MAAS expands to Metal as a Service. It turns bare metal into an API-driven pool so teams can commission, deploy and recycle machines without handling each one manually.',
      headingLevel: 3,
      headingTag: 'div',
      id: 'what-is-maas',
      label: 'What is MAAS?'
    },
    {
      copy: 'MAAS manages large sets of physical machines through resource pools, automated provisioning and repeatable lifecycle operations that feel much closer to cloud infrastructure.',
      headingLevel: 3,
      headingTag: 'div',
      id: 'what-maas-offers',
      label: 'What MAAS offers'
    },
    {
      copy: 'When new hardware is added, MAAS commissions it, validates the machine and makes it ready for deployment so operators can move quickly between install, use and release states.',
      headingLevel: 3,
      headingTag: 'div',
      id: 'how-maas-works',
      label: 'How MAAS works'
    }
  ]

  const headingAccordionItems: ContentAccordionItem[] = [
    {
      copy: 'A top-level heading can wrap the accordion button while the button keeps the interaction semantics and the heading preserves document structure.',
      headingClass: 'ow-heading-2',
      headingTag: 'h2',
      id: 'architecture-overview',
      label: 'Architecture overview'
    },
    {
      copy: 'Nested sections can use progressively smaller heading levels and still inherit the accordion button styling without adding extra wrappers.',
      headingClass: 'ow-heading-3',
      headingTag: 'h3',
      id: 'controller-layout',
      label: 'Controller layout'
    },
    {
      copy: 'This is useful when the accordion belongs to a content section rather than a sidebar filter and the page outline needs to stay meaningful.',
      headingClass: 'ow-heading-4',
      headingTag: 'h4',
      id: 'deployment-notes',
      label: 'Deployment notes'
    },
    {
      copy: 'Smaller heading styles still work for dense side content where the toggle needs to read like a heading but not dominate the page.',
      headingClass: 'ow-heading-5',
      headingTag: 'h5',
      id: 'release-checklist',
      label: 'Release checklist'
    }
  ]

  const tickAccordionItems: TickAccordionItem[] = [
    {
      headingLevel: 3,
      id: 'networking',
      inputType: 'checkbox',
      label: 'Networking',
      options: [
        {
          id: 'working-offline',
          label: 'Working offline'
        },
        {
          id: 'fan-container-networking',
          label: 'Fan container networking'
        },
        {
          id: 'network-spaces',
          label: 'Network spaces'
        }
      ]
    },
    {
      headingLevel: 3,
      id: 'miscellaneous',
      inputType: 'radio',
      label: 'Miscellaneous',
      options: [
        {
          id: 'juju-gui',
          label: 'Juju GUI'
        },
        {
          id: 'centos-support',
          label: 'CentOS support'
        },
        {
          id: 'juju-metrics',
          label: 'Collecting Juju metrics'
        }
      ]
    }
  ]

  let openDefaultItemId = $state<string | null>(
    defaultAccordionItems[0]?.id ?? null
  )
  let openHeadingItemId = $state<string | null>(
    headingAccordionItems[0]?.id ?? null
  )
  let openTickItemId = $state<string | null>(tickAccordionItems[0]?.id ?? null)

  function getTabId(id: string) {
    return `${id}-tab`
  }

  function getPanelId(id: string) {
    return `${id}-panel`
  }

  function isOpen(openItemId: string | null, itemId: string) {
    return openItemId === itemId
  }

  function toggleItem(openItemId: string | null, itemId: string) {
    return openItemId === itemId ? null : itemId
  }

  function toggleDefaultItem(itemId: string) {
    openDefaultItemId = toggleItem(openDefaultItemId, itemId)
  }

  function toggleHeadingItem(itemId: string) {
    openHeadingItemId = toggleItem(openHeadingItemId, itemId)
  }

  function toggleTickItem(itemId: string) {
    openTickItemId = toggleItem(openTickItemId, itemId)
  }

  function getHeadingClasses(headingClass?: string) {
    return ['ow-accordion-heading', headingClass].filter(Boolean).join(' ')
  }
</script>

<Story
  name="Accordion"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'space-y-14 p-10',
        args?.dark && 'bg-[#111] text-[#fff]',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class={sectionTitleClass}>Default accordion</p>

        <div class={[demoContainerClass, 'max-w-3xl'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Only one panel stays open at a time, and the state is driven by
            `aria-expanded` and `aria-hidden`.
          </p>

          <aside class="ow-accordion">
            <ul class="ow-accordion-list">
              {#each defaultAccordionItems as item (item.id)}
                {@const itemIsOpen = isOpen(openDefaultItemId, item.id)}

                <li class="ow-accordion-group">
                  <svelte:element
                    this={item.headingTag}
                    class={getHeadingClasses(item.headingClass)}
                    role={item.headingTag === 'div' ? 'heading' : undefined}
                    aria-level={item.headingTag === 'div'
                      ? item.headingLevel
                      : undefined}
                  >
                    <button
                      type="button"
                      class="ow-accordion-tab"
                      id={getTabId(item.id)}
                      aria-controls={getPanelId(item.id)}
                      aria-expanded={itemIsOpen ? 'true' : 'false'}
                      onclick={() => toggleDefaultItem(item.id)}
                    >
                      {item.label}
                    </button>
                  </svelte:element>

                  <section
                    class="ow-accordion-panel"
                    id={getPanelId(item.id)}
                    aria-hidden={itemIsOpen ? 'false' : 'true'}
                    aria-labelledby={getTabId(item.id)}
                  >
                    <p>{item.copy}</p>
                  </section>
                </li>
              {/each}
            </ul>
          </aside>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Heading elements</p>

        <div class={[demoContainerClass, 'max-w-3xl'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Native heading tags can own the toggle button directly while keeping
            the same accordion structure.
          </p>

          <aside class="ow-accordion">
            <ul class="ow-accordion-list">
              {#each headingAccordionItems as item (item.id)}
                {@const itemIsOpen = isOpen(openHeadingItemId, item.id)}

                <li class="ow-accordion-group">
                  <svelte:element
                    this={item.headingTag}
                    class={getHeadingClasses(item.headingClass)}
                  >
                    <button
                      type="button"
                      class="ow-accordion-tab"
                      id={getTabId(item.id)}
                      aria-controls={getPanelId(item.id)}
                      aria-expanded={itemIsOpen ? 'true' : 'false'}
                      onclick={() => toggleHeadingItem(item.id)}
                    >
                      {item.label}
                    </button>
                  </svelte:element>

                  <section
                    class="ow-accordion-panel"
                    id={getPanelId(item.id)}
                    aria-hidden={itemIsOpen ? 'false' : 'true'}
                    aria-labelledby={getTabId(item.id)}
                  >
                    <p>{item.copy}</p>
                  </section>
                </li>
              {/each}
            </ul>
          </aside>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Tick elements</p>

        <div class={[demoContainerClass, 'max-w-2xl'].join(' ')}>
          <p class="text-sm text-black/65 dark:text-white/65">
            Use `has-tick-elements` on the panel when the content is a stack of
            checkboxes or radios.
          </p>

          <aside class="ow-accordion">
            <ul class="ow-accordion-list">
              {#each tickAccordionItems as item (item.id)}
                {@const itemIsOpen = isOpen(openTickItemId, item.id)}

                <li class="ow-accordion-group">
                  <svelte:element
                    this={'div'}
                    class={getHeadingClasses(item.headingClass)}
                    role="heading"
                    aria-level={item.headingLevel}
                  >
                    <button
                      type="button"
                      class="ow-accordion-tab"
                      id={getTabId(item.id)}
                      aria-controls={getPanelId(item.id)}
                      aria-expanded={itemIsOpen ? 'true' : 'false'}
                      onclick={() => toggleTickItem(item.id)}
                    >
                      {item.label}
                    </button>
                  </svelte:element>

                  <section
                    class="ow-accordion-panel has-tick-elements"
                    id={getPanelId(item.id)}
                    aria-hidden={itemIsOpen ? 'false' : 'true'}
                    aria-labelledby={getTabId(item.id)}
                  >
                    {#if item.inputType === 'checkbox'}
                      {#each item.options as option (option.id)}
                        <div class="ow-checkbox">
                          <input
                            type="checkbox"
                            id={`${item.id}-${option.id}`}
                            class="ow-checkbox-input"
                          />
                          <label
                            for={`${item.id}-${option.id}`}
                            class="ow-checkbox-label"
                          >
                            {option.label}
                          </label>
                        </div>
                      {/each}
                    {:else}
                      {#each item.options as option (option.id)}
                        <div class="ow-radio">
                          <input
                            type="radio"
                            name={item.id}
                            id={`${item.id}-${option.id}`}
                            class="ow-radio-input"
                          />
                          <label
                            for={`${item.id}-${option.id}`}
                            class="ow-radio-label"
                          >
                            {option.label}
                          </label>
                        </div>
                      {/each}
                    {/if}
                  </section>
                </li>
              {/each}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
