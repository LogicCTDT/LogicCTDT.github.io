import { VerticalTimelineElement } from "react-vertical-timeline-component"
import HobbyIcon from "../VerticalTimelineIcons/Hobby Icon";

export const VerticalTimelineElementHobby = (props) => {

    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--hobbies"
            contentStyle={{ background: 'rgba(227,227,227,255)', color: '#000', borderTop: "4px solid rgb(0, 0, 0)"}}
            contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
            date={props.time}
            iconStyle={{ background: 'rgba(227,227,227,255)', color: '#fff' }}
            icon={<HobbyIcon />}
            >
            <h3 className="text-left text-2xl font-semibold">{props.activityTitle}</h3>
            <h4 className="text-left text-xl font-medium">Hobbies</h4>
            <p className='text-left text-sm'>
            {props.activityDescription}
            </p>
        </VerticalTimelineElement>
    )
}

export default VerticalTimelineElementHobby;