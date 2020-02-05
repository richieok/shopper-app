<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
	
</script>

<style>
	main {
		min-height: 80vh;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>