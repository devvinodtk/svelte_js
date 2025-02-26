<script>
  import { createEventDispatcher } from "svelte";
  let active = "all";
  const dispatch = createEventDispatcher();
</script>

<div>
  <button
    class:active={active === "all"}
    type="button"
    on:click={() => {
      dispatch("showByFilter", 0);
      active = "all";
    }}>All</button
  >
  <button
    class:active={active === "fav"}
    type="button"
    on:click={() => {
      dispatch("showByFilter", 1);
      active = "fav";
    }}>Favorites</button
  >
</div>

<style>
  div {
    font-size: 0px;
  }

  button {
    background: #aaaaaa;
    font: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 0.5rem 1rem;
  }

  button:focus {
    outline: none;
  }

  button:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  button:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  button:hover,
  button:active,
  .active {
    background: #cf0056;
    border-color: #cf0056;
    color: white;
  }
</style>
