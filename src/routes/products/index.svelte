<script context="module">
  export async function preload({ params, query }) {
    console.log('context module');
    const res = await this.fetch(`products.json`);
    if (res.ok) {
      const data = await res.json();
      console.log('print json');
      console.log(data);
      return { products: data };
    } else {
      console.log('product is false');
      return { products: false };
    }
  }
</script>

<script>
  import ProductCard from "../../components/ProductCard.svelte";
  export let products;
  console.log('products: ');
  console.log(products);
</script>

<style>
  .container {
    display: flex;
    flex-flow: row wrap;
    /* justify-content: space-between; */
  }
</style>

<svelte:head>
  <title>Products</title>
</svelte:head>

<!-- <div class="container">
  {#if products && products.length}
    {#each products as product}
      <ProductCard {...product} />
    {/each}
  {:else}
    <h3>No products found</h3>
  {/if}
</div> -->
<div>
    {products}
</div>
