<script>
  import { createEventDispatcher } from "svelte";
  import ProductItem from "./ProductItem.svelte";

  export let title;
  export let price;
  export let id;
  export let bestSeller = false; // any default value
  let dispatch = createEventDispatcher();
</script>

<article>
  <h1>#{id} - {title}</h1>
  {#if bestSeller}
    <h4 style="color: green;">BEST SELLER</h4>
  {/if}
  <h2>${price}</h2>
  <button
    on:click={() => {
      dispatch("add-to-cart", { id });
    }}>Add To Cart</button
  >
  <button
    on:click={() => {
      dispatch("delete-product", { title });
    }}>Delete</button
  >
  <ProductItem
    on:add-to-app={(event) => {
      console.log(`adding item ${event.detail} to product`);
    }}
  />
</article>
