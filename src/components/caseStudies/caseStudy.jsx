import { useParams, Link } from "react-router";
import { createRef } from "react";
import caseStudies from '../../assets/case-study.json'
import Header from "../header";
import Footer from "../footer";

const CaseStudy = () => {
    const {id} = useParams();
    const study = caseStudies.find((p) => p.id === id);
    const studyIndex = caseStudies.indexOf(study);
    const nextProject = caseStudies.at((studyIndex + 1) % caseStudies.length);
    const prevProject = caseStudies.at((studyIndex + caseStudies.length - 1) % caseStudies.length);


    if (!study) {
        return (
            <alert style={
                {backgroundColor:'#AB81cd', color:"#272a63"}
            }>
                <h1>Project Unavailable</h1>
                <p>This project does not exist, has been removed, or is otherwise unavailable</p>
                <Link to="/"><button>Return Home</button></Link>
            </alert>
        );
    }

    return (
        <>
        <Header />
        <div id="projPage">
            <div id="studyNavbar">
                <a href="/"><button>Return Home</button></a>
                <StudyNav/>
                <NextProjButton 
                    next = {nextProject}
                    prev = {prevProject}
                />
            </div>
            <div className="caseStudy">
                <Hero 
                    project = {study}
                />
                <Overview 
                    project = {study}
                />
                <Problem 
                    project = {study}
                />
                <Process
                    project = {study}
                />
                <Reflection 
                    project = {study}
                />
            </div>
        </div>
        <Footer />
        </>
    );
}
export default CaseStudy;

function StudyNav() {
    return (
        <>
        <nav>
            <h3>Contents</h3>
            <a href="#hero"><p>Project Synopsis</p></a>
            <a href="#problem"><p>Problem Statement</p></a>
            <a href="#process"><p>Research & Design Process</p></a>
            <ul>
                <a><li>Background</li></a>
                <a><li>Methods</li></a>
                <a><li>Artifact</li></a>
                <a><li>Findings</li></a>
            </ul>
            <a href="#reflection"><p>Reflection</p></a>
        </nav>
        </>
    );
}

function NextProjButton({next, prev}) {
    return (
        <div id="navStudyButtons">
        <Link to={`/${prev.id}`}><button style={
            {fontSize:"0.8rem"}
        }>&larr; Previous</button></Link>
        <Link to={`/${next.id}`}><button style={
            {fontSize:"0.8rem"}
        }>Next &rarr;</button></Link>
        </div>
    );
}

function Hero({project}) {
    return(
        <div className="projContent" id="hero">
        <div className="details">
            <h2>{project.title}</h2>
            <p>{project.tagline}</p>
            <h4>{project.date}</h4>
            <h4>{project.type}</h4>
            <h4>Project Team</h4>
            <ul>
                {project.team.map(teamMember => (
                    <li><span id="modalTeamName">{teamMember[0]}:</span> {teamMember[1]}</li>
                ))}
            </ul>
        </div>
        <div className="image">
            <img src={project.image} alt="" width="350" height="auto"/>
        </div>
        </div>
    );
}
function Overview({project}) {
    return (
        <>
        <div className="projContent" id="overview">
            <div>
                <p>{project.overview.summary}</p>
            </div>
            <div>
                <h5>Goals</h5>
                <ul>
                    {project.overview.goals.map(goal => (
                        <li>{goal}</li>
                    ))}
                </ul>
                <h5>Tasks</h5>
                <ul>
                    {project.overview.tasks.map(task => (
                        <li>{task}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h5>Tools</h5>
                <ul>
                    {project.overview.tools.map(tool => (
                        <li>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
        <hr></hr>
        </>
    );
}
function Problem({project}) {
    return (
        <div className="projContent" id="problem">
            <div id="problemBlurb">
                <h3>Problem Statement/Research Question</h3>
                <h4>{project.problem.blurb}</h4>
            </div>
            <div id="problemParagraph">
                <p>{project.problem.paragraph}</p>
            </div>
        </div>
    );
}
function Process({project}) {
    return (
        <div className="projContent" id="process">
            <h3>Research and Design Process</h3>
            <div id="processGrid">
                <div className="processSection">
                    <h4>Background & Theoretical Framework</h4>
                </div>
                <div className="processSection">
                    <h4>Methods</h4>
                </div>
                <div className="processSection">
                    <h4>Artifact & Implementation</h4>
                    <p>Reiterate tools and hosting</p>
                </div>
                <div className="processSection">
                    <h4>Findings and Insights</h4>
                    <p>Was the question answered? What did you find? Why this matters?</p>
                </div>
            </div>
        </div>
    );
}
function Reflection({project}) {
    return (
        <div className="projContent" id="reflection">
            <h3>Reflection</h3>
            <div id="reflectionParagraph">
                <p>{project.reflection.paragraph}</p>
            </div>
        </div>
    );
}