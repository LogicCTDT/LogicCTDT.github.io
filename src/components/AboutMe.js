import React from 'react';
import Links from './Links.js';
import { useEffect} from 'react';
import { useState } from 'react';

export const AboutMe = () => {
    
    const [transformValue, setTransformValue] = useState(80);

    // Function to calculate the transform value
    const calculateYourValue = (scrollY) => {
        //default 75. want to lower
        return 80 - scrollY/50

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
        <div className="w-4/5 text-white items-center align-bottom flex flex-col justify-end fixed h-[300vh]" style={{transform: `translateY(-${transformValue}%)`}}>
            <div className="order-last w-3/5 h-[30vh] text-center flex flex-col justify-between space-y-10">
                <span className="block text-4xl font-serif text-middle">Hi, I'm Ricky!</span>

                <span className="inline-block text-middle text-xl">I'm a third year U of T student majoring in Computer Science and Neuroscience. 
                In my free time I like reading, gaming, and learning new things. If you're interested in what I've done recently, 
                have a look at my projects. </span>

                {/** normally put here employment + projects, but it seems I don't have either */}


                {/** consider uploading a video of me playing the piano. No face though.*/} 
                <Links />
            </div>

        </div>

    
    );

}

export default AboutMe;