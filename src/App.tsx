import './App.css'
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EnterButton from './components/EnterButton';
import AboutMe from './components/AboutMe';

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/home" element={<MainPage></MainPage>}/>
            <Route path="/" element = {<NavBar />}/>
            <Route path="/about-me" element = {<AboutMe></AboutMe>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
