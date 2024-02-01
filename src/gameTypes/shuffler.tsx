import { useContext, useEffect, useState } from "react";
import { DeckOfCardsContext } from "../services/deckOfCardsContext";
import CardAndPlayerInput from "./shufflerComponents/CardAndPlayerInput";
import "../css/shuffler.css";
import PlayingCard from "../commonComponents/Playingcard";
import { CSSTransition } from "react-transition-group";
import ShufflerSpace from "./shufflerComponents/shufflerSpace";
import NavBar from "../commonComponents/navBar";

const Shuffler = (props: any) => {
  const [error, setError] = useState<string | null>(null);
  const [displayCAPBool, setDisplayCAP] = useState<boolean>(true);
  const [numOfCardsPerPerson, setNumberOfCardsPerPerson] = useState<number>(0);
  const [numOfPlayers, setNumOfPlayers] = useState<number>(0);

  const setNumOfCardsCallback = (val: any) => {
    const cards = val.target.value;
    setNumberOfCardsPerPerson(cards);
  };
  const setNumOfPlayersCallback = (val: any) => {
    const players = val.target.value;
    setNumOfPlayers(players);
  };
  const handleBackClick = () => {
    setDisplayCAP(true);
  };

  const onGo = () => {
    if (numOfCardsPerPerson === 0 || numOfPlayers === 0) {
      setError("Please Give an appropriate number of cards and players first!");
      console.log("no");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      setDisplayCAP(false);
      setError(null);
    }
  };

  useEffect(() => {
    console.log(numOfCardsPerPerson);
  }, [numOfCardsPerPerson]);

  useEffect(() => {
    console.log(numOfPlayers);
  }, [numOfPlayers]);
  useEffect(() => {
    console.log(displayCAPBool);
  }, [displayCAPBool]);

  return (
    <div>
      <div>
        <CSSTransition
          in={displayCAPBool}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          
          <div className="parent-container">
       
            <div className="center-container">

              <div>
                <CardAndPlayerInput
                  setCards={setNumOfCardsCallback}
                  setPlayers={setNumOfPlayersCallback}
                />
              </div>
              <div>
                <div>{error && <div>{error}</div>}</div>
              </div>
            </div>
            <div>
              <button className="goButton" onClick={onGo}>
                GO!
              </button>
            </div>
          </div>
        </CSSTransition>

        <div>
          {displayCAPBool || (
            <div>
              <div>
                <div></div>
              </div>

              <ShufflerSpace
                numOfCardsPerPlayer={numOfCardsPerPerson}
                numOfPlayers={numOfPlayers}
                handleBackClick={handleBackClick}
              ></ShufflerSpace>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shuffler;
