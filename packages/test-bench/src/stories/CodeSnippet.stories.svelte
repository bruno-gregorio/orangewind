<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { darkMode } from '../lib/actions'

  const { Story } = defineMeta({
    title: 'Components/Code Snippet',
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
  type SelectOption = {
    id: string
    label: string
  }

  const sectionTitleClass =
    'text-sm font-semibold uppercase tracking-wider opacity-50'
  const demoContainerClass = 'ow-card mb-0 grid gap-6'
  const installCommand = 'sudo snap install thunderbird --channel=latest/stable'
  const commandOutput = `snap    2.60.4
snapd   2.60.4
series  16
ubuntu  24.04
kernel  6.8.0-52-generic`
  const longCommand =
    'microk8s kubectl create secret generic image-pull-secret --from-file=.dockerconfigjson=/home/ubuntu/.docker/config.json --type=kubernetes.io/dockerconfigjson --namespace production'

  const trackOptions: SelectOption[] = [
    {
      id: 'latest',
      label: 'latest'
    },
    {
      id: 'esr',
      label: 'esr'
    },
    {
      id: 'monthly',
      label: 'monthly'
    }
  ]

  const channelOptions: SelectOption[] = [
    {
      id: 'stable',
      label: 'stable'
    },
    {
      id: 'candidate',
      label: 'candidate'
    },
    {
      id: 'beta',
      label: 'beta'
    }
  ]

  let inlineTrackId = $state(trackOptions[0].id)
  let inlineChannelId = $state(channelOptions[0].id)
  let stackedTrackId = $state(trackOptions[1].id)
  let stackedChannelId = $state(channelOptions[1].id)
  let copied = $state(false)
  const inlineDropdownCommand = $derived(
    `sudo snap install thunderbird --channel=${inlineTrackId}/${inlineChannelId}`
  )
  const stackedDropdownCommand = $derived(
    `sudo snap install thunderbird --channel=${stackedTrackId}/${stackedChannelId}`
  )

  async function copyInstallCommand() {
    if (globalThis.navigator?.clipboard !== undefined) {
      await globalThis.navigator.clipboard.writeText(installCommand)
    }

    copied = true
    globalThis.setTimeout(() => {
      copied = false
    }, 1500)
  }
</script>

<Story
  name="Code Snippet"
  args={{
    dark: false,
    baselineGrid: false
  }}
>
  {#snippet template(args)}
    <div
      use:darkMode={args?.dark ?? false}
      class={[
        'min-h-screen space-y-14 p-10',
        args?.dark && 'bg-[#111] text-[#fff]',
        args?.baselineGrid && 'ow-baseline-grid'
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <section class="space-y-4">
        <p class={sectionTitleClass}>Inline code</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <p>
            Install Orangewind with <code>bun add orangewind</code>, then press
            <kbd>Enter</kbd> to continue.
          </p>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Default with copy</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <div class="ow-code-snippet">
            <div class="ow-code-snippet-header">
              <h5 class="ow-code-snippet-title">
                Install Thunderbird as a snap
              </h5>

              <div class="ow-code-snippet-actions">
                <button
                  type="button"
                  class="ow-code-snippet-copy ow-btn-base is-small"
                  onclick={copyInstallCommand}
                  aria-live="polite"
                >
                  <i class="ow-icon-copy-to-clipboard" aria-hidden="true"></i>
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <pre class="ow-code-snippet-block-icon"><code>{installCommand}</code
              ></pre>

            <div class="ow-code-snippet-header">
              <h5 class="ow-code-snippet-title">Output</h5>
            </div>

            <pre class="ow-code-snippet-block"><code>{commandOutput}</code
              ></pre>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Icon variants</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <div class="grid gap-4">
            <div class="ow-code-snippet">
              <pre class="ow-code-snippet-block-icon"><code>snap --version</code
                ></pre>
            </div>

            <div class="ow-code-snippet">
              <pre class="ow-code-snippet-block-icon is-windows-prompt"><code
                  >multipass version</code
                ></pre>
            </div>

            <div class="ow-code-snippet">
              <pre class="ow-code-snippet-block-icon is-url"><code
                  >https://ubuntu.com/server/docs</code
                ></pre>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Numbered</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <div class="ow-code-snippet">
            <pre class="ow-code-snippet-block-numbered"><code
                ><span class="ow-code-snippet-line">#!/bin/bash</span>
<span class="ow-code-snippet-line">set -eu</span>
<span class="ow-code-snippet-line">snap refresh --hold=24h</span>
<span class="ow-code-snippet-line"></span>
<span class="ow-code-snippet-line">if snap changes | grep -q "Done"; then</span>
<span class="ow-code-snippet-line">  echo "All snap changes completed"</span>
<span class="ow-code-snippet-line">fi</span></code
              ></pre>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Dropdowns and wrapping</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <div class="ow-code-snippet">
            <div class="ow-code-snippet-header">
              <h5 class="ow-code-snippet-title">
                Installing Thunderbird as a snap
              </h5>

              <div class="ow-code-snippet-dropdowns">
                <select
                  class="ow-code-snippet-dropdown"
                  aria-label="Track"
                  bind:value={inlineTrackId}
                >
                  {#each trackOptions as option (option.id)}
                    <option value={option.id}>{option.label}</option>
                  {/each}
                </select>

                <select
                  class="ow-code-snippet-dropdown"
                  aria-label="Channel"
                  bind:value={inlineChannelId}
                >
                  {#each channelOptions as option (option.id)}
                    <option value={option.id}>{option.label}</option>
                  {/each}
                </select>
              </div>
            </div>

            <pre class="ow-code-snippet-block-icon"><code
                >{inlineDropdownCommand}</code
              ></pre>
          </div>

          <div class="ow-code-snippet">
            <div class="ow-code-snippet-header is-stacked">
              <h5 class="ow-code-snippet-title">
                Installing Thunderbird as a snap on different tracks via the
                command line
              </h5>

              <div class="ow-code-snippet-dropdowns">
                <select
                  class="ow-code-snippet-dropdown"
                  aria-label="Stacked track"
                  bind:value={stackedTrackId}
                >
                  {#each trackOptions as option (option.id)}
                    <option value={option.id}>{option.label}</option>
                  {/each}
                </select>

                <select
                  class="ow-code-snippet-dropdown"
                  aria-label="Stacked channel"
                  bind:value={stackedChannelId}
                >
                  {#each channelOptions as option (option.id)}
                    <option value={option.id}>{option.label}</option>
                  {/each}
                </select>
              </div>
            </div>

            <pre class="ow-code-snippet-block-icon"><code
                >{stackedDropdownCommand}</code
              ></pre>
          </div>

          <div class="ow-code-snippet">
            <pre class="ow-code-snippet-block is-wrapped"><code
                >{longCommand}</code
              ></pre>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Syntax highlighting</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <div class="ow-code-snippet">
            <div class="ow-code-snippet-header">
              <h5 class="ow-code-snippet-title">Manual Prism tokens</h5>
            </div>

            <pre class="ow-code-snippet-block language-css"><code
                ><span class="token selector">.ow-code-snippet</span> <span
                  class="token punctuation">&#123;</span
                >
  <span class="token property">display</span><span class="token punctuation"
                  >:</span
                > <span class="token keyword">grid</span><span
                  class="token punctuation">;</span
                >
  <span class="token property">gap</span><span class="token punctuation">:</span
                > <span class="token number">1rem</span><span
                  class="token punctuation">;</span
                >
  <span class="token comment">/* Prism-compatible token classes */</span>
<span class="token punctuation">&#125;</span></code
              ></pre>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <p class={sectionTitleClass}>Bordered</p>

        <div class={[demoContainerClass, 'max-w-4xl'].join(' ')}>
          <div class="ow-code-snippet is-bordered">
            <div class="ow-code-snippet-header">
              <h5 class="ow-code-snippet-title">Rendered result</h5>
            </div>

            <pre class="ow-code-snippet-block"><code
                >&lt;button class="ow-btn-positive"&gt;Launch&lt;/button&gt;</code
              ></pre>

            <div class="grid gap-3 bg-white p-4 dark:bg-[#111]">
              <button type="button" class="ow-btn-positive">Launch</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  {/snippet}
</Story>
