import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const loginUsuario = async (req, res, next) => {
    const { email, password } = req.body;

    const usuario = await ModeloUsuario.findOne({ email, password });

    if (usuario) {
        // Crea y guarda el token
        usuario.session = Math.random().toString(36).slice(2);

        usuario
            .save()
            .then(() => {
                res.status(200).json({
                    session: usuario.session,
                    user: {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                        email: usuario.email
                    }
                });
            })
            .catch((error) => {
                next(error);
            });
    } else {
        next(new Error("Usuario o contraseña incorrecta"));
    }
};
