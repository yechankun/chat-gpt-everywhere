<script lang="ts">
  import { base64 } from '~/assets/logo.png?base64=20&run';
  import { fade, fly } from 'svelte/transition';

  let button: HTMLElement;
</script>

<button
  bind:this={button}
  class="cursor-pointer select-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
>
  <img src={base64} alt="Logo" class="pointer-events-none select-none" />
</button>
