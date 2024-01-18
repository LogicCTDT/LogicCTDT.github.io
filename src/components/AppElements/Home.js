import React from 'react'; 
import Navbar from './Navbar.js';
import Background1 from './Background1.js';
import { useState, useEffect } from 'react';


const Home = () => {
    
    return(
    <div id='rootnode' className={`text-center h-[500vh]`}>
      
    <Navbar />
    

   {/* make background take in image url later
   */}
    
    
    <Background1 />
     
      
    
  </div>
  );
}

export default Home;