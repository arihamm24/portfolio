import ProjectCard from "./projectCards";
import projects from "../../assets/project-cards.json"
import { useState, useMemo } from "react";

const categories = [...new Set(projects.flatMap((project) => project.category))];

const ProjectSection = () => {

    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState("All");

    function Filter() { //filter COMPONENT function
        const handleFilter = (cat) => {
            setActiveFilter(cat);
            if (cat === "All") {
                setFilteredProjects(projects); //display all projects!
            } else {
                const filtered = projects.filter(project => project.category.includes(cat));
                setFilteredProjects(filtered);
            }
        }
    
        return (
            <div id="filterButtonContainer">
                <button className={`filterButton ${activeFilter === "All" ? "active" : ""}`} onClick={() => handleFilter("All")}>All</button>
                {categories.map((category, id)=> (
                    <button key={id} className={`filterButton ${activeFilter === category ? "active" : ""}`}onClick={() => handleFilter(category)}>{category}</button>
                ))}
            </div>
        );
    }

    return (
        <>
        <Filter />
        <div className="cardsContainer">
            {filteredProjects.map(proj => (
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