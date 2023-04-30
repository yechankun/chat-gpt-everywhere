<script lang="ts">
  import FloatingButton from './components/FloatingButton.svelte';

  let section: HTMLElement;
  let isDragging = false;
  let isClick = true;
  let offsetX: number;
  let offsetY: number;

  function handlePointerDown(event: PointerEvent) {
    isDragging = true;
    isClick = true;
    offsetX = event.clientX - section.getBoundingClientRect().left;
    offsetY = event.clientY - section.getBoundingClientRect().top;
  }

  function handlePointerMove(event: PointerEvent) {
    if (!isDragging) return;
    console.debug('dragging');
    isClick = false;
    section.style.left = event.clientX - offsetX + 'px';
    section.style.top = event.clientY - offsetY + 'px';
  }

  function handlePointerUp() {
    isDragging = false;
  }
</script>

<svelte:window
  on:pointermove={handlePointerMove}
  on:pointerup={handlePointerUp}
/>

<div id="everywhere">
  <section
    class="fixed top-1/2 left-1/2 z-[9999999999] w-auto"
    bind:this={section}
    on:pointerdown={handlePointerDown}
  >
    <FloatingButton {isClick} />
  </section>
</div>

<style>
</style>
