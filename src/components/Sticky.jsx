/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Init
import React, { useState } from 'react';

// Component
export default function Sticky() {
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const dumyarray = [
    {
      id: 1,
      color: generateRandomColor(),
      title: 'Social Media',
      content: 'Any thing Write...',
    },
    {
      id: 2,
      color: generateRandomColor(),
      title: 'Sticky Wall',
      content: 'Any thing Write...',
    },
  ];
  const [stickyWalls, setStickyWalls] = useState([...dumyarray]);

  const handleClickBox = () => {
    const newStickyWall = {
      id: 1,
      color: generateRandomColor(),
      title: 'Sticky Wall',
      content: 'Any thing Write...',
    };

    setStickyWalls((prevWalls) => [...prevWalls, newStickyWall]);
  };

  return (
    <div className="sticky">
      <div className="sticky_heading">
        <h1>Sticky Wall</h1>
      </div>
      <div className="sticky_data">
        <div className="sticky_boxes">
          {stickyWalls?.map((stickyWall) => (
            <div
              key={stickyWall.id}
              className="stickey"
              style={{ backgroundColor: stickyWall.color }}
            >
              <h3>{stickyWall.title}</h3>
              <p>{stickyWall.content}</p>
            </div>
          ))}
          <div className="sticky_box3" onClick={handleClickBox}>
            <div className="sticky_box3_icon">
              <i className="fa-solid fa-plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
