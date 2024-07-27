import "./Rules.css";
import { Icon } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from "react-router-dom";

export function Rules({ showRules }) {
  const navigate = useNavigate();
  return (
    <div className="rules-div" style={{ display: (showRules ? "block" : "none") }}>
      <div className="rules-header">
        <h3>How to play dice game</h3>
        <Icon className="phone-icon" onClick={() => navigate("/contact")}><LocalPhoneIcon /></Icon>
      </div>
      <div className="rules">
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same points as dice.
        </p>
        <p>If you get wrong guess then 2 points will be deducted.</p>
      </div>
    </div>
  );
}