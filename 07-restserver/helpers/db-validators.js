const { Usuario, Categoria, Producto } = require('../models');
const Role = require('../models/role');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${ rol } no esta registrado en la BD`);
    }
};

// Validar email
const emailEnBD = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El email: ${ correo },  ya esta registrado.`);
    }
};

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`Este id no existe: ${ id }.`);
    }
};

const existeCategoria = async(id) => {
    const existeCategoriaDB = await Categoria.findById(id);
    if (!existeCategoriaDB) {
        throw new Error(`El id no existe: ${ id }.`);
    }
};

const existeProducto = async(id) => {
    const existeProductoDB = await Producto.findById(id);
    if (!existeProductoDB) {
        throw new Error(`El id no existe: ${ id }.`);
    }
};

module.exports = {
    esRolValido,
    emailEnBD,
    existeUsuarioPorId,
    existeCategoria,
    existeProducto
};