// Announcement.js
import React from 'react';
import './announcement.css';


const Announcement = ({ announcement }) => {
  return (
    <div className="announcement">
      <h2>{announcement.title}</h2>
      <p>{announcement.content}</p>
      <p className="date">{announcement.date}</p>
    </div>
  );
};

export default Announcement;
