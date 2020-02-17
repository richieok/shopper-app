<script>
    import { goto, stores } from "@sapper/app";
    import { onMount } from "svelte";
    const { session } = stores();

    onMount( async ()=>{
        let res = await fetch("http://localhost:5515/logout", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({})
        });
        if (res.ok){
            session.update((existing)=>{
                return {user: null};
            })
            goto('/');
        }
    })
</script>

<p>Signing out!</p>