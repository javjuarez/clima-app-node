const axios = require('axios');

const getLugarLatLng = async (direccion) => {

	let encodedUrl = encodeURI(direccion);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

	if (resp.data.status === 'ZERO_RESULTS') {
		throw new Error(`No hay resultados para la dirección: ${direccion}`);
	}
	
	let localizacion = resp.data.results[0];

	return {
		direccion: localizacion.formatted_address,
		latitud: localizacion.geometry.location.lat,
		longitud: localizacion.geometry.location.lng
	}
}

module.exports = {
	getLugarLatLng
}