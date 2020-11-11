const mongoose = require('mongoose')
const { Schema } = mongoose;

const HospitalSchema = new Schema({
    Name: {type: String},
    Address: {type: String},
    Devices: {type: Object}
})

module.exports = mongoose.model('Hospital', HospitalSchema);