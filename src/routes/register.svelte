<script>
  import { onDestroy } from "svelte";
  import { stores, goto } from "@sapper/app";
  import Form from "../components/Form.svelte";
  import Button from "../components/Button.svelte";
  const { session } = stores();

  let updatedUser;
  const unsubscribe = session.subscribe(value => {
    updatedUser = value.user;
  });

  $: {
    if ( updatedUser ){
      goto('/');
    }
  }

  let fname = "";
  let lname = "";
  function handleSubmit(e){
      console.log(`First name: ${fname}\nLast name: ${lname}`);
  }
</script>

<style>
  input {
    height: 1.5rem;
    border-radius: 6px;
    margin: 0.5rem;
  }
</style>

<div class="">
  <Form on:submit={handleSubmit}>
    <input type="text" placeholder="First Name" bind:value={fname} />
    <input type="text" placeholder="Last Name" bind:value={lname} />
    <Button type="submit">Submit</Button>
  </Form>
</div>
