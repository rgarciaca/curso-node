require('dotenv').config();

const { inquirerMenu, pausa, leerInput, listadoLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {
    let opt = '';
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const termino = await leerInput('Ciudad a buscar: ');
                const lugares = await busquedas.ciudad(termino);
                const idSel = await listadoLugares(lugares);
                if (idSel === 0) continue;

                const lugarSel = lugares.find(l => l.id === idSel);
                busquedas.agregarHistorial(lugarSel.nombre);

                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.brightYellow);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('\nTiempo: ', clima.desc.brightCyan);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.temp_min);
                console.log('Máxima: ', clima.temp_max);

                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${ i + 1}.`.green;
                    console.log(`${ idx } ${ lugar.brightGreen }`);
                });

                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);
};

main();