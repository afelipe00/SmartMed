const mongoose = require('mongoose')
const { Schema } = mongoose;

const HistorySchema = new Schema({
    id: {type: Number},
    Centromed: {type: Object},
    date: {type: String},
    user: {type: Object} 
})

module.exports = mongoose.model('History', HistorySchema);