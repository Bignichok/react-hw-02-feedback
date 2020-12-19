import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./FeedbackButton.module.css";

const cx = classNames.bind(styles);

const FeedbackButton = ({ onClick, type }) => {
  const className = cx({ btn: true, stripedShadow: true, white: true });
  return (
    <button type="button" onClick={onClick} className={className}>
      <span>{type}</span>
    </button>
  );
};

Notification.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
Notification.defaultProps = {
  onClick: () => {},
  type: "Button",
};

export default FeedbackButton;
