import React from 'react'
import './Projects.css'
import {Link} from 'react-router-dom'
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
                <Link to="/projects/publications" className="projectsCategory">
                    <img className="projectImg"  src={file} alt="windows 95 file icon"/>
                    <h2>Publications and Conferences</h2>
                    <p className="projectDesc">Since my first year of undergrad, my writings and research have been featured in several academic journals and conferences. Topics include film analysis op-eds to practice-based research</p>
                </Link>
                <Link to="/projects/photography" className="projectsCategory">
                     <img className="projectImg" src={camera} alt="windows 95 camera icon"/>
                     <h2>Photography</h2>
                     <p className="projectDesc">Photography is a vital part of how I interact with the world and document my life, and therefore directly influences my work as a creative technologist and media scholar</p>
                </Link>
                <Link to="/projects/development" className="projectsCategory">
                     <img className="projectImg" src={computer} alt="windows 95 camera icon"/>
                     <h2>Development</h2>
                     <p className="projectDesc">I use web, mobile, and game development to tell stories across mediums. I am familiar with Agile software approaches and several object oriented languages</p>
                </Link>
            </div>
        </div>
    )
}

export default Projects