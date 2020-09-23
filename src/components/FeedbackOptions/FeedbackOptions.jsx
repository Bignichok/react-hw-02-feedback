import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
