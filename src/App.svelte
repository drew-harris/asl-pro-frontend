<script>
  let data = null;
  fetch("https://drewh.net/aslapi/")
    .then((response) => {
      return response.json();
    })
    .then((passedData) => {
      data = passedData;
      console.log(passedData);
    });
</script>

{#if data != null}
  <div class="card-container">
    {#each data as card}
      <div class="card">
        <div class="card-body">
          <div class="card-title">{card.word}</div>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            autoplay
            loop
            src={"https://drewh.net/aslcards/" + card.filename}
          />
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
