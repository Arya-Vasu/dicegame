import "./Game.css";
import dice_1 from "../../dice_1.png";
import dice_2 from "../../dice_2.png";
import dice_3 from "../../dice_3.png";
import dice_4 from "../../dice_4.png";
import dice_5 from "../../dice_5.png";
import dice_6 from "../../dice_6.png";
import { useState } from "react";

export default function Game({
  total,
  setTotal,
  showRules,
  setShowRules,
  setShowError,
  activeButton,
  setActiveButton,
  selection,
}) {
  const images = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
  const [currentImage, setCurrentImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );
  const [isRotating, setIsRotating] = useState(false);

  const rotate = () => {
    if (activeButton) {
      setIsRotating(true);
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
      const timer = setTimeout(() => {
          setIsRotating(false);
          (selection === randomIndex + 1)
            ? setTotal(total + selection)
            : setTotal(total - 2);
            setActiveButton(null);
        }, 2500);
      return () => clearTimeout(timer);
    } else setShowError(true);
  };

  const reset = () => {
    setTotal(0);
    setActiveButton(null);
  };

  return (
    <div className="game-main">
      <img
        src={currentImage}
        className={isRotating ? "rotating-dice" : "rolling"}
        onClick={() => rotate()}
        alt="rolling"
      />
      <p className="text-below-dice">Click on Dice to roll</p>
      <button className="score-btn" onClick={() => reset()}>
        Reset Score
      </button>
      <button className="rules-btn" onClick={() => setShowRules(!showRules)}>
        {!showRules ? "Show Rules" : "Hide Rules"}
      </button>
    </div>
  );
}
