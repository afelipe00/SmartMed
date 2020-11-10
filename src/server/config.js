const express = require('express');
const bodyParser = require("body-parser")

module.exports = app =>{
    
    //settings
    app.set('PORT', process.env.PORT || 5002)

    //middlewares
    app.use(bodyParser.json())

    //routes
    const router = require('../routes/router.js')
    app.use('/api', router)

    //Static file
    app.use(express.static(process.cwd() + '/public'))
    
    return app;
}