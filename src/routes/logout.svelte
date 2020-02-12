<script>
    import { goto } from "@sapper/app";
    import { onMount } from "svelte";
    onMount( async ()=>{
        let res = await fetch("http://localhost:5515/logout", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({})
        });
        if (res.ok){
            goto('/');
        }
    })
</script>

<p>Signing out!</p>