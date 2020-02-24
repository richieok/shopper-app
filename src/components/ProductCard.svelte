<script>
    export let _id;
    export let productName;
    export let images;
    export let brand;
    export let price;
    export let sizes;
</script>

<style>
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
</style>

<article>
  <h3>
    <a href="/products">{productName}</a>
  </h3>
  <img class="center" src={images[0].url} alt={images[0].alt} width={images[0].width} height={images[0].height}>
</article>
