<script>
  import {
    createEventDispatcher,
    onMount,
    onDestroy,
    beforeUpdate,
    afterUpdate,
  } from "svelte";
  let dispatch = createEventDispatcher();
  let agreed = false;
  let autoScroll = false;
  onMount(() => {
    console.log("On Mount Executed..!!");
  });

  beforeUpdate(() => {
    console.log("Before Update Executed..!!");
    autoScroll = agreed;
  });

  afterUpdate(() => {
    console.log("After Update Executed..!!");
    if (autoScroll) {
      const modal = document.querySelector(".modal");
      modal.scrollTo(0, modal.scrollHeight);
    }
  });

  onDestroy(() => {
    console.log("On Destroy Executed..!!");
  });
  console.log("Script executed..!!");
</script>

<div on:click={() => dispatch("close-modal")} class="backdrop"></div>
<div class="modal">
  <header>
    <slot name="modal-header" />
  </header>
  <div class="content">
    <slot />
  </div>
  <div class="disclaimer">
    <p>Before you close, you need to agree to our terms</p>
    <button
      on:click={() => {
        agreed = true;
      }}>Agree</button
    >
  </div>
  <footer>
    <slot name="footer" didAgree={agreed}>
      <button on:click={() => dispatch("close-modal")} disabled={!agreed}
        >Close</button
      >
    </slot>
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    height: 15vh;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
</style>
