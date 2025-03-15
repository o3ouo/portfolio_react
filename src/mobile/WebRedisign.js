import React from 'react';

function WebRedisign({ handleNavigation }) {
  return (
    <div className="web_redesign_page" onClick={() => handleNavigation("/webredesign")}>
      <h1>Web Redesign</h1>
    </div>
  );
}

export default WebRedisign;
