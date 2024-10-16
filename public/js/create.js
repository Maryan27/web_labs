
function getImageFileName(name) {
    const nameImageMap = {
        "Stadium1": "stadium1.jpg",
        "Stadium2": "stadium2.jpg",
        
    };
    return nameImageMap[name] || ""; 
}

document.getElementById("create_form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name_input").value.trim();
    const viewers = document.getElementById("viewers_input").value;
    const lighting = document.getElementById("lighting_input").value;

    if (!name || !viewers || !lighting) {
        alert("Всі поля є обов'язковими.");
        return;
    }

    console.log("Перевірка наявності стадіонів перед додаванням:", name);
    fetch('http://localhost:3000/stadiums')
        .then(response => response.json())
        .then(stadiums => {
            const isDuplicate = stadiums.some(stadium => stadium.name.toLowerCase() === name.toLowerCase());

            if (isDuplicate) {
                alert("Стадіон з такою назвою вже існує");
                return;
            }

            const stadium = {
                id: uuid.v1(),
                name: name,
                viewers: Number(viewers),
                lighting: Number(lighting),
                image: `/img/${getImageFileName(name)}` 
            };

            console.log("Відправлення POST запиту на URL:", 'http://localhost:3000/stadiums', "з даними:", JSON.stringify(stadium));

            return fetch('http://localhost:3000/stadiums', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(stadium),
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Мережевий запит не був успішним');
            }
            return response.json();
        })
        .then(() => {
            window.location.href = "index.html"; 
        })
        .catch((error) => {
            console.error('Помилка:', error);
            alert("Сталася помилка під час створення стадіону: " + error.message);
        });
});




