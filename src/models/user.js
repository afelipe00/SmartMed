const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {type: String},
    username: {type: String},
    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    country: {type: String},
    password: {type: String},
    History: {type: Object},
    rol: {type: String}
})

module.exports = mongoose.model('User', UserSchema);