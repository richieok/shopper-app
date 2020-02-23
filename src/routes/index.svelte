<script>
  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import ContactCard from "../components/ContactCard.svelte";
  const { session } = stores();
  // console.log(session);

  let users = [];
  let state;
  const unsubscribe = session.subscribe(value => {
    state = value.user;
  });

  $: {
    if (state) {
      updateDisplay();
    }
  }

  const updateDisplay = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    if (res.ok) {
      const json = await res.json();
      users = json.results;
    }
  };

  function getStore() {
    console.log("state -->");
    console.log(state);
  }
  function updateUser() {
    // console.log('update user');
    session.update(obj => {
      return { user: { username: "dmenace@qubit.com.ng" , firstname: 'Dennis'} };
    });
  }
  onMount(async () => {
    // if (state) {
    //   const res = await fetch("https://randomuser.me/api/?results=20");
    //   if (res.ok) {
    //     const json = await res.json();
    //     users = json.results;
    //   }
    // }
  });
  onDestroy(unsubscribe);
</script>

<style>
  @media (min-width: 480px) {
  }
  button {
    padding: 1rem;
  }
</style>

<svelte:head>
  <title>Shopping</title>
</svelte:head>

<h2>Home</h2>
<button on:click={getStore}>Check</button>
<!-- <button on:click={updateUser}>Update user</button> -->

{#if state}
  {#each users as user}
    <ContactCard>
      <span slot="name">{user.name.first + ' ' + user.name.last}</span>
      <span slot="email">{user.email}</span>
    </ContactCard>
  {/each}
{:else}
  <h2>Products</h2>
  <div>
    <h3>Nike Red-and-Black</h3>
    <img src="https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/red-and-black-nike-running-shoe.jpg" alt="red-and-black-nike-running-shoe">
  </div>
  
{/if}
