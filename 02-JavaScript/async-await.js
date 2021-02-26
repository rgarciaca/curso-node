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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);

        (empleado) ? resolve(empleado.nombre): reject(`No existe el empleado con id ${ id }`);


    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);

        (salario) ?
        resolve(salario.salario):
            reject(`No existe salario para el empleado con id ${ id }`);


    });
}

const id = 10;

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${ empleado } es de ${ salario }`;
    } catch (error) {
        throw error;
    }
}




getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));