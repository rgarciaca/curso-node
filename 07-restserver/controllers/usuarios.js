const { reponse, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const params = req.query;
    res.json({
        ok: true,
        msg: "get API - controlador"
    });
};

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id;


    res.json({
        ok: true,
        msg: "put API - controlador"
    });
};

const usuariosPost = (req = request, res = response) => {

    const body = req.body;

    res.json({
        ok: true,
        msg: "post API - controlador",
        body
    });
};

const usuariosDelete = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "delete API - controlador"
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
};