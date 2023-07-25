const newPartyForm = document.querySelector('#new-party-form');
    // Connects to the div id in the html.
const partyContainer = document.querySelector('#party-container');
    // Connects to the div id in the html.

const PARTIES_API_URL =
    'http://fsa-async-await.herokuapp.com/api/workshop/parties';
    // Connects to the Parties API
const GUESTS_API_URL =
    'http://fsa-async-await.herokuapp.com/api/workshop/guests';
    // Connects to the Guests API
const RSVPS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/rsvps';
    // Connects to the RSVP API
const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';
    // Connects to the Gifts API

// This constant draws all parties from the Parties API. 
const getAllParties = async () => { // ✔
    try {
      const response = await fetch(PARTIES_API_URL);
      const parties = await response.json();
      return parties;
    } catch (error) {
      console.error(error);
    }
  };

// This function renders the parties. It produces a pair of buttons, as well as
// space for the specified information. The buttons carry functions as well. 
const renderParties = async (parties) => {
    try {
      partyContainer.innerHTML = '';
      parties.forEach((party) => {
        const partyElement = document.createElement('div');
        partyElement.classList.add('party');
        partyElement.innerHTML = `
                  <h2>${party.name}</h2>
                  <p>${party.description}</p>
                  <p>${party.date}</p>
                  <p>${party.time}</p>
                  <p>${party.location}</p>
                  <button class="details-button" data-id="${party.id}">See Details</button>
                  <button class="delete-button" data-id="${party.id}">Delete</button>
              `;
        partyContainer.appendChild(partyElement);
  
        // This function is used to check details. It pulls from the renderSinglePartyById function. 
        const detailsButton = partyElement.querySelector('.details-button');
        detailsButton.addEventListener('click', async (event) => {
          // your code here 
          // console.log(event);
          // console.log(partyElement);
          // render = renderSinglePartyById()
          console.log(event.target.dataset.ID)
          const detailsButton = document.querySelector(`#details-button`)
          const dataID = detailsButton.getAttribute(`data-id`)
          console.log(dataID);
          renderSinglePartyById();
          
          // renderSinglePartyById(event);
        });
  
        // delete party
        const deleteButton = partyElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', async (event) => {
          // your code here
          deleteParty()
        });
      });
    } catch (error) {
      console.error(error);
    }
  };


    // The init function. It draws on getAllParties and renderParties. 
const init = async () => {
    // your code here
    try {
    let parties = await getAllParties();
    console.log(parties);
    
    renderParties(parties);
  }
    catch(error)  {
      const errorMessage = `you messed up: init`
      console.log(errorMessage)
    }
  }

    // This inits everything.
init();