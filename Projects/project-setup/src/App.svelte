<script>
  import ContactCard from "./ContactCard.svelte";

  export let name;
  export let age;
  export let jobTitle;
  export let imageUrl;

  $: uppercaseName = name.toUpperCase();

  $: if (name === "Maximilian") {
    age = 35;
  }

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Maximilian";
  }

  function changeUserName(event) {
    name = event.target.value;
  }
</script>

<h1>Hello I am {uppercaseName} and my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click={changeName}>Change Name</button>
<!-- <input type="text" value={name} on:input={changeUserName} /> -->
<input type="text" bind:value={name} />
<input type="text" bind:value={jobTitle} />

<ContactCard userName={uppercaseName} {jobTitle} {imageUrl} />

<style>
  h1 {
    color: purple;
  }
</style>
