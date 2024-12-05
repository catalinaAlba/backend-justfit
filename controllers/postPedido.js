import { ModeloPedido } from "../database/models/modeloPedido.js";
import { obtenerProximoId } from "../helpers/functions.js";

export const postPedido = async (req, res, next) => {
    const { nombre, apellido, email, direccion, envio, retiro, tarjeta } = req.body;

    try {
        const nuevoPedido = new ModeloPedido();
        nuevoPedido.id = await obtenerProximoId(ModeloPedido)
        nuevoPedido.nombre = nombre;
        nuevoPedido.apellido = apellido;
        nuevoPedido.email = email;
        nuevoPedido.direccion = direccion;
        nuevoPedido.envio = envio;
        nuevoPedido.retiro = retiro;
        nuevoPedido.tarjeta = tarjeta;

        nuevoPedido
            .save()
            .then(() => {
                res.json({ message: `Pedido con el id ${nuevoUsuario.id} realizado con éxito` });
            })
            .catch((error) => {
                next(error)
            })
    }
    catch (error) { next(error) }
}



// obtener el day.now
// que productos
// usuario por el token
// poner validacion en carrito, y redireccione a login
// y campos en el formulario (campos simbolicos lo que vea que funcione con mi pagina): direccion, tarjeta fake (campo random).
// envio o retiro