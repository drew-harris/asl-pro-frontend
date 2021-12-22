<script>
  export let data;
  let flipped = false;
  function flip() {
    flipped = !flipped;
  }
  function handleKeydown(event) {
    event.preventDefault();
    if (event.keyCode == 32) {
      flip();
    }
  }
</script>

<div on:click={flip} class="card">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video src={"https://drewh.net/aslcards/" + data.filename} autoplay loop />
  {#if flipped}
    <div class="word">{data.word}</div>
  {:else}
    <div class="click-hint">Show answer</div>
  {/if}
</div>
<svelte:window on:keydown={handleKeydown} />

<style>
  .card {
    border: 1px solid #c4c4c4;
    padding: 20px;
    margin: 20px;
    border-radius: 4px;
    box-shadow: 0px 5px 4px rgba(95, 95, 95, 0.267);
  }
  video {
    margin: auto;
    width: 100% !important;
    height: auto !important;
  }

  .word {
    font-size: 2rem;
    margin: auto;
    text-align: center;
    color: black;
  }

  .click-hint {
    margin: auto;
    text-align: center;
    color: rgb(199, 199, 199);
    cursor: pointer;
  }
</style>
