const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos, tieneRole } = require('../middelwares');
const { existeCategoria } = require('../helpers/db-validators');

const {
    obtenerCategorias,
    obtenerCategoriaId,
    crearCategoria,
    actualizarCategoria,
    borrarCategoria
} = require('../controllers/categorias');


const router = Router();

// Obtener todas las categorias - público
router.get('/', obtenerCategorias);

// Obtener una categoria por id - público
router.get('/:id', [
    check('id', 'No es un id de Mogo válido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
], obtenerCategoriaId);

// Crear categoria - privado (Cualquier persona con token valido)
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

// Actualizar categoria por id - privado (Cualquier persona con token valido)
router.put('/:id', [
    validarJWT,
    check('id', 'No es un id de Mogo válido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoria),
    validarCampos
], actualizarCategoria);

// Borrar categoria por id - privado (Admin)
router.delete('/:id', [
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'No es un id de Mogo válido').isMongoId(),
    check('id').custom(existeCategoria),
    validarCampos
], borrarCategoria);

module.exports = router;