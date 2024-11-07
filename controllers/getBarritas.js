import { ModeloBarrita } from "../database/models/ModeloBarrita.js";
import { formatearFiltrosDB } from "../helpers/functions.js"

export const getBarritas = (req, res, next) => {
    const filtroSabor = formatearFiltrosDB(req.query.sabor);
    const filtroTipo = formatearFiltrosDB(req.query.tipo);


    const filtros = {};
    if (filtroSabor) filtros.sabor = filtroSabor;
    if (filtroTipo) filtros.tipo = filtroTipo;
    

    ModeloBarrita
        .find(filtros)
        .then((data) => {
            console.log("get barritas =>", data);
            if (data.length === 0) {
                res.json([]);
            } else {
                res.json(data);
            }
        })
        .catch((error) => {
            next(error);
        });
}