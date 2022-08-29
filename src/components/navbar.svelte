<style>
  .scrollbar {
    scrollbar-width: none;
  }
</style>

<script lang="ts">
  import SidebarIcon from './sidebarIcon.svelte';

  export let buttons: {
    icon: unknown;
    text: string;
    link: string;
    onClick?: () => void;
  }[] = [];

  let navbar: HTMLDivElement;
  let onScroll = (event: WheelEvent) => {
    event?.preventDefault();

    navbar.scrollBy({
      left: event.deltaY < 0 ? -30 : 30
    });
  };
</script>

<!-- fixed nav -->
<ul
  class="menu menu-horizontal col-span-12 w-full scrollbar p-4"
  on:wheel={onScroll}
>
  {#each buttons as button}
    <SidebarIcon text={button.text} link={button.link} onClick={button.onClick}>
      <svelte:component this={button.icon} />
    </SidebarIcon>

    <!-- <SidebarIcon icon={faEnvelope} link="/" text="Conversations" />
    <hr class="border-gray-700 border w-8 mx-auto" />
    <SidebarIcon icon={faPlus} link="/server/join" text="Join a server" /> -->
  {/each}
</ul>
