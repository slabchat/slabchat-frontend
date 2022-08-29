<script lang="ts">
  import { get } from 'svelte/store';

  import * as state from '../../lib/state';

  export let params = { id: '' };

  // get user by id from state
  let user = get(state.users).find(user => user.id === params.id);
</script>

<div>
  <h3>{user?.username}</h3>
</div>
