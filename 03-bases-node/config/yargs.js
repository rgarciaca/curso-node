const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Número hasta el que se genera la tabla'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Indica si se muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número.';
        }
        return true;
    })
    .argv;

module.exports = argv;