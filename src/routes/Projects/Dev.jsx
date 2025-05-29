import React from 'react'
import {Link} from 'react-router-dom'
import './Dev.css'
import computer from '../../assets/projects/computer_2_cool-0.png'
import travelmate from '../../assets/projects/travelmate.png'
import apush from '../../assets/projects/apush.png'

const Dev = () => {
    return (
        <div className="dev">
            <div className="devTitle">
                <h1>Development</h1>
            </div>
            <div className="redirect">
                <Link to="/projects" className="redirectLink">Back to Projects Menu</Link>
            </div>
            <div className="devSection">
                <h2 className="devCategoryLabel">Web Development</h2>
                <div className="devContainer">
                    <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Ari Hammond - Portfolio</h3>
                            <h4>Sole/Lead Developer</h4>
                            <p className="devPara">This portfolio is one of my most extensive web development projects, and was an amazing opportunity to practice React. I sourced my icons from <Link to="https://win98icons.alexmeub.com/" className='descrLink'>Alex Meub's Windows 98 Icon Viewer.</Link></p>
                        </div>
                        <div className="devLinks">
                            <Link to="https://github.com/arihamm24/portfolio" className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                    <div className="devProject">
                        <img className="devImage" src={travelmate} alt=""/>
                        <div className="devText">
                            <h3>TravelMate</h3>
                            <h4>Asset/UI Designer, Front-End Developer</h4>
                            <p className="devPara">Django web application that integrated OpenAI and OpenWeatherMap API to give custom travel plans based on user input. I played a primary role in the design and layout of the website.</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link to="https://travelmate.up.railway.app/accounts/signup/" className="devExt">View Project Live</Link>
                            <Link to="https://github.com/jasonli5/travelmate" className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                    <div className="devProject">
                        <img className="devImage" src={apush} alt=""/>
                        <div className="devText">
                            <h3>APUSH Review Site</h3>
                            <h4>Sole/Lead Developer</h4>
                            <p className="devPara">Static multipage collection of timelines, vocabulary, and resources for the AP US History Exam, with some specificity to my local high school's curriculum. Made with HTML and CSS.</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link to="https://arihamm24.github.io/apush-review/" className="devExt">View Project Live</Link>
                            <Link to="https://github.com/arihamm24/apush-review" className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="devSection">
                <h2 className="devCategoryLabel">Mobile Development</h2>
                <div className="devContainer">
                    {/* <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Project Title</h3>
                            <h4>My Role</h4>
                            <p className="devPara">Project description</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link className="devExt">View Project Live</Link>
                            <Link className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                    <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Project Title</h3>
                            <h4>My Role</h4>
                            <p className="devPara">Project description</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link className="devExt">View Project Live</Link>
                            <Link className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                    <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Project Title</h3>
                            <h4>My Role</h4>
                            <p className="devPara">Project description</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link className="devExt">View Project Live</Link>
                            <Link className="devGit">View Project Repository</Link>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="devSection">
                <h2 className="devCategoryLabel">Game Development</h2>
                <div className="devContainer">
                    {/* <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Project Title</h3>
                            <h4>My Role</h4>
                            <p className="devPara">Project description</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link className="devExt">View Project Live</Link>
                            <Link className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                    <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Project Title</h3>
                            <h4>My Role</h4>
                            <p className="devPara">Project description</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link className="devExt">View Project Live</Link>
                            <Link className="devGit">View Project Repository</Link>
                        </div>
                    </div>
                    <div className="devProject">
                        <img className="devImage" src={computer} alt=""/>
                        <div className="devText">
                            <h3>Project Title</h3>
                            <h4>My Role</h4>
                            <p className="devPara">Project description</p>
                        </div>
                        
                        <div className="devLinks">
                            <Link className="devExt">View Project Live</Link>
                            <Link className="devGit">View Project Repository</Link>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="redirect">
                <Link to="/projects" className="redirectLink">Back to Projects Menu</Link>
            </div>
        </div>
    )
}
export default Dev