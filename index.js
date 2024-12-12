import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./database/connection.js";
import { mostrarDataRequest } from "./middlewares/mostrarDataRequest.js";
import { errorHandler } from "./middlewares/errorHandler.js";

// Barritas
import { getBarritas } from "./controllers/getBarritas.js";
import { getBarritaById } from "./controllers/getBarritaById.js";

//Usuario
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSession.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";

//Pedidos
import { postPedido } from "./controllers/postPedido.js";

const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())
await conectarDB();

// middleware mostrar data request
app.use(mostrarDataRequest)

// llamada a la api
app.get("/", (req, res) => { res.send("API Just Fit") })


app.get("/barritas", getBarritas)
app.get("/barrita/:id", getBarritaById)


app.post("/registrar", postUsuario)
app.post("/login", loginUsuario)


// middleware control de sesion valida
app.use(controlarSesion)
app.post("/logout", logoutUsuario)


app.post("/pedido", postPedido)

// middleware manejador de errores
app.use(errorHandler)

//puerto
app.listen(port, () => { console.log(`Servidor corriendo en puerto ${port}`); })