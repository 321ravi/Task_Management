

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import CreateTaskPage from './Pages/CreateTaskPage';

import ShowTaskPage from './Pages/ShowTaskPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateTaskPage />} />
        <Route path="/show" element={<ShowTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

