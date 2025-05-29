import React from 'react'
import {Link} from 'react-router-dom'
import './Dev.css'
import computer from '../../assets/projects/computer_2_cool-0.png'

const Dev = () => {
    return (
        <div className="dev">
            <div className="devTitle">
                <h1>Development</h1>
            </div>
            <div className="devSection">
                <h2 className="devCategoryLabel">Web Development</h2>
                <div className="devContainer">
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
                </div>
            </div>
            <div className="devSection">
                <h2 className="devCategoryLabel">Mobile Development</h2>
                <div className="devContainer">
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
                </div>
            </div>
            <div className="devSection">
                <h2 className="devCategoryLabel">Game Development</h2>
                <div className="devContainer">
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
                </div>
            </div>
        </div>
    )
}

export default Dev