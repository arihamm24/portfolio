import { useParams, Link } from "react-router";
import MediaQuery from "react-responsive";
import { IoMenu, IoClose } from "react-icons/io5";
import caseStudies from '../../assets/case-study.json'
import Header from "../header";
import Footer from "../footer";
import { useState } from "react";

const CaseStudy = () => {

    const {id} = useParams();
    const study = caseStudies.find((p) => p.id === id);
    const studyIndex = caseStudies.indexOf(study);
    const nextProject = caseStudies.at((studyIndex + 1) % caseStudies.length);
    const prevProject = caseStudies.at((studyIndex + caseStudies.length - 1) % caseStudies.length);

    const [studyNavOpen, setStudyNavOpen] = useState(null);

    if (!study) {
        return (
            <div style={
                {backgroundColor:'#272a63', color:"#F5F5FA", padding:"40px", margin:"40px", borderRadius:"20px", width:"fit-content"}
            }>
                <h1>Project Unavailable</h1>
                <h3>This project does not exist, has been removed, or is otherwise unavailable</h3>
                <Link to="/"><button>Return Home</button></Link>
            </div>
        );
    }

    function MobileHeader() {
        return(
            <header id="mobileHeader">
                <button id="menuToggle" onClick={() => setStudyNavOpen(!studyNavOpen)}>
                    {studyNavOpen ?
                        (<IoClose/>) :
                        (<IoMenu/>)
                    }
                </button>
                <Link to="/" style={
                {textDecoration: 'none', color:"#F5F5FA", alignSelf:"center"}
                }><h1>Ari Hammond</h1></Link>
            </header>
        );
    }

    function StudyNav() {
    return (
        <>
        <nav>
            <h3>Contents</h3>
            <a href="#hero" onClick={()=>setStudyNavOpen(!studyNavOpen)}><p>Project Synopsis</p></a>
            <a href="#problem" onClick={()=>setStudyNavOpen(!studyNavOpen)}><p>Problem Statement</p></a>
            <a href="#process" onClick={()=>setStudyNavOpen(!studyNavOpen)}><p>Research & Design Process</p></a>
            <ul>
                <a><li>Background</li></a>
                <a><li>Approach</li></a>
                <a><li>Artifact</li></a>
                <a><li>Outcomes</li></a>
            </ul>
            <a href="#reflection" onClick={()=>setStudyNavOpen(!studyNavOpen)}><p>Reflection</p></a>
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

    return (
        <>
        <MediaQuery minWidth={900}>
        <Header />
        <div id="projPage">
            <div id="studyNavbar" >
                <a href="/"><button>Return Home</button></a>
                <StudyNav />
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
        </MediaQuery>
        <MediaQuery maxWidth={900}>
            <MobileHeader />
            {studyNavOpen ?
                (<>
                <div id="studyNavbar" >
                    <a href="/"><button>Return Home</button></a>
                    <StudyNav />
                    <NextProjButton 
                        next = {nextProject}
                        prev = {prevProject}
                    />
                </div>
                <div className="overlay"></div>
                </>
            ) :
                (<></>)
            }
            <div id="projPage">
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
        </MediaQuery>
        <Footer />
        </>
    );
}
export default CaseStudy;


function Hero({project}) {
    return(
        <div className="projContent" id="hero">
            <div className="details">
                <h2>{project.title}</h2>
                <img src={project.image} alt=""/>
            </div>
            <div className="tldr">
                <h4>{project.date}</h4>
                <h4>{project.type}</h4>
                <h4>Project Team</h4>
                <ul>
                    {project.team.map((teamMember,index) => (
                        <li key={index}><span id="modalTeamName">{teamMember[0]}:</span> {teamMember[1]}</li>
                    ))}
                </ul>
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
                <div>
                <h4>Goals</h4>
                    {project.overview.goals.map((goal, index) => (
                        <p key={index}><span id="goalVerb">{goal[0]}</span>{goal[1]}</p>
                    ))}
                </div>
                <div>
                <h4>Results</h4>
                    {project.overview.results.map((result, index) => (
                        <p key={index}>{result}</p>
                    ))}
                </div>
            </div>
            <div>
                <h4>Tools</h4>
                <ul>
                    {project.overview.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
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
                    <>
                    {project.process.background.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    </>
                    
                </div>
                <div className="processSection">
                    <h4>Methodology</h4>
                    <p>Expand each section to view process documents and extended explanations</p>
                    {project.process.methods.map((method, id) => (
                        <details key={id} className="approach">
                            <summary id="methodTitle">{method.title}: <span id="methodSummary">{method.summary}</span></summary>
                            <p>{method.description}</p>
                            {method.media.map((media, i)=>(
                                <>
                                <img key={i} src={media[0]}/>
                                <p>{media[1]}</p>
                                </>
                            ))}
                        </details>
                    ))}
                </div>
                <div className="processSection" id="artifact">
                    <h4>Artifact & Implementation</h4>
                    <a href={project.process.artifact} target="_blank"><img src={project.image} width={200}/></a>
                    <h5>Click the Image to Access the Live Artifact or Demo</h5>
                </div>
                <div className="processSection">
                    <h4>Outcomes</h4>
                    <p>{project.process.findings}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}
function Reflection({project}) {
    return (
        <div className="projContent" id="reflection">
            <h3>Reflection</h3>
            <div id="reflectionParagraph">
                <p>{project.reflection.paragraph}</p>
                <p>{project.reflection.futureWork}</p>
            </div>
        </div>
    );
}