import React from "react";
import ProjectCard from "./projectCards";
import Modal from "./modal";
import projects from "../../assets/project-cards.json"

const ProjectSection = () => {
    const [active, setActive] = React.useState(null);

    return (
        <>
        <div className="cardsContainer">
            {projects.map(currentProject => (
                <ProjectCard 
                    project = {currentProject}
                    onOpen = {() => setActive(currentProject)}
                />
            ))}
            {active && 
            <Modal
                projectID={active.id}
                onClose={() => setActive(null)}
            />}
        </div>
         </>
    );
}
export default ProjectSection