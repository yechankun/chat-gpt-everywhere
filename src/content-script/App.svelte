<script lang="ts">
  import FloatingButton from './components/FloatingButton.svelte';

  let section: HTMLElement;
</script>

<div id="everywhere">
  <section
    class="fixed top-1/2 left-1/2 z-[9999999999] w-auto"
    bind:this={section}
  >
    <FloatingButton />
  </section>
</div>
