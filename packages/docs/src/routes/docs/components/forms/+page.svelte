<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration.
  let name = $state('')
  let plan = $state('monthly')
</script>

<!-- Mandatory headline demonstration — a small, real sign-up form. -->
<div class="grid gap-3 rounded border border-ow-surface-border p-8">
  <form class="ow-form ow-form-stacked max-w-md">
    <label for="hero-name" class="ow-is-required">Full name</label>
    <input
      type="text"
      id="hero-name"
      placeholder="Ada Lovelace"
      bind:value={name}
    />
    <p class="ow-form-help-text">
      We only use this to personalise your account.
    </p>

    <label for="hero-email" class="ow-is-required">Email address</label>
    <input type="email" id="hero-email" placeholder="ada@example.com" />

    <label for="hero-plan">Billing</label>
    <select id="hero-plan" bind:value={plan}>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>

    <button type="submit" class="ow-btn-positive">Create account</button>
  </form>
</div>

<p>
  Form controls collect input from the user. Style native
  <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code> and
  <code>&lt;select&gt;</code> elements by wrapping them in a
  <code>ow-form</code> container; checkboxes and radios use the dedicated
  <code>ow-checkbox</code> and <code>ow-radio</code> tick elements.
</p>

<h2 id="text-inputs" class="ow-heading-2">Text inputs</h2>
<p>
  Most text-like input types are styled automatically, including
  <code>text</code>, <code>email</code>, <code>password</code>,
  <code>search</code> and <code>date</code>. Pair each control with a
  <code>&lt;label&gt;</code> and use <code>ow-form-help-text</code> for supporting
  guidance.
</p>
<Example
  block
  code={`<div class="ow-form ow-form-stacked">
  <label for="text">Text input</label>
  <input type="text" id="text" placeholder="Enter text..." />
  <p class="ow-form-help-text">Please enter your full name.</p>
</div>`}
>
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="text">Text input</label>
    <input type="text" id="text" placeholder="Enter text..." />
    <p class="ow-form-help-text">Please enter your full name.</p>
  </div>
</Example>

<h2 id="textarea" class="ow-heading-2">Textarea</h2>
<p>Use a textarea for multi-line free text such as comments or descriptions.</p>
<Example
  block
  code={`<div class="ow-form ow-form-stacked">
  <label for="textarea">Textarea</label>
  <textarea id="textarea" placeholder="Enter multi-line text..."></textarea>
</div>`}
>
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="textarea">Textarea</label>
    <textarea id="textarea" placeholder="Enter multi-line text..."></textarea>
  </div>
</Example>

<h2 id="select" class="ow-heading-2">Select</h2>
<p>
  A select presents a list of mutually exclusive options. Add the
  <code>multiple</code> attribute to allow several selections at once.
</p>
<Example
  block
  code={`<div class="ow-form ow-form-stacked">
  <label for="select">Dropdown select</label>
  <select id="select">
    <option value="">Choose an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>`}
>
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="select">Dropdown select</label>
    <select id="select">
      <option value="">Choose an option...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
</Example>

<h2 id="checkboxes" class="ow-heading-2">Checkboxes</h2>
<p>
  Wrap each checkbox in <code>ow-checkbox</code>, apply
  <code>ow-checkbox-input</code> to the input and
  <code>ow-checkbox-label</code> to its label. Add
  <code>ow-checkbox-inline</code>
  to lay several out in a row.
</p>
<Example
  block
  code={`<div class="ow-form">
  <div class="ow-checkbox">
    <input type="checkbox" id="check-1" class="ow-checkbox-input" />
    <label for="check-1" class="ow-checkbox-label">Checkbox 1</label>
  </div>
  <div class="ow-checkbox">
    <input type="checkbox" id="check-2" class="ow-checkbox-input" checked />
    <label for="check-2" class="ow-checkbox-label">Checkbox 2 (checked)</label>
  </div>
  <div class="ow-checkbox">
    <input type="checkbox" id="check-3" class="ow-checkbox-input" disabled />
    <label for="check-3" class="ow-checkbox-label">Checkbox disabled</label>
  </div>
</div>`}
>
  <div class="ow-form w-full max-w-md">
    <div class="ow-checkbox">
      <input type="checkbox" id="check-1" class="ow-checkbox-input" />
      <label for="check-1" class="ow-checkbox-label">Checkbox 1</label>
    </div>
    <div class="ow-checkbox">
      <input type="checkbox" id="check-2" class="ow-checkbox-input" checked />
      <label for="check-2" class="ow-checkbox-label">Checkbox 2 (checked)</label
      >
    </div>
    <div class="ow-checkbox">
      <input type="checkbox" id="check-3" class="ow-checkbox-input" disabled />
      <label for="check-3" class="ow-checkbox-label">Checkbox disabled</label>
    </div>
  </div>
