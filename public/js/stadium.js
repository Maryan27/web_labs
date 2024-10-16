const nameInput = document.getElementById("name_input");
const viewersInput = document.getElementById("viewers_input");
const lightingInput = document.getElementById("lighting_input");
const itemsContainer = document.getElementById("stadium_container");

const itemTemplate = ({ id, name, viewers, lighting }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Number of viewers: ${isNaN(viewers) ? 'N/A' : viewers}</p>
    <p class="card-text">Lighting: ${isNaN(lighting) ? 'N/A' : lighting} lux</p>
    <button class="btn btn-warning edit-button" data-id="${id}">Edit</button>
  </div>
</li>`;

export const clearInputs = () => {
  nameInput.value = "";
  viewersInput.value = "";
  lightingInput.value = "";
};

export const addItemToPage = ({ id, name, viewers, lighting }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, viewers, lighting })
  );
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";
  for (const item of items) {
    addItemToPage(item);
  }
};

export const getInputValues = () => {
  return {
    name: nameInput.value,
    viewers: Number(viewersInput.value),
    lighting: Number(lightingInput.value),
  };
};

export const saveStadiumsToLocalStorage = (stadiums) => {
  localStorage.setItem('stadiums', JSON.stringify(stadiums));
};

export const loadStadiumsFromLocalStorage = () => {
  const stadiums = localStorage.getItem('stadiums');
  return stadiums ? JSON.parse(stadiums) : [];
};


