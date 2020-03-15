const { Schema, model } = require("mongoose");

const ComunidadSchema = new Schema(
  {
    comunidad: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model("Comunidad", ComunidadSchema);