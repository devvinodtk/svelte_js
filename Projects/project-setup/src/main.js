import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Max",
    age: 30,
    jobTitle: "Software Developer",
    imageUrl:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  },
});

export default app;
