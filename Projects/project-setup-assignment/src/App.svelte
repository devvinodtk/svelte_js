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

  let agreed = false;
  let favColor = "red";
  let favBev = [];
  let myColor = "red";
  let username = "";

  $: console.log("agreed: ", agreed);
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

<label for="checkbox">
  Agree to terms
  <input type="checkbox" bind:checked={agreed} />
</label>

<h1>Favorite color: {favColor}</h1>
<label for="color-red">
  <input
    type="radio"
    value="red"
    bind:group={favColor}
    name="color"
    id="color-red"
  /> Red
</label>
<label for="color-green">
  <input
    type="radio"
    value="green"
    bind:group={favColor}
    name="color"
    id="color-green"
  /> Green
</label>
<label for="color-blue">
  <input
    type="radio"
    value="blue"
    bind:group={favColor}
    name="color"
    id="color-blue"
  /> Blue
</label>

<h1>Favorite Beverage: {favBev}</h1>

<label for="bev-tea">
  <input
    type="checkbox"
    value="Tea"
    bind:group={favBev}
    name="bev"
    id="bev-tea"
  /> Tea
</label>
<label for="bev-coffee">
  <input
    type="checkbox"
    value="Coffee"
    bind:group={favBev}
    name="bev"
    id="bev-coffee"
  /> Coffee
</label>
<label for="bev-beer">
  <input
    type="checkbox"
    value="Beer"
    bind:group={favBev}
    name="bev"
    id="bev-beer"
  /> Beer
</label>
<br />

<h1>Select a color: {myColor}</h1>
<select bind:value={myColor}>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>
<br /> <br />

<input type="text" bind:this={username} />
<button
  on:click={() => {
    console.log(username.value);
  }}>Save</button
>

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
