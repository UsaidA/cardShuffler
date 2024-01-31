import { createContext, useEffect, useState } from "react";
import { CardInterface, DeckOfCardsContextInterface } from "../common/interfaces";

const DeckOfCardsContext = createContext<DeckOfCardsContextInterface>({
  deck: []
});

const DeckOfCardsProvider = ({ children }: any) => {

  const [deck, setDeck] = useState<CardInterface[]>([]);


  useEffect(() => {
    console.log(deck)
  }, [deck]);

  useEffect(()=>{
    setDeck(createDeck());
  },[])

  return (
    <DeckOfCardsContext.Provider value={{deck}}>
      {children}
    </DeckOfCardsContext.Provider>
  );
};




const createDeck = () => {
  const deck: CardInterface[] = [];
  let suits = ["d", "s", "h", "c"];

  for (let i = 0; i < 4; i++) {
    for (let x = 1; x < 14; x++) {

      let temp = '';

      if (x === 1) {
        temp = "a";
        deck.push({
            value: `${temp}`,
            suit: `${suits[i]}`,
            rank: 1
          });
      }else if(x === 11){
        temp = "j"
        deck.push({
            value: `${temp}`,
            suit: `${suits[i]}`,
            rank: 10
          });

      }else if(x === 12){
        temp = "q"

        deck.push({
            value: `${temp}`,
            suit: `${suits[i]}`,
            rank: 10
          });
      } else if(x === 13){
        temp = "k"
        deck.push({
            value: `${temp}`,
            suit: `${suits[i]}`,
            rank: 10
          });
      }
       else {
        deck.push({
            value: `${x}`,
            suit: `${suits[i]}`,
            rank: x
          });
      }

    }
  }


  console.log(1)
  return deck;
};

export {DeckOfCardsContext, DeckOfCardsProvider}