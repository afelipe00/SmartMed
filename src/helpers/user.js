const scModel = require('../models/index');
//global variables
hlpUser = {}

hlpUser.SamePass = (pass, repeat) => {
    if (pass === repeat){
        return true;
    }else{
        return false
    }
}

hlpUser.UserExist = (username) => {
    if (scModel.User.find({"username": username})){
        return true
    }else{
        return false
    }
}






//module export
module.exports = hlpUser;
