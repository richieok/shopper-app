<script>
  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import ContactCard from "../components/ContactCard.svelte";
  const { session } = stores();
  let isLoggedIn = false;
  let state = null;
  const unsubscribe = session.subscribe( value => {
	  state = value;
  })
  function getStore(){
    console.log('state -->');
	  console.log(state);
  }
  onMount( async ()=>{
    const res = await fetch('http://localhost:5515', {
      method: 'GET',
      credentials: 'include'
    });
    if (res.ok){
      const json = await res.json();
      console.log(json);
    }
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


<!-- {#each users as user}
	<ContactCard>
		<span slot='name'>
			{user.name.first+' '+user.name.last}
		</span>
		<span slot='email'>
			{user.email}
		</span>
	</ContactCard>
{/each} -->
