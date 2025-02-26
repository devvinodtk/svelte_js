<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import customMeetupStore from "./Meetups/meetups-store";

  let meetups = [];
  customMeetupStore.subscribe((items) => {
    console.log(items);
    meetups = items;
  });

  let showMeetupForm = false;

  function saveMeetUps() {
    showMeetupForm = false;
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
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-control {
    margin: 1rem;
  }
</style>
