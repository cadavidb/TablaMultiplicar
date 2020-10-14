const { argv } = require('yargs');

const opciones = {

    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}
const yarg = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'crea la tabla de multiplicar', opciones)

.help()
    .argv;
const comando = argv._[0];
const { base, limite } = yarg;
module.exports = {
    yarg,
    base,
    limite,
    comando
}