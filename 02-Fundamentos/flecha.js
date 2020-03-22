// Tradicional
function sumar(a, b) {
    return a + b;
}
console.log(sumar(22, 3));
// Flecha
let sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(22, 3));
// 
let saludar = () => 'Hola Mundo';
// let saludarNombre = nombre => `Hola mundo soy ${nombre}`;
let saludarNombre = (nombre) => `Hola mundo soy ${nombre}`;
console.log(saludar());
console.log(saludarNombre('Slayer'));
//
let ingeniero = {
    nombre: 'Bryan',
    apellido: 'Alvarado',
    poder: 'Analisis',
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido} : ${this.poder}`;
    }
}
console.log(ingeniero.getNombreCompleto());