import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';
import AboutUs from './About';
import App from './App'

function Ndrrimi() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>


        
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default Ndrrimi;