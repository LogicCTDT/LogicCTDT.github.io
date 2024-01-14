import React from 'react';
import Links from './Links.js';
import { useEffect} from 'react';
import { useState } from 'react';
import { VerticalTimelineComponent } from './VerticalTimelineComponent.js'
import profilePicture from '../Images/me.jpg'


export const AboutMe = () => {
    
    // render timeline 
    
   
    
    const [transformValue, setTransformValue] = useState(87);

    // Function to calculate the transform value
    const calculateYourValue = (scrollY) => {
        //default 75. want to lower
        return 87 - scrollY/37

    };

    useEffect(() => {
        
        const handleScroll = () => {
            const newTransformValue = calculateYourValue(window.scrollY);
            setTransformValue(newTransformValue);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
        
    return (
        <div className="w-4/5 text-slate-100 items-center align-bottom flex flex-col fixed h-[500vh] justify-end" style={{transform: `translateY(-${transformValue}%)`}}>
            <div className="order-last w-3/5 h-[30vh] text-center items-center flex flex-col justify-between space-y-10">
              <div className="flex items-center justify-between space-x-16">
                <img className="justify-content-center rounded-3xl my-8px border-2 border-black" src={profilePicture} width={200} height={200} alt="Logo" />
                <span className="block text-4xl font-serif text-middle">Hi, I'm Ricky!</span>
                
              </div>
              <span className="inline-block text-middle text-xl">I'm a third year U of T student majoring in Computer Science and Neuroscience. 
                In my free time I like reading, working out, playing the piano and learning new things. If you're interested in what I've done recently, 
                have a look at my projects. </span>

                {/** normally put here employment + projects, but it seems I don't have either */}


                {/** consider uploading a video of me playing the piano. No face though.*/} 
              <Links />
            </div>
            <VerticalTimelineComponent />

        </div>

    
    );

}





export default AboutMe;