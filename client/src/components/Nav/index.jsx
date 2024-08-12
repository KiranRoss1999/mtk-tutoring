import React from 'react'
import { Link } from 'react-router-dom'
import Auth from "../../utils/auth";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }


  return (
    <div className="flex items-center justify-between h-24 p-8 bg-green-800 mx-auto">
    <a href="#_" className="text-2xl font-extrabold text-white">MTK Tutoring</a>
    <nav className="hidden space-x-8 md:flex items-center justify-center font-light text-green-200">
    <Link to="/"  >
      <span className="text-xl text-green-400 transition duration-150 ease hover:text-green-200">Home</span>
      </Link>
      <Link to="/pricing"  >
      <span className="text-xl text-green-400 transition duration-150 ease hover:text-green-200">Pricing</span>
      </Link>
      <Link to="/meettheteam"  >
      <span className="text-xl text-green-400 transition duration-150 ease hover:text-green-200">Meet The Team</span>
      </Link>
      {showNavigation()}
    </nav>
  </div>
  )
}


export default Nav