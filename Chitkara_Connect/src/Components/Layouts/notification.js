// Notification.js
import React from 'react';
import './notification.css';

const Notification = ({ notification, onDismiss }) => {
  return (
    <div className={`notification ${notification.type}`}>
      <p>{notification.message}</p>
      <button onClick={() => onDismiss(notification.id)}>Dismiss</button>
    </div>
  );
};

export default Notification;
