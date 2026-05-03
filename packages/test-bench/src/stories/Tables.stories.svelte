<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Tables',
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

  type MachineRow = {
    cores: number
    disks: number
    fqdn: string
    id: string
    ip: string
    lastSeen: string
    mac: string
    owner: string
    power: 'Off' | 'On'
    rack: string
    ram: string
    ramGiB: number
    result: string
    resultIcon: 'error' | 'success' | 'warning'
    status: string
    statusTone: StatusTone
    storage: string
    storageGb: number
    zone: string
  }

  type SortDirection = 'ascending' | 'descending' | 'none'
  type SortKey = 'cores' | 'disks' | 'ramGiB' | 'status'
  type StatusTone = 'caution' | 'information' | 'negative' | 'positive'
  type StoryArgs = {
    baselineGrid?: boolean
    dark?: boolean
  }

  type SortColumn = {
    align?: 'right'
    key: SortKey
    label: string
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass = 'ow-card mb-0 grid gap-6'
  const statusLabelClasses: Record<StatusTone, string> = {
    caution: 'ow-status-label-caution',
    information: 'ow-status-label-information',
    negative: 'ow-status-label-negative',
    positive: 'ow-status-label-positive'
  }

  const sortableColumns: SortColumn[] = [
    {
      key: 'status',
      label: 'Status'
    },
    {
      align: 'right',
      key: 'cores',
      label: 'Cores'
    },
    {
      align: 'right',
      key: 'ramGiB',
      label: 'RAM'
    },
    {
      align: 'right',
      key: 'disks',
      label: 'Disks'
    }
  ]

  const machineRows: MachineRow[] = [
    {
      cores: 4,
      disks: 1,
      fqdn: 'compute-01.maas.example',
      id: 'compute-01',
      ip: '10.249.0.11',
      lastSeen: '3 minutes ago',
      mac: '2c:44:fd:80:3f:25',
      owner: 'platform',
      power: 'On',
      rack: 'rack-a',
      ram: '2 GiB',
      ramGiB: 2,
      result: 'Released',
      resultIcon: 'success',
      status: 'Ready',
      statusTone: 'positive',
      storage: '2 TB',
      storageGb: 2048,
      zone: 'london'
    },
    {
      cores: 6,
      disks: 1,
      fqdn: 'database-primary-with-a-long-name.maas.example',
      id: 'database-primary',
      ip: '10.249.0.21',
      lastSeen: '18 minutes ago',
      mac: '52:54:00:3a:fe:e9',
      owner: 'data',
      power: 'Off',
      rack: 'rack-b',
      ram: '4 GiB',
      ramGiB: 4,
      result: 'In progress',
      resultIcon: 'warning',
      status: 'Allocated',
      statusTone: 'information',
      storage: '500 GB',
      storageGb: 500,
      zone: 'london'
    },
    {
      cores: 8,
      disks: 3,
      fqdn: 'api-07.maas.example',
      id: 'api-07',
      ip: '10.249.0.43',
      lastSeen: '1 hour ago',
      mac: '52:54:00:74:c2:10',
      owner: 'admin',
      power: 'On',
      rack: 'rack-c',
      ram: '16 GiB',
      ramGiB: 16,
      result: 'Failed',
      resultIcon: 'error',
      status: 'Failed testing',
      statusTone: 'negative',
      storage: '6 TB',
      storageGb: 6144,
      zone: 'london'
    },
    {
      cores: 2,
      disks: 1,
      fqdn: 'edge-03.maas.example',
      id: 'edge-03',
      ip: '10.249.0.52',
      lastSeen: '2 hours ago',
      mac: '52:54:00:0f:2f:95',
      owner: 'unowned',
      power: 'Off',
      rack: 'rack-d',
      ram: '1 GiB',
      ramGiB: 1,
      result: 'Queued',
      resultIcon: 'warning',
      status: 'Commissioning',
      statusTone: 'caution',
      storage: '240 GB',
      storageGb: 240,
      zone: 'cardiff'
    }
  ]

  let sortKey = $state<SortKey>('status')
  let sortDirection = $state<SortDirection>('ascending')
  const expandedMachineIds = new SvelteSet<string>(['compute-01'])
  const sortedMachineRows = $derived(
    [...machineRows].sort((firstRow, secondRow) => {
      if (sortDirection === 'none') {
        return 0
      }

      const firstValue = getSortValue(firstRow, sortKey)
      const secondValue = getSortValue(secondRow, sortKey)
      const order = compareSortValues(firstValue, secondValue)

      return sortDirection === 'ascending' ? order : -order
    })
  )

  function compareSortValues(
    firstValue: number | string,
    secondValue: number | string
  ) {
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
      return firstValue - secondValue
    }

    return String(firstValue).localeCompare(String(secondValue))
  }

  function getDemoContainerClass(maxWidth = 'max-w-6xl') {
    return [demoContainerClass, maxWidth].join(' ')
  }

  function getHeaderSort(columnKey: SortKey): SortDirection {
    return sortKey === columnKey ? sortDirection : 'none'
  }

  function getResultIconClass(resultIcon: MachineRow['resultIcon']) {
    return {
      error: 'ow-icon-error',
      success: 'ow-icon-success',
      warning: 'ow-icon-warning'
    }[resultIcon]
  }

  function getSortHeaderClass(column: SortColumn) {
    return column.align === 'right' ? 'text-right' : undefined
  }

  function getSortValue(machine: MachineRow, key: SortKey) {
    return machine[key]
  }

  function getStatusLabelClass(tone: StatusTone) {
    return statusLabelClasses[tone]
  }

  function getStoryPageClass(args?: StoryArgs) {
    return [
      'min-h-screen space-y-14 p-10',
      args?.dark && 'bg-zinc-950 text-white',
      args?.baselineGrid && 'ow-baseline-grid'
    ]
      .filter(Boolean)
      .join(' ')
  }

  function isMachineExpanded(machineId: string) {
    return expandedMachineIds.has(machineId)
  }

  function sortBy(columnKey: SortKey) {
    if (sortKey !== columnKey) {
      sortKey = columnKey
      sortDirection = 'ascending'
      return
    }

    if (sortDirection === 'ascending') {
      sortDirection = 'descending'
      return
    }

    sortDirection = sortDirection === 'descending' ? 'none' : 'ascending'
  }

  function toggleMachine(machineId: string) {
    if (expandedMachineIds.has(machineId)) {
      expandedMachineIds.delete(machineId)
      return
    }

    expandedMachineIds.add(machineId)
  }
