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
    if (updatedUser) {
      goto("/");
    }
  }

  let fname = "";
  let lname = "";
  let username = "";
  let password = "";
  let confPassword = "";

  let alert = "";
  let canSend;

  $: data = {
    firstname: fname,
    lastname: lname,
    username: username,
    password: password
  };

  $: {
    if (confPassword && confPassword !== password) {
      alert = "Your passwords don't match";
    } else {
      alert = "";
    }
    if ((fname && lname && username && password && confPassword) && (password === confPassword)) {
      canSend = true;
    } else {
      canSend = false;
    }
    console.log(`canSend = ${canSend}`);
  }

  async function handleSubmit(e) {
    if (canSend) {
      const res = await fetch("http://localhost:5515/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(data)
      });
      if (res.ok){
        const json = await res.json();
        if (json.user){
          goto('/');
        }
      }
    }
  }
</script>

<style>
  input {
    height: 1.5rem;
    border-radius: 6px;
    margin: 0.5rem;
    padding: 3px;
  }
</style>

<div class="">
  <Form on:submit={handleSubmit}>
    <input type="text" placeholder="First Name" bind:value={fname} />
    <input type="text" placeholder="Last Name" bind:value={lname} />
    <input type="email" placeholder="Email" bind:value={username} />
    <input type="password" placeholder="Password" bind:value={password} />
    <input type="password" placeholder="Password" bind:value={confPassword} />
    <Button type="submit">Submit</Button>
    <span>{alert}</span>
  </Form>
</div>
