import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="mx-auto bg-green-100 flex items-center justify-center min-h-screen max-w-screen-2xl p-4 relative isolate">
      <div className="w-full p-8 max-w-lg bg-green-800 rounded-3xl border-0">
        <p className="text-center text-4xl font-bold tracking-tight mb-10 text-white">Sign up</p>
        <p className="text-lg text-center text-white mb-10">Enter your details to sign up</p>
        <form className="mt-10">
          <div className="space-y-5">
            <input 
              type="text" 
              placeholder="Enter name" 
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
            />
            <input 
              type="text" 
              placeholder="Enter email" 
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
            />
            <input 
              type="password" 
              placeholder="Enter password" 
              className="border border-gray-200 p-3 focus:ring-1 focus:ring-gray-600 focus:outline-none w-full rounded-lg bg-white"
            />
          </div>
          <button 
            type="submit" 
            className="p-3 w-full bg-black text-white rounded-lg mt-10 font-semibold"
          >
            Sign up
          </button>
        </form>
        <p className="text-center mt-4 text-white">
          <span>Already have an account?</span>
          <Link to="/login" className="underline font-semibold pl-2">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
