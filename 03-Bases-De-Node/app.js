// const fs = require('fs');
// for (let index = 1; index <= 10; index++) {
//     data += `${base} * ${index} = ${base * index}\n`;
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });
const argv = require("./config/yargs").argv;
const colors = require("colors/safe");
const { listarTabla, crearArchivo } = require("./multiplicar/multiplicar");
let comando = argv._[0];
switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log("comando no reconocido");
        break;
}
// let base = '8';
// let parametro = argv[2];
// let base = parametro.split("=")[1];
//console.log(base);
//console.log(process.argv);