<script>
  import { onDestroy } from "svelte";
  import cart from "./cart-store";
  import CartItem from "./CartItem.svelte";
  let items = [];

  // const cartSubscription = cart.subscribe((its) => {
  //   items = its;
  // });

  // onDestroy(() => {
  //   if (cartSubscription) {
  //     // Unsubscribe the prev subscription on component un-mount
  //     cartSubscription();
  //   }
  // });
</script>

<section>
  <h1>Cart</h1>
  <ul>
    {#each $cart as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
