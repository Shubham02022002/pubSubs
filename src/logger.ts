import { games } from "./store.js";

export function logGames() {
  setInterval(() => {
    console.log("Current games:", games);
  }, 5000);
}
