require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./rests/usuarioRest'));
mongoose.connect(
  'mongodb+srv://bryan-developer:Slayerhollow1@bryan-developer-cluster-1-l8do3.mongodb.net/cafe?retryWrites=true&w=majority',
  (error, respuesta) => {
    if (error) throw error;
    console.log('Base de datos ONLINE');
  }
);
app.listen(process.env.PORT, () => console.log('Escuchando el puerto 3000'));