</script>

<Story
  name="Tables"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div use:darkMode={args?.dark ?? false} class={getStoryPageClass(args)}>
      <section class="space-y-4">
        <p class={sectionTitleClass}>Base and formatting</p>

        <div class={getDemoContainerClass('max-w-6xl overflow-x-auto')}>
          <table class="mb-0" aria-label="Machine inventory">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Owner</th>
                <th class="ow-table-cell-icon-placeholder">Result</th>
                <th class="text-right">Cores</th>
                <th class="text-right">RAM</th>
                <th class="text-right">Disks</th>
                <th class="text-right">Storage</th>
              </tr>
            </thead>
            <tbody>
              {#each machineRows as machine (machine.id)}
                <tr>
                  <th class="truncate" scope="row" title={machine.fqdn}>
                    {machine.fqdn}
                  </th>
                  <td>
                    <span class={getStatusLabelClass(machine.statusTone)}>
                      {machine.status}
                    </span>
                  </td>
                  <td>{machine.owner}</td>
                  <td class="ow-table-cell-icon-placeholder">
                    <i
                      class={getResultIconClass(machine.resultIcon)}
                      aria-hidden="true"
                    ></i>
                    {machine.result}
                  </td>
                  <td class="text-right">{machine.cores}</td>
                  <td class="text-right">{machine.ram}</td>
                  <td class="text-right">{machine.disks}</td>
                  <td class="text-right">{machine.storage}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Sortable</p>

        <div class={getDemoContainerClass('max-w-4xl overflow-x-auto')}>
          <table class="mb-0" aria-label="Sortable machine resources">
            <thead>
              <tr>
                {#each sortableColumns as column (column.key)}
                  <th
                    aria-sort={getHeaderSort(column.key)}
                    class={getSortHeaderClass(column)}
                  >
                    <button
                      class="ow-table-sort-button"
                      type="button"
                      onclick={() => sortBy(column.key)}
                    >
                      {column.label}
                    </button>
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each sortedMachineRows as machine (machine.id)}
                <tr>
                  <td role="rowheader">{machine.status}</td>
                  <td class="text-right">{machine.cores}</td>
                  <td class="text-right">{machine.ram}</td>
                  <td class="text-right">{machine.disks}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Mobile card</p>

        <div class={getDemoContainerClass('max-w-6xl')}>
          <table
            class="ow-table-mobile-card mb-0"
            aria-label="Responsive machine table"
          >
            <thead>
              <tr>
                <th>FQDN</th>
                <th>Power</th>
                <th>Status</th>
                <th>Owner</th>
                <th>Zone</th>
                <th class="text-right">Cores</th>
                <th class="text-right">RAM</th>
                <th class="text-right">Disks</th>
                <th class="text-right">Storage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {#each machineRows as machine (machine.id)}
                <tr>
                  <td data-heading="FQDN">{machine.fqdn}</td>
                  <td data-heading="Power">{machine.power}</td>
                  <td data-heading="Status">
                    <span class={getStatusLabelClass(machine.statusTone)}>
                      {machine.status}
                    </span>
                  </td>
                  <td data-heading="Owner">{machine.owner}</td>
                  <td data-heading="Zone">{machine.zone}</td>
                  <td class="text-right" data-heading="Cores">
                    {machine.cores}
                  </td>
                  <td class="text-right" data-heading="RAM">{machine.ram}</td>
                  <td class="text-right" data-heading="Disks">
                    {machine.disks}
                  </td>
                  <td
                    class="text-right"
                    data-heading="Storage long enough to truncate"
                  >
                    {machine.storage}
                  </td>
                  <td class="has-overflow" data-heading="Actions">
                    <button class="ow-btn is-small" type="button">
                      Deploy
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Expanding</p>

        <div class={getDemoContainerClass('max-w-6xl overflow-x-auto')}>
          <table
            class="ow-table-expanding mb-0"
            aria-label="Expandable machine table"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Mac address</th>
                <th>IP</th>
                <th>Rack</th>
                <th>Last seen</th>
                <th class="text-right">Actions</th>
                <th aria-hidden="true"></th>
              </tr>
            </thead>
            <tbody>
              {#each machineRows.slice(0, 3) as machine (machine.id)}
                <tr>
                  <td aria-label="Name">{machine.fqdn}</td>
                  <td aria-label="Mac address">{machine.mac}</td>
                  <td aria-label="IP">{machine.ip}</td>
                  <td aria-label="Rack">{machine.rack}</td>
                  <td aria-label="Last seen">{machine.lastSeen}</td>
                  <td class="text-right">
                    <button
                      class="ow-btn is-dense"
                      type="button"
                      aria-controls={`${machine.id}-panel`}
                      aria-expanded={isMachineExpanded(machine.id)}
                      onclick={() => toggleMachine(machine.id)}
                    >
                      {isMachineExpanded(machine.id) ? 'Hide' : 'Show'}
                    </button>
                  </td>
                  <td
                    id={`${machine.id}-panel`}
                    class="ow-table-expanding-panel"
                    aria-hidden={isMachineExpanded(machine.id)
                      ? 'false'
                      : 'true'}
                  >
                    <div class="grid gap-3 py-2 md:grid-cols-3">
                      <p class="mb-0">
                        <span class="block text-xs uppercase opacity-60">
                          Zone
                        </span>
                        {machine.zone}
                      </p>
                      <p class="mb-0">
                        <span class="block text-xs uppercase opacity-60">
                          Owner
                        </span>
                        {machine.owner}
                      </p>
                      <p class="mb-0">
                        <span class="block text-xs uppercase opacity-60">
                          Storage
                        </span>
                        {machine.storageGb} GB available
                      </p>
                    </div>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
