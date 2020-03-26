// Regresa un objeto tipo promise
let getNombre = async() => {
    return 'Bryan';
}
console.log(getNombre());
// 
let getNombre2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Bryan')
            }, 3000);

        });
    }
    // await solo va en el contexto async
let saludo = async() => {
    let nombre = await getNombre2();
    return `Hola ${nombre}`;
}
saludo().then(mensaje => {
    console.log(mensaje);
})