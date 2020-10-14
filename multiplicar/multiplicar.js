const fs = require('fs');
const colors = require('colors');
const ListarTabla = (base, limite) => {
    let value = "";
    console.log(`TABLA DEL ${base}\n`.trap.green);
    for (let i = 1; i < limite + 1; i++) {

        value += `${base} x ${i} =  ${base*i}\n`
    }
    console.log(value.rainbow.bold);

}
const CrearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero')
            return;

        }
        let tabla = "";
        for (let i = 0; i < limite + 1; i++) {
            tabla += "_"
        }
        tabla += "\n"
        for (let i = 1; i < limite + 1; i++) {

            tabla += `${base} x ${i} =  ${base*i}\n`


        }
        for (let i = 0; i < limite + 1; i++) {
            tabla += "_"
        }
        fs.writeFile(`./tablas/tabla del ${base}.txt`, tabla, (err) => {
            if (err || base == undefined) reject(err)
            else {
                resolve(`tabla del ${base}.txt`)
            }
        });



    })
}
module.exports = {
    CrearArchivo,
    ListarTabla
}