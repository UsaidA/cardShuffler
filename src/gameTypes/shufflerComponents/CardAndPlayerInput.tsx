import { useState } from "react";
import "../../css/CardAndInputPlayer.css";

const CardAndPlayerInput: React.FC<{
  setCards: (val: any) => void;
  setPlayers: (val: any) => void;
}> = ({ setCards, setPlayers }) => {
  const [cardInput, setCardInput] = useState<number>(0);
  const [playerInput, setPlayerInput] = useState<number>(0);
  const [numOfCards, setnumOfCards] = useState<number>(52);
  const [toggle, setToggle] = useState<boolean | undefined>(false);

  const handleOnChangeCards = (val: any) => {
    const numGiven = parseInt(val.target.value);

    if(numGiven < 0 ){
      console.log("can't have negative numbers")
    }
    if (numGiven > numOfCards) {
      console.log("Can't get more cards per person");
    } else {
      console.log(numGiven, numOfCards);
      setCardInput(numGiven);
    }
  };

  const handleOnChangePlayers = (val: any) => {
    const numGiven = parseInt(val.target.value);

    if (numGiven < 0) {
      console.log("can't have negative number of players");
    } else {
      console.log(numGiven, numOfCards);
      setPlayerInput(numGiven);
    }
  };

  const onBlurOfCards = (val: any) => {
    setToggle(undefined);

    setCards(val);
  };

  const onBlurOfPlayers = (val: any) => {
    let temp = !toggle;
    setToggle(temp);

    let numOfPlayers = parseInt(val.target.value);
    let numOfCardsAvailable = numOfCards;

    numOfCardsAvailable = numOfCardsAvailable / numOfPlayers;

    setnumOfCards(numOfCardsAvailable);
    setPlayers(val);
  };

  return (
    <div className="center-container">
      <div className="input-container">
        <div className="generalDiv">
          <label htmlFor="numOfCardsInput">Number of Cards Per Player:</label>
          <input
            id="numOfCardsInput"
            value={cardInput}
            onChange={handleOnChangeCards}
            type="number"
            onBlur={onBlurOfCards}
            style={{ width: "400px", height: "50px", fontSize: "1.5em" }}
            disabled={!toggle}
          />
        </div>
        <div>
          <label htmlFor="numOfPlayersInput">Number of Players:</label>
          <input
            id="numOfPlayersInput"
            type="number"
            value={playerInput}
            onChange={handleOnChangePlayers}
            onBlur={onBlurOfPlayers}
            style={{ width: "400px", height: "50px", fontSize: "1.5em" }}
            disabled={toggle === undefined ? true : toggle}
          />
        </div>

        <br />
      </div>
    </div>
  );
};

export default CardAndPlayerInput;
