<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Lists',
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
  import { SvelteSet } from 'svelte/reactivity'

  type FeatureItem = {
    id: string
    label: string
    state?: 'bullet' | 'crossed' | 'ticked'
  }

  type Step = {
    content: string
    id: string
    title: string
  }

  type TieredItem = {
    copy: string
    id: string
    title: string
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass =
    'grid gap-6 rounded-lg border border-black/10 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5'

  const listItems: FeatureItem[] = [
    {
      id: 'hardware-guidance',
      label: 'Hardware guidance and sizing',
      state: 'ticked'
    },
    {
      id: 'deployment-automation',
      label: 'Deployment automation for repeatable rollouts',
      state: 'bullet'
    },
    {
      id: 'commercial-support',
      label: '24 x 7 support',
      state: 'crossed'
    }
  ]

  const horizontalItems: FeatureItem[] = [
    {
      id: 'inventory',
      label: 'Inventory every machine, image and reservation',
      state: 'ticked'
    },
    {
      id: 'commissioning',
      label: 'Run commissioning scripts before a machine joins a pool',
      state: 'ticked'
    },
    {
      id: 'networking',
      label: 'Coordinate network spaces across racks and fabrics',
      state: 'ticked'
    },
    {
      id: 'observability',
      label: 'Expose audit trails and lifecycle events to operators',
      state: 'ticked'
    }
  ]

  const inlineItems = [
    'Community',
    'Careers',
    'Press centre',
    'Contact',
    'Security'
  ]

  const steps: Step[] = [
    {
      content:
        'Create the model and confirm that every operator can reach the controller endpoint.',
      id: 'create-model',
      title: 'Create a model'
    },
    {
      content:
        'Add the charms that make up the workload and expose only the services that need traffic.',
      id: 'deploy-charms',
      title: 'Deploy charms'
    },
    {
      content:
        'Relate the applications, wait for hooks to settle and check workload status.',
      id: 'relate-apps',
      title: 'Relate applications'
    }
  ]

  const tieredItems: TieredItem[] = [
    {
      copy: 'Shared images keep every deployment using the same tested operating system base.',
      id: 'images',
      title: 'Images'
    },
    {
      copy: 'Resource pools give each team clear ownership without splitting infrastructure into silos.',
      id: 'resource-pools',
      title: 'Resource pools'
    },
    {
      copy: 'Events make hardware state visible from commissioning through release.',
      id: 'events',
      title: 'Events'
    }
  ]

  const expandedTreeNodeIds = new SvelteSet(['source', 'stories'])
  let activeTreeNodeId = $state('lists-story')

  function getListItemClass(state?: FeatureItem['state']) {
    return [
      'ow-list-item',
      state === 'bullet' && 'has-bullet',
      state === 'crossed' && 'is-crossed',
      state === 'ticked' && 'is-ticked'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function getTreeToggleClass(nodeId: string) {
    return ['ow-list-tree-toggle', activeTreeNodeId === nodeId && 'is-active']
      .filter(Boolean)
      .join(' ')
  }

  function getTreeLinkClass(nodeId: string) {
    return ['ow-list-tree-link', activeTreeNodeId === nodeId && 'is-active']
      .filter(Boolean)
      .join(' ')
  }

  function getTreeSelected(nodeId: string) {
    return activeTreeNodeId === nodeId ? 'true' : 'false'
  }

  function isExpanded(nodeId: string) {
    return expandedTreeNodeIds.has(nodeId)
  }

  function toggleTreeNode(nodeId: string) {
    if (expandedTreeNodeIds.has(nodeId)) {
      expandedTreeNodeIds.delete(nodeId)
    } else {
      expandedTreeNodeIds.add(nodeId)
    }

    activeTreeNodeId = nodeId
  }

  function selectTreeNode(nodeId: string) {
    activeTreeNodeId = nodeId
  }
</script>

<Story
  name="Lists"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'grid min-h-screen gap-14 p-10',
        args?.dark && 'bg-zinc-950 text-white',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="grid gap-4">
        <p class={sectionTitleClass}>Base lists</p>

        <div class={[demoContainerClass, 'max-w-5xl'].join(' ')}>
          <div class="grid gap-8 md:grid-cols-3">
            <div>
              <h3 class="ow-heading-5">Unordered</h3>
              <ul>
                <li>Commission machines</li>
                <li>Attach fabrics</li>
                <li>Deploy workloads</li>
              </ul>
            </div>

            <div>
              <h3 class="ow-heading-5">Ordered</h3>
              <ol>
                <li>Bootstrap controller</li>
                <li>Add model</li>
                <li>Integrate services</li>
              </ol>
            </div>

            <div>
              <h3 class="ow-heading-5">Definition</h3>
              <dl>
                <dt>Model</dt>
                <dd>A workspace where applications are deployed.</dd>
                <dt>Charm</dt>
                <dd>An operator package for a workload.</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-4">
        <p class={sectionTitleClass}>Divided, status and nested counter</p>

        <div class={[demoContainerClass, 'max-w-5xl'].join(' ')}>
          <div class="grid gap-8 lg:grid-cols-2">
            <ul class="ow-list-divided">
              {#each listItems as item (item.id)}
                <li class={getListItemClass(item.state)}>{item.label}</li>
              {/each}
              <li class="ow-list-item has-bullet">
                Cloud region selection
                <ul class="ow-list-divided">
                  <li class="ow-list-item has-bullet">Primary region</li>
                  <li class="ow-list-item has-bullet">Recovery region</li>
                </ul>
              </li>
            </ul>

            <ol class="ow-list-divided ow-list-nested-counter">
              <li class="ow-list-item">
                Install the base system
                <ol class="ow-list-divided">
                  <li class="ow-list-item">Ubuntu Server</li>
                  <li class="ow-list-item">MAAS image stream</li>
                </ol>
              </li>
              <li class="ow-list-item">Register credentials</li>
              <li class="ow-list-item">Start the deployment</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="grid gap-4">
        <p class={sectionTitleClass}>Inline and split</p>

        <div class={[demoContainerClass, 'max-w-5xl'].join(' ')}>
          <div class="grid gap-8 lg:grid-cols-2">
            <div class="grid gap-4">
              <ul class="ow-inline-list">
                {#each inlineItems.slice(0, 4) as item (item)}
                  <li class="ow-inline-list-item">{item}</li>
                {/each}
              </ul>

              <ul class="ow-inline-list-middot">
                {#each inlineItems as item (item)}
                  <li class="ow-inline-list-item">
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`}>
                      {item}
                    </a>
                  </li>
                {/each}
              </ul>

              <ul class="ow-inline-list-stretch">
                <li class="ow-inline-list-item">Documentation</li>
                <li class="ow-inline-list-item text-right">
                  <a href="#all-docs">View all docs</a>
                </li>
              </ul>
            </div>

            <ul class="ow-list is-split">
              {#each horizontalItems.concat(listItems) as item (item.id)}
                <li class={getListItemClass(item.state)}>{item.label}</li>
              {/each}
            </ul>
          </div>
        </div>
      </section>

      <section class="grid gap-4">
        <p class={sectionTitleClass}>Horizontal section</p>

        <div class={[demoContainerClass, 'max-w-6xl'].join(' ')}>
          <div class="grid gap-10">
            <div class="ow-list-horizontal-section-wrapper">
              <ul class="ow-list-horizontal-section">
                {#each horizontalItems as item (item.id)}
                  <li class={getListItemClass(item.state)}>{item.label}</li>
                {/each}
              </ul>
            </div>

            <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
              <h3 class="ow-heading-4">Operator workflow</h3>
              <div class="ow-list-horizontal-section-wrapper">
                <ol class="ow-list-horizontal-section is-25-75">
                  {#each steps as step (step.id)}
                    <li class="ow-list-item">{step.title}</li>
                  {/each}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-4">
        <p class={sectionTitleClass}>Stepped lists</p>

        <div class={[demoContainerClass, 'max-w-6xl'].join(' ')}>
          <div class="grid gap-10 lg:grid-cols-2">
            <ol class="ow-stepped-list">
              {#each steps as step (step.id)}
                <li class="ow-stepped-list-item">
                  <h3 class="ow-stepped-list-title ow-heading-3">
                    {step.title}
                  </h3>
                  <p class="ow-stepped-list-content">{step.content}</p>
                </li>
              {/each}
            </ol>

            <ol class="ow-stepped-list-detailed">
              {#each steps as step (step.id)}
                <li class="ow-stepped-list-item">
                  <h3 class="ow-stepped-list-title ow-heading-4">
                    {step.title}
                  </h3>
                  <div class="ow-stepped-list-content">
                    <p>{step.content}</p>
                    <ul class="ow-list-divided">
                      <li class="ow-list-item has-bullet">Prepare inputs</li>
                      <li class="ow-list-item has-bullet">Validate output</li>
                    </ul>
                  </div>
                </li>
              {/each}
            </ol>
          </div>
        </div>
      </section>

      <section class="grid gap-4">
        <p class={sectionTitleClass}>List tree</p>

        <div class={[demoContainerClass, 'max-w-3xl'].join(' ')}>
          <ul class="ow-list-tree" aria-multiselectable="true" role="tree">
            <li
              class="ow-list-tree-item ow-list-tree-item-group"
              role="treeitem"
              aria-selected={getTreeSelected('source')}
            >
              <button
                type="button"
                class={getTreeToggleClass('source')}
                id="source-tree-button"
                aria-controls="source-tree"
                aria-expanded={isExpanded('source') ? 'true' : 'false'}
                onclick={() => toggleTreeNode('source')}
              >
                /packages
              </button>
              <ul
                class="ow-list-tree"
                role="group"
                id="source-tree"
                aria-hidden={isExpanded('source') ? 'false' : 'true'}
                aria-labelledby="source-tree-button"
              >
                <li
                  class="ow-list-tree-item"
                  role="treeitem"
                  aria-selected={getTreeSelected('orangewind-package')}
                >
                  <a
                    class={getTreeLinkClass('orangewind-package')}
                    href="#orangewind-package"
                    tabindex="0"
                    onclick={() => selectTreeNode('orangewind-package')}
                  >
                    orangewind
                  </a>
                </li>
                <li
                  class="ow-list-tree-item ow-list-tree-item-group"
                  role="treeitem"
                  aria-selected={getTreeSelected('stories')}
                >
                  <button
                    type="button"
                    class={getTreeToggleClass('stories')}
                    id="stories-tree-button"
                    aria-controls="stories-tree"
                    aria-expanded={isExpanded('stories') ? 'true' : 'false'}
                    onclick={() => toggleTreeNode('stories')}
                  >
                    /test-bench
                  </button>
                  <ul
                    class="ow-list-tree"
                    role="group"
                    id="stories-tree"
                    aria-hidden={isExpanded('stories') ? 'false' : 'true'}
                    aria-labelledby="stories-tree-button"
                  >
                    <li
                      class="ow-list-tree-item"
                      role="treeitem"
                      aria-selected={getTreeSelected('lists-story')}
                    >
                      <a
                        class={getTreeLinkClass('lists-story')}
                        href="#lists-story"
                        tabindex="0"
                        onclick={() => selectTreeNode('lists-story')}
                      >
                        Lists.stories.svelte
                      </a>
                    </li>
                    <li
                      class="ow-list-tree-item"
                      role="treeitem"
                      aria-selected={getTreeSelected('tabs-story')}
                    >
                      <a
                        class={getTreeLinkClass('tabs-story')}
                        href="#tabs-story"
                        tabindex="0"
                        onclick={() => selectTreeNode('tabs-story')}
                      >
                        Tabs.stories.svelte
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              class="ow-list-tree-item"
              role="treeitem"
              aria-selected={getTreeSelected('todo')}
            >
              <a
                class={getTreeLinkClass('todo')}
                href="#todo"
                tabindex="0"
                onclick={() => selectTreeNode('todo')}
              >
                TODO.md
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="grid gap-4">
        <p class={sectionTitleClass}>Rich and tiered compositions</p>

        <div class={[demoContainerClass, 'max-w-6xl'].join(' ')}>
          <div class="grid gap-12">
            <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
              <div class="grid gap-4">
                <h2 class="ow-heading-2">Fleet operations</h2>
                <p>
                  A rich list pairs short supporting content with a horizontal
                  section list for fast scanning.
                </p>
              </div>

              <div class="ow-list-horizontal-section-wrapper">
                <ul class="ow-list-horizontal-section">
                  {#each horizontalItems as item (item.id)}
                    <li class={getListItemClass(item.state)}>
                      {item.label}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>

            <div class="grid gap-6">
              <div class="grid gap-4 lg:grid-cols-2">
                <h2 class="ow-heading-2">Platform layers</h2>
                <p>
                  Tiered entries keep each title close to its description while
                  retaining the divided-list rhythm.
                </p>
              </div>

              <ol class="ow-list-divided">
                {#each tieredItems as item (item.id)}
                  <li
                    class="ow-list-item grid gap-3 md:grid-cols-[minmax(0,12rem)_1fr]"
                  >
                    <h3 class="ow-heading-5">{item.title}</h3>
                    <p>{item.copy}</p>
                  </li>
                {/each}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
