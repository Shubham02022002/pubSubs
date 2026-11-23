import { logGames } from "./logger.js";
import { GameManager } from "./store.js";

logGames();

setInterval(() => {
  GameManager.getInstance().addGame(
    Math.random().toString(36).substring(2, 15),
    "Alice",
    "Bob",
  );
}, 5000);
