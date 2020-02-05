<script>
  import { onMount } from "svelte";
  import ContactCard from "../components/ContactCard.svelte";
  let user = "Dan";
  let users = [];
  onMount(async () => {
    let res = await fetch("https://randomuser.me/api?results=10");
    if (res.ok) {
      let json = await res.json();
      // console.log(json.results);
      users = json.results;
    }
  });
</script>

<style>
  @media (min-width: 480px) {
  }
</style>

<svelte:head>
  <title>Shopping</title>
</svelte:head>

{#each users as user}
	<ContactCard>
		<span slot='name'>
			{user.name.first+' '+user.name.last}
		</span>
		<span slot='email'>
			{user.email}
		</span>
	</ContactCard>
{/each}
