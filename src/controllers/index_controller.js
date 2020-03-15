const indexCtrl = {};

indexCtrl.redirigirVerUsuarios = (req, res) => {
    res.redirect('/usuarios');
};

indexCtrl.renderAdministarComunidades = (req, res) => {
    res.redirect('/usuarios');
};

module.exports = indexCtrl;
