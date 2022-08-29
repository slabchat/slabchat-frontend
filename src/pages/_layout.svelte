<script lang="ts">
  import Sidebar from "@/components/navbar.svelte";
  import { state } from "@/lib/state";
  import {
    faEnvelope,
    faPlus,
    faServer,
    faUser
  } from "@fortawesome/free-solid-svg-icons";
</script>

<Sidebar
  buttons={[
    {
      icon: faEnvelope,
      link: "",
      text: "Toggle DMs",
      onClick: () => {
        state.showServers = !state.showServers;
      }
    },
    {
      icon: faPlus,
      link: state.showServers ? "/server/join" : "/dm/new",
      text: state.showServers ? "Join Server" : "New Conversation"
    },
    ...(state.showServers
      ? Array.from({ length: 50 }, (_, i) => ({
          icon: faServer,
          link: "/server/" + i,
          text: "Server " + i
        }))
      : Array.from({ length: 50 }, (_, i) => ({
          icon: faUser,
          link: "/dm/" + i,
          text: "User " + i
        }))) /* state.users.map(user => ({
          icon: faUser,
          link: "/dm/" + user.id,
          text: user.name
        }))) */
  ]}
/>
<slot />
