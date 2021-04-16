const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion a BD.');
    }
};


module.exports = {
    dbConnection
};