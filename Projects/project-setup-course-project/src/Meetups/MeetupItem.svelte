<script>
  import Badge from "../UI/Badge.svelte";
  import Button from "../UI/Button.svelte";
  import customMeetupStore from "../Meetups/meetups-store";
  import { createEventDispatcher } from "svelte";
  export let id;
  export let title;
  export let subtitle;
  export let description;
  export let imageUrl;
  export let address;
  export let contactEmail;
  export let isFavorite;
  const dispatch = createEventDispatcher();

  function deleteMeetup() {
    customMeetupStore.removeMeetup(id);
  }
</script>

<article>
  <header>
    <h1>
      {title}
      {#if isFavorite}
        <Badge>Favorite</Badge>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="content">{description}</div>
  <footer>
    <Button
      mode="outline"
      on:click={() => {
        dispatch("editMeetup", { id });
      }}>✎</Button
    >
    <Button href="mailto:{contactEmail}" slots="button-label">✉️</Button>
    <Button
      mode="outline"
      color={isFavorite ? "" : "success"}
      on:click={() => {
        customMeetupStore.toggleFavorite(id);
      }}>{isFavorite ? "💔" : "❤️"}</Button
    >
    <Button on:click={dispatch("showDetails", { id })}>👁️</Button>
    <Button mode="outline" on:click={deleteMeetup}>🗑️</Button>
  </footer>
</article>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }

  .content {
    height: 4rem;
  }
</style>
