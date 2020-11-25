/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const moment = require('moment');
const tk = require('../keys');

//variables globales
middleware = {}

middleware.validateAuth = (req, res, next) =>{
        if(!req.headers.auth){
            return res
            .status(403)
            .send({message: "errro de header"});
        }

        var token = req.headers.auth;
        var payload = jwt.verify(token, tk.TOKEN_SECRET.code);

        if(payload.exp <= moment().unix()){
            return res
            .status(401)
            .send({message: "token expirado"})
        }

        req.user = payload.sub;
        next();
}

//export
module.exports = middleware;