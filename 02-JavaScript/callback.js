// setTimeout(function() {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Roberto'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuarioID(10, (usuario) => {
    console.log(`Hola ${ usuario.nombre }`);
});