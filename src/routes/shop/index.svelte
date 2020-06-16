<script context="module">
    export function preload({ params, query }){
        return this.fetch(`shop.json`).then( r => r.json()).then( data => {
            return { data };
        });
    }
</script>

<script>
    export let data;
</script>

<svelte:head>
    <title>Shop</title>
</svelte:head>