<script>
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { Popup, Money, Bruker } from '/src/stores'
    import Login from "../components/login.svelte";
    import Navbar from "../components/navbar.svelte";
    import { doc, updateDoc, getDoc } from 'firebase/firestore';
    import { db } from '/src/lib/firebase';

    let onload = false

    onMount(() => {
        onload = true
    })

    let MainButton = true
    let PlaceButton = false
    let CashButton = true
    let ButtonNumber = 0 
    let LiveBetAmount = null 
    let BetAmount = 0
    let CashMultiplier = 0

    let lastCallTime = 0
    const debounceTime = 150

    function PlaceBet(){
        if (LiveBetAmount > $Money){
        alert("Bro " + LiveBetAmount + " er større enn " + $Money + ", du kan ikke gå i minus din Nåldus")
    }
    else{
        $Money = $Money - LiveBetAmount
        UpdateFirebase()
        BetAmount = LiveBetAmount
        console.log(BetAmount)
        MainButton = false
        PlaceButton = true 
        CashButton = false
    }
    }

    function CashOut(){
        $Money = $Money + Math.round(BetAmount * CashMultiplier)
        UpdateFirebase()
        ButtonNumber = 0
        CashMultiplier = 0
        console.log("Cashout" + Math.round(BetAmount * CashMultiplier))
        MainButton = true
        PlaceButton = false
        CashButton = true
    }

    async function Button(){
    const currentTime = Date.now()
    if (currentTime - lastCallTime < debounceTime) {
        return
    }
    lastCallTime = currentTime

    CashMultiplier = Math.exp(ButtonNumber / 16).toFixed(2)

    ButtonNumber = ButtonNumber + 1

    let Random = Math.round(Math.random() * 99) 
    console.log("Random", Random)
    
    if(Random <= ButtonNumber - 1){
        ButtonNumber = 0
        CashMultiplier = 0
        console.log("død")
        MainButton = true
        PlaceButton = false
        CashButton = true
    }
    }

    async function UpdateFirebase(){
        try {
        const userDocRef = doc(db, 'users', $Bruker)
        const userDocSnap = await getDoc(userDocRef)
        if (userDocSnap.exists()) {
          console.log("Updating high score for user:", $Bruker)
          await updateDoc(userDocRef, {
            Money: $Money
          })
          console.log("High Score updated")
        } 
        else {
          alert("Du har ingen bruker. Dette gjør at din Highscore ikke blir lagret til neste gang")
        }
      } 
      catch (error) {
        alert("error: " + error)
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
                <button type="button" on:click={() => (LiveBetAmount = Math.round(LiveBetAmount/2))} class="btn rounded-lg w-[4rem] h-[2.5rem] bg-navy text-sky">1/2</button>
                <button type="button" on:click={() => (LiveBetAmount = Math.round(LiveBetAmount*2))} class="btn rounded-lg w-[4rem] h-[2.5rem] bg-navy text-sky">2X</button>
                <button type="button" on:click={() => (LiveBetAmount = $Money)} class="btn rounded-lg w-[4rem] h-[2.5rem] bg-navy text-sky">Max</button>
            </div>
            <div id="betting amount" class="flex items-center bg-navy p-2 border-[2px] border-blue rounded-lg w-[15rem] h-[3rem] mb-2">
                <img class=" h-5" src="/Gold_Coin.png" alt="gold coin">
                <p class=" mr-3 font-extrabold font-family-bakka text-sm"><input class="text-right style-none bg-navy text-sky outline-none remove-arrow" bind:value={LiveBetAmount} type="number" placeholder="Bet Amount"></p>
            </div>
            <div class="w-56 flex justify-evenly text-sky">
                <span class="flex flex-col items-center text-lg">{CashMultiplier} <span class="text-lg">Multiplier</span></span>
                <span class="flex flex-col items-center text-lg">{Math.round(BetAmount * CashMultiplier)} <span class="text-lg">Cashout</span></span>
            </div>
            <div id="place bet button" class="mt-[0.5rem]">
                <button id="PlaceButton" disabled={PlaceButton} on:click={() => PlaceBet()} type="button" class="btn rounded-lg w-[14.5rem] h-[3rem] text-sky bg-navy">Place bet</button>
            </div>
            <div id="Withdraw Button" class="mt-[0.5rem]">
                <button id="Cashout" disabled={CashButton} on:click={() => CashOut()} type="button" class="btn rounded-lg w-[13rem] h-[3rem] text-sky bg-navy">Cashout</button>
            </div>
        </div>
        <button id="MainButton" disabled={MainButton} on:click={()=>Button()} class=" flex items-center justify-center w-4/6 md:w-2/6 h-2/6 md:h-4/6 bg-sky btn rounded-full flex-col text-3xl md:text-9xl">       
            {ButtonNumber}
        </button>
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