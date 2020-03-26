const apikey = '7077cd0ca19afcc0a1fd1a5ddd876823';
const axios = require('axios');
const getClima = async (latitud, longitud) => {
  const respuesta = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric`
  );
  return respuesta.data.main.temp;
};
module.exports = {
  getClima
};
