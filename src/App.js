import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import MeetingPage from './pages/MeetingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/meeting" element={<MeetingPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;