import {
  addItemToPage,
  clearInputs,
  getInputValues,
  renderItemsList,
  loadStadiumsFromLocalStorage,
} from "./stadium.js";

const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_button");
const findInput = document.getElementById("find_input");
const calculateButton = document.getElementById("calculate_button");
const summaryViewers = document.getElementById("summary_viewers");
const sortStadiums = document.getElementById("sort_button");

let stadiums = [];
let displayedStadiums = [];

findButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase().trim();
  displayedStadiums = stadiums.filter((stadium) =>
      stadium.name.toLowerCase().includes(searchTerm)
  );
  renderItemsList(displayedStadiums);
});

cancelFindButton.addEventListener("click", () => {
  displayedStadiums = [...stadiums];
  renderItemsList(displayedStadiums);
  findInput.value = "";
});

calculateButton.addEventListener("click", () => {
  const totalViewers = displayedStadiums.reduce(
      (total, stadium) => total + Number(stadium.viewers),
      0
  );
  summaryViewers.textContent = `Total number of viewers: ${totalViewers}`;
});

sortStadiums.addEventListener("click", () => {
  displayedStadiums.sort((first, second) => {
      return second.name.localeCompare(first.name);
  });
  renderItemsList(displayedStadiums);
});

const clearAllButton = document.getElementById("clear_all_button");

clearAllButton.addEventListener("click", () => {
    stadiums = []; 
    localStorage.removeItem("stadiums"); 
    displayedStadiums = []; 
    renderItemsList(displayedStadiums); 
    summaryViewers.textContent = "Total number of viewers: 0"; 
});

window.addEventListener("DOMContentLoaded", () => {
  stadiums = loadStadiumsFromLocalStorage();
  displayedStadiums = [...stadiums];
  renderItemsList(displayedStadiums);
});

const itemsContainer = document.getElementById("stadium_container");

itemsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-button")) {
    const stadiumId = event.target.getAttribute("data-id");
    window.location.href = `edit.html?id=${stadiumId}`;
  }
});

const createButton = document.getElementById("create_button");

createButton.addEventListener("click", () => {
    window.location.href = "create.html"; 
});



