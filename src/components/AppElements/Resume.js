
import ResumeFile from '../Ricky Zhang Resume - Computer Science.pdf'
import Navbar from './Navbar'

const Resume = () => {
    return (
        <div className='text-center h-screen flex flex-col'>
            <Navbar />
            <iframe className='flex-1'src={ResumeFile} width='100%' height='100%'/>
            
        </div>
    );
}

export default Resume;