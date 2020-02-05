<script>
  import Form from "../components/Form.svelte";
  import Button from "../components/Button.svelte";
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
