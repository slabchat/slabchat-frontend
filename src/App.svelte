<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './lib/routes';
  import Messages from 'tabler-icons-svelte/icons/Messages.svelte';
  import Navbar from './components/navbar.svelte';

  let buttons = [
    {
      icon: Messages,
      text: 'Direct Messages',
      link: '/'
    }
  ];
</script>

<div
  class="min-h-screen min-w-screen text-white bg-gray-800 grid grid-cols-12 grid-rows-12"
>
  <Navbar {buttons} />
  <div class="flex h-full flex-col row-span-8">
    <Router {routes} />
  </div>
</div>
