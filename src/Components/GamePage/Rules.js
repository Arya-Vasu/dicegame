import "./Rules.css";

export function Rules({ showRules }) {
  return (
    <div className="rules-div" style={{ display: (showRules ? "block" : "none") }}>
      <h3>How to play dice game</h3>
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