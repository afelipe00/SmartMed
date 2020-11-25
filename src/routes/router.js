const express = require('express')
const router = express.Router()
const user = require('../controllers/user')
const middelware = require('../server/middelware')

//global variables

//rutas de autenticacion
router.post('/Login', user.login);

router.post('/Signin', user.signin);

//rutas con acceso autenticado
router.delete('/delete/:id', middelware.validateAuth ,user.delete);

router.put('/edit/:id',middelware.validateAuth,user.edit);



//modulo de exportacion a config.js
module.exports = router;