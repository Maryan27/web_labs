import {
  addItemToPage,
  clearInputs,
  getInputValues,
  renderItemsList,
  saveStadiumsToLocalStorage,
  loadStadiumsFromLocalStorage
} from "./stadium.js";

const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_button");
const findInput = document.getElementById("find_input");
const calculateButton = document.getElementById("calculate_button");
const summaryViewers = document.getElementById("summary_viewers");
const sortStadiums = document.getElementById("sort_button");
const clearAllButton = document.getElementById("clear_all_button");
const itemsContainer = document.getElementById("stadium_container");

let stadiums = [];
let displayedStadiums = [];

const fetchStadiums = async () => {
  try {
    const response = await fetch('http://localhost:3000/stadiums');
    stadiums = await response.json();
    displayedStadiums = [...stadiums];
    renderItemsList(displayedStadiums);
  } catch (error) {
    console.error("Error fetching stadiums:", error);
  }
};

findButton.addEventListener("click", async () => {
  const searchTerm = findInput.value.toLowerCase().trim();
  console.log(`Searching for: "${searchTerm}"`);

  if (!searchTerm) {
    console.warn("Search term is empty.");
    return; 
  }

  try {
    const response = await fetch(`http://localhost:3000/stadiums?search=${encodeURIComponent(searchTerm)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const filteredStadiums = await response.json();
    console.log(filteredStadiums);

    if (filteredStadiums.length === 0) {
      console.warn("No stadiums found.");
     
    }

    displayedStadiums = filteredStadiums; 
    renderItemsList(displayedStadiums);
  } catch (error) {
    console.error("Error fetching stadiums:", error);
  }
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

clearAllButton.addEventListener("click", async () => {
  try {
    const response = await fetch('http://localhost:3000/stadiums', { method: 'DELETE' });
    const result = await response.json();
    console.log(result);
    stadiums = [];
    displayedStadiums = [];
    renderItemsList(displayedStadiums);
    summaryViewers.textContent = "Total number of viewers: 0";
  } catch (error) {
    console.error("Error clearing stadiums:", error);
  }
});

window.addEventListener("DOMContentLoaded", fetchStadiums);

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


