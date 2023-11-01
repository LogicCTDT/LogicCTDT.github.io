import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export const Navbar = () => {

const location = useLocation();

  // Define CSS classes based on the current route
  let containerClasses = 'container'; // Default Tailwind CSS class

  if (location.pathname === '/ResumePage') {
    containerClasses = 'w-full py-3 border-gray-400 z-10 bg-pdf items-center'; // Apply red background for the home route
  } else if (location.pathname === '/') {
    containerClasses = 'w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-b py-3 border-gray-400 fixed top-0 z-10 bg-gray-500 items-center'; // Apply blue background for the about route
  }
    return (
        // I want to create a navbar element, that has different actions if i'm active. 
        /// p-4 py-10 bg-gradient-to-r from-indigo-600 to-fuchsia-700 text-xl relative
        // Navbar doesn't work for small screen sizes, change later
        <nav className= {containerClasses}>
                <div className="inline-block h-full align-middle">
                    <div className="absolute left-0 font-bold text-gray-50 text-opacity-50 rounded-full mr-2">Profile Picture </div>
                </div> 
                <div className="inline-block w-full mx-auto font-medium align-middle text-gray-400">
                    <Link className='mx-10' to="/"> About Me </Link>
                    <Link className='mx-10' to="/ResumePage"> Resume </Link>
                    <a className="mx-10" href="#Fun Project">Fun Project</a>
                
                </div> 
    
        </nav>





    );
}
export default Navbar;