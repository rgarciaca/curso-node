const { response, json } = require("express");


const esAdminRole = (req, res = response, next) => {
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se intenta verificar el role sin validar el token antes'
        });
    }

    const { rol, nombre } = req.usuario;
    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${ nombre } no es adminitrador - No puede hacer esto`
        });
    }

    next();
};

const tieneRole = (...roles) => {
    return (req, res = reponse, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se intenta verificar el role sin validar el token antes'
            });
        }

        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${ roles}`
            });
        }

        next();
    };
};


module.exports = {
    esAdminRole,
    tieneRole
};