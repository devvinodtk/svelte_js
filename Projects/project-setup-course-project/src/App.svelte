<script>
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Header from "./UI/Header.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

  let meetupTitle = "";
  let meetupSubtitle = "";
  let meetupDescription = "";
  let meetupImageUrl = "";
  let meetupAddress = "";
  let meetupEmail = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hrs",
      description:
        "In this meetup, we will have some experts that teach you how to code.",
      imageUrl: "https://picsum.photos/id/11/2500/1667",
      address: "27th Nerd Road, 32532 New York",
      contactEmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds!",
      imageUrl: "https://picsum.photos/id/14/2500/1667",
      address: "27th Nerd Road, 32532 New York",
      contactEmail: "swim@test.com",
    },
  ];

  function saveMeetUps() {
    meetups = [
      ...meetups,
      {
        id: Math.floor(Math.random()),
        title: meetupTitle,
        subtitle: meetupSubtitle,
        description: meetupDescription,
        imageUrl: meetupImageUrl,
        address: meetupAddress,
        contactEmail: meetupEmail,
      },
    ];
  }
</script>

<Header />
<main>
  <form on:submit|preventDefault={saveMeetUps}>
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

    <Button type="submit" label="Save"></Button>
  </form>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
