import { useEffect, useState } from "react";
import "../css/playingCard.css";

const PlayingCard: React.FC<{ cardNumber: string; cardSuit: string }> = ({
  cardNumber,
  cardSuit,
}) => {
  const [cardImage, setCardImage] = useState<string | null>(null);

  useEffect(() => {
    const importCardObj = async () => {
      try {
        const image =
          await require(`../CardImages/png/${cardNumber}${cardSuit}.png`);

        setCardImage(image);
      } catch {
        console.log("couldn't import the image");
        setCardImage(null);
      }
    };

    importCardObj();
  }, [cardNumber, cardSuit]);

  return (
    <div>
      {cardImage && (
        <div className="card">
          <img src={cardImage} />
        </div>
      )}
    </div>
  );
};

export default PlayingCard;
