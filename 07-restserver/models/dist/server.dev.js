"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var cors = require('cors');

var _require = require('../database/config'),
    dbConnection = _require.dbConnection;

var Server =
/*#__PURE__*/
function () {
  function Server() {
    _classCallCheck(this, Server);

    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: '/api/auth',
      buscar: '/api/buscar',
      categorias: '/api/categorias',
      usuarios: '/api/usuarios',
      productos: '/api/productos',
      uploads: '/api/uploads'
    }; // Conectar a base de datos

    this.conectarDB(); // Middlewares

    this.middlewares(); // Rutas de la aplicación

    this.routes();
  }

  _createClass(Server, [{
    key: "conectarDB",
    value: function conectarDB() {
      return regeneratorRuntime.async(function conectarDB$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(dbConnection());

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "middlewares",
    value: function middlewares() {
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express["static"]('public')); // Note that this option available for versions 1.0.0 and newer. 

      this.app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
      }));
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use(this.paths.auth, require('../routes/auth'));
      this.app.use(this.paths.buscar, require('../routes/buscar'));
      this.app.use(this.paths.categorias, require('../routes/categorias'));
      this.app.use(this.paths.usuarios, require('../routes/usuarios'));
      this.app.use(this.paths.productos, require('../routes/productos'));
      this.app.use(this.paths.uploads, require('../routes/uploads'));
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log('El servidor esta corriendo en el puerto: ', _this.port);
      });
    }
  }]);

  return Server;
}();

module.exports = Server;