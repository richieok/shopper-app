<script>
  import Form from "../components/Form.svelte";
  import Button from "../components/Button.svelte";

  let brand;
  let productname;
  let price;
  let files;
  let fileCount = 0;

  async function handleSubmit(e) {
    console.log("Upload files");
    console.log(files);

    const formData = new FormData();
    formData.append("brand", brand.trim());
    formData.append("productname", productname.trim());
    formData.append("price", price.trim());
    for ( let f of files){
      console.log(f);
      formData.append("files", f);
    }

    // data.brand = data.brand.trim();
    // data.productname = data.productname.trim();
    // data.price = data.price.trim();
    // console.log(data);

    const res = await fetch("http://localhost:5515/products", {
      method: "POST",
      credentials: 'include',
      body: formData
    });
    if (res.ok) {
      let json = await res.json();
      console.log(json);
    }
  }

  function fileAdded(e){
    console.log('file change');
    console.log(files);
  }

  // $: data = {
  //   brand: brand,
  //   productname: productname,
  //   price: price,
  //   files: files
  // }
</script>

<style>
  .container {
    background-color: bisque;
  }
</style>

<Form on:submit={handleSubmit} enctype="multipart/form-data">
<label for="upload">Upload Images:</label>
  <input type="file" name="upload" bind:files={files} multiple on:change={fileAdded} accept="image/*"/>
  <!-- <input type="file" name="upload2" bind:files /> -->
  <label for="brand">Brand:</label>
  <input type="text" bind:value={brand} name="brand" />
  <label for="productname">Product name:</label>
  <input type="text" name="productname" bind:value={productname} />
  <label for="price">Price:</label>
  <input type="text" name="price" bind:value={price} />
  <Button>Upload</Button>
</Form>
