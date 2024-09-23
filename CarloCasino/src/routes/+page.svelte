<script lang="ts">
    import "../app.css";
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Popup } from '/src/stores'
    import Login from "./components/login.svelte";

    let onload = false

    onMount(() => {
        onload = true
    })

</script>

<div id="main" class="flex flex-col items-center bg-black w-screen h-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div id="navbar" class="flex justify-evenly items-center w-full h-1/6 bg-navy">
        <a href="/" class="h-2/6">
            <img class="h-full" src="home.svg" alt="home">
        </a>
        <a href="/scoreboard" class="flex justify-center btn items-center w-1/5 md:w-1/6 h-1/4 rounded-lg font-mono text-xs md:text-xl bg-blue">
            Scoreboard
        </a>
        <div class="flex justify-center items-center w-2/6 h-1/4 md:w-1/6 md:h-2/5 rounded-lg bg-blue font-mono text-base md:text-3xl">
            Penger 0
        </div>
          <button on:click={()=> {Popup.set(true)}} class="flex justify-center btn items-center w-1/6 md:w-1/12 h-1/4 rounded-lg bg-blue font-mono text-xs md:text-xl">
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
    <div id="resten" class="flex flex-col  justify-evenly items-center w-full h-5/6"  in:fade={{duration: 1000}}>
        <div id="rain" class="flex justify-between items-center pl-4 pr-4 w-5/6 h-1/6 rounded-lg bg-navy">
            <div class="flex items-center justify-between p-4 bg-black border-sky h-5/6 w-1/6 border-2 rounded-lg">
                <img class="w-3/12" src="/Gold_Coins.png" alt="coin">
                <span class=" font-mono text-6xl text-sky">50</span>
            </div>
            <div class="flex items-center justify-center w-1/6 h-4/6 bg-black border-2 rounded-lg font-mono text-sky text-5xl">30:00</div>
            <span class="flex items-center justify-center text-sky font-mono ">Du kan få GRATIS PENGER hvert 30. Minutt</span>
            <button class="flex justify-center btn items-center w-1/6 h-3/4 rounded-lg bg-black border-2 text-sky text-5xl font-mono">Claim</button>
        </div>
        <div id="spill" class="flex justify-evenly w-full h-4/6">
            <a href="/blackjack" class="flex items-center justify-center rounded-lg w-3/12 h-full">
                <img class="rounded-lg h-11/12 w-11/12" src="/blackjack.png" alt="blue button">
            </a>
            <a href="/bluebutton" id="button" class="flex items-center justify-center rounded-lg w-3/12 h-full">
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