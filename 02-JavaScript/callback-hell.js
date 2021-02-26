const empleados = [{
        id: 1,
        nombre: 'Roberto'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);
    if (empleado) {
        callback(null, empleado.nombre);
    } else {
        callback(`El empleado con id: ${ id } no existe.`);
    }

    return empleado;
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id);
    if (salario) {
        callback(null, salario.salario);
    } else {
        callback(`No existe salario para el emplado con id: ${ id }`);
    }

    return salario;
}


const id = 1;

getEmpleado(id, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    console.log(empleado);

    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log('El empleado: ', empleado, ' tiene un salario de: ', salario);
    });
});