require('dotenv').config();
const express = require('express')
const app = express();
const hbs = require('hbs');

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Roberto Garcia',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Roberto Garcia',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Roberto Garcia',
        titulo: 'Curso de Node'
    });
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`La aplicación esta escuchando en http://localhost:${ port }`);
});