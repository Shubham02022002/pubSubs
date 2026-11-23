interface Game {
  id: string;
  blackPlayer: string;
  whitePlayer: string;
  moves: string[];
}

export class GameManager {
  games: Game[] = [];
  constructor() {
    this.games = [];
  }

  addMove(gameId: string, move: string) {
    const game = this.games.find((g) => g.id === gameId);
    if (game) {
      game.moves.push(move);
    } else {
      console.error(`Game with ID ${gameId} not found.`);
    }
  }

  addGame(gameId: string, blackPlayer: string, whitePlayer: string) {
    const game = {
      id: gameId,
      blackPlayer,
      whitePlayer,
      moves: [],
    };
    this.games.push(game);
  }

  getGames() {
    return this.games;
  }

  logGames() {
    setInterval(() => {
      console.log("Current games:", this.games);
    }, 5000);
  }
}

export const gameManager = new GameManager();
