const lugar = require('./Lugar/lugar');
const clima = require('./Clima/clima');
const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    descripcion: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;
const getInfo = async direccion => {
  try {
    const coord = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coord.latitud, coord.longitud);
    return `El clima de ${direccion} es de ${temp} grados farenheit`;
  } catch (e) {
    return `No se pudo determinar el clima del lugar:${direccion}`;
  }
  //   const lugarRespuesta = await lugar
  //     .getLugarLatLng(direccion)
  //     .then()
  //     .catch(err =>
  //       console.log(`No se puede determinar el lugar:${direccion}`, err)
  //     );
  //   const climaRespuesta = await clima
  //     .getClima(lugarRespuesta.latitud, lugarRespuesta.longitud)
  //     .then(resp =>
  //       console.log(`El clima de ${direccion} es de ${resp} grados farenheit`)
  //     )
  //     .catch(err =>
  //       console.log(`No se pudo determinar el clima de ${direccion}`)
  //     );
};
getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);
// lugar.getLugarLatLng(argv.direccion).then(console.log);
// clima
//   .getClima(40.75, -74.0)
//   .then(console.log)
//   .catch(console.log);
