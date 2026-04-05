<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Rule (Divider)'
  })
</script>

<Story name="Standard Rule">
  <div class="p-10 max-w-2xl">
    <h3 class="mb-4 text-xl font-bold">Standard Rule</h3>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      The standard rule (<code>ow-rule</code>) is used to separate blocks of content vertically.
      It defaults to the standard border color defined by the theme.
    </p>

    <div class="space-y-4">
      <p>Section 1: Here is some introductory content.</p>
      <hr class="ow-rule" />
      <p>Section 2: Content that is structurally separate from section 1.</p>
    </div>
  </div>
</Story>

<Story name="Muted Rule">
  <div class="p-10 max-w-2xl bg-gray-50 dark:bg-gray-800 rounded-md">
    <h3 class="mb-4 text-xl font-bold">Muted Rule</h3>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      The muted rule (<code>ow-rule-muted</code>) uses a lower opacity. 
      It is ideal for subtly grouping elements where a harsh line might be too distracting.
    </p>

    <div class="space-y-4 w-64">
      <div class="flex justify-between"><span>Subtotal</span> $100.00</div>
      <hr class="ow-rule-muted" />
      <div class="flex justify-between"><span>Tax</span> $5.00</div>
      <hr class="ow-rule-muted" />
      <div class="flex justify-between font-bold"><span>Total</span> $105.00</div>
    </div>
  </div>
</Story>

<Story name="Highlight Rule">
  <div class="p-10 max-w-2xl">
    <h3 class="mb-4 text-xl font-bold">Highlight Rule</h3>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      The highlight rule (<code>ow-rule-highlight</code>) features a thicker colored bar sitting directly on top of the base line.
      It's often used to draw attention to significant section transitions or at the end of articles.
    </p>

    <div class="space-y-4">
      <p>This is the conclusion of an important document or article.</p>
      <hr class="ow-rule-highlight" />
      <p class="text-sm font-bold uppercase tracking-wider">About the Author</p>
      <p class="text-sm">This is the author's biography section below the highlight bar.</p>
    </div>
  </div>
</Story>

<Story name="Highlight Rule (Accent)">
  <div class="p-10 max-w-2xl">
    <h3 class="mb-4 text-xl font-bold">Accent Highlight Rule</h3>
    <p class="mb-8 text-gray-600 dark:text-gray-300">
      Combining the highlight rule with <code>is-accent</code> creates a colorful bar using the brand's accent color.
      It acts as a strong thematic divider within the page.
    </p>

    <div class="space-y-4">
      <h4 class="text-lg font-bold">Feature Spotlight</h4>
      <hr class="ow-rule-highlight is-accent" />
      <p>Here we feature something very special with a bright accent line above it.</p>
    </div>
  </div>
</Story>
