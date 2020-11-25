const express = require('express');
const bodyParser = require("body-parser");


module.exports = app =>{
    
    //settings server (express)
    app.use(bodyParser.json())
    app.set('PORT', process.env.PORT || 5002)

    //middlewares
    

    //routes (inician rutas del servidor API REST)
    const router = require('../routes/router.js')
    app.use('/api', router)

    //Static file
    app.use(express.static(process.cwd() + '/public'))
    
    return app;
}