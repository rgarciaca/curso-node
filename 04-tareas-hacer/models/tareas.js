const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '', ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            const idx = `${ index + 1 }`.green;
            const estado = (tarea.completadoEn) ? 'Completada'.brightGreen : 'Pendiente'.brightRed;
            console.log(`${ idx }. ${ tarea.description} :: ${ estado }`);
        });
    }

    listadoPendientesCompletadas(completadas = true) {
        console.log();
        let index = 0;
        this.listadoArr.forEach(tarea => {
            const estado = (tarea.completadoEn) ? 'Completada'.brightGreen : 'Pendiente'.brightRed;

            if (completadas) {
                if (tarea.completadoEn) console.log(`${ (++index + '.').green } ${ tarea.description} :: ${ estado }`);
            } else {
                if (!tarea.completadoEn) console.log(`${  (++index + '.').green } ${ tarea.description} :: ${ estado }`);
            }

        });
    }
}


module.exports = Tareas;