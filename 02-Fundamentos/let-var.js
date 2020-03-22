// var se puede inicializar cuantas veces uno requiera, y se puede usar fuera de un contexto
var nombre = 'Wolverine';
if (true) {
    var nombre = 'Magneto';
}
var nombre = 'Wolverine1';
var nombre = 'Wolverine2';
var nombre = 'Wolverine3';
var nombre = 'Wolverine4';
console.log(nombre);
// let solo se puede inicializar una vez dependiendo del contexto
let alias = 'Wolverine';
if (true) {
    alias = 'Magneto';
}
console.log(alias);
// uso de var en ciclos
for (var i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}
console.log(`i: ${i}`);
console.log('==========');
// uso de let en ciclos
let j;
for (let j = 0; j <= 5; j++) {
    console.log(`i: ${j}`);
}
console.log(j);