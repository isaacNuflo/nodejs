//const fs = require('express');
//const fs = require('./fs');
const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista.green))
            .catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);

// console.log(base);