const mongoose = require('mongoose')
const { Schema } = mongoose;

const EspecialidadSchema = new Schema({
    Name: {type: String}
})

module.exports = mongoose.model('Especialidad', EspecialidadSchema);