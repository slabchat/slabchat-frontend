<script lang="ts">
  import { tippy } from '../lib/tippy';
  import { link as spaLink } from 'svelte-spa-router';

  // Tooltip
  export let text: string;
  export let link: string;
  export let hovered = false;
  export let onClick: (() => void) | undefined;
</script>

<a href={link} use:spaLink>
  <div
    use:tippy={{ content: text }}
    class="relative flex items-center justify-center
mx-auto shadow-lg
btn btn-secondary
rounded-3xl
transition-all duration-300
ease-linear cursor-pointer"
    on:mouseover={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:focus={() => (hovered = true)}
    on:blur={() => (hovered = false)}
    on:click={() => {
      onClick?.();
    }}
  >
    <slot />
  </div>
</a>
