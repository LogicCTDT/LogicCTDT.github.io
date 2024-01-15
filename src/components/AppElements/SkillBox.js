
import './svgIcon.css'
import { Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const SkillBox = (props) => {
    const [open, setOpen] = useState(false);

        return(
    
        <div className="flex flex-col items-center justify-between space-y-5">
            <Button className="bg-transparent border-0" onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open} >
            {props.svgIcon}
            </Button>
            <Collapse in={open}>
                <div className="flex flex-col items-center justify-between space-y-5">
                    {props.text}
                </div>
                {/* need to add some code that allows me to add as many icons as I want side by side, probably done using .map*/}
            </Collapse>
        </div>
        
    )
}

export default SkillBox;