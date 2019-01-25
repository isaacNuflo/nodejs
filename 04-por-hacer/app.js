const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let creado = crear(argv.descripcion);
        console.log(creado);
        break;
    case 'listar':
        let listado = getListado();
        console.log('===Por Hacer==='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==============='.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado) console.log('Actualizado correctamente');
        else console.log('No se encontro la tarea');
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        if (borrado) console.log('Borrado correctamente');
        else console.log('No se encontro la tarea');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}