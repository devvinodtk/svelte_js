<script>
  import Button from "../UI/Button.svelte";
  import CartItems from "../Cart/cart-store";
  import products from "../Products/product-store";
  import { onDestroy } from "svelte";

  export let title;
  export let price;
  export let id;
  let description = null;

  let showDescription = false;
  let productSubscription = null;

  function displayDescription(id) {
    productSubscription = products.subscribe((items) => {
      description = items.find((item) => item.id === id)?.description;
    });
    productSubscription();
    showDescription = !showDescription;
  }

  function removeFromCart(itemId) {
    // ...
    console.log("Removing...");
    CartItems.removeItem(itemId);
  }
</script>

<li>
  <h1>{title}</h1>
  <h2>{price}</h2>
  <Button mode="outline" on:click={displayDescription(id)}>
    {showDescription ? "Hide Description" : "Show Description"}
  </Button>
  <Button on:click={removeFromCart(id)}>Remove from Cart</Button>
  {#if showDescription && description}
    <p>{description}</p>
  {:else if showDescription}
    <p>Not available :(</p>
  {/if}
</li>

<style>
  li {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h2 {
    color: #494949;
    margin-bottom: 1rem;
  }
</style>
