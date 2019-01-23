let empleados = [{
    id: 1,
    nombre: 'Isaac'
}, {
    id: 2,
    nombre: 'Elias'
}, {
    id: 3,
    nombre: 'Jose'
}];

let salarios = [{
    id: 1,
    salario: 2000
}, {
    id: 2,
    salario: 3000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }

};

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

};

getEmpleado(3, (error, empleado) => {

    if (error) {
        return console.log(error);
    }

    getSalario(empleado, (error, salario) => {

        if (error) {
            return console.log(error);
        }

        console.log(`EL salario de ${salario.nombre} es ${salario.salario}$`);

    });

});