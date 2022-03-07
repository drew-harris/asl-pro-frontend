<script>
  export let tagList = null;
  import { createEventDispatcher } from "svelte";

  // boilerplate required to produce events
  const dispatch = createEventDispatcher();
  console.log(tagList);
  $: console.log(tagList);
  let selected = "";

  function setSelected(tag) {
    dispatch("newTag", { tag: selected });
  }
</script>

{#if tagList != null}
  <select bind:value={selected} on:change={setSelected}>
    {#each tagList as tag}
      {#if tag == ""}
        <option value={tag}>All Cards</option>
      {:else}
        <option value={tag}>{tag}</option>
      {/if}
    {/each}
  </select>
{/if}

<style>
  @media only screen and (max-width: 600px) {
  }

  select {
    background-color: var(--tag-border);
    color: var(--text);
    display: block;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  option {
    color: var(--text);
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
</style>
