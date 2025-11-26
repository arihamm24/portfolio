let projectCards = null;
let projectModals = null;

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
        var bodyHTML = `<p>CASE STUDY HERE</p>`;

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
function openModal(projectID) {
    modal = document.getElementById(projectID);
    modal.classList.add('active');
    overlay.classList.add('active');
    
   
}
function closeModal(projectID) {

    modal.classList.remove('active');
    overlay.classList.remove('active');
   
}

