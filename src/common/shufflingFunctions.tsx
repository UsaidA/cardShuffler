import { CardInterface } from "./interfaces";

export function fisherYatesShuffle(deck: CardInterface[]): CardInterface[] {
  console.log(2);
  const deckCopy = [...deck];

  let i = deckCopy.length;
  while (--i > 0) {
    let temp = Math.floor(Math.random() * (i + 1));
    [deckCopy[temp], deckCopy[i]] = [deckCopy[i], deckCopy[temp]];
  }

  return deckCopy;
}
