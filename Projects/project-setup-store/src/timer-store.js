import { readable } from "svelte/store";

let count = 0;
export const timer = readable(count, (set) => {
  const intervalId = setInterval(() => {
    set(++count);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});
