// setTimeout(function() {
//     console.log('Hola mundo');
// }, 0);
//
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Bryan',
        id
    }
    if (id === 20) {
        callback('Error', `El usuario con id:${id} no existe en la BD`)
    } else {
        callback(null, usuario);
    }
}
getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});