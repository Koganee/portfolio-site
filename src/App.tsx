import './App.css'
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EnterButton from './components/EnterButton';

function App() {
  

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/home" element={<MainPage></MainPage>}/>
            <Route path="/" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
