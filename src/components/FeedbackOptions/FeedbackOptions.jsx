import React from "react";
import PropTypes from "prop-types";
import FeedbackButton from "../FeedbackButton/FeedbackButton";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackButton type={"Good"} onClick={ onLeaveFeedback} />
      <FeedbackButton type={"Neutral"} onClick={ onLeaveFeedback} />
      <FeedbackButton type={"Bad"} onClick={ onLeaveFeedback} />
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
