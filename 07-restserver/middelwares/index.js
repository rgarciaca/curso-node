const validarCampos = require('../middelwares/validar-campos');
const validarJWT = require('../middelwares/validar-jwt');
const validarRoles = require('../middelwares/validar-roles');
const validarArchivoSubir = require('../middelwares/validarArchivo');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRoles,
    ...validarArchivoSubir
};