<script>
  import { getTags } from "./utils/tags";
  import Flashcard from "./components/Flashcard.svelte";
  import TagSelect from "./components/TagSelect.svelte";
  let data = null;
  let tags = null;
  let index = 0;
  let filtered = null;

  getCards();
  index = 0;

  async function getCards() {
    tags = await getTags();
    const response = await fetch("https://drewh.net/aslapi/");
    const d = await response.json();
    data = d;
    filtered = d;
  }

  function nextCard() {
    if (index == filtered.length - 1) {
      index = -1;
    }
    index++;
  }

  function applyFilter(event) {
    console.log(event.detail.tag);
    console.log("applying tag", event.detail.tag);
    index = 0;
    if (event.detail.tag == "") {
      filtered = data;
      console.log(filtered);
      return;
    } else {
      filtered = data.filter((obj) => obj.tag == event.detail.tag);
      console.log(filtered);
    }
  }
</script>

<div class="app-container">
  <TagSelect tagList={tags} on:newTag={applyFilter} />
  {#if filtered != null}
    <div class="progress-container">
      <progress max={filtered.length} value={index} />
    </div>
  {/if}
  {#if filtered != null}
    {#key filtered[index]._id}
      <Flashcard data={filtered[index]} on:toNext={nextCard} />
    {/key}
  {/if}
  <div class="button-container">
    <button on:click={nextCard}>Next card (Space)</button>
  </div>
</div>

<style>
  .app-container {
    padding-left: 12px;
    padding-right: 12px;
  }
  progress {
    margin: 10px auto;
    width: min(400px, 80vw);
  }

  .progress-container {
    margin: auto;
    display: flex;
  }

  button {
    margin: 12px auto;
  }

  .button-container {
    display: flex;
  }
</style>
