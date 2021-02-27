require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();

        console.log('\t==========================================='.green);
        console.log('\t          Seleccione una opción   '.green);
        console.log('\t===========================================\n'.green);

        console.log(`\t  ${ '1.'.yellow } Crear una tarea`);
        console.log(`\t  ${ '2.'.yellow } Listado de tareas`);
        console.log(`\t  ${ '3.'.yellow } Listado de tareas completadas`);
        console.log(`\t  ${ '4.'.yellow } Listado de tareas pendientes`);
        console.log(`\t  ${ '5.'.yellow } Completar tarea(s)`);
        console.log(`\t  ${ '6.'.yellow } Borrar tarea \n`);
        console.log(`\t  ${ '0.'.yellow } Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('\tSeleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });

};

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\n\tPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
            readline.close();

            resolve();
        });
    });

};

module.exports = {
    mostrarMenu,
    pausa
};