import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./database/connection.js";
import { getBarritas } from "./controllers/getBarritas.js";
import { getBarritaById } from "./controllers/getBarritaById.js";
import { mostrarDataRequest } from "./middlewares/mostrarDataRequest.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())
await conectarDB();

// middleware mostrar data request
app.use(mostrarDataRequest)

// llamada a la api
app.get("/", (req, res) => {res.send("API Just Fit")})

//endpoints:
app.get("/barritas", getBarritas)
app.get("/barrita/:id", getBarritaById)

// middleware manejador de errores
app.use(errorHandler)

//puerto
app.listen(port, () => {console.log(`Servidor corriendo en puerto ${port}`);})