const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const porHacer = require('./Por-Hacer/por-hacer');
let comando = argv._[0];
switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(colors.bold(colors.white(tarea)));
    break;
  case 'listar':
    console.log(argv.filtro);
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log(colors.bold(colors.white(tarea)));
    }
    break;
  case 'actualizar':
    let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizar);
    break;
  case 'borrar':
    let borrar = porHacer.borrar(argv.descripcion);
    console.log(borrar);
    break;
  default:
    console.log(colors.red('Comando no reconocido'));
    break;
}
