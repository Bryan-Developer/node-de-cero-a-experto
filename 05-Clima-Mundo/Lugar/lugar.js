const axios = require('axios');
const getLugarLatLng = async direccion => {
  const encodeUrl = encodeURI(direccion);
  const instancia = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      'x-rapidapi-key': '2b79701f05msh5d51cc7dac57f52p1bf9d6jsn2ad2548a74e3'
    }
  });
  const respuesta = await instancia.get();
  if (respuesta.data.Results.length === 0) {
    throw new Error(`No hay resultados para la direccion:${direccion}`);
  } else {
    const data = respuesta.data.Results[0];
    const dir = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
    return { dir, latitud, longitud };
  }
};
module.exports = {
  getLugarLatLng
};
