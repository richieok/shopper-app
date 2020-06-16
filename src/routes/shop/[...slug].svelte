<script context="module">
    export async function preload({ params }){
        let [ slug, item ] = params.slug;
        return { slug, item };
    }
</script>

<script>
    export let slug;
    export let item;
    let brands = ['nike', 'adidas'];
    let categories = ['shoes', 'belts'];
    // console.log(`${slug}, ${item}`);

</script>

