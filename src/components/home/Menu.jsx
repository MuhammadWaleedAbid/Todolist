/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Init
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Front from './Front';
import Upcoming from '../../containers/Upcoming';
import Stickywall from '../../containers/Stickywall';
import Clander from '../../containers/Clander';
import Worked from '../../containers/Worked';
import Weather from '../../containers/Weather';
import Contacts from '../../containers/Contacts';

// Component
export default function Menu() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(true);
  const [activeSidebar, setActiveSidebar] = useState('Today');

  const handleMenu = () => {
    setSidebar(!sidebar);
  };
  // eslint-disable-next-line no-console
  console.log('activeSidebar', activeSidebar);
  useEffect(() => {
    const storedActiveSidebar = localStorage.getItem('activeSidebar');

    if (storedActiveSidebar) {
      setActiveSidebar(storedActiveSidebar);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeSidebar', activeSidebar);
  }, [activeSidebar]);

  const handleSidebarItemClick = (sidebarItem) => {
    setActiveSidebar(sidebarItem);
    navigate(`/${sidebarItem.toLowerCase()}`);
  };

  return (
    <>
      {sidebar && (
        <Sidebar
          setSidebar={setSidebar}
          setActiveSidebar={setActiveSidebar}
          handleSidebarItemClick={handleSidebarItemClick}
          handleMenu={handleMenu}
        />
      )}

      {sidebar && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="side_bar_background"
          onClick={() => {
            setSidebar(false);
          }}
        />
      )}
      <div className="menu_all">
        <div
          className="menu_left"
          style={{ display: sidebar === true ? 'none' : 'block' }}
          onClick={handleMenu}
        >
          <i className="fa-solid fa-bars" onClick={handleMenu} />
        </div>
        {activeSidebar === 'Today' && <Front />}
        {activeSidebar === 'Upcoming' && <Upcoming />}
        {activeSidebar === 'Stickywall' && <Stickywall />}
        {activeSidebar === 'Clander' && <Clander />}
        {activeSidebar === 'Worked' && <Worked />}
        {activeSidebar === 'Weather' && <Weather />}
        {activeSidebar === 'Contacts' && <Contacts />}
      </div>
    </>
  );
}