</Example>

<h2 id="radios" class="ow-heading-2">Radio buttons</h2>
<p>
  Radio buttons share the same structure as checkboxes using
  <code>ow-radio</code>, <code>ow-radio-input</code> and
  <code>ow-radio-label</code>. Group them with a common <code>name</code> so only
  one can be selected.
</p>
<Example
  block
  code={`<div class="ow-form">
  <div class="ow-radio">
    <input type="radio" name="plan" id="rad-1" class="ow-radio-input" />
    <label for="rad-1" class="ow-radio-label">Radio option A</label>
  </div>
  <div class="ow-radio">
    <input type="radio" name="plan" id="rad-2" class="ow-radio-input" checked />
    <label for="rad-2" class="ow-radio-label">Radio option B</label>
  </div>
</div>`}
>
  <div class="ow-form w-full max-w-md">
    <div class="ow-radio">
      <input type="radio" name="plan" id="rad-1" class="ow-radio-input" />
      <label for="rad-1" class="ow-radio-label">Radio option A</label>
    </div>
    <div class="ow-radio">
      <input
        type="radio"
        name="plan"
        id="rad-2"
        class="ow-radio-input"
        checked
      />
      <label for="rad-2" class="ow-radio-label">Radio option B</label>
    </div>
  </div>
</Example>

<h2 id="validation" class="ow-heading-2">Validation states</h2>
<p>
  Communicate the outcome of validation by adding <code>ow-input-error</code>,
  <code>ow-input-caution</code> or <code>ow-input-success</code> to the control,
  and pair it with an <code>ow-form-message</code> carrying the matching
  <code>ow-form-message-error</code>, <code>-caution</code> or
  <code>-success</code> modifier.
</p>
<Example
  block
  code={`<div class="ow-form ow-form-stacked">
  <label for="val-error">Error state</label>
  <input type="text" id="val-error" class="ow-input-error" value="Invalid data" />
  <span class="ow-form-message ow-form-message-error">This field is required and has an error.</span>

  <label for="val-success">Success state</label>
  <input type="text" id="val-success" class="ow-input-success" value="Looks perfect" />
  <span class="ow-form-message ow-form-message-success">The username is available!</span>
</div>`}
>
  <div class="ow-form ow-form-stacked w-full max-w-md">
    <label for="val-error">Error state</label>
    <input
      type="text"
      id="val-error"
      class="ow-input-error"
      value="Invalid data"
    />
    <span class="ow-form-message ow-form-message-error">
      This field is required and has an error.
    </span>

    <label for="val-success">Success state</label>
    <input
      type="text"
      id="val-success"
      class="ow-input-success"
      value="Looks perfect"
    />
    <span class="ow-form-message ow-form-message-success">
      The username is available!
    </span>
  </div>
</Example>

<h2 id="inline" class="ow-heading-2">Inline layout</h2>
<p>
  Use <code>ow-form-inline</code> to lay label/control pairs out horizontally,
  wrapping each pair in an <code>ow-form-group</code>. It suits compact filter
  bars and toolbars.
</p>
<Example
  block
  code={`<div class="ow-form ow-form-inline">
  <div class="ow-form-group">
    <label for="inline-search">Search query</label>
    <input type="search" id="inline-search" placeholder="E.g. Ubuntu" />
  </div>
  <button class="ow-btn-positive">Search</button>
</div>`}
>
  <div class="ow-form ow-form-inline">
    <div class="ow-form-group">
      <label for="inline-search">Search query</label>
      <input type="search" id="inline-search" placeholder="E.g. Ubuntu" />
    </div>
    <button class="ow-btn-positive">Search</button>
  </div>
</Example>
