const { crearTablaMultiplicar } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

//const base = 5;
console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(base);

crearTablaMultiplicar(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log('Archivo', nombreArchivo.rainbow, 'creado.'))
    .catch(err => console.log(err));