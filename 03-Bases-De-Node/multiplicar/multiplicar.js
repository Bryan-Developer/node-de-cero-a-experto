const fs = require("fs");
const colors = require("colors");
module.exports.listarTabla = (base, limite) => {
    console.log("===============================================".green);
    console.log(
        `============tabla de ${base} al limite ${limite}============`.green
    );
    console.log("===============================================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} \t * \t ${i} \t = \t ${base * i}\n`);
    }
};
module.exports.crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} \t * \t ${i} \t = \t ${base * i}\n`;
        }
        // crea anteriormente la carpeta tablas en a nivel de la carpeta multiplicar
        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};
// module.exports = {
//     crearArchivo
// }