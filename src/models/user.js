const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {type: String},
    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    country: {type: String},
    password: {type: String},
    history: {type: Object},
    rol: {type: Number}
})

module.exports = mongoose.model('User', UserSchema);