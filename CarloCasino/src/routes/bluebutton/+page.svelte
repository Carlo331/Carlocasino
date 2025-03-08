<script>
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Popup, Money, Bruker } from '/src/stores'
    import Login from "../components/login.svelte";
    import Navbar from "../components/navbar.svelte";

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
        MainButton = false
        PlaceButton = true 
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
        MainButton = true
        PlaceButton = false
    }
    }
</script>
<div id="main" class="flex flex-col items-center bg-black w-screen h-screen">
    <Navbar/>
    {#if onload}
    {#if $Popup}
        <Login/>
    {/if}
    <div id="resten" class="flex items-center flex-col-reverse justify-evenly md:flex-row w-full h-5/6" in:fade={{duration: 1000}}>
        <div id="betting interface" class="flex flex-col justify-center items-center h-2/6 w-1/3">
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