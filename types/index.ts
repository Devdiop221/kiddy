export interface GameState {
  score: number;
  updateScore: (score: number) => Promise<void>;
}
