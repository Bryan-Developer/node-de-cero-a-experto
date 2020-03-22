let slayer = {
    nombre: 'Bryan',
    apellido: 'Alvarado',
    poder: 'Voluntad Inqubrantable',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}
console.log(slayer.getNombre());
// let nombre = slayer.nombre;
// let apellido = slayer.apellido;
// let poder = slayer.poder;
// Destructuracion
let { nombre, apellido, poder } = slayer;
console.log(nombre, apellido, poder);
let { nombre2: primerNombre, apellido2, poder2 } = slayer;
console.log(primerNombre, apellido2, poder2);