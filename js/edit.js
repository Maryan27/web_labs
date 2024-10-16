document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const stadiumId = urlParams.get("id");

    if (stadiumId) {
        const stadiums = JSON.parse(localStorage.getItem("stadiums")) || [];
        const stadium = stadiums.find(s => s.id === stadiumId);

        if (stadium) {
            document.getElementById("name_input").value = stadium.name;
            document.getElementById("viewers_input").value = stadium.viewers;
            document.getElementById("lighting_input").value = stadium.lighting;
        }
    }
});

document.getElementById("save_button").addEventListener("click", () => {
    const stadiumId = new URLSearchParams(window.location.search).get("id");
    const name = document.getElementById("name_input").value;
    const viewers = Number(document.getElementById("viewers_input").value);
    const lighting = Number(document.getElementById("lighting_input").value);

    const stadiums = JSON.parse(localStorage.getItem("stadiums")) || [];
    const stadiumIndex = stadiums.findIndex(s => s.id === stadiumId);

    const isDuplicate = stadiums.some(stadium => stadium.name.toLowerCase() === name.toLowerCase() && stadium.id !== stadiumId);

    if (isDuplicate) {
        alert("A stadium with this name already exists");
        return;
    }

    if (stadiumIndex !== -1) {
        stadiums[stadiumIndex].name = name;
        stadiums[stadiumIndex].viewers = viewers;
        stadiums[stadiumIndex].lighting = lighting;

        localStorage.setItem("stadiums", JSON.stringify(stadiums));
        window.location.href = "index.html"; 
    }
});
