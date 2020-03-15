const { Router } = require('express');
const router = Router();
const {
    redirigirVerUsuario,
    renderTodosUsuarios,
    renderAgregarUsuario,
    crearNuevoUsuario,
    renderEditarUsuario,
    editarUsuario,
    eliminarUsuario
} = require('../controllers/usuario_controller');

//Pantalla principal
router.get('/', redirigirVerUsuario);
//Ver todos los usuarios
router.get('/usuarios', renderTodosUsuarios);
//Agregar usuario
router.get('/usuarios/agregar', renderAgregarUsuario);
router.post('/usuarios/nuevo-usuario', crearNuevoUsuario);
//Editar usuario
router.get('/usuarios/editar/:id', renderEditarUsuario);
router.put('/usuarios/editar-usuario/:id', editarUsuario);
//Eliminar usuario
router.delete('/usuarios/eliminar/:id', eliminarUsuario);

module.exports = router;