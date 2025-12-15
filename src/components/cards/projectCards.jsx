const ProjectCard = ({project, onOpen}) => {
    return (
        <>
        <div className='card'>
            <h4>{project.title}</h4> 
            <p>{project.tagline}</p>
            <button onClick={onOpen}>Learn More</button>
        </div>
        </>
    );
};
export default ProjectCard;