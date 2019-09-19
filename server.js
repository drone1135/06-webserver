const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/Views/parciales')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    //res.send('hola mundo');
    res.render('home', {
        nombre: 'dario carazo merelo',

    });
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});