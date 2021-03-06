import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
Notification.defaultProps = {
  message: "Notification",
};

export default Notification;
