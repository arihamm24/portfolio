import ProjectSection from "./cards/projectSection.jsx"
import ResearchCard from "./cards/researchCards"
import ExplorationCards from "./cards/explorations.jsx";
import MediaQuery from "react-responsive";

function Main() {
    return (
        <div id="content">
        <About />
        <Projects />
        <Research />
        <Exploration />
        </div>
    );
}
export default Main;

function About() {
    return (
        <div className="contentItem" id="about">
            <h2>About</h2>
            <p>Hello! My name is <strong>Ari Hammond</strong> (they/them). I am a <strong>Computational Media</strong> student at Georgia Tech, with concentrations in People and Film & Media Studies. Through my academic and professional work I have developed skills in <span id="about-interests">software development, UI/UX design, design research, and human-computer interaction</span> that I apply to critical technical practice.</p>  
            <p>Under the supervision of Dr. André Brock, I am conducting practice-based research on Black feminist technopractice in interactive documentaries, ultimately culminating in my undergraduate thesis. My broader research experiences and interests include accessibility, public history/culutral heritage, and multimodal AI.</p>
            <p>I am currently seeking part-time/internship roles in <span id="about-interests">creative technology, interactive media/design, UI/UX research, and educational technology</span> to further contextualize my research interests and develop my technical and design skills beyond academic settings.</p>
            <MediaQuery minWidth={1335}>
            <div className="cardsContainer" id="about-cards">
                <div className="card" id="research-interests">
                    <h4>Research Interests</h4>
                    <ul>
                        <li>Interactive Narratives</li>
                        <li>Educational Technology</li>
                        <li>Black Media Studies</li>
                        <li>Feminism and Queer Theory in Media</li>
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
                    <h4>Technical Skills</h4>
                     <ul>
                        <li>Figma</li>
                        <li>Twine</li>
                        <li>Arduino</li>
                        <li>Procreate</li>
                    </ul>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1334}>
                <details>
                    <summary>Research Interests</summary>
                    <ul>
                        <li>Interactive Narratives</li>
                        <li>Educational Technology</li>
                        <li>Black Media Studies</li>
                        <li>Feminism and Queer Theory in Media</li>
                    </ul>
                </details>
                <details>
                    <summary>Programming Langauges</summary>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C</li>
                    </ul>
                </details>
                <details>
                    <summary>Technical Skills</summary>
                     <ul>
                        <li>Figma</li>
                        <li>Twine</li>
                        <li>Arduino</li>
                        <li>Procreate</li>
                    </ul>
                </details>
            </MediaQuery>
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
            <h2>Research Output</h2>
            <p>My academic and professional research activities have resulted in articles, posters, conference presentations, and other materials.</p>
            <div className="cardsContainer" id="research-cards">
                <ResearchCard />
            </div>
        </div>
    );
}
function Exploration() {
    return (
    <div className="contentItem" id="explorations">
        <h2>Explorations</h2>
        <p>These are short-term, intentionally scoped experiments with various technologies, techniques, and tools.</p>
        <ExplorationCards />
    </div>
    );
}