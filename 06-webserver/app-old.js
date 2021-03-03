const http = require('http');
http.createServer((request, response) => {
    console.log(request);

    // const persona = {
    //     id: 1,
    //     nombre: 'Roberto'
    // };

    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.write(JSON.stringify(persona));

    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' });

    // response.write('id, nombre\n');
    // response.write('1, Roberto\n');
    // response.write('2, Maria\n');
    // response.write('3, Juan\n');
    // response.write('4, Cristina\n');

    response.write('Hola mundo!!!');

    response.end();
}).listen(8080);

console.log('Escuchando el puerto 8080.');