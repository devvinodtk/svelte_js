<script>
  export let password;
  let validatePassword = "invalid";

  let passwordsArray = [];

  $: if (password) {
    if (password.length < 5) {
      validatePassword = "Too short";
    } else if (password.length > 10) {
      validatePassword = "Too long";
    } else {
      validatePassword = "valid";
    }
  }

  function savePasswords() {
    let isDuplicate = passwordsArray.includes(password);
    if (validatePassword === "valid" && !isDuplicate) {
      passwordsArray = [...passwordsArray, password];
    }
  }

  function deletePassword(event, index) {
    console.log(event);
    if (index > -1) {
      passwordsArray = passwordsArray.filter((pw, idx) => idx !== index);
    }
  }
</script>

{#if password && password.length >= 5 && password.length <= 10}
  <p id="password">{password}</p>
{:else if password && password.length < 5}
  <p id="short">Too short</p>
{:else if password && password.length > 10}
  <p id="long">Too Long</p>
{/if}
<input type="password" bind:value={password} />
<button on:click={savePasswords}>Add Password</button>
<ul>
  {#each passwordsArray as password, i (password)}
    <li on:click={deletePassword(event, i)}>
      {password}
    </li>
  {/each}
</ul>

<style>
  #password {
    color: green;
  }
  #short,
  #long {
    color: red;
  }

  li {
    cursor: pointer;
  }
</style>
