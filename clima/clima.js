const axios = require('axios');

const getClima = async(lat, lng) => {

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=52ac0f907593ce7ca090e1bfb7af3a7b`);

	if (resp.data.cod == 400) {
		throw new Error(`Las coordenadas (${lat}, ${lng}) no son válidas`);
	}

	return resp.data.main.temp;

}

module.exports = {
	getClima
}