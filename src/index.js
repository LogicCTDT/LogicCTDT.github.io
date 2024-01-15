import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/AppElements/Home.js'
import ResumePage from './components/AppElements/Resume.js'
import Skills from './components/AppElements/Skills.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([
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
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
