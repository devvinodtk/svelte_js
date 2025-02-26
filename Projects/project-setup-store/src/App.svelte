<script>
  import { onDestroy } from "svelte";
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import { timer } from "./timer-store";
  import { elapsed } from "./date-store";

  // let unsubscribeTimer = timer.subscribe((count) => {
  //   console.log(count);
  // });

  // let elapsedVal = elapsed.subscribe((time) => {
  //   console.log(time);
  // });

  // onDestroy(() => {
  //   unsubscribeTimer();
  //   elapsedVal();
  // });
</script>

<Cart />
<Products />
