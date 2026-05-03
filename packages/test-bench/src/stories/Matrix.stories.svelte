<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Matrix',
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
  type MatrixItem = {
    copy: string
    id: string
    image: string
    title: string
  }

  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass = 'ow-card mb-0 grid gap-6'

  const matrixItems: MatrixItem[] = [
    {
      copy: 'Commercial engineering and support for open source infrastructure, from planning through operations.',
      id: 'canonical',
      image: 'https://assets.ubuntu.com/v1/60d9b81e-picto-canonical.svg',
      title: 'Canonical'
    },
    {
      copy: 'A secure Linux platform for workstations, servers, devices and clouds, with predictable long term maintenance.',
      id: 'ubuntu',
      image: 'https://assets.ubuntu.com/v1/c4f35e06-products-hero-ubuntu.svg',
      title: 'Ubuntu'
    },
    {
      copy: 'Bare metal provisioning, IP address management and inventory for datacentres that need repeatable deployments.',
      id: 'maas',
      image: 'https://assets.ubuntu.com/v1/0de4fcd5-logo-maas-icon.svg',
      title: 'MAAS'
    },
    {
      copy: 'Systems management for Ubuntu estates, including updates, compliance reporting and lifecycle visibility.',
      id: 'landscape',
      image: 'https://assets.ubuntu.com/v1/3dee82a5-landscape-logo_smaller.svg',
      title: 'Landscape'
    },
    {
      copy: 'Model-driven operations for applications that need to move cleanly across machines, clouds and Kubernetes.',
      id: 'juju',
      image: 'https://assets.ubuntu.com/v1/6d382a53-image-juju-256.svg',
      title: 'Juju'
    },
    {
      copy: 'Fast system containers and virtual machines for dense local development, edge clusters and production hosting.',
      id: 'lxd',
      image: 'https://assets.ubuntu.com/v1/fffc8205-lxd-logo_smaller.svg',
      title: 'LXD'
    },
    {
      copy: 'Application packaging with automatic updates, confinement and a single distribution path across Linux systems.',
      id: 'snaps',
      image:
        'https://assets.ubuntu.com/v1/19c7461a-snapcraft-primary-icon--dark.svg',
      title: 'Snaps'
    },
    {
      copy: 'Private cloud infrastructure for teams that need strong automation, efficient operations and clear upgrade paths.',
      id: 'openstack',
      image: 'https://assets.ubuntu.com/v1/a7916513-picto-openstack.svg',
      title: 'OpenStack'
    },
    {
      copy: 'Kubernetes distributions and operations tooling for workloads that need consistency from developer laptops to production.',
      id: 'kubernetes',
      image: 'https://assets.ubuntu.com/v1/b81a45e4-kubernetes.svg',
      title: 'Kubernetes'
    }
  ]

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'grid min-h-screen p-10',
      args?.dark && 'bg-zinc-950 text-white',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function getDemoContainerClass(maxWidth = 'max-w-7xl') {
    return [demoContainerClass, maxWidth].join(' ')
  }

  function preventDefault(event: { preventDefault: () => void }) {
    event.preventDefault()
  }
</script>

<Story name="Matrix">
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <section class="grid gap-4">
        <p class={sectionTitleClass}>Matrix</p>

        <div class={getDemoContainerClass()}>
          <ul class="ow-matrix">
            {#each matrixItems as item (item.id)}
              <li class="ow-matrix-item">
                <img
                  class="ow-matrix-img"
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div class="ow-matrix-content">
                  <h3 class="ow-matrix-title">
                    <a
                      class="ow-matrix-link"
                      href={`#${item.id}`}
                      onclick={preventDefault}
                    >
                      {item.title}
                    </a>
                  </h3>
                  <div class="ow-matrix-desc">
                    <p>{item.copy}</p>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
