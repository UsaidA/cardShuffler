import { useContext, useEffect, useState } from "react";
import { DeckOfCardsContext } from "../../services/deckOfCardsContext";
import {
  CardInterface,
  ShufferSpaceInterface,
  WinnerInterface,
} from "../../common/interfaces";
import "../../css/shufflerSpace.css";
import PlayingCard from "../../commonComponents/Playingcard";
import CardPeeker from "./cardPeeker";
import { fisherYatesShuffle } from "../../common/shufflingFunctions";
import Navbar from "../../commonComponents/navBar";
const ShufflerSpace: React.FC<ShufferSpaceInterface> = ({
  numOfCardsPerPlayer,
  numOfPlayers,
  handleBackClick,
}) => {
  const { deck } = useContext(DeckOfCardsContext);
  const [pDeck, setPDeck] = useState(deck);
  const [playerDecks, setPlayerDeck] = useState<Array<Array<CardInterface>>>(
    []
  );
  const [topPlayer, setTopPlayer] = useState<WinnerInterface[]>();
  const [openPeeker, setPeeker] = useState<boolean>(false);
  const deckLimit = 52 - numOfCardsPerPlayer * numOfPlayers;
  const [toggleDealButton, setToggleDealButton] = useState<boolean>(true);
  const [disablePeeker, setDisablePeeker] = useState(false)
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [showDrawAnimation, setShowDrawAnimation] = useState(false);

  useEffect(()=>{
    if (pDeck.length <= deckLimit) {
      setToggleDealButton(false);
    } 

  },[pDeck.length])
  useEffect(() => {
    setPlayerDeck(Array.from({ length: numOfPlayers }, () => []));
    console.log(playerDecks);
  }, [deck, numOfPlayers]);

  useEffect(() => {
    // go through the decks- incrementally push into array any hand that was greater than those before, filter through the resulting array by the highest value found to see if there was any draws

    console.log(playerDecks);
    if (pDeck.length <= deckLimit) {
      let highestVal = 0;
      let victor = 0;
      let victorArr: WinnerInterface[] = [];
      let temp = 0;

      playerDecks.map((playerDeck, i) => {
        playerDeck.forEach((card) => {
          temp += card.rank;
        });
        if (temp >= highestVal) {
          highestVal = temp;
          let obj: WinnerInterface = {
            player: i,
            value: highestVal,
          };
          victorArr.push(obj);
        }
        temp = 0;
      });

      const victors = victorArr.filter((player) => player.value === highestVal);

      console.log(victor, highestVal, victors);
      setTopPlayer(victors);
    }
  }, [pDeck.length]);

  const togglePeeker = () => {
    if(pDeck.length == 0){
      setDisablePeeker(true)


    }else{
      setPeeker(!openPeeker);
    }
 
  };

  const shuffle = () => {
    const shuffledDeck = fisherYatesShuffle([...pDeck]);
    setPDeck(shuffledDeck);
  };

  const handleEnd = () => {
    if (topPlayer?.length === 1) {
      setShowWinAnimation(true);
      setTimeout(() => {
        setShowWinAnimation(false);
      }, 3000);
      console.log("Winner");
    } else {
      setShowDrawAnimation(true);
      setTimeout(() => {
        setShowDrawAnimation(false);
      }, 3000);
      console.log("draws");
    }
  };

  const dealCards = () => {
    if (pDeck.length <= deckLimit) {
      setToggleDealButton(false);
    } else {
      let tempArr = JSON.parse(JSON.stringify(pDeck));

      const newPlayerDecks = playerDecks.map((playerDeck) => {
        return [...playerDeck, tempArr.pop()];
      });

      setPlayerDeck(newPlayerDecks);
      setPDeck(tempArr);
    }
  };

  return (
    <div>
      {showWinAnimation && (
        <div className="win-animation">
          Player {topPlayer && topPlayer[0].player} Won!
          <h5>(with {topPlayer && topPlayer[0].value} points)</h5>
        </div>
      )}

      {showDrawAnimation && (
        <div className="draw-animation">
          Draw between players:
          {topPlayer &&
            topPlayer.map((players, i) => (
              <div key={i}>Player {players.player}</div>
            ))}
        </div>
      )}
      <Navbar handleBackClick={handleBackClick}>
        <div className="buttonGroup">
          <button disabled = {disablePeeker} onClick={() => togglePeeker()} className="Button">
            Peek!
          </button>
          {openPeeker && (
            <CardPeeker deck={pDeck} togglePeeker={togglePeeker} />
          )}

          <button onClick={shuffle} className="Button">
            Shuffle
          </button>
          {toggleDealButton ? (
            <button onClick={dealCards} className="Button">
              Deal
            </button>
          ) : (
            <button onClick={handleEnd} className="EndButton">
              END!
            </button>
          )}
        </div>
      </Navbar>

      <div className="player-areas-container">
        {playerDecks.map((playerDeck, index) => (
          <div key={index} className="eachPlayerArea">
            <div>Player {index}</div>

            {playerDeck.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="card"
                style={{ "--card-index": cardIndex + 1 } as React.CSSProperties}
              >
                <PlayingCard
                  key={cardIndex}
                  cardNumber={card.value}
                  cardSuit={card.suit}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShufflerSpace;
