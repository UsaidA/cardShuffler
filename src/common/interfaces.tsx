export interface CardInterface {
  value: string;
  suit: string;
  rank: number;
}
export interface PlayingCardComponentInterface{
  cardNumber: string; 
  cardSuit: string 

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
