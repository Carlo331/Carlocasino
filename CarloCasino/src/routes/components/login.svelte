<script>
    import { Popup, Money, Bruker } from '/src/stores'

    let BrukerNavn = ""
    let Password = ""

    function login(){
      $Popup = false
    }

    function register(){
      $Popup = false
      }
</script>
    <div class="flex flex-col items-center justify-between absolute z-20 w-5/6 md:w-2/6 h-4/6 border-2 border-sky bg-blue rounded-xl mt-16">
        <div class="flex flex-col w-5/6 h-2/6 justify-evenly">
            <input class="bg-navy border- text-xl rounded w-full h-12" type="email" bind:value={BrukerNavn} placeholder="Bruker Navn" />
            <input class="bg-navy text-xl rounded w-full h-12" type="password" bind:value={Password} placeholder="Password" />
        </div>
        <div class="flex items-center justify-between w-5/6 h-1/6">
            <button class="bg-navy btn text-2xl w-24 h-10 md:w-28 md:h-12 rounded" on:click={()=>login()}>Login</button>
            <button class="bg-navy btn text-2xl w-12 h-12 rounded" on:click={()=>Popup.set(false)}>X</button>
            <button class="bg-navy btn text-2xl w-24 h-10 md:w-28 md:h-12 rounded" on:click={()=>register()}>Register</button>
        </div>
    </div>

    <style>
        .btn {
          transition: transform 0.05s ease;
        }
        .btn:active {
          transform: scale(0.95);
        }
      </style>