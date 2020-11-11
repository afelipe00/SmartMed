const mongoose = require('mongoose')
const { Schema } = mongoose;

const HistorySchema = new Schema({
    Date: {type: String},
    Especialidad: {type: Number},
    Medico: {type: Number},
    Hospital: {type: Number},
    Diagnostico: {type: String}
})

module.exports = mongoose.model('History', HistorySchema);