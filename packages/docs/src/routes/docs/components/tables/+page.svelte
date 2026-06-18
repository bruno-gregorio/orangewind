<script lang="ts">
  import Example from '$lib/components/Example.svelte'
</script>

<!-- Mandatory headline demonstration. -->
<div
  class="grid gap-3 overflow-x-auto rounded border border-ow-surface-border p-8"
>
  <table class="mb-0" aria-label="Machine inventory">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Owner</th>
        <th class="text-right">Cores</th>
        <th class="text-right">RAM</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">compute-01</th>
        <td><span class="ow-status-label-positive">Ready</span></td>
        <td>platform</td>
        <td class="text-right">4</td>
        <td class="text-right">2 GiB</td>
      </tr>
      <tr>
        <th scope="row">api-07</th>
        <td><span class="ow-status-label-negative">Failed</span></td>
        <td>admin</td>
        <td class="text-right">8</td>
        <td class="text-right">16 GiB</td>
      </tr>
    </tbody>
  </table>
</div>

<p>
  Tables are styled at the element level, so a plain <code>&lt;table&gt;</code>
  with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> already looks
  right. Tailwind's <code>text-right</code> aligns numeric columns. Modifier classes
  turn a table into a sortable, responsive or expanding variant.
</p>

<h2 id="default" class="ow-heading-2">Default</h2>
<p>
  Use a row-scoped <code>&lt;th&gt;</code> for the first cell of each row, and
  <code>text-right</code> on numeric headers and cells.
</p>
<Example
  block
  code={`<table aria-label="Machine inventory">
  <thead>
    <tr>
      <th>Name</th>
      <th>Owner</th>
      <th class="text-right">Cores</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">compute-01</th>
      <td>platform</td>
      <td class="text-right">4</td>
    </tr>
  </tbody>
</table>`}
>
  <table class="mb-0" aria-label="Machine inventory">
    <thead>
      <tr>
        <th>Name</th>
        <th>Owner</th>
        <th class="text-right">Cores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">compute-01</th>
        <td>platform</td>
        <td class="text-right">4</td>
      </tr>
    </tbody>
  </table>
</Example>

<h2 id="icon-cells" class="ow-heading-2">Icon cells</h2>
<p>
  Add <code>ow-table-cell-icon-placeholder</code> to a header and its cells to reserve
  space for a leading icon, keeping text aligned whether or not an icon is present.
</p>
<Example
  block
  code={`<table aria-label="Commissioning results">
  <thead>
    <tr>
      <th>Name</th>
      <th class="ow-table-cell-icon-placeholder">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">compute-01</th>
      <td class="ow-table-cell-icon-placeholder">
        <i class="ow-icon-success" aria-hidden="true"></i>
        Released
      </td>
    </tr>
  </tbody>
</table>`}
>
  <table class="mb-0" aria-label="Commissioning results">
    <thead>
      <tr>
        <th>Name</th>
        <th class="ow-table-cell-icon-placeholder">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">compute-01</th>
        <td class="ow-table-cell-icon-placeholder">
          <i class="ow-icon-success" aria-hidden="true"></i>
          Released
        </td>
      </tr>
    </tbody>
  </table>
</Example>

<h2 id="sortable" class="ow-heading-2">Sortable</h2>
<p>
  Give a header an <code>aria-sort</code> attribute (<code>ascending</code>,
  <code>descending</code>
  or <code>none</code>) to show a sort indicator, and wrap its label in an
  <code>ow-table-sort-button</code> for keyboard control. Your script updates
  <code>aria-sort</code> and reorders the rows.
