// NotificationContainer.js
import React, { useState } from 'react';
import Notification from './notification';

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type) => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
    };

    setNotifications([...notifications, newNotification]);

    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000); // Automatically dismiss after 5 seconds
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={removeNotification}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;
