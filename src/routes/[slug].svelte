<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`${params.slug}.json`);
    if (res.ok) {
      const json = await res.json();
      return { products: json };
    } else {
      return { product: false };
    }
  }
</script>

<script>
  import ProductCard from "../components/ProductCard.svelte";
  export let products;
  console.log(products);
</script>

<svelte:head>
  <title>Products</title>
</svelte:head>

{#if products}
  {#each products as product}
    <ProductCard {...product} />
  {/each}
{:else}
  <h3>No products found</h3>
{/if}
