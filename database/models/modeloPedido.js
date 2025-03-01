import { Schema, model } from "mongoose";

const schemaPedido = new Schema({
  id: { type: Number, unique: true },
  nombre: String,
  apellido: String,
  email: String,
  fecha: String,
  direccion: String,
  tarjeta: Number,
  barritas: []
});

export const ModeloPedido = model("Pedido", schemaPedido);
