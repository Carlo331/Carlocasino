<script lang="ts">
    import "../app.css";
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Popup, Money, Bruker } from '/src/stores'
    import Login from "./components/login.svelte";
    import Navbar from "./components/navbar.svelte";

    let onload = false

    onMount(() => {
        onload = true
    })

    function RainClaim(){
        $Money = $Money + 50
    }
</script>

<div id="main" class="flex flex-col items-center bg-black w-screen h-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <Navbar/>
    {#if onload}
    {#if $Popup}
    <Login/>
    {/if}
    <div id="resten" class="flex flex-col justify-evenly items-center w-full h-5/6"  in:fade={{duration: 1000}}>
        <div id="rain" class="flex justify-between items-center pl-2 pr-2 md:pl-4 md:pr-4 w-11/12 md:w-5/6 h-1/6 rounded-lg bg-navy">
            <div class="flex items-center justify-between bg-black border-sky pl-1 pr-1 md:pl-4 md:pr-4 h-1/2 w-3/12 md:h-5/6 md:w-44 border-2 rounded-lg">
                <img class="w-3/12" src="/Gold_Coins.png" alt="coin">
                <span class=" font-mono text-2xl md:text-6xl text-sky">50</span>
            </div>
            <div class="flex items-center justify-center w-1/6 h-2/6 md:w-40 md:h-4/6 bg-black border-2 rounded-lg font-mono text-sky text-lg md:text-5xl">30:00</div>
            <span class="flex items-center text-2xl w-1/6 md:text-6xl justify-center text-sky font-mono ">Rain</span>
            <button on:click={()=> RainClaim()} class="flex justify-center btn items-center w-4/12 h-1/2 md:w-44 md:h-3/4 rounded-lg bg-black border-2 text-sky text-2xl md:text-5xl font-mono">Claim</button>
        </div>
        <div id="spill" class="flex items-center flex-col md:justify-evenly md:flex-row w-full h-4/6">
            <a href="/blackjack" class="flex items-center justify-center rounded-lg w-4/6 md:w-3/12 mb-3">
                <img class="rounded-lg h-11/12 w-11/12" src="/blackjack.png" alt="blue button">
            </a>
            <a href="/bluebutton" id="button" class="flex items-center justify-center rounded-lg w-4/6 md:w-3/12 mb-3 ">
                <img class="rounded-lg h-11/12 w-11/12" src="/blue_button.png" alt="blue button">
            </a>
        </div>
    </div>
    {/if}
</div>
<style>
    .btn {
      transition: transform 0.05s ease;
    }
    .btn:active {
      transform: scale(0.95);
    }
  </style>