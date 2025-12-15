import ProjectSection from "./cards/projectSection.jsx"
import ResearchCard from "./cards/researchCards"

function Main() {
    return (
        <div id="content">
        <About />
        <Projects />
        <Research />
        </div>
    );
}
export default Main;

function About() {
    return (
        <div className="contentItem" id="about">
            <h2>About</h2>
            <p>Hello! My name is <strong>Ari Hammond</strong> (they/them). I am a <strong>Computational Media</strong> student at Georgia Tech, with concentrations in People and Film & Media Studies. My research interests include <span id="about-interests">interactive narratives, non-fiction media, digital humanities, and new media technologies.</span></p>  
            <p>Under the supervision of Dr. André Brock, I am conducting practice-based research on Black feminist technopractice in interactive documentaries, ultimately culminating in my undergraduate thesis. </p>
            <p>Professionally, I am seeking roles in <span id="about-interests">creative technology, interactive media/design, UI/UX research, and educational technology</span> to better contextualize my research interests and develping technical skills beyond academia.</p>
            <div className="cardsContainer" id="about-cards">
                <div className="card" id="research-interests">
                    <h4>Research Interests</h4>
                    <ul>
                        <li>Interactive Narratives</li>
                        <li>Digital Humanities</li>
                        <li>Black Media Studies</li>
                        <li>New Media</li>
                    </ul>
                </div>
                <div className="card" id="languages">
                    <h4>Programming Languages</h4>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C</li>
                    </ul>
                </div>
                <div className="card" id="technologies">
                    <h4>Technologies/Software</h4>
                    <ul>
                        <li>Figma</li>
                        <li>Twine</li>
                        <li>Arduino</li>
                        <li>Procreate</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
function Projects() {
    return (
        <div className="contentItem" id="projects">
            <h2>Projects</h2>
            <p>These various projects showcasing my abilities as a researcher, designer, and/or developer. They include web design and development, game development, and interactive narratives. <strong><em>Click any button for a brief overview of the project</em></strong></p>
            <ProjectSection />
        </div>
    );
}
function Research() {
    return (
        <div className="contentItem" id="research">
            <h2>Publications and Research</h2>
            <p>I have published works including essays, journal articles, and conference papers, as well as poster presentations.</p>
            <div className="cardsContainer" id="research-cards">
                <ResearchCard />
            </div>
        </div>
    );
}