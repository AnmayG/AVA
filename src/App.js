import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/general/LandingPage';
import MeetingPage from './pages/MeetingPage';
import LoginPage from './pages/authentication/LoginPage';
import SignUpPage from './pages/authentication/SignUpPage';
import SetUpPage from './pages/SetUpPage';
import TrainingPage from './pages/TrainingPage';
import Dashboard from './pages/user/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/meeting" element={<MeetingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/setup" element={<SetUpPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/training" element={<TrainingPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;