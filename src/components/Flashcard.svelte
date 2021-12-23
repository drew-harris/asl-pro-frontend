<script>
  export let data;
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  // boilerplate required to produce events
  const dispatch = createEventDispatcher();
  let flipped = false;
  function flip() {
    flipped = !flipped;
  }
  function handleKeydown(event) {
    if (event.keyCode == 32) {
      event.preventDefault();
      if (!flipped) {
        flip();
      } else {
        dispatch("toNext");
      }
    }
  }
</script>

<div
  in:fly={{ x: 400, duration: 150, delay: 200 }}
  out:fly={{ x: -200, duration: 150 }}
  on:click={flip}
  class="card"
>
  <!-- svelte-ignore a11y-media-has-caption -->
  <div class="video-container">
    <video src={"https://drewh.net/aslcards/" + data.filename} autoplay loop />
  </div>
  {#if flipped}
    <div class="word">{data.word}</div>
    <div class="tag">{data.tag}</div>
  {:else}
    <div class="click-hint">Show answer</div>
  {/if}
</div>
<svelte:window on:keydown={handleKeydown} />

<style>
  @media only screen and (min-width: 600px) {
    video {
      transform-origin: top;
      transform: scale(1.35);
    }
    .video-container {
      overflow: hidden;
    }
  }
  .card {
    max-width: 500px;
    border: 1px solid #c4c4c4;
    padding: 20px;
    margin: 10px auto;
    border-radius: 4px;
    box-shadow: 0px 5px 4px rgba(95, 95, 95, 0.267);
  }
  video {
    margin: auto;
    width: 100% !important;
    height: auto !important;
  }

  .video-container {
    width: 100%;
  }

  .word {
    font-size: 2rem;
    margin: auto;
    text-align: center;
    color: black;
    margin-top: 10px;
  }

  .tag {
    margin: auto;
    margin-top: 10px;
    text-align: center;
    color: rgb(199, 199, 199);
    cursor: pointer;
  }

  .click-hint {
    margin: auto;
    margin-top: 10px;
    text-align: center;
    color: rgb(116, 116, 116);
    cursor: pointer;
  }
</style>
