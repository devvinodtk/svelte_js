<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { createEventDispatcher } from "svelte";

  let meetupTitle = "";
  let meetupSubtitle = "";
  let meetupDescription = "";
  let meetupImageUrl = "";
  let meetupAddress = "";
  let meetupEmail = "";

  let dispatch = createEventDispatcher();
  function submitForm() {
    dispatch("saveMeetUps", {
      id: Math.floor(Math.random()),
      title: meetupTitle,
      subtitle: meetupSubtitle,
      description: meetupDescription,
      imageUrl: meetupImageUrl,
      address: meetupAddress,
      contactEmail: meetupEmail,
      isFavorite: false,
    });
  }
</script>

<Modal title="Add New Meetup" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      type="text"
      value={meetupTitle}
      on:input={(event) => (meetupTitle = event.target.value)}
    />

    <TextInput
      id="subtitle"
      label="Sub Title"
      type="text"
      value={meetupSubtitle}
      on:input={(event) => (meetupSubtitle = event.target.value)}
    />

    <TextInput
      id="description"
      label="Description"
      type="textarea"
      value={meetupDescription}
      on:input={(event) => (meetupDescription = event.target.value)}
    />

    <TextInput
      id="imageUrl"
      label="Image URL"
      type="text"
      value={meetupImageUrl}
      on:input={(event) => (meetupImageUrl = event.target.value)}
    />

    <TextInput
      id="address"
      label="Address"
      type="text"
      value={meetupAddress}
      on:input={(event) => (meetupAddress = event.target.value)}
    />

    <TextInput
      id="email"
      label="Email"
      type="text"
      value={meetupEmail}
      on:input={(event) => (meetupEmail = event.target.value)}
    />
  </form>
  <div slot="footer">
    <Button mode="outline" on:click={() => dispatch("cancel")}>Close</Button>
    <Button type="submit" on:click={submitForm}>Save</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
