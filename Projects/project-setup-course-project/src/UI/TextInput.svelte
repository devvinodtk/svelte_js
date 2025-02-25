<script>
  export let label;
  export let id;
  export let value;
  export let type;
  export let valid = true;
  export let errorMessage = "";
  let isDirty = false;
</script>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if type === "text"}
    <input
      class:invalid={!valid && isDirty}
      {id}
      type="text"
      {value}
      on:input
      on:blur={() => {
        isDirty = true;
      }}
    />
  {:else if type === "email"}
    <input
      {id}
      class:invalid={!valid && isDirty}
      type="email"
      {value}
      on:input
      on:blur={() => {
        isDirty = true;
      }}
    />
  {:else}
    <textarea
      class:invalid={!valid && isDirty}
      {id}
      row="3"
      {value}
      on:input
      on:blur={() => {
        isDirty = true;
      }}
    />
  {/if}
  {#if isDirty && !valid && errorMessage}
    <p class="error-message">{errorMessage}</p>
  {/if}
</div>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }

  .invalid {
    border-color: red;
    background-color: rgb(240, 151, 151);
  }

  .error-message {
    color: red;
    margin: 0.25rem 0;
  }
</style>
