const usuariosCtrl = {};
const Usuario = require("../models/User");
const Comunidad = require("../models/Comunidad");

//Ver todos los usuarios
usuariosCtrl.redirigirVerUsuario = (req, res) => {
  res.redirect("/usuarios");
};
usuariosCtrl.renderTodosUsuarios = async (req, res) => {
  const usuarios = await Usuario.find().sort({ date: "desc" });
  res.render("users/todos-usuarios", { usuarios });
};

//Agregar un usuario
usuariosCtrl.renderAgregarUsuario = async (req, res) => {
  const comunidades = await Comunidad.find();
  res.render("users/agregar-usuario", { comunidades });
};
usuariosCtrl.crearNuevoUsuario = async (req, res) => {
  const {
    nombre,
    alias,
    edad,
    colonia,
    calle,
    no_Ext,
    no_Int,
    CP,
    telefono,
    comunidad
  } = req.body;
  //Verificate the fields from frontend, it must be a function
  const errores = [];
  if (!nombre) {
    errores.push({ text: "Favor de ingresar su nombre" });
  } else if (!alias) {
    errores.push({ text: "Favor de ingresar su alias/apodo" });
  } else if (!edad) {
    errores.push({ text: "Favor de ingresar su edad" });
  } else if (edad < 15 || edad > 60) {
    errores.push({ text: "La edad debe encontrarse entre 15 y 60 años" });
  } else if (!colonia) {
    errores.push({ text: "Favor de ingresar el nombre de la colonia" });
  } else if (!calle) {
    errores.push({ text: "Favor de ingresa la calle" });
  }
  if (errores.length > 0) {
    res.render("usuario/agregar", { errores });
  }
  const nuevoUsuario = new Usuario({
    nombre,
    alias,
    edad,
    direccion: { no_Ext, no_Int, calle, colonia, CP },
    contacto: { telefono },
    comunidad
  });
  await nuevoUsuario.save();
  res.redirect("/usuarios");
};

//Editar un usuario
usuariosCtrl.renderEditarUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  const comunidades = await Comunidad.find();
  console.log(usuario.contacto.telefono);
  res.render("users/editar-usuario", { usuario, comunidades });
};
usuariosCtrl.editarUsuario = async (req, res) => {
  //Destructuring assignment with the request
  const {
    nombre,
    alias,
    edad,
    colonia,
    calle,
    no_Ext,
    no_Int,
    CP,
    telefono,
    comunidad
  } = req.body;
  //Use user's schema and create a mongodb's document
  await Usuario.findByIdAndUpdate(req.params.id, {
    nombre,
    alias,
    edad,
    direccion: { no_Ext, no_Int, calle, colonia, CP },
    contacto: { telefono },
    comunidad
  });
  res.redirect("/usuarios");
};

//Eliminar un usuario
usuariosCtrl.eliminarUsuario = async (req, res) => {
  //Use module mongoose
  await Usuario.findByIdAndDelete(req.params.id);
  res.redirect("/usuarios");
};

module.exports = usuariosCtrl;
