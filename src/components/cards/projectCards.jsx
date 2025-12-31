import { createRef, useRef } from "react";
import { Link } from "react-router";

const ProjectCard = ({project}) => {
    const dialogRef = createRef(null);

    function toggleDialog() {
    if (!dialogRef.current) {
            return;
        } 
        (dialogRef.current.hasAttribute("open"))
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }
    function ProjectButtons() {
        if (project.link == "") {
            return(
                <>
                <a target="_blank" className="modalLink" href={project.demo}><button>View Demo</button></a>
                <Link to={`/${project.id}`} className="modalLink"><button>See Case Study</button></Link>
                </>
            );
        } else if (project.demo == "") {
            return(
                <>
                <a className="modalLink" href={project.link} target="_blank"><button>See Project</button></a>
                <Link to={`/${project.id}`} className="modalLink"><button>See Case Study</button></Link>
                </>
            );
        } else {
            return (
                <>
                <a className="modalLink" href={project.link} target="_blank"><button>See Project</button></a>
                <a target="_blank" className="modalLink" href={project.demo}><button>View Demo</button></a>
                <Link to={`/${project.id}`} className="modalLink"><button>See Case Study</button></Link>
                </>
            );
        }
    }

    return (
        <>
        <div className='card' id={project.id}>
            <h4>{project.title}</h4> 
            <p>{project.tagline}</p>
            <button onClick={toggleDialog}>Learn More</button>
        </div>
        <dialog className="modal" id={project.id} ref={dialogRef}> 
            <div id="modalHeader">
                <h3>{project.title}</h3>
                <button onClick={toggleDialog}>&times;</button>
            </div>
            <div id="modalBody">
                <div className="projDemoSection">
                    <div className="projSummary">
                        <div className="projImg">
                            <img src={project.image} width="375" height="auto" />
                        </div>
                        <p><span id="summaryTitle">{project.title}</span>{project.summary}</p>
                        <div className="projButtons">
                           <ProjectButtons />
                        </div>
                    </div>
                </div>
                <div className="projRolesSection">
                    <div className="projTeam">
                        <h4>Project Team</h4>
                        <ul>
                        {project.team.map((teamMember, i) => (
                            <li key={i}><span id="modalTeamName">{teamMember[0]}:</span> {teamMember[1]}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </dialog>
        </>
    );
};
export default ProjectCard;