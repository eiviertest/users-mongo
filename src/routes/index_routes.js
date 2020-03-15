const { Router } = require('express');
const router = Router();

const {
    redirigirVerUsuarios,
    renderAdministarComunidades
} = require('../controllers/index_controller');

router.get('/', redirigirVerUsuarios);

router.get('/administrar-comunidades', renderAdministarComunidades);

module.exports = router;