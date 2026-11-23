import { gameManager } from "./store.js";

export function logGames() {
  setInterval(() => {
    console.log("Current games:", gameManager.getGames());
  }, 5000);
}
