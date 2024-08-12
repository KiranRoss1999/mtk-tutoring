import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
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
      <Link to="/signup">
        <span className="text-xl text-white bg-green-700 border border-green-700 rounded-md hover:bg-green-600">Signup</span>
      </Link>
    </nav>
  </div>
  )
}


export default Nav