// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home';

import Stickywall from '../containers/Stickywall';
import Upcoming from '../containers/Upcoming';
import Worked from '../containers/Worked';
import Clander from '../containers/Clander';
import Weather from '../containers/Weather';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Stickywall" element={<Stickywall />} />
      <Route path="/Upcoming" element={<Upcoming />} />
      <Route path="/Worked" element={<Worked />} />
      <Route path="/Clander" element={<Clander />} />
      <Route path="/Weather" element={<Weather />} />
    </Routes>
  );
}
export default Index;
