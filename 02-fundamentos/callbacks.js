// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Isaac',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(1, (error, usuario) => {
    if (error) {
        return console.log(error);
    }
    console.log('Usuario de base de datos', usuario);
})