import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const logoutUsuario = async (req, res, next) => {
    // Obtener el token de la cabecera "Authorization"
    const token = req.headers["authorization"];

    if (!token) {
        // Si no se proporciona el token, devolver error
        return res.status(400).json({ message: "Token no proporcionado" });
    }

    try {
        // Buscar al usuario que tiene el token de sesión
        const usuario = await ModeloUsuario.findOne({ session: token });

        if (!usuario) {
            // Si no se encuentra el usuario, devolver error
            return res.status(404).json({ message: "Usuario no encontrado o sesión inválida" });
        }

        // Borrar la sesión del usuario
        usuario.session = null;

        // Guardar los cambios en la base de datos
        await usuario.save();

        // Responder con un mensaje de éxito
        res.json({ message: "Sesión cerrada con éxito" });
    } catch (error) {
        // Capturar cualquier error y pasar al siguiente middleware de error
        next(error);
    }
};