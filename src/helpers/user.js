
//global variables
hlpUser = {}

hlpUser.SamePass = (pass, repeat) => {
    if (pass === repeat){
        return true;
    }
    return false
}







//module export
module.exports = hlpUser;