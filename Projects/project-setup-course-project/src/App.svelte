<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import Modal from "./UI/Modal.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Coding BootCamp",
      subtitle: "Learn to code in 2 hrs",
      description:
        "In this meetup, we will have some experts that teach you how to code.",
      imageUrl: "https://picsum.photos/id/11/2500/1667",
      address: "27th Nerd Road, 32532 New York",
      contactEmail: "code@test.com",
      isFavorite: false,
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds!",
      imageUrl: "https://picsum.photos/id/14/2500/1667",
      address: "27th Nerd Road, 32532 New York",
      contactEmail: "swim@test.com",
      isFavorite: false,
    },
  ];

  let showMeetupForm = false;

  function saveMeetUps(event) {
    const data = event.detail;
    meetups = [...meetups, { ...data }];
    showMeetupForm = false;
  }

  function toggleFavoriteOnMeetups(event) {
    const meetupId = event.detail.id;
    const meetupsCopy = [...meetups];
    const meetup = meetupsCopy.find((meetup) => meetup.id === meetupId);
    if (meetup) {
      meetup.isFavorite = !meetup.isFavorite;
    }
    meetups = [...meetupsCopy];
    console.log(meetups);
  }
</script>

<Header />
<main>
  <div class="meetup-control">
    <Button on:click={() => (showMeetupForm = !showMeetupForm)}
      >Add New MeetUp</Button
    >
  </div>
  {#if showMeetupForm}
    <EditMeetup
      on:saveMeetUps={saveMeetUps}
      on:cancel={() => {
        showMeetupForm = false;
      }}
    />
  {/if}
  <MeetupGrid on:toggleFavorite={toggleFavoriteOnMeetups} {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-control {
    margin: 1rem;
  }
</style>
