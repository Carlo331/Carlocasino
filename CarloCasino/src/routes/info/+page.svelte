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
    <div id="resten" class="flex flex-col justify-evenly items-start pl-14 w-full h-5/6"  in:fade={{duration: 1000}}>
        <div id="RainInfo" class="flex flex-col items-start w-5/6">
            <span class="text-3xl text-blue">Rain Info</span>
            <span class="text-sm text-sky">Med Rain kan du få gratis penger hver halvtime. Wow det er snilt. Og for tiden er det enda snillere siden det ikke er noe som stopper deg fra å hente penger så ofte du vil.</span>
        </div>
        <div id="BlackjackInfo" class="flex flex-col items-start w-5/6">
            <span class="text-3xl text-blue">Blackjack Info</span>
            <span class="text-sm text-sky">Blackjack er helt vanlig blackjack. Hvis du ikke kan blackjack så er ikke det min skyld. Hvis du vil ha den optimale måten å spille blackjack på så er det bare å gå <a href="https://blackjackdoc.com/blackjack-cheatsheet.htm">(hit)</a>. Det er desverre ingen splitt funksjon fordi det var jævlig ork å mekke, men hvem bryr seg om den eller hva.</span>
        </div>
        <div id="ButtonInfo" class="flex flex-col items-start w-5/6">
            <span class="text-3xl text-blue">Button Info</span>
            <span class="text-sm text-sky">Button kan være litt komplisert, men ikke veldig. Knappen funker slik at hver gang en trykker på den så blir det en 1 % større sjanse for at det starter på nytt og at du mister pengene dine. Men mengden penger du kan trekke ut blir også større hver gang du trykker, så dette er egentlig bare et spill hvor en trenger store baller.</span>
        </div>
    </div>
    {/if}
</div>