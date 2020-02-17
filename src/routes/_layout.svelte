<script context="module">
  let user = null;
  export async function preload(page, session) {
    const res = await this.fetch("http://localhost:5515", {
      method: "GET",
      credentials: "include"
    });
    if (res.ok) {
      const json = await res.json();
      user = json.user;
      console.log(json.user);
    }
    console.log("session --> ");
    console.log(session);
    console.log('data --> ');
    console.log(user);
    return { data: user };
  }
</script>

<script>
  import { onMount, beforeUpdate, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  const { session } = stores();

  export let segment;
  export let data;
  let user;

  const unsubscribe = session.subscribe(value => {
    console.log('subscribe');
    console.log(value.user);
    user = value.user;
  });

  
  // console.log(test);
  let users = [];
  onMount(async () => {
    session.set({ user: data });

    // let res = await fetch("https://randomuser.me/api?results=10");
    // if (res.ok) {
    //   let json = await res.json();
    //   // console.log(json.results);
    //   users = json.results;
    // }
    //TEST
    // state.user = { username: 'globalg@gmail.com', firstname: 'Mandy'};
    // state.isLoggedIn = true;
    // state = state;
  });
  // afterUpdate(() => {
  //   console.log('after update ->');
  //   console.log(state);
  // });

  // beforeUpdate(() => {
  //   console.log("beforeUpdate layout");
  // });

  onDestroy(unsubscribe);
</script>

<style>
  main {
    min-height: 80vh;
  }
</style>

<Nav {segment} />
{#if user}
  <p>username: {user.username}</p>
{/if}
<main>
  <slot />
</main>
