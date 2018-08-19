//GET 12 RANDOM USERS

//VARIABLES
const gallery = document.getElementById('gallery')
const body = document.querySelector('body');

//FUNCTIONS
function show(element) {
  element.style.display = 'initial';
}

function hide(element) {
  element.style.display = 'none';
}

function fetchData() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      let divforCard = document.createElement('div');
      let divforModel = document.createElement('div');

      let html = `
      <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${data.results[0].picture.medium}">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data.results[0].name.first} ${data.results[0].name.last}</h3>
          <p class="card-text">${data.results[0].email}</p>
          <p class="card-text cap">${data.results[0].location.city}, ${data.results[0].location.state}</p>
        </div>
      </div>
      `;

      divforModel.setAttribute('class', 'modal-container');
      let div2 = document.createElement('div');
      div2.setAttribute('class', 'modal');
      let button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('id', 'modal-close-btn');
      button.setAttribute('class', 'modal-close-btn');
      let x = document.createElement('strong');
      x.textContent = 'X';
      button.appendChild(x);
      let div3 = document.createElement('div');
      let divHTML = `
      <img class="modal-img" src="${data.results[0].picture.large}" alt="profile picture">
      <h3 id="name" class="modal-name cap">${data.results[0].name.first} ${data.results[0].name.last}</h3>
      <p class="modal-text">${data.results[0].email}</p>
      <p class="modal-text cap">${data.results[0].location.city}</p>
      <hr>
      <p class="modal-text">${data.results[0].phone}</p>
      <p class="modal-text">${data.results[0].location.street.toUpperCase()}, ${data.results[0].location.city.toUpperCase()}, ${data.results[0].location.state.toUpperCase()}, ${data.results[0].location.postcode}</p>
      `;
      div3.innerHTML = divHTML;
      div2.appendChild(button);
      div2.appendChild(div3);
      divforModel.appendChild(div2);


      divforCard.innerHTML = html;
      gallery.appendChild(divforCard);
      body.appendChild(divforModel);
      hide(divforModel);

      divforCard.addEventListener('click', function(e) {
        show(divforModel);
        console.log(divforModel);
      });

      button.addEventListener('click', function(e) {
        hide(divforModel);
      });
    }
  });
}

//CALLBACKS

//Fetch data
for (let i = 0; i < 12; i+= 1) {
  fetchData();
}
