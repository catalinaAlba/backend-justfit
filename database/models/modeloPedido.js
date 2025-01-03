import { Schema, model } from "mongoose";

const schemaPedido = new Schema({
  id: { type: Number, unique: true },
  nombre: String,
  apellido: String,
  email: String,
  direccion: String,
  tarjeta: Number,
  barritas: [{ type: Schema.Types.ObjectId, ref: "Barrita" }]
});

export const ModeloPedido = model("Pedido", schemaPedido);