import { logGames } from "./logger.js";
import { gameManager } from "./store.js";

logGames();

setInterval(() => {
  gameManager.addGame(
    Math.random().toString(36).substring(2, 15),
    "Alice",
    "Bob",
  );
}, 5000);
