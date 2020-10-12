const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const fs = require('fs')
var md5 = require('md5')

//global variables
let arrayUsers = []
let user = {}
let payload = {
    message: null
}
//webservice create User
router.post('/UserReg', (req, res , next) =>{
    try{
        loadUsers();
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
            payload.message = null;
        }
        res.send(payload)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

//function for upload user
function uploadUsers(Users){
    fs.appendFileSync('DataUsers.json',JSON.stringify(Users),function (err){
        if (err){
            console.log(err)
        }else{
            console.log('upload')
        }
        
    })
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

//modulo de exportacion al index
module.exports = router;