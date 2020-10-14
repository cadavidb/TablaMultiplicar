const { CrearArchivo, ListarTabla } = require('./multiplicar/multiplicar');
const { yarg, base, limite, comando } = require('./config/yargs');
const colors = require('colors');
yarg;


switch (comando) {
    case 'listar':
        ListarTabla(base, limite)
        break;
    case 'crear':
        CrearArchivo(base, limite).then(nameFile => {
            console.log(nameFile.trap.red);
        }).catch(err => {
            console.log('ha ocurrido un error');
        })
        break;

    default:
        console.log('comando no valido');
        break;
}