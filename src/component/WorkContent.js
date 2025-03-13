import React from 'react';

function WorkContent({ title, icon }) {
  return (
    <div className="work_content">
      <figure className={`work_icon ${title}`}>
        <img src={`${process.env.PUBLIC_URL}/image/${icon}.png`} alt={title} />
      </figure>
      <p className="title">{title}</p>
    </div>
  );
}

export default WorkContent;
