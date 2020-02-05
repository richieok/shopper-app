<script>
    export let type = 'submit';
</script>

<style>
    button {
        width: 5rem;
        padding: 0.5rem 0px;
        border-radius: 6px;
    }
</style>

<button {type}>
    <slot></slot>
</button>