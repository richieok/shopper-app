<script>
    export let _id;
    export let productName;
    export let images;
    export let brand;
    export let price;
    export let sizes;
</script>

<article>
  <h2>
    {productName}
  </h2>
  <img src={images[0].url} alt={images[0].alt}>
</article>
