import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ list }) => {
  const navigate = useNavigate();
  
  return (
    <aside className="sidebar">
      <div className="back_box">
        <div className="back" onClick={() => navigate("/home")}>
          <figure>
            <img src={`${process.env.PUBLIC_URL}/image/back_icon.webp`} alt="back_icon" />
          </figure>
          <p>Back</p>
        </div>
        <figure className='side_btn'>
          <img src={`${process.env.PUBLIC_URL}/image/side_btn.webp`} alt="side_btn" />
        </figure>
      </div>
      <h2 className="title">About Me</h2>
      <ul className="ul_box">
        {list.map((li, index) => (
          <li key={index}>
            <p className={li}>{li}</p>
            <figure>
              <img src={`${process.env.PUBLIC_URL}/image/ul_btn.webp`} alt={`${li}_li`} />
            </figure>
          </li>
        ))}
      </ul>
      <div className="add_box">
        <figure className='add_icon'>
          <img src={`${process.env.PUBLIC_URL}/image/add_btn.webp`} alt="add_icon" />
        </figure>
        <p className="add_text">Add Item</p>
      </div>
    </aside>
  );
};

export default SideBar;