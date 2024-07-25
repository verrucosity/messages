// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Library from './Library';
import EssayPage from './EssayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Library />} />
        <Route path="/essay" element={<EssayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
