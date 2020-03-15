comunidadesCtrl = {};
const Comunidad = require("../models/Comunidad");

comunidadesCtrl.renderVerComunidades = async (req, res) => {
  const comunidades = await Comunidad.find().sort({ date: "desc" });
  res.render("comunidades/todas-comunidades", { comunidades });
};

comunidadesCtrl.renderAgregarComunidad = async (req, res) => {
  res.render("comunidades/agregar-comunidad");
};

comunidadesCtrl.crearNuevaComunidad = async (req, res) => {
  const { comunidad } = req.body;
  const nuevaComunidad = new Comunidad({ comunidad });
  await nuevaComunidad.save();
  res.redirect("/comunidades");
};

comunidadesCtrl.renderEditarComunidad = async (req, res) => {
  const comunidades = await Comunidad.findById(req.params.id);
  res.render("comunidades/editar-comunidad", { comunidades });
};

comunidadesCtrl.editarComunidad = async (req, res) => {
  const { comunidad } = req.body;
  await Comunidad.findByIdAndUpdate(req.params.id, { comunidad });
  res.redirect('/comunidades');
};

comunidadesCtrl.eliminarComunidad = async (req, res) => {
  await Comunidad.findOneAndDelete(req.params.id);
  res.redirect("/comunidades");
};

module.exports = comunidadesCtrl;
