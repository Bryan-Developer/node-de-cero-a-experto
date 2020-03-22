let nombre = 'Slayer';
let real = 'Bryan Alvarado';
console.log(nombre + ' ' + real);
console.log(`${1 + 2}`);
console.log(`${nombre} : ${real}`);
// 
let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;
console.log(nombreCompleto === nombreTemplate)
    //
function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre es : ${getNombre()}`);