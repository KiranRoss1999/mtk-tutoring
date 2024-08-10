import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Signup from './pages/signup';
import HomePage from './pages/HomePage';
import MeetTheTeam from './pages/meettheteam';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="meet-the-team" element={<MeetTheTeam />} />
      </Route>
    </Routes>
  </Router>
);
