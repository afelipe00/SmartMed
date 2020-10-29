const mongoose = require('mongoose')
const { Schema } = mongoose;

const HistorySchema = new Schema({
    user: {type: Object},
    cita: {type: Object},
    suscription: {type: String} 
})

module.exports = mongoose.model('History', HistorySchema);