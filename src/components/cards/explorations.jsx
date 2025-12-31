import sketches from "../../assets/explorations.json"
import { createRef } from "react"

export default function ExplorationCards() {
    return(
        <div className="cardsContainer" id="explorationCards">
            {sketches.map(sketch => (
                <Exploration 
                    project = {sketch}
                    key = {sketch.id}
                />
            ))}
        </div>
    );
}

function Exploration({project}) {
    const exploRef = createRef(null);
    function toggleDialog() {
        if (!exploRef.current) {
            return;
        } 
        (exploRef.current.hasAttribute("open"))
            ? exploRef.current.close()
            : exploRef.current.showModal();
    }
    return(
        <>
        <div className="card">
            <h4>{project.title}</h4> 
            <p>{project.tagline}</p>
            <button onClick={toggleDialog}>View Details</button>
        </div>
        <dialog className="modal" id="explorationModal" ref={exploRef}>
            <div id="modalHeader">
                <h3>{project.title}</h3>
                <button onClick={toggleDialog}>&times;</button>
            </div>
            <div id="modalBody">
                <div className="exploContent">
                    <embed src={project.link} className="explorationEmbed"></embed>
                    <button><a href={project.code} id="explorationCode" target="_blank">View Source Code</a></button>
                </div>
                <div className="exploDesc">    
                    <p>{project.framing}</p>
                    <p>{project.constraint}</p>
                </div>
            </div>
        </dialog>
        </>
    )
}