const { Router } = require('express');
const router = Router();

const {
    renderVerComunidades,
    renderAgregarComunidad,
    crearNuevaComunidad,
    renderEditarComunidad,
    editarComunidad,
    eliminarComunidad
} = require('../controllers/comunidades_controller');

//Ver todos las comunidades
router.get('/comunidades', renderVerComunidades);
//Agregar comunidad
router.get('/comunidades/agregar', renderAgregarComunidad);
router.post('/comunidades/nueva-comunidad', crearNuevaComunidad);
//Editar comunidad
router.get('/comunidades/editar/:id', renderEditarComunidad);
router.put('/comunidades/editar-comunidad/:id', editarComunidad);
//Eliminar comunidad
router.get('/comunidades/eliminar/:id', eliminarComunidad);

module.exports = router;