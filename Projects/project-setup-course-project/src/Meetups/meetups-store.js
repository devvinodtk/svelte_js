import { writable } from "svelte/store";

const meetups = writable([
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
]);

const customMeetupStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetup) => {
    meetups.update((items) => {
      return [meetup, ...items];
    });
  },
  removeMeetup: (id) => {
    return meetups.filter((item) => item.id !== id);
  },
  toggleFavorite: (id) => {
    meetups.update((items) => {
      const meetupsCopy = [...items];
      const meetup = meetupsCopy.find((meetup) => meetup.id === id);
      if (meetup) {
        meetup.isFavorite = !meetup.isFavorite;
      }
      return [...meetupsCopy];
    });
  },
};

export default customMeetupStore;
