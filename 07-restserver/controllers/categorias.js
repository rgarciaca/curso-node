const { request, response } = require("express");
const { Categoria } = require("../models");


//obtenerCataegorias - paginado - total - populate
const obtenerCategorias = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, categorias] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
        .populate('usuario', 'nombre')
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
        total,
        categorias
    });
};

//obtenerCategoria - populate
const obtenerCategoriaId = async(req = request, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findById(id)
        .populate('usuario', 'nombre');

    res.json({
        categoria
    });
};

const crearCategoria = async(req, res = response) => {
    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({ nombre });
    if (categoriaDB) {
        return res.status(400).json({
            msg: `La categoria ${ categoriaDB.nombre } ya existe`
        });
    }

    const data = {
        nombre,
        usuario: req.usuario._id
    };

    const categoria = new Categoria(data);
    await categoria.save();

    res.status(201).json(categoria);
};


// actualizarCategoria 
const actualizarCategoria = async(req = request, res = response) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    data.nombre = data.nombre.toUpperCase();
    data.estado = estado;
    data.usuario = req.usuario._id;

    const catExiste = await Categoria.findOne({ nombre: data.nombre });
    if (catExiste && catExiste.id !== id) {
        return res.status(400).json({
            msg: 'Ya existe una categoria con ese nombre'
        });
    }

    const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true })
        .populate('usuario', 'nombre');

    res.status(201).json(categoria);
};

//borrarCategoria
const borrarCategoria = async(req = request, res = response) => {

    const { id } = req.params;

    const categoria = await Categoria.findByIdAndUpdate(id, { estado: false }, { new: true })
        .populate('usuario', 'nombre');

    res.json({
        categoria
    });
};

module.exports = {
    obtenerCategorias,
    obtenerCategoriaId,
    crearCategoria,
    actualizarCategoria,
    borrarCategoria
};