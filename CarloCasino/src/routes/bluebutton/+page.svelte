<script>
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let onload = false

    onMount(() => {
        onload = true
    })

    let MainButton = true
    let PlaceButton = false
    let ButtonNumber = 0 

    let lastCallTime = 0
    const debounceTime = 150

    function PlaceBet(){
        none
    }

    async function Button(){
    const currentTime = Date.now()
    if (currentTime - lastCallTime < debounceTime) {
        return
    }
    lastCallTime = currentTime

    ButtonNumber = ButtonNumber + 1

    let Random = Math.round(Math.random() * 99) 
    console.log("Random", Random)
    
    if(Random <= ButtonNumber - 1){
        ButtonNumber = 0
        console.log("død")
    }
    }
</script>
<div id="main" class="flex flex-col items-center bg-black w-screen h-screen">
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
        <a href="/login" class="flex justify-center btn items-center w-1/6 md:w-1/12 h-1/4 rounded-lg bg-blue font-mono text-xs md:text-xl">
            Logg inn 
        </a>
        <div class="flex justify-center items-center w-1/6 md:w-1/12 h-1/4 rounded-lg bg-blue font-mono text-xs md:text-xl">
            User
        </div>
    </div>
    {#if onload}
    <div id="resten" class="flex justify-evenly items-center w-full h-5/6" in:fade={{duration: 1000}}>
        <div id="betting interface" class="flex flex-col justify-center items-center h-full w-1/3">
            <div id="betting amount buttons" class="flex m-[0.5rem] w-[13rem] justify-between ">
                <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-navy text-sky">1/2</button>
                <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-navy text-sky">2X</button>
                <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-navy text-sky">Max</button>
            </div>
            <div id="betting amount" class="flex items-center bg-navy p-2 border-[2px] border-blue rounded-lg w-[15rem] h-[3rem] mb-[2rem]">
                <img class=" h-5" src="/Gold_Coin.png" alt="gold coin">
                <p class=" mr-3 font-extrabold font-family-bakka text-sm"><input class="text-right style-none bg-navy text-sky outline-none remove-arrow" type="number"></p>
            </div>
            <div id="place bet button" class="mt-[0.5rem]">
                <button id="PlaceButton" disabled={PlaceButton} on:click={() => PlaceBet()} type="button" class="btn rounded-lg w-[14.5rem] h-[3rem] text-sky bg-navy">Place bet</button>
            </div>
        </div>
        <button id="MainButton" disabled={MainButton} on:click={()=>Button()} class="w-4/6 md:w-2/6 h-2/6 md:h-4/6 bg-sky btn rounded-full text-3xl md:text-9xl">{ButtonNumber}</button>
    </div>
    {/if}
</div>
<style>
    .remove-arrow::-webkit-inner-spin-button,
    .remove-arrow::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
    .btn {
      transition: transform 0.05s ease;
    }
    .btn:active {
      transform: scale(0.95);
    }
    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
</style>