const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 7000;
require('./hbs/helpers');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.get('/', (request, response) => {
  response.render('home', {
    nombre: 'bryan alvarado'
  });
});
app.get('/about', (request, response) => {
  response.render('about', {});
});
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
