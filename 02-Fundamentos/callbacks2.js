let empleados = [{
    id: 1,
    nombre: 'Bryan'
}, {
    id: 2,
    nombre: 'Romina'
}, {
    id: 3,
    nombre: 'Mercedes'
}];
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 200
}];
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB)
    }
};
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}
getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
    getSalario(empleado, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${result.nombre} es de ${result.salario}$`);
    })
});