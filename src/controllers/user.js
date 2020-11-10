const ctrl = require('../helpers/indexUser');
const md5 = require('md5')
const scUser = require('../models/user');

//global variables
let user = {}
let payload = {
    message: null
};

user.login = async (req, res, next ) =>{
    res.send('login')
    const pr = await scUser.find();
    console.log(pr);
};

user.signin = async (req, res , next) =>{
    var datosUser = req.body;
    datosUser.password = md5(datosUser.password);
    const newUser = new scUser(datosUser)
    await newUser.save()
    console.log(newUser)
    console.log(req.body)
    payload.message = 'User saved';
    res.send(payload)
};

user.edit = async (req, res, next) => {
    var datosUser = req.body
    datosUser.password = md5(datosUser.password);
    await scUser.findByIdAndUpdate(req.params.id, req.body);
    payload.message = 'usuario actualizado';
    res.send(payload);
}

user.delete = async (req, res, next) =>{
    await scUser.findByIdAndRemove(req.params.id);
    payload.message = 'usuario eliminado';
    res.send(payload);
};

module.exports = user;
