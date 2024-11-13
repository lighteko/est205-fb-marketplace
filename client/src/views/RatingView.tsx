import React from "react";
import "./RatingView.css";
import Text from "../components/common/Text";

export default function RatingView(): JSX.Element {
  return (
    <div className="RatingPage">
      <div className="Question">
        <Text content={`How was your transaction with PlaceHolder`} fontSize={1.2} fontWeight={"bold"} />
        <div className="emoji-buttons">
          <button onClick={() => alert("Not Good clicked!")}>
            <span role="img" aria-label="not good">😠</span>
            <br />
            <span className="button-text">Not Good</span>
          </button>
          <button onClick={() => alert("Neutral clicked!")}>
            <span role="img" aria-label="neutral">😐</span>
            <br />
            <span className="button-text">Neutral</span>
          </button>
          <button onClick={() => alert("Very Good clicked!")}>
            <span role="img" aria-label="very good">😊</span>
            <br />
            <span className="button-text">Very Good</span>
          </button>
        </div>
      </div>

      <div className="Question">
        <p>Would you buy from this user again?</p>
        <input type="range" min="0" max="10" className="slider" />
        <div className="slider-labels">
          <span>Very Unlikely</span>
          <span>Neutral</span>
          <span>Very Likely</span>
        </div>
      </div>

      <div className="Question">
        <p>How was the response rate?</p>
        <input type="range" min="0" max="10" className="slider" />
        <div className="slider-labels">
          <span>Very Unlikely</span>
          <span>Neutral</span>
          <span>Very Likely</span>
        </div>
      </div>

      <div className="feedback-section">
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" placeholder="Type your feedback here..." />
      </div>

      <button className="submit-button">Submit Review</button>
    </div>
  );
}
