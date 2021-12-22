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
    console.log(tags);
    if (index == filtered.length - 1) {
      index = -1;
    }
    index++;
  }

  function applyFilter(event) {
    console.log(event.detail.tag);
    console.log("applying tag", event.detail.tag);
    if (event.detail.tag == "") {
      filtered = data;
      return;
    }
  }
</script>

<div class="app-container">
  <TagSelect tagList={tags} on:newTag={applyFilter} />
  {#if filtered != null}
    {#key filtered[index]._id}
      <Flashcard data={filtered[index]} on:toNext={nextCard} />
    {/key}
  {/if}
  <br />
  <button on:click={nextCard}>Next card (Space)</button>
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
