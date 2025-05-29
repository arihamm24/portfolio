import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import me from '../../assets/about/about.jpeg'

const About = () => {
    return (
        <div className="about">
            <div className="aboutTitle">
                <h1>About Me</h1>
            </div>
            <div className="aboutSections">
                <div className="aboutLeft">
                    <img className="aboutImg" src={me} height="400px" alt="Ari playing roller derby" />
                </div>
                <div className="aboutRight">
                    <div className="aboutPara">
                        <p> My name is <span className="name">Ari Hammond (they/them)</span> and I am a Computational Media student from Georgia Tech with an interest in <span className="interests">mobile/ubiquitous computing, interactive media, digital media arts, and multimedia storytelling.</span> My work focuses on interactive documentaries and similar interactive digital technologies, especially for the use in education, cultural heritage, libraries, museums, and public history.</p>
                        <br></br>
                        <p>I have experience with front-end web development with  <span className="skill">HTML, CSS, and JavaScript</span>, web application development in  <span className="skill">Django</span>, and data science and information visualization with  <span className="skill">Python and D3.js.</span> I am also a street photographer and video editor, tools that actively inform the creative practices in my academic research. In my spare time, I love to read, cook, play guitar, go to concerts, and I am an active member of the Yellow Jacket Roller Derby Team. </p>
                    </div>
                    <Link to="https://drive.google.com/file/d/1Hcytu-s-SGouMR2oXOl57uko_cLx2B25/view?usp=sharing" className="aboutResume">
                        View my Resume
                    </Link>
                </div>
            </div>
            <div className="aboutAchievements">
                <div className="aboutAchievement">
                    <h2>2x</h2>
                    <p>Faculty Honors</p>
                </div>
                <hr/>
                <div className="aboutAchievement">
                    <h2>1</h2>
                    <p>Published Work</p>
                </div>
                <hr/>
                <div className="aboutAchievement">
                    <h2>3</h2>
                    <p>Years of Research Experience</p>
                </div>
            </div>
        </div>
    )

}
export default About