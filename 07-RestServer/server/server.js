require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
  let usuarios = [
    { id: 1, nombre: 'Bryan Antonio', apellido: 'Alvarado Villalobos' },
    { id: 2, nombre: 'Marco Antonio', apellido: 'Alvarado Arellano' }
  ];
  res.json(usuarios);
});

app.get('/usuario/:id', (req, res) => {
  let id = req.params.id;
  let usuario = {
    id,
    nombre: 'Bryan Antonio',
    apellido: 'Alvarado Villalobos'
  };
  res.json(usuario);
});

app.post('/usuario', (req, res) => {
  let reqBody = req.body;
  if (reqBody.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    });
  }
  res.json(reqBody);
});

app.put('/usuario/:id', (req, res) => {
  let prePut = {
    id: req.params.id,
    nombre: 'Bryan Antonio',
    apellido: 'Alvarado Villalobos',
    edad: 30,
    email: 'bryan.developer.alvarado@gmail.com'
  };
  let postPut = {
    id: req.params.id,
    nombre: reqBody.nombre,
    apellido: reqBody.apellido,
    edad: reqBody.edad,
    email: reqBody.email
  };

  res.json({
    antes: prePut,
    despues: postPut
  });
});

app.delete('/usuario/:id', (req, res) => {
  let usuariosAntes = [
    { id: 1, nombre: 'Bryan Antonio', apellido: 'Alvarado Villalobos' },
    { id: 2, nombre: 'Marco Antonio', apellido: 'Alvarado Arellano' }
  ];
  let getId = req.params.id;
  let usuariosDespues = usuariosAntes.filter(
    usuario => usuario.id !== parseInt(getId)
  );
  res.json({
    usuariosAntes,
    usuariosDespues
  });
});

app.listen(process.env.PORT, () => console.log('Escuchando el puerto 3000'));
