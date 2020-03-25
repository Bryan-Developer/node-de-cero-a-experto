const descripcion = {
  alias: 'd',
  demand: true,
  desc: 'descripcion de la tarea por hacer'
};
const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
  .command('crear', 'Cree una tarea por hacer', {
    descripcion: descripcion
  })
  .command('actualizar', 'Actualize una tarea previamente definida', {
    descripcion: descripcion,
    completado: completado
  })
  .command('borrar', 'Borre una tarea previamente definida', {
    descripcion: descripcion,
    completado: completado
  })
  .help().argv;
module.exports = {
  argv
};
