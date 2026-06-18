<script lang="ts">
  // Syntax-highlighted code block. Tokenises with Prism (the same highlighter
  // the original Vanilla docs used); the resulting `.token` spans are themed by
  // Orangewind's syntax-highlighting.css, so colours follow light/dark mode.
  //
  // Highlighting runs during prerender, so the static HTML ships already
  // highlighted — no flash, and it works before hydration.
  import Prism from 'prismjs'
  import 'prismjs/components/prism-bash'
  import 'prismjs/components/prism-json'

  type Props = {
    /** Source to highlight. */
    code: string
    /** Prism language id. Defaults to HTML/markup. */
    lang?: string
  }

  const { code, lang = 'markup' }: Props = $props()

  const html = $derived(
    Prism.highlight(code, Prism.languages[lang] ?? Prism.languages.markup, lang)
  )
</script>

<pre class="ow-code-snippet-block"><code class="language-{lang}"
    >{@html html}</code
  ></pre>
