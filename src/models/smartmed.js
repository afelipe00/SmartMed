const mongoose = require('mongoose')
const { Schema } = mongoose;

const SmartmedSchema = new Schema({
    DateCreate: {type: String},
    state: {type: String},
    CodeQr: {type: Object} 
})

module.exports = mongoose.model('SmartMed', SmartmedSchema);