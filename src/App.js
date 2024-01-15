
import './App.css';
import React from 'react'; 
import Home from './components/AppElements/Home.js'
import ResumePage from './components/AppElements/Resume.js'
import {
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";
import Skills from './components/AppElements/Skills.js';
// TODO: Make the Resume portion of the website, and start applying to shit.
// Add resume portion in the readme as a hyperlink. Remove from navbar. 
// Write navbar and resume portion.
// Background image as galaxy, would be very cool I think
/*
To do: 
Resume Tab links to something, linkedln, github, email link. Make writing less 
formal/better.
Let's do resume first

*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/ResumePage",
    element: <ResumePage />,
  },
  { path: "/Skills",
    element: <Skills />
  }
]);

function App() {
  
  
  return (
    <div className="h-full w-full">
    </div>
  );
};


export default App;