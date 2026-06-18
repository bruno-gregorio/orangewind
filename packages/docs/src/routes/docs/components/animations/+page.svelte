<script lang="ts">
  import Example from '$lib/components/Example.svelte'

  // Interactive state for the headline demonstration: toggling moves the box so
  // the transition utilities have something to animate.
  let shifted = $state(false)
</script>

<!-- Mandatory headline demonstration — toggle to see the timed transition. -->
<div class="grid gap-4 rounded border border-ow-surface-border p-8">
  <button
    class="ow-btn-base ow-is-small w-fit"
    onclick={() => (shifted = !shifted)}
  >
    Toggle
  </button>
  <div class="rounded bg-ow-background-alt p-2">
    <div
      class={[
        'ow-transition-brisk ow-transition-ease-out h-10 w-10 rounded bg-ow-brand transition-transform',
        shifted && 'translate-x-[calc(100%*5)]'
      ]
        .filter(Boolean)
        .join(' ')}
    ></div>
  </div>
</div>

<p>
  Animation utilities standardise motion timing. They set the
  <code>transition-duration</code>, <code>animation-duration</code> or timing
  function of an element from a shared scale, so movement across the system
  feels consistent. Pair them with Tailwind's <code>transition</code> (or an
  <code>animate-*</code>) utility, which provides the property and keyframes to
  animate.
</p>

<h2 id="transition-duration" class="ow-heading-2">Transition durations</h2>
<p>
  Five duration utilities set how long a transition takes:
  <code>ow-transition-snap</code> (0.1s), <code>ow-transition-fast</code>
  (0.165s), <code>ow-transition-brisk</code> (0.333s),
  <code>ow-transition-slow</code> (0.5s) and <code>ow-transition-sleepy</code>
  (1s). Hover a swatch to see its speed.
</p>
<Example
  code={`<div class="ow-transition-snap transition-colors hover:bg-ow-brand">snap</div>
<div class="ow-transition-brisk transition-colors hover:bg-ow-brand">brisk</div>
<div class="ow-transition-slow transition-colors hover:bg-ow-brand">slow</div>`}
>
  <div class="grid w-full gap-2 sm:grid-cols-3">
    <div
      class="ow-transition-snap cursor-pointer rounded bg-ow-background-alt p-4 text-center transition-colors hover:bg-ow-brand hover:text-ow-x-light"
    >
      snap
    </div>
    <div
      class="ow-transition-brisk cursor-pointer rounded bg-ow-background-alt p-4 text-center transition-colors hover:bg-ow-brand hover:text-ow-x-light"
    >
      brisk
    </div>
    <div
      class="ow-transition-slow cursor-pointer rounded bg-ow-background-alt p-4 text-center transition-colors hover:bg-ow-brand hover:text-ow-x-light"
    >
      slow
    </div>
  </div>
</Example>

<h2 id="transition-easing" class="ow-heading-2">Transition easing</h2>
<p>
  Two easing utilities shape a transition's acceleration curve.
  <code>ow-transition-ease-out</code> starts fast and settles gently — ideal for
  elements entering the screen — while <code>ow-transition-ease-in</code> starts slow
  and accelerates, suited to elements leaving. Hover to compare.
</p>
<Example
  code={`<div class="ow-transition-slow ow-transition-ease-out transition-transform hover:translate-x-8">ease-out</div>
<div class="ow-transition-slow ow-transition-ease-in transition-transform hover:translate-x-8">ease-in</div>`}
>
  <div class="grid w-full gap-3">
    <div class="rounded bg-ow-background-alt p-2">
      <div
        class="ow-transition-slow ow-transition-ease-out h-8 w-8 rounded bg-ow-accent transition-transform hover:translate-x-[calc(100%*6)]"
      ></div>
    </div>
    <div class="rounded bg-ow-background-alt p-2">
      <div
        class="ow-transition-slow ow-transition-ease-in h-8 w-8 rounded bg-ow-brand transition-transform hover:translate-x-[calc(100%*6)]"
      ></div>
    </div>
  </div>
</Example>

<h2 id="animation-duration" class="ow-heading-2">Animation durations</h2>
<p>
  A matching set of utilities — <code>ow-animation-snap</code> through
  <code>ow-animation-sleepy</code> — sets the <code>animation-duration</code> of
  a keyframe animation. Combine one with a Tailwind animation such as
  <code>animate-spin</code> to control its pace.
</p>
<Example
  code={`<i class="ow-icon-spinner ow-animation-slow animate-spin"></i>
<i class="ow-icon-spinner ow-animation-sleepy animate-spin"></i>`}
>
  <div class="flex items-center gap-6">
    <i class="ow-icon-spinner ow-animation-slow h-8 w-8 animate-spin"></i>
    <i class="ow-icon-spinner ow-animation-sleepy h-8 w-8 animate-spin"></i>
  </div>
</Example>

<h2 id="animation-easing" class="ow-heading-2">Animation easing</h2>
<p>
  <code>ow-animation-ease-in</code> and <code>ow-animation-ease-out</code> apply
  the same in and out curves to a keyframe animation's
  <code>animation-timing-function</code>, keeping bespoke animations aligned
  with the rest of the system.
</p>
<Example
  code={'<i class="ow-icon-spinner ow-animation-brisk ow-animation-ease-out animate-spin"></i>'}
>
  <i
    class="ow-icon-spinner ow-animation-brisk ow-animation-ease-out h-8 w-8 animate-spin"
  ></i>
</Example>

<h2 id="reduced-motion" class="ow-heading-2">Reduced motion</h2>
<p>
  Orangewind respects <code>prefers-reduced-motion</code>: when a visitor asks
  their system to reduce motion, every transition and animation is collapsed to
  a near-instant duration automatically. The underlying timings live in
  <code>--ow-duration-*</code> and <code>--ow-easing-*</code> theme variables.
</p>
<Example
  lang="css"
  title="CSS"
  code={`--ow-duration-snap: 0.1s;
--ow-duration-fast: 0.165s;
--ow-duration-brisk: 0.333s;
--ow-duration-slow: 0.5s;
--ow-duration-sleepy: 1s;

--ow-easing-out: cubic-bezier(0.215, 0.61, 0.355, 1);
--ow-easing-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);`}
>
  <p class="text-ow-text-muted">
    The shared duration and easing scale used by every animation utility.
  </p>
</Example>
