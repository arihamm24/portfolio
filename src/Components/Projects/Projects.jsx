import React from 'react'
import './Projects.css'
import file from '../../assets/projects/file_lines-0.png'
import camera from '../../assets/projects/camera-2.png'
import computer from '../../assets/projects/computer_2_cool-0.png'

const Projects = () => {
    return (
        <div className="projects">
            <div className="projectsTitle">
                <h1>Projects</h1>
            </div>
            <div className="projectsContainer">
                <div className="projectsCategory">
                    <img className="projectImg"  src={file} alt="windows 95 file icon"/>
                    <h2>Publications and Conferences</h2>
                </div>
                <div className="projectsCategory">
                     <img className="projectImg" src={camera} alt="windows 95 camera icon"/>
                     <h2>Photography</h2>
                </div>
                <div className="projectsCategory">
                     <img className="projectImg" src={computer} alt="windows 95 camera icon"/>
                     <h2>Development</h2>
                </div>
            </div>
        </div>
    )
}

export default Projects