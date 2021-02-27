require('colors');

const { guardarDB, leerDB } = require('./helpers/Archivo');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);

                guardarDB(tareas.listadoArr);

                break;
            case '2':
                tareas.listadoCompleto();

                break;
            case '3':
                tareas.listadoPendientesCompletadas(true);

                break;

            case '4':
                tareas.listadoPendientesCompletadas(false);

                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                guardarDB(tareas.listadoArr);

                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);

                if (id !== '0') {
                    const ok = await confirmar('¿Esta seguro de borrar este elemento?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente.');

                        guardarDB(tareas.listadoArr);
                    }
                }

                break;
        }

        if (opt !== '0') await pausa();

    } while (opt !== '0');
};


main();