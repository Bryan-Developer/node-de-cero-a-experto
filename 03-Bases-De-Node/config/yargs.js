const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
};
const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", opts)
    .command(
        "crear",
        "Genera un txt de la tabla de multiplicar de una base hasta un cierto liminte",
        opts
    )
    .help().argv;
module.exports = {
    argv
};