</p>
<Example
  block
  code={`<table aria-label="Sortable resources">
  <thead>
    <tr>
      <th aria-sort="ascending">
        <button class="ow-table-sort-button" type="button">Status</button>
      </th>
      <th class="text-right" aria-sort="none">
        <button class="ow-table-sort-button" type="button">Cores</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td role="rowheader">Allocated</td>
      <td class="text-right">6</td>
    </tr>
    <tr>
      <td role="rowheader">Ready</td>
      <td class="text-right">4</td>
    </tr>
  </tbody>
</table>`}
>
  <table class="mb-0" aria-label="Sortable resources">
    <thead>
      <tr>
        <th aria-sort="ascending">
          <button class="ow-table-sort-button" type="button">Status</button>
        </th>
        <th class="text-right" aria-sort="none">
          <button class="ow-table-sort-button" type="button">Cores</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td role="rowheader">Allocated</td>
        <td class="text-right">6</td>
      </tr>
      <tr>
        <td role="rowheader">Ready</td>
        <td class="text-right">4</td>
      </tr>
    </tbody>
  </table>
</Example>

<h2 id="mobile-card" class="ow-heading-2">Responsive (mobile card)</h2>
<p>
  <code>ow-table-mobile-card</code> collapses each row into a card on narrow
  screens. Add a <code>data-heading</code> to every cell so its column label
  appears above the value, and <code>ow-has-overflow</code> to any cell whose content
  (such as a button) must not be clipped.
</p>
<Example
  block
  code={`<table class="ow-table-mobile-card" aria-label="Responsive machines">
  <thead>
    <tr>
      <th>FQDN</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-heading="FQDN">compute-01.maas.example</td>
      <td data-heading="Status">
        <span class="ow-status-label-positive">Ready</span>
      </td>
      <td class="ow-has-overflow" data-heading="Actions">
        <button class="ow-btn ow-is-small" type="button">Deploy</button>
      </td>
    </tr>
  </tbody>
</table>`}
>
  <table class="ow-table-mobile-card mb-0" aria-label="Responsive machines">
    <thead>
      <tr>
        <th>FQDN</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-heading="FQDN">compute-01.maas.example</td>
        <td data-heading="Status">
          <span class="ow-status-label-positive">Ready</span>
        </td>
        <td class="ow-has-overflow" data-heading="Actions">
          <button class="ow-btn ow-is-small" type="button">Deploy</button>
        </td>
      </tr>
    </tbody>
  </table>
</Example>

<h2 id="expanding" class="ow-heading-2">Expanding</h2>
<p>
  <code>ow-table-expanding</code> lets a row reveal an extra panel. Put the
  detail in a final cell with <code>ow-table-expanding-panel</code> and toggle
  its <code>aria-hidden</code> from a button that controls it.
</p>
<Example
  block
  code={`<table class="ow-table-expanding" aria-label="Expandable machines">
  <thead>
    <tr>
      <th>Name</th>
      <th>IP</th>
      <th class="text-right">Actions</th>
      <th aria-hidden="true"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-label="Name">compute-01.maas.example</td>
      <td aria-label="IP">10.249.0.11</td>
      <td class="text-right">
        <button
          class="ow-btn ow-is-dense"
          type="button"
          aria-controls="compute-01-panel"
          aria-expanded="true"
        >
          Hide
        </button>
      </td>
      <td
        id="compute-01-panel"
        class="ow-table-expanding-panel"
        aria-hidden="false"
      >
        <div class="grid gap-3 py-2 md:grid-cols-2">
          <p class="mb-0">Zone: london</p>
          <p class="mb-0">Owner: platform</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>`}
>
  <table class="ow-table-expanding mb-0" aria-label="Expandable machines">
    <thead>
      <tr>
        <th>Name</th>
        <th>IP</th>
        <th class="text-right">Actions</th>
        <th aria-hidden="true"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td aria-label="Name">compute-01.maas.example</td>
        <td aria-label="IP">10.249.0.11</td>
        <td class="text-right">
          <button
            class="ow-btn ow-is-dense"
            type="button"
            aria-controls="compute-01-panel"
            aria-expanded="true"
          >
            Hide
          </button>
        </td>
        <td
          id="compute-01-panel"
          class="ow-table-expanding-panel"
          aria-hidden="false"
        >
          <div class="grid gap-3 py-2 md:grid-cols-2">
            <p class="mb-0">Zone: london</p>
            <p class="mb-0">Owner: platform</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</Example>
