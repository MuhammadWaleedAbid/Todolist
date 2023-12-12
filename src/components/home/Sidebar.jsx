/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Init
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
export default function Sidebar({ setSidebar, setActiveSidebar, handleMenu }) {
  const device = window.innerWidth;
  const handleClick = (name) => {
    if (device <= 500) {
      handleMenu();
      setActiveSidebar(name);
    } else {
      setActiveSidebar(name);
    }
  };
  return (
    <div className="dashboard">
      <div className="side_bar">
        <div className="side_bar_icon">
          <h1>Menu</h1>
          <i
            onClick={() => {
              setSidebar(false);
              document.body.style.overflow = 'visible';
            }}
            className="fa-solid fa-bars"
          />
        </div>
        <div className="search_bar">
          <i className="fas fa-search search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="tasks">
          <h4>Tasks</h4>
          <div className="tasks_links">
            <ul>
              <li>
                <div className="upcoming_top" onClick={() => handleClick('Upcoming')}>
                  <i className="fa-solid fa-angles-right" />
                  <NavLink>Upcoming</NavLink>
                </div>
                <div className="upcoming_end">
                  <div className="upcoming">
                    <span>12</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="today_top" onClick={() => handleClick('Today')}>
                  <i className="fa-solid fa-calendar-week" />
                  <NavLink>Today</NavLink>
                </div>
                <div className="today_end">
                  <div className="today">
                    <span>5</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="calender_top" onClick={() => handleClick('Clander')}>
                  <i className="fa-regular fa-calendar-days" />
                  <NavLink>Calendar</NavLink>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="stick_top" onClick={() => handleClick('Stickywall')}>
                  <i className="fa-solid fa-note-sticky" />
                  <NavLink>Sticky Wall</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="listupdown_line" />
        <div className="lists">
          <h4>Lists</h4>
          <div className="lisst_links">
            <ul>
              <li>
                <div className="personal_start" onClick={() => handleClick('Contacts')}>
                  <div className="personal_color" />
                  <NavLink to="#">Personal</NavLink>
                </div>
                <div className="personal_end">
                  <div className="personal_box">
                    <span>3</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="work_start" onClick={() => handleClick('Worked')}>
                  <div className="work_color" />

                  <NavLink>Work</NavLink>
                </div>
                <div className="work_end">
                  <div className="work_box">
                    <span>6</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="lisst_start" onClick={() => handleClick('Weather')}>
                  <div className="list_color" />
                  <NavLink to="#">List</NavLink>
                </div>
                <div className="lisst_end">
                  <div className="list_box">
                    <span>3</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="add">
                  <i className="fa-solid fa-plus" />
                  <NavLink to="#">Add New List</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="listupdown_line" />
        <div className="tags">
          <h4>Tags</h4>
          <div className="tags-button">
            <div className="tag_1">
              <button className="btn1">Tag1</button>
            </div>
            <div className="tag_2">
              <button className="btn1">Tag2</button>
            </div>
            <div className="tag_3">
              <button className="btn3">
                <i className="fa-solid fa-plus" />
                Add Tag
              </button>
            </div>
          </div>
        </div>
        <div className="setting">
          <div className="setting_details">
            <div className="setting_icon">
              <i className="fa-solid fa-sliders" />
            </div>
            <div className="setting_name">Setting</div>
          </div>
        </div>
        <div className="signout">
          <div className="signout_details">
            <div className="signout_icon">
              <i className="fa-solid fa-right-to-bracket" />
            </div>
            <div className="signout_name">SignOut</div>
          </div>
        </div>
      </div>
    </div>
  );
}
