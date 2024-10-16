import {
    addItemToPage,
    clearInputs,
    getInputValues,
    renderItemsList,
  } from "./stadium.js";
  
  const submitButton = document.getElementById("submit_button");
  const findButton = document.getElementById("find_button");
  const cancelFindButton = document.getElementById("cancel_button");
  const findInput = document.getElementById("find_input");
  const calculateButton = document.getElementById("calculate_button");
  const summaryViewers = document.getElementById("summary_viewers");
  const sortStadiums = document.getElementById("sort_button");
  
  let stadiums = [
    { id: '1', name: 'Arena Lviv', viewers: 35000, lighting: 300, image: './img/arena_lviv.png' },
    { id: '2', name: 'Santiago Bernabeu', viewers: 85000, lighting: 400, image: './img/bernabeu.png' },
    { id: '3', name: 'Camp nou', viewers: 99000, lighting: 350, image: './img/camp_nou.png' },
    { id: '4', name: 'Emarites', viewers: 80000, lighting: 500, image: './img/emirates.png' },
    { id: '5', name: 'Anfield', viewers: 61276, lighting: 600, image: './img/liverpool.png' },
  ];
  let displayedStadiums = [...stadiums];
  
  const addItem = ({ name, viewers, lighting }) => {
    const generatedId = uuid.v1();
    
    const newItem = {
      id: generatedId,
      name,
      viewers,
      lighting,
      image: '', 
    };
    
    stadiums.push(newItem);
    if (displayedStadiums.length === 0 || findInput.value === "") {
      displayedStadiums.push(newItem);
    }
    
    addItemToPage(newItem);
  };
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    const { name, viewers, lighting } = getInputValues();
    
    clearInputs();
    
    addItem({
      name,
      viewers: Number(viewers),
      lighting: Number(lighting),
    });
  });
  
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
    displayedStadiums = [];
    renderItemsList(displayedStadiums);
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    renderItemsList(stadiums);
  });
  