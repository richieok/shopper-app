<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleSubmit() {
    console.log('Form Submit');
    dispatch("submit", {});
  }
</script>

<style>
  .container {
    border: 2px solid chocolate;
    width: 400px;
    padding: 1rem;
    margin: auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <slot>Form</slot>
  </form>
</div>
