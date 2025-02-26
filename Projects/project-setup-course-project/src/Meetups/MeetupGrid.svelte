<script>
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";

  export let meetups;
  let favOnly = false;

  function showMeetupsByFilter(event) {
    favOnly = event.detail === 1;
  }

  $: filteredMeetups = favOnly
    ? meetups.filter((items) => items.isFavorite)
    : meetups;
</script>

<section id="meetups-control">
  <MeetupFilter on:showByFilter={showMeetupsByFilter} />
</section>
<section id="meetups">
  {#each filteredMeetups as meetup (meetup.id)}
    <MeetupItem {...meetup} on:showDetails on:editMeetup />
  {/each}
</section>

<style>
  section#meetups-control {
    margin: 0 1rem;
  }
  section#meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section#meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
