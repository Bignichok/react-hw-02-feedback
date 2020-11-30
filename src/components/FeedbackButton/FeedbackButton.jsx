import React from 'react';
import styles from './FeedbackButton.module.css'
import PropTypes from "prop-types";


const FeedbackButton =({onClick,type})=> {
    return (
    <button type="button"  onClick={onClick} className={`${styles.btn} ${styles.stripedShadow} ${styles.white}`}>
        <span>{type}</span>
    </button>
        );
}

Notification.propTypes = {
    onClick: PropTypes.func.isRequired,
    type:PropTypes.string.isRequired
};
Notification.defaultProps = {
    onClick: () => { },
    type: 'Button'
};


export default FeedbackButton;