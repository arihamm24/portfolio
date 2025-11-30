let projectCards = null;
let projectModals = null;

//create PROJECT CARDS for main page
fetch('./project-cards.json')
    .then(response => response.json())
    .then(data => {
            createProjectCards(data);
        })
    .catch(error => {
            console.error('Error fetching data:', error);
    }
);

function createProjectCards(data) {
    projectCards = data;
    projectCards.forEach(project => {
        var card = document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id', project.id);
        var info = `<h4>${project.title}</h4><p>${project.tagline}</p><button class="open-modal-button" id=${project.id} onclick="openModal(this.id+'-modal')">View Project Case Study</button>`;
        card.innerHTML = info;
        document.getElementById("project-cards").appendChild(card);
    });

}

//PROJECT MODAL POPUPS
fetch('./project-modals.json')
    .then(response => response.json())
    .then(data => {
            createProjectModals(data);
        })
    .catch(error => {
            console.error('Error fetching data:', error);
    }
);

function createProjectModals(data) {
    projectModals = data;
    projectModals.forEach(project => {
        var projectCard = document.getElementById(project.id); //the card with the corresponding project

        //MODAL DIVS
        var modal = document.createElement('div');
        modal.setAttribute('id', project.id +'-modal');
        modal.setAttribute('class','modal');

        //MODAL HEADER - child of modal
        var modalHeader = document.createElement('div');
        modalHeader.setAttribute('class','modal-header');
        var headerHTML = `<h3>${project.title}</h3><button class="close-modal-button" onclick="closeModal(${project.id} +'-modal')">&times;</button>`
        modalHeader.innerHTML = headerHTML;

        //MODAL BODY - child of modal
        var modalBody = document.createElement('div');
        modalBody.setAttribute('class','modal-body');

        //TODO: create layout for case studies!
        var bodyHTML = ` `;
        //Demo and Summary Section
        bodyHTML += ` 
        <div class="projDemoSection">
            <div class="projVideo">
            <iframe src=${project.demo} width="500" height="400"></iframe>
            </div>
            <div class="projSummary">
            <p><span id="summaryTitle">${project.title}</span>${project.summary}</p>
            </div>
        </div>
        `;

        bodyHTML += `<a target="_blank" class="projLink" href=${project.link}>See Project</a>`;
        
        //Roles and Team
        bodyHTML += ` 
        <div class="projRolesSection">
            <div class="projRole">
            <h4>My Role: ${project.role}</h4>
            </div>
            <div class="projTeam">
            <h4>Project Team</h4>
            <ul>
                <li>Team Members here
            </ul>
            </div>
        </div>
        `;

        //Problem Statement/Description
        bodyHTML += ` 
        <div class="projProblem">
            <h4>Challenge/Problem Statement</h4>
            <div id="problemStatement">${project.problemStatement}</div>
        </div>
        `;

        //process documents
        var processDocs = document.createElement('div');
        processDocs.setAttribute('id','processDocs');

        bodyHTML += ` 
        <div class="projReflection">
            <h4>Reflection</h4>
            <div id="reflection">${project.reflection}</div>
        </div>
        `;

        modalBody.innerHTML = bodyHTML;
        

        //adding children!
        modal.appendChild(modalHeader);
        modal.appendChild(modalBody);

        //OVERLAY
        var overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');

        //adding to Project Card
        projectCard.appendChild(modal);
        projectCard.appendChild(overlay);
        
    });
}

//TODO: Research CARDS

function openModal(projectID) {
    modal = document.getElementById(projectID);
    modal.classList.add('active');
    overlay.classList.add('active');
    
   
}
function closeModal(projectID) {

    modal.classList.remove('active');
    overlay.classList.remove('active');
   
}

