<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "";
  let image = "";
  let description = "";

  let formState = "empty";

  let contactInfoArray = [];

  function addContactCard() {
    if (
      name.trim().length === 0 ||
      title.trim().length === 0 ||
      image.trim().length === 0 ||
      description.trim().length === 0
    ) {
      formState = "invalid";
    } else {
      let contactInfo = {
        id: Math.random(),
        name,
        title,
        image,
        description,
      };
      contactInfoArray = [...contactInfoArray, contactInfo];
      formState = "done";
    }
  }

  function deleteFirst() {
    contactInfoArray = contactInfoArray.slice(1);
  }

  function deleteLast() {
    contactInfoArray = contactInfoArray.slice(0, -1);
  }
</script>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>

<button on:click={addContactCard}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>

{#if formState === "invalid"}
  <p>Form fields are not filled completely.</p>
{/if}

{#each contactInfoArray as contact, index (contact.id)}
  <ContactCard
    {index}
    userName={contact.name}
    jobTitle={contact.title}
    description={contact.description}
    userImage={contact.image}
  />
{/each}

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>
