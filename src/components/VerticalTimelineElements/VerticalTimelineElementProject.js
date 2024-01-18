import { VerticalTimelineElement } from "react-vertical-timeline-component"


export const VerticalTimelineElementProject = (props) => {
    var color = props.color;
    if (!color) {
        color = 'rgb(256,256,256)'
    }
    
    const updateList = props.list.map((string) => {
        return <li>{string}</li>
    });
    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--hobbies"
            contentStyle={{ background: 'rgba(227,227,227,255)', color: '#000', borderTop: "4px solid rgb(0, 0, 0)"}}
            contentArrowStyle={{ borderRight: '10px solid  rgb(66, 70, 81)' }}
            date={props.time}
            iconStyle={{ background: `${color}`, color: '#ffffff' }}
            icon={props.projectIcon}
            >
            <h3 className="text-left text-2xl font-semibold">{props.activityTitle}</h3>
            <h4 className="text-left text-xl font-medium">Project</h4>
            <p className='text-left text-sm'>
            {props.activityDescription}
            
            </p>
            <h5 className="text-left"> <br />Libraries:</h5>
            <ul className='text-left list-disc' >  
            {updateList}
            </ul>
        </VerticalTimelineElement>
    )

    
}

export default VerticalTimelineElementProject;