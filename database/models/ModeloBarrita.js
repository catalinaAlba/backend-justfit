import { Schema, model } from "mongoose";

const schemaBarrita = new Schema({
    id: {type: Number, unique: true},
    sabor: String,
    tipo: String,
    precio: Number,
    imagen: String,
    descripcion: String
})

export const ModeloBarrita = model("Barrita", schemaBarrita)