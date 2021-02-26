const fs = require('fs');
const colors = require('colors');

const crearTablaMultiplicar = async(base = 1, hasta = 10, lista = false) => {
    let salida = '';
    let consola = '';

    try {
        consola += "=================\n";
        consola += `   Tabla del ${ colors.cyan(base) }\n`.green;
        consola += "=================\n";

        salida += "==================\n";
        salida += `   Tabla del ${ base }\n`;
        salida += "==================\n";

        for (let i = 1; i <= hasta; i++) {
            consola += `${ colors.yellow(base) } ${ 'x'.magenta } ${ colors.red(i) } ${ '='.magenta } ${ colors.green( base * i ) }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (lista) console.log(consola);

        fs.writeFileSync('./salida/tabla-' + base + '.txt', salida);

        return `tabla-${ base }.txt`;
    } catch (error) {
        throw (error);
    }
};

module.exports = {
    crearTablaMultiplicar
};