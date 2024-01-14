import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { WorkIcon } from "../VerticalTimelineIcons/Work Icon";

export const VerticalTimelineElementWork = (props) => {

    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--hobbies"
            contentStyle={{ background: 'rgba(227,227,227,255)', color: '#000', borderTop: "4px solid rgb(0, 0, 0)"}}
            contentArrowStyle={{ borderRight: '10px solid  rgb(66, 70, 81)' }}
            date={props.time}
            iconStyle={{ background: 'rgb(33, 250, 144)', color: '#424651' }}
            icon={<WorkIcon />}
            >
            <h3 className="text-left text-2xl font-semibold">{props.activityTitle}</h3>
            <h4 className="text-left text-xl font-medium">Work</h4>
            <p className='text-left text-sm'>
            {props.activityDescription}
            </p>
        </VerticalTimelineElement>
    )
}

export default VerticalTimelineElementWork;