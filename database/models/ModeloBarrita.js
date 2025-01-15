import { Schema, model } from "mongoose";

const schemaBarrita = new Schema({
    id: {type: Number, unique: true},
    sabor: String,
    tipo: String,
    precio: Number,
    imagen: String,
    descripción: String
})

export const ModeloBarrita = model("Barrita", schemaBarrita)