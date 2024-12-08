import { Schema, model } from "mongoose";

const schemaPedido = new Schema({
  id: { type: Number, unique: true },
  nombre: String,
  apellido: String,
  email: String,
  direccion: String,
  envio: Boolean,
  retiro: Boolean,
  tarjeta: Number,
});

export const ModeloPedido = model("Pedido", schemaPedido);