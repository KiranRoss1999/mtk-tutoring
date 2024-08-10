import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom/dist';
import './index.css';


import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import MeetTheTeam from './pages/meettheteam.jsx';
import Bookings from './pages/Bookings.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Ensure to use errorElement, not error
    children: [
      {
        index: true,
        element: <Home /> // Set Home as the default route
      },
      {
        path: 'login',
        element: <Login /> // Adjust path as needed
      },
      {
        path: 'meettheteam',
        element: <MeetTheTeam /> // Adjust path as needed
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
