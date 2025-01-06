import { ModeloUsuario } from "../database/models/ModeloUsuario.js";
import { obtenerProximoId } from "../helpers/functions.js";


export const postUsuario = async (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    try {
        // Verifica si el usuario ya existe
        const usuarioExistente = await ModeloUsuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El email ya está en uso" });
        }

        const nuevoUsuario = new ModeloUsuario();
        nuevoUsuario.id = await obtenerProximoId(ModeloUsuario);
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellido = apellido;
        nuevoUsuario.email = email;
        nuevoUsuario.password = password;

        nuevoUsuario.session = Math.random().toString(36).slice(2);

        await nuevoUsuario.save(); // Espera a que se guarde el usuario

        res.status(201).json({
            message: `Nuevo usuario creado con el id ${nuevoUsuario.id}`,
            session: nuevoUsuario.session,
            user: {
                id: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                apellido: nuevoUsuario.apellido,
                email: nuevoUsuario.email,
            },
        });
    } catch (error) {
        next(error);
    }
};

