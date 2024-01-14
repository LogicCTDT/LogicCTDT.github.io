
import './App.css';
import React from 'react'; 
import Navbar from './components/AppElements/Navbar.js';
import Background1 from './components/AppElements/Background1.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/AppElements/Home.js'
import ResumePage from './components/AppElements/Resume.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
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
  }
]);

function App() {
  
  
  return (
    <div className="h-full w-full">
    </div>
  );
};


export default App;