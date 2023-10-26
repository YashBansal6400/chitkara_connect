// AnnouncementList.js
import './announcement.css';

import React from 'react';
import Announcement from './Announcement.js';
// import announcements from './announcementsData.js';

// In AnnouncementList.js
const AnnouncementList = ({ announcements }) => {
  if (!announcements || announcements.length === 0) {
    return <p>No announcements available.</p>;
  }

  return (
    <div className="announcement-list">
      {announcements.map((announcement) => (
        <Announcement key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
};


export default AnnouncementList;
