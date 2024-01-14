import background from '../Images/Cavey Background.avif'
import { useState } from 'react';
import AboutMe from "./AboutMe.js";


export const Background1 = () => {
  const [position, setPosition] = useState({ x: 30 });

  const handleMouseMove = (e) => {
    const xOffset = ((e.clientX / window.innerWidth)*8);
    setPosition({x: xOffset });
    
  };
  
  
  const xConst = () => {
    return (50 - ((30/window.innerWidth)*100))
  }
  /* map 50 50 to center always. We can definetly use math to do this
  */
  
    return (
    <div className="bg-fixed p-20 w-full h-full bg-repeat justify-center
    overflow-x-auto overflow-y-auto flex "  onMouseMove={handleMouseMove}  style={{backgroundImage: `url('${background}')`, 
     
    backgroundPosition: `${position.x + xConst()}%`, backgroundSize: '110% 100%'}}>
        <AboutMe />
    </div>
    
    );
}

export default Background1;