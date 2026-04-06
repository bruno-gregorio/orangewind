<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Icons',
    argTypes: {
      darkMode: {
        control: 'boolean',
        description: 'Toggle dark/light mode'
      },
      colorNegative: {
        control: 'color',
        description: 'Negative (error) color'
      },
      colorCaution: {
        control: 'color',
        description: 'Caution (warning) color'
      },
      colorPositive: {
        control: 'color',
        description: 'Positive (success) color'
      },
      colorInformation: {
        control: 'color',
        description: 'Information color'
      }
    }
  })
</script>

{#snippet iconGrid()}
  <div class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-add-canvas w-8 h-8">add-canvas</i>
      <span class="text-xs">add-canvas</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-add-logical-volume w-8 h-8">add-logical-volume</i>
      <span class="text-xs">add-logical-volume</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-add-partition w-8 h-8">add-partition</i>
      <span class="text-xs">add-partition</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-anchor w-8 h-8">anchor</i>
      <span class="text-xs">anchor</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-applications w-8 h-8">applications</i>
      <span class="text-xs">applications</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-archive w-8 h-8">archive</i>
      <span class="text-xs">archive</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-bottom-left w-8 h-8">arrow-bottom-left</i>
      <span class="text-xs">arrow-bottom-left</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-bottom-right w-8 h-8">arrow-bottom-right</i>
      <span class="text-xs">arrow-bottom-right</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-down w-8 h-8">arrow-down</i>
      <span class="text-xs">arrow-down</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-left w-8 h-8">arrow-left</i>
      <span class="text-xs">arrow-left</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-right w-8 h-8">arrow-right</i>
      <span class="text-xs">arrow-right</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-top-left w-8 h-8">arrow-top-left</i>
      <span class="text-xs">arrow-top-left</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-top-right w-8 h-8">arrow-top-right</i>
      <span class="text-xs">arrow-top-right</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-arrow-up w-8 h-8">arrow-up</i>
      <span class="text-xs">arrow-up</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-back-to-top w-8 h-8">back-to-top</i>
      <span class="text-xs">back-to-top</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-begin-downloading w-8 h-8">begin-downloading</i>
      <span class="text-xs">begin-downloading</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-blueprint w-8 h-8">blueprint</i>
      <span class="text-xs">blueprint</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-book w-8 h-8">book</i>
      <span class="text-xs">book</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-bundle w-8 h-8">bundle</i>
      <span class="text-xs">bundle</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-canvas w-8 h-8">canvas</i>
      <span class="text-xs">canvas</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-certificate w-8 h-8">certificate</i>
      <span class="text-xs">certificate</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-certification w-8 h-8">certification</i>
      <span class="text-xs">certification</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-change-version w-8 h-8">change-version</i>
      <span class="text-xs">change-version</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-chevron-down w-8 h-8">chevron-down</i>
      <span class="text-xs">chevron-down</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-chevron-left w-8 h-8">chevron-left</i>
      <span class="text-xs">chevron-left</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-chevron-right w-8 h-8">chevron-right</i>
      <span class="text-xs">chevron-right</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-chevron-up w-8 h-8">chevron-up</i>
      <span class="text-xs">chevron-up</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-circle-of-friends w-8 h-8">circle-of-friends</i>
      <span class="text-xs">circle-of-friends</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-close w-8 h-8">close</i>
      <span class="text-xs">close</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-cluster-host w-8 h-8">cluster-host</i>
      <span class="text-xs">cluster-host</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-code w-8 h-8">code</i>
      <span class="text-xs">code</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-collapse w-8 h-8">collapse</i>
      <span class="text-xs">collapse</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-comments w-8 h-8">comments</i>
      <span class="text-xs">comments</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-conflict w-8 h-8">conflict</i>
      <span class="text-xs">conflict</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-conflict-grey w-8 h-8">conflict-grey</i>
      <span class="text-xs">conflict-grey</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-conflict-resolution w-8 h-8">conflict-resolution</i>
      <span class="text-xs">conflict-resolution</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-conflict-resolution-grey w-8 h-8">conflict-resolution-grey</i>
      <span class="text-xs">conflict-resolution-grey</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-connected w-8 h-8">connected</i>
      <span class="text-xs">connected</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-contact w-8 h-8">contact</i>
      <span class="text-xs">contact</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-containers w-8 h-8">containers</i>
      <span class="text-xs">containers</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-contextual-menu w-8 h-8">contextual-menu</i>
      <span class="text-xs">contextual-menu</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-controllers w-8 h-8">controllers</i>
      <span class="text-xs">controllers</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-copy w-8 h-8">copy</i>
      <span class="text-xs">copy</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-copy-to-clipboard w-8 h-8">copy-to-clipboard</i>
      <span class="text-xs">copy-to-clipboard</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-credit-card w-8 h-8">credit-card</i>
      <span class="text-xs">credit-card</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-cursor w-8 h-8">cursor</i>
      <span class="text-xs">cursor</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-delete w-8 h-8">delete</i>
      <span class="text-xs">delete</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-desktop w-8 h-8">desktop</i>
      <span class="text-xs">desktop</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-disconnect w-8 h-8">disconnect</i>
      <span class="text-xs">disconnect</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-drag w-8 h-8">drag</i>
      <span class="text-xs">drag</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-edit w-8 h-8">edit</i>
      <span class="text-xs">edit</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-email w-8 h-8">email</i>
      <span class="text-xs">email</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-error w-8 h-8">error</i>
      <span class="text-xs">error</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-error-grey w-8 h-8">error-grey</i>
      <span class="text-xs">error-grey</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-expand w-8 h-8">expand</i>
      <span class="text-xs">expand</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-export w-8 h-8">export</i>
      <span class="text-xs">export</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-exposed w-8 h-8">exposed</i>
      <span class="text-xs">exposed</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-external-link w-8 h-8">external-link</i>
      <span class="text-xs">external-link</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-facebook w-8 h-8">facebook</i>
      <span class="text-xs">facebook</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-file w-8 h-8">file</i>
      <span class="text-xs">file</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-file-blank w-8 h-8">file-blank</i>
      <span class="text-xs">file-blank</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-filter w-8 h-8">filter</i>
      <span class="text-xs">filter</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-folder w-8 h-8">folder</i>
      <span class="text-xs">folder</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-fork w-8 h-8">fork</i>
      <span class="text-xs">fork</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-fullscreen w-8 h-8">fullscreen</i>
      <span class="text-xs">fullscreen</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-generative-ai w-8 h-8">generative-ai</i>
      <span class="text-xs">generative-ai</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-get-link w-8 h-8">get-link</i>
      <span class="text-xs">get-link</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-gift w-8 h-8">gift</i>
      <span class="text-xs">gift</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-github w-8 h-8">github</i>
      <span class="text-xs">github</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-halfscreen-bar w-8 h-8">halfscreen-bar</i>
      <span class="text-xs">halfscreen-bar</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-heading w-8 h-8">heading</i>
      <span class="text-xs">heading</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-help w-8 h-8">help</i>
      <span class="text-xs">help</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-hide w-8 h-8">hide</i>
      <span class="text-xs">hide</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-highlight-off w-8 h-8">highlight-off</i>
      <span class="text-xs">highlight-off</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-highlight-on w-8 h-8">highlight-on</i>
      <span class="text-xs">highlight-on</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-history w-8 h-8">history</i>
      <span class="text-xs">history</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-home w-8 h-8">home</i>
      <span class="text-xs">home</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-ignored w-8 h-8">ignored</i>
      <span class="text-xs">ignored</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-image w-8 h-8">image</i>
      <span class="text-xs">image</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-import w-8 h-8">import</i>
      <span class="text-xs">import</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-in-progress w-8 h-8">in-progress</i>
      <span class="text-xs">in-progress</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-information w-8 h-8">information</i>
      <span class="text-xs">information</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-inspector-debug w-8 h-8">inspector-debug</i>
      <span class="text-xs">inspector-debug</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-instagram w-8 h-8">instagram</i>
      <span class="text-xs">instagram</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-iso w-8 h-8">iso</i>
      <span class="text-xs">iso</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-linkedin w-8 h-8">linkedin</i>
      <span class="text-xs">linkedin</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-loading-steps w-8 h-8">loading-steps</i>
      <span class="text-xs">loading-steps</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-location w-8 h-8">location</i>
      <span class="text-xs">location</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-lock-locked w-8 h-8">lock-locked</i>
      <span class="text-xs">lock-locked</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-lock-locked-active w-8 h-8">lock-locked-active</i>
      <span class="text-xs">lock-locked-active</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-lock-unlock w-8 h-8">lock-unlock</i>
      <span class="text-xs">lock-unlock</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-log-out w-8 h-8">log-out</i>
      <span class="text-xs">log-out</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-machines w-8 h-8">machines</i>
      <span class="text-xs">machines</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-map w-8 h-8">map</i>
      <span class="text-xs">map</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-maximise-bar w-8 h-8">maximise-bar</i>
      <span class="text-xs">maximise-bar</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-menu w-8 h-8">menu</i>
      <span class="text-xs">menu</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-minimise-bar w-8 h-8">minimise-bar</i>
      <span class="text-xs">minimise-bar</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-minus w-8 h-8">minus</i>
      <span class="text-xs">minus</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-models w-8 h-8">models</i>
      <span class="text-xs">models</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-mount w-8 h-8">mount</i>
      <span class="text-xs">mount</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-mount-2 w-8 h-8">mount-2</i>
      <span class="text-xs">mount-2</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-notifications w-8 h-8">notifications</i>
      <span class="text-xs">notifications</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-open-terminal w-8 h-8">open-terminal</i>
      <span class="text-xs">open-terminal</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-pause w-8 h-8">pause</i>
      <span class="text-xs">pause</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-pin w-8 h-8">pin</i>
      <span class="text-xs">pin</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-plans w-8 h-8">plans</i>
      <span class="text-xs">plans</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-play w-8 h-8">play</i>
      <span class="text-xs">play</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-plus w-8 h-8">plus</i>
      <span class="text-xs">plus</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-pods w-8 h-8">pods</i>
      <span class="text-xs">pods</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-power-error w-8 h-8">power-error</i>
      <span class="text-xs">power-error</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-power-off w-8 h-8">power-off</i>
      <span class="text-xs">power-off</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-power-on w-8 h-8">power-on</i>
      <span class="text-xs">power-on</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-priority-critical w-8 h-8">priority-critical</i>
      <span class="text-xs">priority-critical</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-priority-high w-8 h-8">priority-high</i>
      <span class="text-xs">priority-high</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-priority-low w-8 h-8">priority-low</i>
      <span class="text-xs">priority-low</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-priority-medium w-8 h-8">priority-medium</i>
      <span class="text-xs">priority-medium</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-priority-negligible w-8 h-8">priority-negligible</i>
      <span class="text-xs">priority-negligible</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-priority-unknown w-8 h-8">priority-unknown</i>
      <span class="text-xs">priority-unknown</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-private-key w-8 h-8">private-key</i>
      <span class="text-xs">private-key</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-profile w-8 h-8">profile</i>
      <span class="text-xs">profile</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-profiles w-8 h-8">profiles</i>
      <span class="text-xs">profiles</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-question w-8 h-8">question</i>
      <span class="text-xs">question</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-quote w-8 h-8">quote</i>
      <span class="text-xs">quote</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-repository w-8 h-8">repository</i>
      <span class="text-xs">repository</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-restart w-8 h-8">restart</i>
      <span class="text-xs">restart</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-revisions w-8 h-8">revisions</i>
      <span class="text-xs">revisions</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-rss w-8 h-8">rss</i>
      <span class="text-xs">rss</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-search w-8 h-8">search</i>
      <span class="text-xs">search</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-security w-8 h-8">security</i>
      <span class="text-xs">security</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-security-error w-8 h-8">security-error</i>
      <span class="text-xs">security-error</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-security-tick w-8 h-8">security-tick</i>
      <span class="text-xs">security-tick</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-security-warning w-8 h-8">security-warning</i>
      <span class="text-xs">security-warning</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-select w-8 h-8">select</i>
      <span class="text-xs">select</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-select-add w-8 h-8">select-add</i>
      <span class="text-xs">select-add</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-select-remove w-8 h-8">select-remove</i>
      <span class="text-xs">select-remove</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-settings w-8 h-8">settings</i>
      <span class="text-xs">settings</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-share w-8 h-8">share</i>
      <span class="text-xs">share</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-show w-8 h-8">show</i>
      <span class="text-xs">show</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-single-host w-8 h-8">single-host</i>
      <span class="text-xs">single-host</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-snapshot w-8 h-8">snapshot</i>
      <span class="text-xs">snapshot</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-snooze w-8 h-8">snooze</i>
      <span class="text-xs">snooze</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-sort-both w-8 h-8">sort-both</i>
      <span class="text-xs">sort-both</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-sort-down w-8 h-8">sort-down</i>
      <span class="text-xs">sort-down</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-sort-up w-8 h-8">sort-up</i>
      <span class="text-xs">sort-up</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-spinner w-8 h-8">spinner</i>
      <span class="text-xs">spinner</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-starred w-8 h-8">starred</i>
      <span class="text-xs">starred</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-statistics w-8 h-8">statistics</i>
      <span class="text-xs">statistics</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status w-8 h-8">status</i>
      <span class="text-xs">status</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-failed-small w-8 h-8">status-failed-small</i>
      <span class="text-xs">status-failed-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-in-progress w-8 h-8">status-in-progress</i>
      <span class="text-xs">status-in-progress</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-in-progress-small w-8 h-8">status-in-progress-small</i>
      <span class="text-xs">status-in-progress-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-queued w-8 h-8">status-queued</i>
      <span class="text-xs">status-queued</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-queued-small w-8 h-8">status-queued-small</i>
      <span class="text-xs">status-queued-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-succeeded-small w-8 h-8">status-succeeded-small</i>
      <span class="text-xs">status-succeeded-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-waiting w-8 h-8">status-waiting</i>
      <span class="text-xs">status-waiting</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-waiting-small w-8 h-8">status-waiting-small</i>
      <span class="text-xs">status-waiting-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-stop w-8 h-8">stop</i>
      <span class="text-xs">stop</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-storage-bucket w-8 h-8">storage-bucket</i>
      <span class="text-xs">storage-bucket</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-storage-pool w-8 h-8">storage-pool</i>
      <span class="text-xs">storage-pool</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-storage-volume w-8 h-8">storage-volume</i>
      <span class="text-xs">storage-volume</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-submit-bug w-8 h-8">submit-bug</i>
      <span class="text-xs">submit-bug</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-success w-8 h-8">success</i>
      <span class="text-xs">success</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-success-grey w-8 h-8">success-grey</i>
      <span class="text-xs">success-grey</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-switcher w-8 h-8">switcher</i>
      <span class="text-xs">switcher</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-switcher-dashboard w-8 h-8">switcher-dashboard</i>
      <span class="text-xs">switcher-dashboard</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-switcher-environments w-8 h-8">switcher-environments</i>
      <span class="text-xs">switcher-environments</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-tag w-8 h-8">tag</i>
      <span class="text-xs">tag</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-task-outstanding w-8 h-8">task-outstanding</i>
      <span class="text-xs">task-outstanding</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-thumbs-down w-8 h-8">thumbs-down</i>
      <span class="text-xs">thumbs-down</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-thumbs-up w-8 h-8">thumbs-up</i>
      <span class="text-xs">thumbs-up</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-tidy w-8 h-8">tidy</i>
      <span class="text-xs">tidy</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-timed-out w-8 h-8">timed-out</i>
      <span class="text-xs">timed-out</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-timed-out-grey w-8 h-8">timed-out-grey</i>
      <span class="text-xs">timed-out-grey</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-toggle-side-nav w-8 h-8">toggle-side-nav</i>
      <span class="text-xs">toggle-side-nav</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-topic w-8 h-8">topic</i>
      <span class="text-xs">topic</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-turn-off-notification w-8 h-8">turn-off-notification</i>
      <span class="text-xs">turn-off-notification</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-twitter w-8 h-8">twitter</i>
      <span class="text-xs">twitter</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-unit-pending w-8 h-8">unit-pending</i>
      <span class="text-xs">unit-pending</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-unit-running w-8 h-8">unit-running</i>
      <span class="text-xs">unit-running</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-units w-8 h-8">units</i>
      <span class="text-xs">units</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-unmount w-8 h-8">unmount</i>
      <span class="text-xs">unmount</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-unstarred w-8 h-8">unstarred</i>
      <span class="text-xs">unstarred</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-upload w-8 h-8">upload</i>
      <span class="text-xs">upload</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-usb w-8 h-8">usb</i>
      <span class="text-xs">usb</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-user w-8 h-8">user</i>
      <span class="text-xs">user</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-user-group w-8 h-8">user-group</i>
      <span class="text-xs">user-group</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-video-play w-8 h-8">video-play</i>
      <span class="text-xs">video-play</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-vulnerable w-8 h-8">vulnerable</i>
      <span class="text-xs">vulnerable</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-warning w-8 h-8">warning</i>
      <span class="text-xs">warning</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-warning-grey w-8 h-8">warning-grey</i>
      <span class="text-xs">warning-grey</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-website w-8 h-8">website</i>
      <span class="text-xs">website</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-youtube w-8 h-8">youtube</i>
      <span class="text-xs">youtube</span>
    </div>
</div>
{/snippet}

{#snippet contextualIconGrid()}
  <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-error w-8 h-8">error</i>
      <span class="text-xs">error</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-warning w-8 h-8">warning</i>
      <span class="text-xs">warning</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-success w-8 h-8">success</i>
      <span class="text-xs">success</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-vulnerable w-8 h-8">vulnerable</i>
      <span class="text-xs">vulnerable</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-conflict-resolution w-8 h-8">conflict-resolution</i>
      <span class="text-xs">conflict-resolution</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-conflict w-8 h-8">conflict</i>
      <span class="text-xs">conflict</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-in-progress w-8 h-8">in-progress</i>
      <span class="text-xs">in-progress</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-power-on w-8 h-8">power-on</i>
      <span class="text-xs">power-on</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-unit-running w-8 h-8">unit-running</i>
      <span class="text-xs">unit-running</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-failed-small w-8 h-8">status-failed-small</i>
      <span class="text-xs">status-failed-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-information-small w-8 h-8">status-information-small</i>
      <span class="text-xs">status-information-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-in-progress w-8 h-8">status-in-progress</i>
      <span class="text-xs">status-in-progress</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-in-progress-small w-8 h-8">status-in-progress-small</i>
      <span class="text-xs">status-in-progress-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-queued w-8 h-8">status-queued</i>
      <span class="text-xs">status-queued</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-succeeded-small w-8 h-8">status-succeeded-small</i>
      <span class="text-xs">status-succeeded-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-waiting-small w-8 h-8">status-waiting-small</i>
      <span class="text-xs">status-waiting-small</span>
    </div>
    <div class="flex flex-col items-center gap-2 p-3 border border-[#e0e0e0] rounded">
      <i class="ow-icon-status-waiting w-8 h-8">status-waiting</i>
      <span class="text-xs">status-waiting</span>
    </div>
  </div>
{/snippet}

<Story
  name="Icons"
  args={{
    darkMode: false,
    colorNegative: '#c7162b',
    colorCaution: '#cc7900',
    colorPositive: '#0e8420',
    colorInformation: '#24598f'
  }}
>
  {#snippet template(args)}
    <div
      class:dark={args?.darkMode}
      class:bg-[#111111]={args?.darkMode}
      class:text-white={args?.darkMode}
      class="p-4"
      style:--color-ow-negative={args?.colorNegative}
      style:--color-ow-caution={args?.colorCaution}
      style:--color-ow-positive={args?.colorPositive}
      style:--color-ow-information={args?.colorInformation}
    >
      {@render iconGrid()}
      <h3 class="mt-8 mb-4">Contextual Colors</h3>
      {@render contextualIconGrid()}
    </div>
  {/snippet}
</Story>

