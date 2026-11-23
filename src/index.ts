import { games } from "./store.js";
import { logGames } from "./logger.js";

logGames();

setInterval(() => {
  games.push({
    id: Math.random().toString(36).substring(2, 15),
    blackPlayer: "Player1",
    whitePlayer: "Player2",
    moves: [],
  });
}, 5000);
