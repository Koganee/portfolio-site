import './App.css'
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import ContactMe from './components/ContactMe';
import ProjectsPage from './components/ProjectsPage';

import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EnterButton from './components/EnterButton';
import AboutMe from './components/AboutMe';
import BambooBitsPage from './components/BambooBitsPage';

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/home" element={<MainPage></MainPage>}/>
            <Route path="/" element = {<NavBar />}/>
            <Route path="/about-me" element = {<AboutMe></AboutMe>}/>
            <Route path="/contact-me" element = {<ContactMe></ContactMe>}/>
            <Route path="/projects" element = {<ProjectsPage></ProjectsPage>}/>
            <Route path="/minecraft-mod-project" element = {<BambooBitsPage></BambooBitsPage>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
