<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { createEventDispatcher } from "svelte";
  import { isEmpty, isValidEmail } from "../helpers/validation";
  import customMeetupStore from "../Meetups/meetups-store";

  export let meetupId = null;

  let meetupTitle = "";
  let meetupSubtitle = "";
  let meetupDescription = "";
  let meetupImageUrl = "";
  let meetupAddress = "";
  let meetupEmail = "";

  if (meetupId) {
    const unsubscribe = customMeetupStore.subscribe((items) => {
      const selectedMeetup = items.find((item) => item.id === meetupId);
      meetupTitle = selectedMeetup.title;
      meetupSubtitle = selectedMeetup.subtitle;
      meetupDescription = selectedMeetup.description;
      meetupImageUrl = selectedMeetup.imageUrl;
      meetupAddress = selectedMeetup.address;
      meetupEmail = selectedMeetup.contactEmail;
    });

    unsubscribe();
  }

  $: titleValid = !isEmpty(meetupTitle);
  $: subtitleValid = !isEmpty(meetupSubtitle);
  $: descriptionValid = !isEmpty(meetupDescription);
  $: imageUrlValid = !isEmpty(meetupImageUrl);
  $: addressValid = !isEmpty(meetupAddress);
  $: emailValid = isValidEmail(meetupEmail);

  $: isFormValid =
    titleValid &&
    subtitleValid &&
    descriptionValid &&
    imageUrlValid &&
    addressValid &&
    emailValid;

  let dispatch = createEventDispatcher();
  function submitForm() {
    const meetupData = {
      id: meetupId ? meetupId : new Date().getTime(),
      title: meetupTitle,
      subtitle: meetupSubtitle,
      description: meetupDescription,
      imageUrl: meetupImageUrl,
      address: meetupAddress,
      contactEmail: meetupEmail,
      isFavorite: false,
    };

    if (meetupId) {
      customMeetupStore.editMeetup(meetupData);
    } else {
      customMeetupStore.addMeetup(meetupData);
    }
    dispatch("saveMeetUps");
  }
</script>

<Modal title="Add New Meetup" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      valid={titleValid}
      errorMessage="Please add a valid title"
      id="title"
      label="Title"
      type="text"
      value={meetupTitle}
      on:input={(event) => (meetupTitle = event.target.value)}
    />

    <TextInput
      valid={subtitleValid}
      errorMessage="Please add a valid sub-title"
      id="subtitle"
      label="Sub Title"
      type="text"
      value={meetupSubtitle}
      on:input={(event) => (meetupSubtitle = event.target.value)}
    />

    <TextInput
      valid={descriptionValid}
      errorMessage="Please add a valid description"
      id="description"
      label="Description"
      type="textarea"
      value={meetupDescription}
      on:input={(event) => (meetupDescription = event.target.value)}
    />

    <TextInput
      valid={imageUrlValid}
      errorMessage="Please add a valid image URL"
      id="imageUrl"
      label="Image URL"
      type="text"
      value={meetupImageUrl}
      on:input={(event) => (meetupImageUrl = event.target.value)}
    />

    <TextInput
      valid={addressValid}
      errorMessage="Please add a valid address"
      id="address"
      label="Address"
      type="text"
      value={meetupAddress}
      on:input={(event) => (meetupAddress = event.target.value)}
    />

    <TextInput
      valid={emailValid}
      errorMessage="Please add a valid email"
      id="email"
      label="Email"
      type="text"
      value={meetupEmail}
      on:input={(event) => (meetupEmail = event.target.value)}
    />
  </form>
  <div slot="footer">
    <Button mode="outline" on:click={() => dispatch("cancel")}>Close</Button>
    <Button type="submit" disabled={!isFormValid} on:click={submitForm}
      >Save</Button
    >
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
