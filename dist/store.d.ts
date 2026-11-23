interface Game {
    id: string;
    blackPlayer: string;
    whitePlayer: string;
    moves: string[];
}
export declare class GameManager {
    games: Game[];
    constructor();
    addMove(gameId: string, move: string): void;
    addGame(gameId: string, blackPlayer: string, whitePlayer: string): void;
    getGames(): Game[];
    logGames(): void;
}
export declare const gameManager: GameManager;
export {};
//# sourceMappingURL=store.d.ts.map