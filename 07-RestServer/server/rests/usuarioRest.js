const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../modelos/usuarioModelo');
const app = express();
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
  let usuario = new Usuario({
    nombre: reqBody.nombre,
    email: reqBody.email,
    password: bcrypt.hashSync(reqBody.password, 10),
    img: reqBody.img,
    role: reqBody.role,
    estado: reqBody.estado,
    google: reqBody.google
  });
  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({ ok: true, usuario: usuarioDB });
  });
  // if (reqBody.nombre === undefined) {
  //   res.status(400).json({
  //     ok: false,
  //     mensaje: 'El nombre es necesario'
  //   });
  // }
  // res.json(reqBody);
});

app.put('/usuario/:id', (request, response) => {
  let id = request.params.id;
  let body = _.pick(request.body, ['nombre', 'email', 'img', 'role', 'estado']);
  Usuario.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (error, usuarioDB) => {
      if (error) {
        return response.status(400).json({
          ok: false,
          error
        });
      }
      response.json({
        ok: true,
        usuario: usuarioDB
      });
    }
  );
  // let prePut = {
  //   id: req.params.id,
  //   nombre: 'Bryan Antonio',
  //   apellido: 'Alvarado Villalobos',
  //   edad: 30,
  //   email: 'bryan.developer.alvarado@gmail.com'
  // };
  // let postPut = {
  //   id: req.params.id,
  //   nombre: reqBody.nombre,
  //   apellido: reqBody.apellido,
  //   edad: reqBody.edad,
  //   email: reqBody.email
  // };
  // res.json({
  //   antes: prePut,
  //   despues: postPut
  // });
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
module.exports = app;
