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
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB)
        }
    });
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No existe un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    });
}
getEmpleado(10).then(empleado => {
        return getSalario(empleado);
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });