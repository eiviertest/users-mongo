const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    alias: { type: String },
    direccion: {
      no_Ext: { type: Number, required: true },
      no_Int: { type: String },
      calle: { type: String, required: true },
      colonia: { type: String, required: true },
      CP: { type: Number, required: true }
    },
    contacto: [{ telefono: { type: Number, required: true } }],
    comunidad: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
