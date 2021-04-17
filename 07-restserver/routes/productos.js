const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos, tieneRole } = require('../middelwares');

const { existeCategoria, existeProducto } = require('../helpers/db-validators');

const {
    obtenerProductos,
    obtenerProductoId,
    crearProducto,
    actualizarProducto,
    borrarProducto
} = require('../controllers/productos');


const router = Router();

// Obtener todas las categorias - público
router.get('/', obtenerProductos);

// Obtener una categoria por id - público
router.get('/:id', [
    check('id', 'No es un id de Mogo válido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], obtenerProductoId);

// Crear categoria - privado (Cualquier persona con token valido)
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de Mogo válido').isMongoId(),
    validarCampos
], crearProducto);

// Actualizar categoria por id - privado (Cualquier persona con token valido)
router.put('/:id', [
    validarJWT,
    check('id', 'No es un id de Mogo válido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], actualizarProducto);

// Borrar categoria por id - privado (Admin)
router.delete('/:id', [
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'No es un id de Mogo válido').isMongoId(),
    check('id').custom(existeProducto),
    validarCampos
], borrarProducto);

module.exports = router;