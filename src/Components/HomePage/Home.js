import dices from "../../dices.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="main-div">
        <div className="left-div">
          <img src={dices} className="dice-banner" alt="diceGame" />
        </div>
        <div className="right-div">
          <div className="content">
            <p className="game-name">DICE GAME</p>
            <button className="play-btn" onClick={() => navigate("/dicegame")}>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
