import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <nav className="w-full">
        <div className="md:flex mobile-menu">
          <div className="flex flex-col">
            <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center text-lg font-normal mt-2 mx-auto rounded-lg">
              Sign in
            </button>
            <Link to="/signup">
              <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 border-2 border-blue-700 flex items-center justify-center text-lg font-normal mt-2 mx-auto rounded-lg">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      </div>
  )
}

export default NavBar