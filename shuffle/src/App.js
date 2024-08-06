import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import MeetTheTeamPage from './pages/Meet_the_team.js';
import SignupPage from './pages/Signup.js';
import LoginPage from './pages/Login.js';
import PricingPage from './pages/Pricing.js';
import AvailabilitiesPage from './pages/Availabilities.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/meettheteam" element={<MeetTheTeamPage />} />
         
      <Route path="/signup" element={<SignupPage />} />
         
      <Route path="/login" element={<LoginPage />} />
         
      <Route path="/pricing" element={<PricingPage />} />
         
      <Route path="/availabilities" element={<AvailabilitiesPage />} />
    </Routes>
  );
}

export default App;
