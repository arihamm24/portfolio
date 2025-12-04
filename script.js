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
        var info = `<h4>${project.title}</h4><p>${project.tagline}</p><button class="open-modal-button" id=${project.id} onclick="openModal(this.id+'-modal')">More Info</button>`;
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
        var headerHTML = `<h3 id="modalTitle">${project.title}</h3><button class="close-modal-button" onclick="closeModal(${project.id}+'-modal')">&times;</button>`
        modalHeader.innerHTML = headerHTML;

        //MODAL BODY - child of modal
        var modalBody = document.createElement('div');
        modalBody.setAttribute('class','modal-body');

       var teamList = createList(project.team);

       var buttons = ``;
       if (project.link === "") {
            buttons = `<button><a target="_blank" class="modalLink" href=${project.demo}>View Demo</a></button>
                    <button><a href=${project.id}.html class="modalLink">See Case Study</a></button>`;
       } else {
            buttons = `<button><a class="modalLink" href=${project.link}>See Project</a></button>
                    <button><a target="_blank" class="modalLink" href=${project.demo}>View Demo</a></button>
                    <button><a href=${project.id}.html class="modalLink">See Case Study</a></button>`;
       }

        //TODO: create layout for case studies!
        var bodyHTML = ` `;
        //Demo and Summary Section
        bodyHTML += ` 
        <div class="projDemoSection">
            <div class="projSummary">
                <div class="projImg">
                    <img src=${project.image} width="375" height="auto" />
                </div>
                <p><span id="summaryTitle">${project.title}</span>${project.summary}</p>
                <div class="projButtons">
        `;
        bodyHTML += buttons;
        bodyHTML +=` 
                </div>
            </div>
        </div>
        `;


        //Roles and Team
        bodyHTML += ` 
        <div class="projRolesSection">
            <div class="projTeam">
            <h4>Project Team</h4>
        `
        bodyHTML += teamList;

        bodyHTML +=`
            </div> 
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
function createList(array) {
    var list = `<ul>`;
    array.forEach(member => {
        list += `<li><strong>${member[0]}:</strong> ${member[1]}</li>`;
    });
    list += `</ul>`;
    return list;
}

//TODO: Research CARDS
let researchCards = null;
fetch('./research-cards.json')
    .then(response => response.json())
    .then(data => {
            createResearchCards(data);
        })
    .catch(error => {
            console.error('Error fetching data:', error);
    }
);

function createResearchCards(data) {
    researchCards = data;
    researchCards.forEach(pub => {
        var card = document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id', pub.id);
        var info = `<h4>${pub.title}</h4><p><em>${pub.publication}</em>, ${pub.date}</p><button id=${pub.id}><a href=${pub.link}>Read Here</a></button>`;
        card.innerHTML = info;
        document.getElementById("research-cards").appendChild(card);
    });

}

function openModal(projectID) {
    modal = document.getElementById(projectID);
    modal.classList.add('active');
    overlay.classList.add('active');
    
   
}
function closeModal(projectID) {

    modal.classList.remove('active');
    overlay.classList.remove('active');
   
}

