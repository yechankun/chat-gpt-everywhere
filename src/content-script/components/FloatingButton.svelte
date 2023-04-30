<script lang="ts">
  import { base64 } from '~/assets/logo.png?base64=20&run';
  import { fade, fly } from 'svelte/transition';

  let button: HTMLElement;
  export let isClick: boolean;
  let showPopup = false;

  function handleClick() {
    if (isClick) {
      console.debug('버튼 클릭!');
      showPopup = !showPopup;
    }
  }
</script>

<button
  bind:this={button}
  class="cursor-pointer select-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
  on:click={handleClick}
>
  <img src={base64} alt="Logo" class="pointer-events-none select-none" />
</button>
{#if showPopup}
  <h1 in:fly={{ y: 30, duration: 2000 }} out:fade>
    <mark>Sex</mark> on the <mark>Beach</mark>
  </h1>
{/if}

<style>
</style>
