export class GameManager {
    games = [];
    constructor() {
        this.games = [];
    }
    addMove(gameId, move) {
        const game = this.games.find((g) => g.id === gameId);
        if (game) {
            game.moves.push(move);
        }
        else {
            console.error(`Game with ID ${gameId} not found.`);
        }
    }
    addGame(gameId, blackPlayer, whitePlayer) {
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
//# sourceMappingURL=store.js.map