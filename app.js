const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Dirección de la ciudad para obtener el clima',
		demand: true
	}
}).argv;


let getInfo = async(direccion) => {

	try {

		let coords = await lugar.getLugarLatLng(direccion);
		let temperatura = await clima.getClima(coords.latitud, coords.longitud);

		return `El clima en ${coords.direccion} es de ${temperatura}°C`;

	} catch (e) {
		return `No se pudo determinar el clima en la dirección: ${direccion}`;
	}

}

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch((err) => {
	console.log(err);
});