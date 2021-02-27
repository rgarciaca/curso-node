const inquirer = require('inquirer');
require('colors');

const pausaOpt = [{
    type: 'input',
    name: 'enter',
    message: `Presione ${ 'enter'.green } para continuar`
}]

const menuOpts = [{
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?'.cyan,
    choices: [{
            value: '1',
            name: `${ '1.'.yellow} ${ 'Crear una tarea'.brightGreen }`
        },
        {
            value: '2',
            name: `${ '2.'.yellow} ${ 'Listado de tareas'.brightGreen }`
        },
        {
            value: '3',
            name: `${ '3.'.yellow } ${ 'Listado de tareas completadas'.brightGreen }`
        },
        {
            value: '4',
            name: `${ '4.'.yellow } ${ 'Listado de tareas pendientes'.brightGreen }`
        },
        {
            value: '5',
            name: `${ '5.'.yellow } ${ 'Completar tarea(s)'.brightGreen }`
        },
        {
            value: '6',
            name: `${ '6.'.yellow } ${ 'Borrar tarea'.brightGreen }`
        },
        {
            value: '0',
            name: `${ '0.'.yellow } ${ 'Salir'.brightGreen }`
        }

    ]
}];

const inquirerMenu = async() => {

    console.clear();

    console.log('==========================================='.green);
    console.log('          Seleccione una opción   '.brightWhite);
    console.log('===========================================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;

};

const pausa = async() => {
    console.log('\n');
    await inquirer.prompt(pausaOpt);
};

const leerInput = async(message) => {

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor introduzca un valor';
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);

    return desc;
};

const listadoTareasBorrar = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${ (i + 1) + '.'}`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.description.brightGreen }`
        };
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar borrado.'.brightRed
    });

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }];

    const { id } = await inquirer.prompt(preguntas);
    return id;
};

const confirmar = async(message) => {
    const pregunta = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(pregunta);
    return ok;
};

const mostrarListadoChecklist = async(tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${ (i + 1) + '.'}`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.description.brightGreen }`,
            checked: (tarea.completadoEn) ? true : false
        };
    });

    const preguntas = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Tareas seleccionadas:',
        choices
    }];

    const { ids } = await inquirer.prompt(preguntas);
    return ids;
};

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
};