<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("http://localhost:5515", {
      method: "GET",
      credentials: "include"
    });
    if (res.ok) {
      const json = await res.json();
      return { user: json.user };
    }
    return { user: session.user };
  }
</script>

<script>
  import { onMount, beforeUpdate, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  const { session } = stores();

  export let segment;
  export let user;
  let display = false;
  let updatedUser;
  console.log(user);
  const unsubscribe = session.subscribe(value => {
    updatedUser = value.user;
  });

  onMount(() => {
    session.set({ user: user });
    console.log("onMount");
    display = true;
    console.log(updatedUser);
  });

  onDestroy(unsubscribe);
</script>

<style>
  main {
    min-height: 80vh;
    background-color: rgb(197, 228, 232);
  }
  .container {
    padding: 1em 1em;
  }
</style>

{#if display}
  <Nav {segment} />
  <main>
    {#if updatedUser}
      <div class="container">
        <p>Username: {updatedUser.username}</p>
      </div>
    {/if}
    <slot />
  </main>
{:else}
  <h3>Loading</h3>
{/if}
