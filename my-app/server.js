const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/img', express.static(path.join(__dirname, 'src', 'img')));

const itemsData = [
    { id: 1, img: "http://localhost:5000/img/home_match.jpg", title: "Liverpool : Crystal Palace", date: "28.10.2024", time: "18:30", location: "Anfield", price: "180$" },
    { id: 2, img: "http://localhost:5000/img/everton.jpg", title: "Liverpool : Everton", date: "30.10.2024", time: "22:00", location: "Anfield", price: "550$" },
    { id: 3, img: "http://localhost:5000/img/west_ham.jpg", title: "Liverpool : West Ham", date: "04.11.2024", time: "14:30", location: "Anfield", price: "350$" },
    { id: 4, img: "http://localhost:5000/img/wolves.jpg", title: "Liverpool : Wolves", date: "10.11.2024", time: "18:00", location: "Anfield", price: "320$" },
];

app.get('/', (req, res) => {
    res.send('Welcome to the Ticket API');
});

app.get('/catalog', (req, res) => {
    const { match, date, price, searchQuery } = req.query;

    let filteredItems = [...itemsData];

    if (match && match !== "any") {
        filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(match.toLowerCase()));
    }

    if (date && date !== "any") {
        filteredItems = filteredItems.filter(item => item.date === date);
    }

    if (price && price !== "any") {
        const [minPrice, maxPrice] = price.split('-').map(val => parseFloat(val));
        filteredItems = filteredItems.filter(item => {
            const itemPrice = parseFloat(item.price.replace('$', ''));
            return itemPrice >= minPrice && itemPrice <= maxPrice;
        });
    }

    if (searchQuery) {
        filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    res.json(filteredItems);
});

app.get('/get/:ticketId', (req, res) => {
    const ticketId = parseInt(req.params.ticketId, 10);
    const ticket = itemsData.find(item => item.id === ticketId);
    if (ticket) {
        res.json(ticket);
    } else {
        res.status(404).send('Ticket not found');
    }
});

app.get('/tickettypes', (req, res) => {
    const ticketTypes = ['Standard', 'VIP', 'Premium'];
    res.json(ticketTypes);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, itemsData };



