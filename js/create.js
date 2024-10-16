document.getElementById("create_form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name_input").value;
    const viewers = document.getElementById("viewers_input").value;
    const lighting = document.getElementById("lighting_input").value;

    const stadiums = JSON.parse(localStorage.getItem("stadiums")) || [];
    const isDuplicate = stadiums.some(stadium => stadium.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
        alert("A stadium with this name already exists");
        return;
    }

    const stadium = {
        id: uuid.v1(),
        name: name,
        viewers: Number(viewers),
        lighting: Number(lighting),
        image: "", 
    };

    stadiums.push(stadium);
    localStorage.setItem("stadiums", JSON.stringify(stadiums));

    window.location.href = "index.html";
});
