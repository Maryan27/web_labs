const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let stadiums = [];
let idCounter = 1;

app.get('/stadiums', (req, res) => {
    const searchTerm = req.query.search ? req.query.search.toLowerCase() : '';
    const filteredStadiums = stadiums.filter(stadium => stadium.name.toLowerCase().includes(searchTerm));
    res.json(filteredStadiums);
});

app.post('/stadiums', (req, res) => {
    const { name, viewers, lighting } = req.body;

    if (!name || !viewers || !lighting) {
        return res.status(400).json({ message: "Всі поля є обов'язковими" });
    }

    const newStadium = { id: idCounter++, name, viewers, lighting };
    stadiums.push(newStadium);
    res.status(201).json(newStadium);
});

app.put('/stadiums/:id', (req, res) => {
    const stadiumId = parseInt(req.params.id);
    const stadiumIndex = stadiums.findIndex(stadium => stadium.id === stadiumId);

    if (stadiumIndex !== -1) {
        stadiums[stadiumIndex] = { ...stadiums[stadiumIndex], ...req.body };
        res.json(stadiums[stadiumIndex]);
    } else {
        res.status(404).json({ message: "Стадіон не знайдено" });
    }
});

app.delete('/stadiums', (req, res) => {
    stadiums = [];
    idCounter = 1;
    res.json({ message: "Всі стадіони успішно видалено!" });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});

