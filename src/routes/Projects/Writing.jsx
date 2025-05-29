import React from 'react'
import {Link} from 'react-router-dom'
import './Writing.css'
import file from '../../assets/projects/file_lines-0.png'

const Writing = () => {
    return (
        <div className="write">
            <div className="writeTitle">
                <h1>Publications and Conferences</h1>
            </div>
            <div className="redirect">
                <Link to="/projects" className="redirectLink">Back to Projects Menu</Link>
            </div>
            <div className="writeContainer">
                <div className="writeProject">
                    <div className="writeImage"><img src={file} width="128px"alt="" /></div>
                    <div className="writeText">
                        <p className="writeWorkTitle">"The Exorcist as a Comedy: Why the 'Scariest Movie of All Time' is Hilarious"</p>
                        <p className="writePub">Film Matters, <span className="date">2025</span></p>
                        <p className="writeSummary"> <span className="movieTitle">The Exorcist</span> (1973) holds both comedic and horrific potential due to the similarities
                        between the two genres. Previous comedic interpretations of what is purported to be the “Scariest
                        Movie of All Time” have leveraged the film’s visual effects and religious messaging to create
                        parody works, but this comedic interpretation considers the exaggeration of puberty and female
                        adolescence in the film’s narrative through a gendered lens. By examining the film as a work
                        written by men about womanhood and acknowledging a disregard for female audiences and
                        experiences, a new comedic interpretation of <span className="movieTitle">The Exorcist</span> is brought to light.</p>
                        <div className="writeRead">
                            <Link className="writeLink">Read Here</Link>
                        </div>
                    </div>
                    
                </div>
                {/* <div className="writeProject">
                    <div className="writeImage"><img src={file} width="128px"alt="" /></div>
                    <div className="writeText">
                        <p className="writeWorkTitle">"Title of Work"</p>
                        <p className="writePub">Publication, <span className="date">Date</span></p>
                        <p className="writeSummary">Summary of Work hey!! my parents gave this really cool idea we could implement, and connected me with my dads colleague who lead corporate accessibility and has worked with universities before. what if we did an accessibility speaker series of experts like the one we’re meeting with on Tuesday or with activists/advocates? its a way to implement regular trainings, engage in-person, and connect</p>
                        <div className="writeRead">
                            <Link className="writeLink">Read Here</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="writeProject">
                    <div className="writeImage"><img src={file} width="128px"alt="" /></div>
                    <div className="writeText">
                        <p className="writeWorkTitle">"Title of Work"</p>
                        <p className="writePub">Publication, <span className="date">Date</span></p>
                        <p className="writeSummary">Summary of Work hey!! my parents gave this really cool idea we could implement, and connected me with my dads colleague who lead corporate accessibility and has worked with universities before. what if we did an accessibility speaker series of experts like the one we’re meeting with on Tuesday or with activists/advocates? its a way to implement regular trainings, engage in-person, and connect</p>
                        <div className="writeRead">
                            <Link className="writeLink">Read Here</Link>
                        </div>
                    </div> 
                </div>
                <div className="writeProject">
                    <div className="writeImage"><img src={file} width="128px"alt="" /></div>
                    <div className="writeText">
                        <p className="writeWorkTitle">"Title of Work"</p>
                        <p className="writePub">Publication, <span className="date">Date</span></p>
                        <p className="writeSummary">Summary of Work hey!! my parents gave this really cool idea we could implement, and connected me with my dads colleague who lead corporate accessibility and has worked with universities before. what if we did an accessibility speaker series of experts like the one we’re meeting with on Tuesday or with activists/advocates? its a way to implement regular trainings, engage in-person, and connect</p>
                        <div className="writeRead">
                            <Link className="writeLink">Read Here</Link>
                        </div>
                    </div>
                </div> */}
                <div className="redirect">
                    <Link to="/projects" className="redirectLink">Back to Projects Menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Writing