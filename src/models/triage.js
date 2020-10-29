const mongoose = require('mongoose')
const { Schema } = mongoose;

const TriageSchema = new Schema({
    id: {type: Number},
    user: {type: Object},
    pulse: {type: Number},
    oxigen: {type: Number},
    pressure: {type: Number},
    triage: {type: Number}

})

module.exports = mongoose.model('Triage', TriageSchema);