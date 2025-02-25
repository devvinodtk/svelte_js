<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
</script>

<button
  on:click={() => {
    dispatch("add-to-app", "product item");
  }}>Child to Product</button
>
