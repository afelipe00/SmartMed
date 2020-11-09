const ctrl = require('../helpers/indexUser');

//global variables
const user = {};

let payload = {
    message: null
};

user.login = (req, res, next ) =>{
    res.send('login')
};

user.signin = (req, res , next) =>{
    res.send('logup')
};

user.delete = (req, res, next) =>{
    res.send('delete')
};

module.exports = user;
