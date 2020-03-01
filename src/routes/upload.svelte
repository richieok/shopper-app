<script>
  import Form from "../components/Form.svelte";
  import Button from "../components/Button.svelte";

  let brand;
  let productname;
  let price;
  let file;

  function handleSubmit(e) {
    console.log('Upload files');
    data.brand = data.brand.trim();
    data.productname = data.productname.trim();
    data.price = data.price.trim();
    console.log(data);
  }
  
  $: data = {
    brand: brand,
    productname: productname,
    price: price,
    file: file
  }
</script>

<style>
  .container {
    background-color: bisque;
  }
</style>

<Form on:submit={handleSubmit}>
  <label for="upload">Upload Images: </label>
  <input type="file" name="upload" bind:files={file}/>
  <label for="brand">Brand:</label>
  <input type="text" bind:value={brand} name="brand" />
  <label for="productname">Product name:</label>
  <input type="text" name="productname" bind:value={productname} />
  <label for="price">Price:</label>
  <input type="text" name="price" bind:value={price}/>
  <Button>Upload</Button>
</Form>
