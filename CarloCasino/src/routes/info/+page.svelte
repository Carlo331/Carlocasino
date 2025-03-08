<script>
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Popup } from '/src/stores'
    import Login from "../components/login.svelte";
    import Navbar from "../components/navbar.svelte";

    let onload = false

    onMount(() => {
        onload = true
    })

</script>
<div id="main" class="flex flex-col items-center bg-black w-screen h-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <Navbar/>
    {#if onload}
    {#if $Popup}
    <Login/>
    {/if}
    <div id="resten" class="flex flex-col justify-evenly items-center w-full h-5/6"  in:fade={{duration: 1000}}>
        <div id="RainInfo" class="">

        </div>
        <div id="BlackjackInfo" class="">

        </div>
        <div id="ButtonInfo" class="">

        </div>
    </div>
    {/if}
</div>