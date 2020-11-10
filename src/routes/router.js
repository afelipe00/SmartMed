const express = require('express')
const router = express.Router()
const fs = require('fs')
const { send } = require('process')
const user = require('../controllers/user')

//global variables

//webservice User
router.post('/Login', user.login);

router.post('/Signin', user.signin);

router.delete('/delete/:id', user.delete);

router.put('/edit/:id',user.edit);

//webservice Home


/*
router.post('/UserReg', (req, res , next) =>{
    try{
        loadUsers();
        let flag = userExists(req.body.username);
        if (flag === -1){
            if (req.body.password === req.body.rppassword){
                user = {
                    name: req.body.name,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    country: req.body.country,
                    username: req.body.username,
                    password: md5(req.body.password)
                }
                payload.message = true;
                //console.log(user)
                arrayUsers.push(JSON.parse(JSON.stringify(user)));
                //console.log(arrayUsers)
                uploadUsers(arrayUsers);
            }else{
                payload.message = 'Verifique las constraseñas';
            }
        }else{
            payload.message = 'Usuario existente';
        }
        loadUsers();
        res.send(payload)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

//webServise login
router.post('/Login', (req, res, next) =>{
        loadUsers();
        let pos = userExists(req.body.username);
        if(pos === -1){
            payload.message = 'Usuario no existente';
        }else{
            if (arrayUsers[pos].password === md5(res.body.password)){
                payload.message = 'Bienvenido';
            }else{
                payload.message = 'Contrasenna incorrecta';
            }
        }
        res.send(payload)
})

//webServise delete
router.post('/Userdelete', (req, res, next) =>{
    loadUsers();
    let pos  = userExists(req.body.username)
    if (pos != -1){
        if (md5(req.body.password) === arrayUsers[pos].password){
            arrayUsers.pop(pos)
            payload.message = 'Usuario eliminado'
        }else{
            payload.message = 'Contrasenna incorrecta'
        }
    }
    loadUsers();
    res.send(payload)
})

//function for upload user
function uploadUsers(Users){
    fs.writeFileSync('DataUsers.json',JSON.stringify(Users),function (err){
        if (err){
            console.log(err)
        }else{
            console.log('upload')
        }
    })
}

//function User exists
function userExists(User){
    let pos;
    for(usser of arrayUsers){
        if (usser.username === User){
            pos = arrayUsers.indexOf(usser)
            return pos
        }
    }
    return -1;
}

//fuction for load users
function loadUsers(){
    fs.readFile('DataUsers.json',(err, data) => {
        if (err){
            console.log(err)
        }else{
            arrayUsers = JSON.parse(data)
            console.log(arrayUsers)
        }
    })
}
*/

//modulo de exportacion al index
module.exports = router;