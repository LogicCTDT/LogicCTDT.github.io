import React from 'react';
import Links from './Links.js';

export const AboutMe = () => {
    
    return (
        <div className="w-4/5 h-4/5 flex text-white justify-center items-center ">
            <div className="w-3/5 h-1/5 text-center flex flex-col justify-between space-y-10">
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