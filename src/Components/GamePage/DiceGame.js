import "./DiceGame.css";
import { useState } from "react";
import { Rules } from "./Rules";
import Game from "./Game";

export function DiceGame() {
  const [total, setTotal] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const selection = activeButton;

  const handleButtonClick = (index) => {
    setShowError(false);
    setActiveButton(index);
  };

  return (
    <div className="main-game-div">
      <p
        className="error-msg"
        style={{ display: showError ? "block" : "none" }}
      >
        You have not selected any number
      </p>
      <div className="header">
        <div className="total-score">
          <p className="score">{total}</p>
          <p className="text">Total Score</p>
        </div>
        <div className="numbers">
          <div className="buttons">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <button
                className="btn"
                key={index}
                onClick={() => handleButtonClick(index)}
                style={{
                  background: activeButton === index ? "black" : "white",
                  color: activeButton === index ? "white" : "black",
                }}
              >
                {index}
              </button>
            ))}
          </div>
          <p className="buttons-text">Select Number</p>
        </div>
      </div>
      <Game
      total={total}
        setTotal={setTotal}
        showRules={showRules}
        setShowRules={setShowRules}
        setShowError={setShowError}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        selection={selection}
      />
      <Rules showRules={showRules} />
    </div>
  );
}
