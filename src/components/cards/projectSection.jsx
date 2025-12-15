import ProjectCard from "./projectCards";
import projects from "../../assets/project-cards.json"

const ProjectSection = () => {
    return (
        <>
        <div className="cardsContainer">
            {projects.map(proj => (
                <ProjectCard 
                    project = {proj}
                    key={proj.id}
                />
            ))}
        </div>
         </>
    );
}
export default ProjectSection