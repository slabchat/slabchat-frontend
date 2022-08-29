<script lang="ts">
  import { get } from 'svelte/store';

  import At from 'tabler-icons-svelte/icons/At.svelte';
  import * as state from '../lib/state';

  let activeUser: string | null = null;
  state.activeMessageUser.subscribe(id => {
    activeUser = id;
    console.log(id);
  });
</script>

<main class="p-4 w-full h-full">
  <ul class="menu menu-horizontal bg-gray-800 w-full">
    {#each get(state.users) as user}
      <li>
        {#if activeUser && activeUser == user.id}
          <h3
            class="text-lg btn-active"
            on:click={_e => state.activeMessageUser.update(_id => user.id)}
          >
            <At />
            {user.username}
          </h3>
        {:else}
          <h3
            class="text-lg"
            on:click={_e => state.activeMessageUser.update(_id => user.id)}
          >
            <At />
            {user.username}
          </h3>
        {/if}
      </li>
    {/each}
  </ul>
</main>
