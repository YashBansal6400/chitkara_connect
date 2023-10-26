// AnnouncementSection.js
import './announcement.css';

import React from 'react';
import AnnouncementList from './AnnouncementList';
import  announcements  from './announcementsData'; // Import your dummy data

// import { announcements } from './announcementsData'; // Verify the correct file path

const AnnouncementSection = () => {
  return (
    <div className="announcement-section">
      <h1>Announcements</h1>
      <AnnouncementList announcements={announcements} />
    </div>
  );
};

export default AnnouncementSection;
