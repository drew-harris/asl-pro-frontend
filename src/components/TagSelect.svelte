<script>
  export let tagList = null;
  import { createEventDispatcher } from "svelte";

  // boilerplate required to produce events
  const dispatch = createEventDispatcher();
  console.log(tagList);
  $: console.log(tagList);
  let selected = null;
  function setSelected(tag) {
    dispatch("newTag", { tag: tag });
    selected = tag;
  }
</script>

<div class="tag-container">
  {#if tagList != null}
    {#each tagList as tag}
      <div
        class={tag == selected ? "tag selected" : "tag"}
        on:click={setSelected(tag)}
      >
        {tag != "" ? tag : "All cards"}
      </div>
    {/each}
  {/if}
</div>

<style>
  .tag-container {
    display: flex;
    gap: 25px;
    border: 1px solid #c4c4c4;
    padding: 20px;
    margin: 20px;
    border-radius: 4px;
    box-shadow: 0px 5px 4px rgba(95, 95, 95, 0.267);
  }

  .tag {
    cursor: pointer;
  }

  .selected {
    text-decoration: underline;
  }
</style>
