import { useState } from "react";
import { CardInterface } from "../../common/interfaces";
import "../../css/cardPeeker.css";
import PlayingCard from "../../commonComponents/Playingcard";

const CardPeeker: React.FC<{
  deck: CardInterface[];
  togglePeeker: () => void;
}> = ({ deck, togglePeeker }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(deck.length - 1);

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
        <button className="close-button" onClick={togglePeeker}>
          Close
        </button>
        <button className="nav-button" onClick={prevCard}>
          Next
        </button>
        <div className="card-display">
          <PlayingCard
            cardNumber={deck[currentCardIndex].value}
            cardSuit={deck[currentCardIndex].suit}
          ></PlayingCard>
        </div>
        <button className="nav-button" onClick={nextCard}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default CardPeeker;
