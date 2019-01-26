const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');

lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));