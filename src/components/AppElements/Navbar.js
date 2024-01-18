import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export const Navbar = () => {

const location = useLocation();

  // Define CSS classes based on the current route
  let containerClasses = 'container'; // Default Tailwind CSS class
  let linkTextClass = ''
  if (location.pathname === '/ResumePage') {
    containerClasses = 'w-full py-3 border-gray-400 z-10 bg-pdf items-center'; // Apply red background for the home route
    linkTextClass = 'text-gray-400'
  } else if (location.pathname === '/') {
    containerClasses = 'w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-b py-3 border-gray-400 fixed top-0 z-10 bg-gray-500 items-center'; // Apply blue background for the about route
    linkTextClass = 'text-black'
  } else if (location.pathname === '/Skills') {
    containerClasses = 'w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-b py-3 border-gray-400 fixed top-0 z-10 bg-dark-moss-green items-center'; // Apply blue background for the about route
    linkTextClass = 'text-slate-800'
  } else if (location.pathname === '/Projects') {
    containerClasses = 'w-full backdrop-filter backdrop-blur-lg bg-opacity-30 py-3 bg-project_color items-center [&>*]:text-black'; // Apply blue background for the about route
    linkTextClass = 'text-black'
  }

    return (
        // I want to create a navbar element, that has different actions if i'm active. 
        /// p-4 py-10 bg-gradient-to-r from-indigo-600 to-fuchsia-700 text-xl relative
        // Navbar doesn't work for small screen sizes, change later
        <nav className= {containerClasses}>
                <div className="inline-block w-full mx-auto font-medium align-middle">
                    <Link className={`no-underline font-medium mx-10 ${linkTextClass}`} to="/"> About Me </Link>
                    <Link className={`no-underline font-medium mx-10 ${linkTextClass}`} to="/ResumePage"> Resume </Link>
                    <Link className={`no-underline font-medium mx-10 ${linkTextClass}`} to="/Skills">Skills</Link>
                    <Link className={`no-underline font-medium mx-10 ${linkTextClass}`} to="/Projects">Projects</Link>
               
                
                </div> 
    
        </nav>





    );
}
export default Navbar;