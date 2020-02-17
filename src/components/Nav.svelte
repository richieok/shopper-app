<script context="module">
  export async function preload(page, session){
    console.log('module');
    console.log('nav session --> ');
    console.log(session);
    console.log(page);
    return { tape: 'High'}
  }
</script>

<script>
  import { onDestroy, afterUpdate, onMount, beforeUpdate } from "svelte";
  // import { stores } from "@sapper/app";

  export let segment;
  // const { session } = stores();

  let user;
  
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 80px;
    align-items: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    padding: 1rem 1rem;
  }
  .selected {
    background-color: cornflowerblue;
  }
</style>

<nav>
  <div class="logo">Logo</div>
  <div class="info">
    <ul>
      <li>
        <a class:selected={segment === undefined} href=".">Home</a>
      </li>
      <!-- {#if isLoggedIn} -->
        <li>
          <a class:selected={segment === 'login'} href="login">Login</a>
        </li>
        <li>
          <a class:selected={segment === 'register'} href="register">
            Register
          </a>
        </li>
      <!-- {/if} -->
      <li>
        <a class:selected={segment === 'about'} href="about">About</a>
      </li>
      <li>
        <a href="logout" class:selected={segment === 'logout'}>Logout</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <!-- <li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li> -->
    </ul>
  </div>

</nav>
