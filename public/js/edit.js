document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const stadiumId = urlParams.get("id");

    if (stadiumId) {
        fetch(`http://localhost:3000/stadiums`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(stadiums => {
                const stadium = stadiums.find(s => s.id == stadiumId);
                if (stadium) {
                    document.getElementById("name_input").value = stadium.name;
                    document.getElementById("viewers_input").value = stadium.viewers;
                    document.getElementById("lighting_input").value = stadium.lighting;
                } else {
                    console.error("Stadium not found");
                }
            })
            .catch(error => console.error("Error fetching stadium data: ", error));
    }
});

document.getElementById("save_button").addEventListener("click", () => {
    const stadiumId = new URLSearchParams(window.location.search).get("id");
    const name = document.getElementById("name_input").value;
    const viewers = Number(document.getElementById("viewers_input").value);
    const lighting = Number(document.getElementById("lighting_input").value);

    fetch(`http://localhost:3000/stadiums`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(stadiums => {
            const stadium = stadiums.find(s => s.id == stadiumId);

            if (stadium.name.toLowerCase() === name.toLowerCase()) {
                
            } else {
                const isDuplicate = stadiums.some(s => s.name.toLowerCase() === name.toLowerCase());
                if (isDuplicate) {
                    alert("A stadium with this name already exists");
                    return;
                }
            }

            const updatedStadium = {
                name: name,
                viewers: viewers,
                lighting: lighting,
            };

            fetch(`http://localhost:3000/stadiums/${stadiumId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedStadium)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error updating stadium");
                }
                return response.json();
            })
            .then(() => {
                window.location.href = "index.html";
            })
            .catch(error => {
                console.error("Error updating stadium: ", error);
            });
        })
        .catch(error => console.error("Error fetching stadium data: ", error));
});
