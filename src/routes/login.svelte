<script>
  import { onDestroy } from "svelte";
  import { goto, stores } from "@sapper/app";
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

  let username = "";
  let password = "";
  $: data = {
    username: username,
    password: password
  };

  async function handleSubmit(e) {
    // console.log(`Username: ${username}\nPassword: ${password}`);
    let res = await fetch("http://localhost:5515/auth/signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      let json = await res.json();
      console.log(json);
      if (json.state.user) {
        session.update( existing => {
          return { 
            user: { 
              username: json.state.user.username, 
              firstname: json.state.user.firstname, 
              id: json.state.user._id
            }
          }
        })
        goto("/");
      } else {
        console.log("Didn't work");
      }
    } else {
      console.log(res.statusText);
    }
  }

  onDestroy(unsubscribe);
</script>

<style>
  input {
    height: 1.5rem;
    border-radius: 6px;
    margin: 0.5rem;
  }
</style>

<Form on:submit={handleSubmit}>
  <input type="text" placeholder="Username" bind:value={username} />
  <input type="password" placeholder="Password" bind:value={password} />
  <Button>Submit</Button>
</Form>
