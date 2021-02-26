const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } --> ${ this.poder }`;
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);

function imprimeHeroe(heroe) {
    const { nombre, apellido, poder } = heroe;
    console.log(nombre, apellido, poder);
}

imprimeHeroe(deadpool);
console.log(deadpool.getNombre());