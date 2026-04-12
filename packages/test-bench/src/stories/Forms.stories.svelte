<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Forms',
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

<Story name="Forms">
  {#snippet template({ dark, baselineGrid })}
    <div
      use:darkMode={dark}
      class={[
        'p-10 space-y-12 max-w-4xl',
        dark && 'bg-[#111] text-white',
        baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section>
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4">
          Base Inputs
        </p>
        <div class="ow-form ow-form-stacked">
          <label for="input-text">Text Input</label>
          <input type="text" id="input-text" placeholder="Enter text..." />

          <label for="input-password" class="is-required">Password</label>
          <input type="password" id="input-password" placeholder="Enter password..." />

          <label for="input-search">Search</label>
          <input type="search" id="input-search" placeholder="Search..." />

          <label for="input-date">Date</label>
          <input type="date" id="input-date" />

          <label for="input-disabled">Disabled Input</label>
          <input type="text" id="input-disabled" disabled value="This is disabled" />

          <label for="input-readonly">Readonly Input</label>
          <input type="text" id="input-readonly" readonly value="This is readonly" />
        </div>
      </section>

      <section>
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4">
          Select and Textarea
        </p>
        <div class="ow-form ow-form-stacked">
          <label for="select-box">Dropdown Select</label>
          <select id="select-box">
            <option value="">Choose an option...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>

          <label for="textarea-box">Textarea</label>
          <textarea id="textarea-box" placeholder="Enter multi-line text..."></textarea>
        </div>
      </section>

      <section>
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4">
          Checkboxes & Radios
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="mb-2 font-medium">Stacked</h3>
            <div class="ow-form">
              <div class="ow-checkbox">
                <input type="checkbox" id="check-1" class="ow-checkbox-input" />
                <label for="check-1" class="ow-checkbox-label">Checkbox 1</label>
              </div>
              <div class="ow-checkbox">
                <input type="checkbox" id="check-2" class="ow-checkbox-input" checked />
                <label for="check-2" class="ow-checkbox-label">Checkbox 2 (Checked)</label>
              </div>
              <div class="ow-checkbox">
                <input type="checkbox" id="check-3" class="ow-checkbox-input" disabled />
                <label for="check-3" class="ow-checkbox-label">Checkbox Disabled</label>
              </div>
            </div>
            
            <div class="ow-form mt-4">
              <div class="ow-radio">
                <input type="radio" name="radio-stacked" id="rad-1" class="ow-radio-input" />
                <label for="rad-1" class="ow-radio-label">Radio Option A</label>
              </div>
              <div class="ow-radio">
                <input type="radio" name="radio-stacked" id="rad-2" class="ow-radio-input" checked />
                <label for="rad-2" class="ow-radio-label">Radio Option B</label>
              </div>
            </div>
          </div>

          <div>
            <h3 class="mb-2 font-medium">Inline</h3>
            <div class="ow-form">
              <div class="ow-checkbox ow-checkbox-inline">
                <input type="checkbox" id="check-inline-1" class="ow-checkbox-input" />
                <label for="check-inline-1" class="ow-checkbox-label is-required">Inline 1</label>
              </div>
              <div class="ow-checkbox ow-checkbox-inline">
                <input type="checkbox" id="check-inline-2" class="ow-checkbox-input" />
                <label for="check-inline-2" class="ow-checkbox-label">Inline 2</label>
              </div>
            </div>
            
            <div class="ow-form mt-4">
              <div class="ow-radio ow-radio-inline">
                <input type="radio" name="radio-inline" id="rad-inline-1" class="ow-radio-input" />
                <label for="rad-inline-1" class="ow-radio-label is-required">Inline A</label>
              </div>
              <div class="ow-radio ow-radio-inline">
                <input type="radio" name="radio-inline" id="rad-inline-2" class="ow-radio-input" />
                <label for="rad-inline-2" class="ow-radio-label">Inline B</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4">
          Validation Forms
        </p>
        <div class="ow-form ow-form-stacked">
          <label for="val-error">Error State</label>
          <input type="text" id="val-error" class="ow-input-error" value="Invalid data" />
          <span class="ow-form-message ow-form-message-error">This field is required and has an error.</span>

          <label for="val-caution">Caution State</label>
          <input type="text" id="val-caution" class="ow-input-caution" value="Maybe not optimal?" />
          <span class="ow-form-message ow-form-message-caution">This value is not recommended.</span>

          <label for="val-success">Success State</label>
          <input type="text" id="val-success" class="ow-input-success" value="Looks perfect" />
          <span class="ow-form-message ow-form-message-success">The username is available!</span>
        </div>
      </section>

      <section>
        <p class="text-sm font-semibold uppercase tracking-wider opacity-50 mb-4">
          Inline Form Layout
        </p>
        <div class="ow-form ow-form-inline">
          <div class="ow-form-group">
            <label for="inline-search">Search query</label>
            <input type="search" id="inline-search" placeholder="E.g. Ubuntu" style="width: auto" />
          </div>
          <div class="ow-form-group">
            <label for="inline-category">Category</label>
            <select id="inline-category">
              <option>All Categories</option>
              <option>Desktop</option>
              <option>Server</option>
            </select>
          </div>
          <button class="ow-btn ow-btn-positive">Search</button>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
