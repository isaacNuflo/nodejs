const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }
        if (base <= 0) {
            reject(`El valor introducido ${base} no puede ser negativo o cero`);
            return;
        }
        if (limite <= 0) {
            reject(`El valor introducido ${limite} no puede ser negativo o cero`);
            return;
        }

        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;
        }
        resolve(data);
    })

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }
        if (base <= 0) {
            reject(`El valor introducido ${base} no puede ser negativo o cero`);
            return;
        }
        if (limite <= 0) {
            reject(`El valor introducido ${limite} no puede ser negativo o cero`);
            return;
        }

        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tablas/tabla-${base}-al-${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}