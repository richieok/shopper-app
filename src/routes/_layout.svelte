<script>
  import { onMount, afterUpdate } from "svelte";
  import { stores } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  const { session } = stores();
  
  export let segment;

  $: state = {
    user: null,
    isLoggedIn: false
  };
  let users = [];
  onMount(async () => {
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
</script>

<style>
  main {
    min-height: 80vh;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
