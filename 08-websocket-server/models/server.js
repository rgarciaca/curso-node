const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {

        };

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

        this.sockets();
    }


    middlewares() {
        this.app.use(cors());

        this.app.use(express.static('public'));
    }

    routes() {
        //this.app.use(this.paths.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on('connection', );
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('El servidor esta corriendo en el puerto: ', this.port);
        });
    }

}


module.exports = Server;