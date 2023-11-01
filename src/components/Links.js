import ImageLinkedIn from './LI-In-Bug.png'
import GithubLogo from './github-mark-white.png'
import EmailIcon from './Email Icon.jpg'

{/*I want this to be the box conting all my links. */}

const Links = () => {
    return (
        <div className='flex justify-center w-3/12 h-1/3 self-center shadow-lg'>
            <a href="https://www.linkedin.com/in/ricky-zhang-23b50b26a/" target="_blank"  rel="noreferrer" className='w-1/3 flex justify-center items-center'  > <img src={ImageLinkedIn} alt='My LinkedIn' className='max-h-full max-w-full'/> </a>
            <a href="https://github.com/LogicCTDT" target="_blank"  rel="noreferrer" className='w-1/3 flex justify-center items-center '> <img src={GithubLogo} alt='My Github' className='max-h-full max-w-full'/> </a>
            <a href="mailto:r.zhang10825@gmail.com" target="_blank"  rel="noreferrer" className='w-1/3 flex justify-center items-center ' > <img src={EmailIcon} alt='My Email' className='max-h-full max-w-full'/> </a>
            {/*github link and email link too */}
        </div>
    );
};

export default Links;