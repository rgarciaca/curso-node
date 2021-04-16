const validarCampos = require('../middelwares/validar-campos');
const validarJWT = require('../middelwares/validar-jwt');
const validarRoles = require('../middelwares/validar-roles');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarRoles
};