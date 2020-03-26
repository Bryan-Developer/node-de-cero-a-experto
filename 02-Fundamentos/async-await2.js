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
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No hay empleado con el id:${id}`);
    } else {
        return empleadoDB;
    }
}
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No hay salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
    }
}
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `${salario.nombre} tiene un salario ${salario.salario}`
}
getInformacion(12)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));