const mongoose = require('mongoose')
const { Schema } = mongoose;

const TriageSchema = new Schema({
    user: {type: Number},
    device: {type: Number},
    pulse: {type: Number},
    oxigen: {type: Number},
    pressure: {type: Number},
    date: {type: String},
    result: {type: String}
})

module.exports = mongoose.model('Triage', TriageSchema);