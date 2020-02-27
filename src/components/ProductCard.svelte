<script>
    export let _id;
    export let productName;
    export let images;
    export let brand;
    export let price;
    export let sizes;
    export let productParam;
</script>

<style>
  .container {
    padding: 1em;
    box-shadow: 10px 10px rgba(97, 96, 95, 0.3);
    margin: 10px;
    background-color: beige;
  }
  img {
    border: solid 2px grey;
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

<article class="container">
  <h3>
    <a href="/{productParam}">{productName}</a>
  </h3>
  <img src="https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/{images[0].url}" alt={images[0].alt} width="200px" >
</article>
