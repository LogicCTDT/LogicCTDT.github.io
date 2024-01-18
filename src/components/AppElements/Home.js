import React from 'react'; 
import Navbar from './Navbar.js';
import Background1 from './Background1.js';
import { useState, useEffect } from 'react';


const Home = () => {
    const [contentHeight, setContentHeight] = useState(500);
    const updateContentHeight = () => {
      const content = document.getElementById('timeline-content');
      if (content) {
        setContentHeight(content.scrollHeight);
      }
    };
    useEffect(() => {
        
      updateContentHeight();

  }, []);
    return(
    <div id='rootnode' className={`text-center h-[${contentHeight}vh]`}>
      
    <Navbar />
    

   {/* make background take in image url later
   */}
    
    
    <Background1 />
     
      
    
  </div>
  );
}

export default Home;