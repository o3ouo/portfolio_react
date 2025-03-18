import React from 'react';

function WorkContent({ title, icon, onClick, className }) {
  return (
    <div className={`work_content ${className}`} onClick={onClick}>
      <figure className={`work_icon ${icon}`}>
        <img src={`${process.env.PUBLIC_URL}/image/${icon}_icon.webp`} alt={title} />
      </figure>
      <p className="title">{title}</p>
    </div>
  );
}

export default WorkContent;
