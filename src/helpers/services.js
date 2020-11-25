/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const moment = require('moment');
const tk = require('../keys');


//variables globales
service = {}

service.createToken = (user) =>{
    let tkJson = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, "days").unix()
    }
    return jwt.sign(tkJson, tk.TOKEN_SECRET.code)
}

/*service.verify = () =>{
    
}*/


//export
module.exports = service;