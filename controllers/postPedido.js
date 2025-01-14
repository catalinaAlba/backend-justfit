import { ModeloPedido } from "../database/models/ModeloPedido.js";
import { obtenerProximoId } from "../helpers/functions.js";

export const postPedido = async (req, res, next) => {
    const { nombre, apellido, direccion, tarjeta, barritas } = req.body;

    try {
        const nuevoPedido = new ModeloPedido();
        nuevoPedido.id = await obtenerProximoId(ModeloPedido)
        nuevoPedido.nombre = nombre;
        nuevoPedido.apellido = apellido;
        nuevoPedido.email = req.usuario.email;

        const now = new Date();
        nuevoPedido.fecha = now.toISOString().slice(0, 19).replace("T", " ");

        nuevoPedido.direccion = direccion;
        nuevoPedido.tarjeta = tarjeta;
        nuevoPedido.barritas = barritas;


        nuevoPedido
            .save()
            .then(() => {
                res.json({ message: `Pedido con el id ${nuevoPedido.id} realizado con éxito` });
            })
            .catch((error) => {
                next(error)
            })
    }
    catch (error) { next(error) }
}