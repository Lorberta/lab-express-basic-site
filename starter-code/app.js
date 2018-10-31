const express = require('express');
const app = express();

app.use(express.static('public'));
// -> to display the pic: http://localhost:3000/images/enterprise.jpg
// no public folder, because it automatically searches there. not needed.

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});

