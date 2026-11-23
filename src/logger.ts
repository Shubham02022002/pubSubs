import { GameManager } from "./store.js";

export function logGames() {
  setInterval(() => {
    console.log("Current games:", GameManager.getInstance().getGames());
  }, 5000);
}
