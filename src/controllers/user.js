const md5 = require('md5');
const scModel = require('../models/index');
const hlpUser = require('../helpers/user');
const service = require('../helpers/services');


//global variables
let user = {}

user.login = (req, res) =>{
    try{
        scModel.User.findOne({
            "username": req.body.username
        }).then(usr =>{
            if(md5(req.body.password) == usr.password){
                console.log("User login");
                res.status(200)
                res.send({message: "User login"})
            }else{
                console.log("password incorrect")
                res.status(403)
                res.send({message: "password incorrect"})
            }
        }).catch(err =>{
            console.log("usuario no encontrado: ", err);
            res.status(400);
            res.send({message: "usuario no encontrado"})
        })
    }catch(err){
        console.log("Error try:",err)
    }
};

user.signin = async (req, res) =>{
    var datosUser = req.body;
    try{
        var bandUser = await hlpUser.UserExist(req.body.username)
        console.log(bandUser)
        if (bandUser != true){
            if(hlpUser.SamePass(req.body.password, req.body.rppassword)){
                datosUser.password = md5(datosUser.password);
                const newUser = new scModel.User(datosUser)
                // eslint-disable-next-line no-unused-vars
                await newUser.save(function(err){
                    return res
                    .status(200)
                    .send({token: service.createToken(newUser)})
                });
            }else{
                res.status(403);
                res.send({message: 'Contrasennas no similares'})
            }
        }else{
            res.status(406)
            res.send({message: 'username existente'})
        }
    }catch(err){
        console.log(err)
        res.status(400)
        res.send(err)
    }
};

user.edit = async (req, res) => {
    var datosUser = req.body
    datosUser.password = md5(datosUser.password);
    await scModel.User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200);
    res.send({message: 'usuario actualizado'});
}

user.delete = async (req, res) =>{
    try{
        console.log(req.params.id)
        if (hlpUser.UserExist(req.body.username) == true){
            var usr = scModel.User.find({"username": req.body.username});
            if (md5(req.body.password) == usr[0].username){
                await scModel.User.findByIdAndRemove(req.params.id);
                res.status(200);
                res.send({message: 'usuario eliminado'})
            }else{
                res.status(403);
                res.send({message: 'contraseña incorecta'})
            }
        }else{
            console.log("Usuario no existente")
            res.status(404);
            res.send({message: 'Usisario no encontrado'})
        }
    }catch(err){
        console.log(err)
    }
};

module.exports = user;
