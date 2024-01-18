import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { VerticalTimeline } from "react-vertical-timeline-component";
import VerticalTimelineElementProject from "../VerticalTimelineElements/VerticalTimelineElementProject";
import Navbar from "./Navbar";

export const Project = () => {
    return(
        <div className="min-w-screen min-h-screen text-center">
            <Navbar />
            
            <h1 className="mt-3"> Here's a timeline of all the projects I've done!</h1>
            <VerticalTimeline>


                <VerticalTimelineElementProject /> 
                <VerticalTimelineElementProject /> 
                <VerticalTimelineElementProject /> 
                <VerticalTimelineElementProject /> 
                <VerticalTimelineElementProject /> 
                <VerticalTimelineElementProject /> 
                <VerticalTimelineElementProject /> 

            </VerticalTimeline>
        </div>

    )
}

export default Project;