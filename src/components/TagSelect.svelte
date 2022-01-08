<script>
  export let tagList = null;
  import { createEventDispatcher } from "svelte";

  // boilerplate required to produce events
  const dispatch = createEventDispatcher();
  console.log(tagList);
  $: console.log(tagList);
  let selected = "";

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
  @media only screen and (max-width: 600px) {
    .tag-container {
      flex-direction: column;
    }
  }
  .tag-container {
    max-width: 500px;
    display: flex;
    border: 1px solid var(--tag-border);
    margin: 12px auto;
    border-radius: 4px;
    box-shadow: 0px 5px 4px rgba(95, 95, 95, 0.267);
    color: var(--text);
  }

  .tag {
    cursor: pointer;
    padding: 10px 20px 10px 20px;
    flex-grow: 1;
    text-align: center;
  }

  .selected {
    text-decoration: underline;
    background-color: var(--selected);
  }
</style>
