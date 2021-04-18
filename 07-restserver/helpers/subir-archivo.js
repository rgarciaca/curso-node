const path = require('path');
const { v4: uuidv4 } = require('uuid');

uuidv4();

const subirArchivo = (files, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'], carpeta = '') => {

    return new Promise((resolve, reject) => {
        const { archivo } = files;
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[nombreCortado.length - 1];


        //;
        if (!extensionesValidas.includes(extension.toLowerCase())) {

            return reject(`La extensión ${ extension } no esta permitida _ ${ extensionesValidas }`);
        }

        const nomtemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', carpeta, nomtemp);
        archivo.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }

            resolve(nomtemp);
        });
    });
};


module.exports = {
    subirArchivo
};