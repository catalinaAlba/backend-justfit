import mongoose from "mongoose";

const urlDatabase = process.env.MONGODB_URL;

export const conectarDB = () => {
    return mongoose
        .connect(urlDatabase)
        .then(() => {
            console.log("Conectado a la DB!")
        })
        .catch((error) => {
            console.log("ERROR conectando a la DB!", error);
        })
}