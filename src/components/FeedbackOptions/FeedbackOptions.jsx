import React from "react";
import PropTypes from "prop-types";
import FeedbackButton from "../FeedbackButton/FeedbackButton";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackButton type={"Good"} onClick={() => onLeaveFeedback("good")} />
      <FeedbackButton type={"Neutral"} onClick={() => onLeaveFeedback("neutral")} />
      <FeedbackButton type={"Bad"} onClick={() => onLeaveFeedback("bad")} />
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
