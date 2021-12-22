<script>
  import Flashcard from "./components/Flashcard.svelte";
  let data = null;
  let index = 0;
  fetch("https://drewh.net/aslapi/")
    .then((response) => {
      return response.json();
    })
    .then((passedData) => {
      data = passedData;
      console.log(passedData);
    });

  function nextCard() {
    index++;
  }
</script>

<div class="app-container">
  {#if data != null}
    {#key data[index]._id}
      <Flashcard data={data[index]} />
    {/key}
  {/if}
  <br />
  <button on:click={nextCard}>Next card</button>
</div>

<style>
  .app-container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
