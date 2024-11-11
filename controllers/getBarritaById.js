import { ModeloBarrita } from "../database/models/ModeloBarrita.js";


export const getBarritaById = (req, res, next) => {
    const idBarrita = req.params.id;

    ModeloBarrita
        .findOne({ id: idBarrita })
        .then((data) => {
            if (!data) {
                throw new Error(`No existe ningun producto con el Id ${idBarrita}`);
            }
            else {
                res.json(data);
            }
        })
        .catch((error) => {
            next(error);
        })
}