const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {type: String},
    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    country: {type: String},
    username: {type: String},
    password: {type: String},
    History: {type: Object}
})

module.exports = mongoose.model('User', UserSchema);