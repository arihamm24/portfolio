import { useParams, Link } from "react-router";
import MediaQuery from "react-responsive";
import caseStudies from '../../assets/case-study.json'
import Header from "../header";
import Footer from "../footer";
import MobileHeader from "../mobileHeader";


const CaseStudy = () => {
    const {id} = useParams();
    const study = caseStudies.find((p) => p.id === id);
    const studyIndex = caseStudies.indexOf(study);
    const nextProject = caseStudies.at((studyIndex + 1) % caseStudies.length);
    const prevProject = caseStudies.at((studyIndex + caseStudies.length - 1) % caseStudies.length);


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
    return (
        <>
        <MediaQuery minWidth={1024}>
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
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
            <MobileHeader />
            
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
                <a><li>Approach</li></a>
                <a><li>Artifact</li></a>
                <a><li>Outcomes</li></a>
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