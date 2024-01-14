import React from 'react'; 
import Navbar from './Navbar.js';
import Background1 from './Background1.js';

const Home = () => {
  
  
    return(
    <div className="text-center h-[300vh]">
      
    <Navbar />
    

   {/* make background take in image url later
   */}
    
    
    <Background1 />
     
      
    
  </div>
  );
}

export default Home;