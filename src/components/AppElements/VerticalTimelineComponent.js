import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import VerticalTimelineElementHobby from '../VerticalTimelineElements/VerticalTimelineElementHobby';
import VerticalTimelineElementVolunteer from '../VerticalTimelineElements/VerticalTimelineElementVolunteer';
import VerticalTimelineElementWork from '../VerticalTimelineElements/VerticalTimelineElementWork';
import VerticalTimelineElementProject from '../VerticalTimelineElements/VerticalTimelineElementProject';
import VerticalTimelineElementSchool from '../VerticalTimelineElements/VerticalTimelineElementSchool';


export const VerticalTimelineComponent = () => {
    return(
        <VerticalTimeline id='timeline-content' className='bottom-20' animate={true}>
            
            {/*  */} 
            <VerticalTimelineElementHobby activityTitle="Exercise" activityDescription="Acheived first pull-up" time="December 2023" />
            <VerticalTimelineElementHobby activityTitle="Taekwondo" activityDescription="Started practicing Taekwondo with UTTO" time="September 2023 - Present" />
            <VerticalTimelineElementVolunteer activityTitle="Piano" activityDescription="Started teaching Piano to local community with MCCO" time="October 2023 - Present"/>
            <VerticalTimelineElementHobby activityTitle="Exercise" activityDescription="Started exercising" time="May 2023 - Present" />
            <VerticalTimelineElementWork activityTitle="Resverlogix Corp." activityDescription="Started internship at Resverlogix" time="May 2023 - August 2023"/>
            <VerticalTimelineElementSchool activityTitle="Majors" activityDescription="Accepted in Computer Science and Neuroscience Programs" time="2022"/>
            <VerticalTimelineElementSchool activityTitle="University" activityDescription="Started attending the University of Toronto" time="2021-Present"/>
            <VerticalTimelineElementSchool activityTitle="Graduation" activityDescription="Graduated High School with IB Diploma" time="2021"/>
            <VerticalTimelineElementVolunteer activityTitle="Taekwondo" activityDescription="Assitant Instructor for Tiger Taekwondo" time="2019"/>
            <VerticalTimelineElementHobby activityTitle="Taekwondo" activityDescription="Acheived 4th Poom Black Belt" time="2019" />
            <VerticalTimelineElementSchool activityTitle="High School" activityDescription="Started attending Old Scona Academic School" time="2018-2021"/>
            <VerticalTimelineElementHobby activityTitle="Piano" activityDescription="Achieved Level 10 RCM" time="2017"/>
            <VerticalTimelineElementVolunteer activityTitle="Taekwondo" activityDescription="Volunteering with Edmonton Paralympic Sports Association" time="2015-2019" />
            <VerticalTimelineElementHobby activityTitle="Taekwondo" activityDescription="I started practicing Taekwondo at seven!" time="2013-Present"/>
            <VerticalTimelineElementHobby activityTitle="Piano" activityDescription="I started playing piano at six!" time="2012-Present" />
        </VerticalTimeline>
        

    );
} 

export default VerticalTimelineComponent;