import { useEffect, useState } from "react";
import { CardInterface } from "../../common/interfaces";
import "../../css/cardPeeker.css";
import PlayingCard from "../../commonComponents/Playingcard";

const CardPeeker: React.FC<{
  deck: CardInterface[];
  togglePeeker: () => void;
}> = ({ deck, togglePeeker }) => {

  const [currentCardIndex, setCurrentCardIndex] = useState(deck.length - 1);
  const [displayIndex, setDisplayIndex] = useState(1)

  
  useEffect(()=>{
    let temp  = (deck.length - currentCardIndex)
    setDisplayIndex(temp)


  }, [currentCardIndex])
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % deck.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + deck.length) % deck.length
    );
  };

  return (
    <div className="modal-overlay">
      <div className="card-peeker-modal">
        <button className="back" onClick={togglePeeker}>
          Close
        </button>
        <div className="card-display">
          <PlayingCard
            cardNumber={deck[currentCardIndex].value}
            cardSuit={deck[currentCardIndex].suit}
          />
          <div className="card-nav">
          <button className="nav-button" onClick={nextCard}>
           <i className="arrow left"></i>
            </button>
            <span className="index-display">{displayIndex}</span> 
          
            <button className="nav-button" onClick={prevCard}>
            <i className="arrow right"></i>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPeeker;
