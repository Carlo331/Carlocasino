<script>
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Popup } from '/src/stores'
    import Login from "../components/login.svelte";

    let onload = false

    onMount(() => {
        onload = true
    })

</script>
<div id="main" class="flex flex-col items-center bg-black w-screen h-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div id="navbar" class="flex justify-evenly items-center w-full h-1/6 bg-navy">
        <a href="/" class="h-2/6 btn">
            <img class="h-full" src="home.svg" alt="home">
        </a>
        <a href="/info" class="flex justify-center btn items-center w-1/6 md:w-1/12 h-1/4 rounded-lg font-mono text-xs md:text-xl bg-blue">
            Info
        </a>
        <div class="flex justify-center items-center w-2/6 h-1/4 md:w-56 md:h-2/5 rounded-lg bg-blue font-mono text-base md:text-3xl">
            Penger 0
        </div>
          <button on:click={()=> {Popup.set(true)}} class="flex justify-center btn items-center w-1/6 md:w-32 h-1/4 rounded-lg bg-blue font-mono text-xs md:text-xl">
              Logg inn 
          </button>
          <div class="flex justify-center items-center w-1/6 md:w-1/12 h-1/4 rounded-lg bg-blue font-mono text-xs md:text-xl">
              User
          </div>
    </div>
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