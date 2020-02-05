<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		height: 40px;
		align-items: center;
	}
	ul {
		display: flex;
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		padding: 0 1rem;
	}
</style>

<nav>
	<div class="logo">Logo</div>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>Home</a></li>
		<li><a class:selected='{segment === 'login'}' href='login'>Login</a></li>
		<li><a class:selected='{segment === 'register'}' href="register">Register</a></li>
		<!-- <li><a class:selected='{segment === "about"}' href='about'>about</a></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li> -->
	</ul>
</nav>
