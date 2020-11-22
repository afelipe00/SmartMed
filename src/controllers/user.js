const md5 = require('md5');
const scModel = require('../models/index');
const hlpUser = require('../helpers/user');

//global variables
let user = {}
let payload = {
    message: null
};

user.login = async (req, res, next ) =>{
    res.send('login')
    const pr = await scModel.User.find({"username": req.body.username});
    console.log(pr);
};

user.signin = async (req, res , next) =>{
    var datosUser = req.body;
    try{
        var bandUser = await hlpUser.UserExist(req.body.username)
        console.log(bandUser)
        if (bandUser != true){
            if(hlpUser.SamePass(req.body.password, req.body.rppassword)){
                datosUser.password = md5(datosUser.password);
                const newUser = new scModel.User(datosUser)
                await newUser.save()
                payload.message = 'User saved';
                res.send(payload)
            }else{
                payload.message = 'Contrasennas no similares';
                res.send(payload)
            }
        }else{
            payload.message = 'username existente';
            res.send(payload)
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
};

user.edit = async (req, res, next) => {
    var datosUser = req.body
    datosUser.password = md5(datosUser.password);
    await scModel.User.findByIdAndUpdate(req.params.id, req.body);
    payload.message = 'usuario actualizado';
    res.send(payload);
}

user.delete = async (req, res, next) =>{
    await scModel.User.findByIdAndRemove(req.params.id);
    payload.message = 'usuario eliminado';
    res.send(payload);
};

module.exports = user;
