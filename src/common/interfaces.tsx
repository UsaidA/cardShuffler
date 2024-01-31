export interface CardInterface {
  value: string;
  suit: string;
  rank: number;
}

export interface DeckOfCardsContextInterface {
  deck: CardInterface[];
}

export interface WinnerInterface {
  player: number;
  value: number;
}

export interface ShufferSpaceInterface {
  numOfCardsPerPlayer: number;
  numOfPlayers: number;
  handleBackClick: () => void;
}
