<script>
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";
  import { tick } from "svelte";
  let products = [
    {
      id: 1,
      price: 9.99,
      title: "A Book",
    },
    {
      id: 2,
      price: 4.9,
      title: "A Pen",
      bestSeller: true,
    },
    {
      id: 3,
      price: 1.0,
      title: "A Pencil",
    },
  ];

  let showModal = false;
  let modalBody = "";
  let termsAgreed = false;

  let text = "This is some dummy string inside the textarea";

  function transformText(event) {
    if (event.which !== 9) {
      return;
    }
    event.preventDefault();

    const value = event.target.value;
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    // The below lines will not work because of the DOM update doesn't happen in sequence.
    // It happens in something like event loop.
    //event.target.selectionStart = selectionStart;
    // event.target.selectionEnd = selectionEnd;

    // To retain the selection we should use something like tick hook.
    tick().then(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
  }
</script>

{#each products as product (product.id)}
  <Product
    {...product}
    on:add-to-cart={(event) => {
      let id = event.detail.id.toString();
      modalBody = `added product ${id} to cart`;
      showModal = true;
    }}
    on:delete-product={(event) => {
      modalBody = `deleted product ${event.detail.title} from cart`;
      showModal = true;
    }}
  />
{/each}

{#if showModal}
  <Modal
    on:close-modal={() => {
      showModal = false;
    }}
    let:didAgree={termsAgreed}
  >
    <div class="modal-header" slot="modal-header">
      <h2>Modal Header</h2>
      <h2
        style="cursor: pointer;"
        on:click={() => {
          showModal = false;
        }}
      >
        X
      </h2>
    </div>
    <p>{modalBody}</p>
    <button
      on:click={() => {
        showModal = false;
      }}
      slot="footer"
      disabled={!termsAgreed}>Confirm</button
    >
  </Modal>
{/if}

<textarea on:keydown={transformText} rows="5" value={text}></textarea>

<style>
  .modal-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10px;
  }
</style>
