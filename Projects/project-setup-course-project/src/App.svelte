<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import customMeetupStore from "./Meetups/meetups-store";
  import MeetupDetails from "./Meetups/MeetupDetails.svelte";

  let meetups = [];
  customMeetupStore.subscribe((items) => {
    console.log(items);
    meetups = items;
  });

  let showMeetupForm = false;
  let page = "overview";
  let meetupId = null;

  function saveMeetUps() {
    showMeetupForm = false;
    meetupId = null;
  }
</script>

<Header />
<main>
  {#if showMeetupForm}
    <EditMeetup
      on:saveMeetUps={saveMeetUps}
      on:cancel={() => {
        showMeetupForm = false;
        meetupId = null;
      }}
      {meetupId}
    />
  {/if}
  {#if page === "detailview"}
    <MeetupDetails
      id={meetupId}
      on:cancelShowDetails={() => {
        page = "overview";
        meetupId = null;
      }}
    />
  {:else if page === "overview"}
    <div class="meetup-control">
      <Button on:click={() => (showMeetupForm = !showMeetupForm)}
        >Add New MeetUp</Button
      >
    </div>
    <MeetupGrid
      {meetups}
      on:showDetails={(event) => {
        meetupId = event.detail.id;
        page = "detailview";
      }}
      on:editMeetup={(event) => {
        meetupId = event.detail.id;
        showMeetupForm = true;
      }}
    />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-control {
    margin: 1rem;
  }
</style>
