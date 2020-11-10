const mongoose = require('mongoose')
const { Schema } = mongoose;

const RolSchema = new Schema({
    Name: {type: String}
})

module.exports = mongoose.model('Rol', RolSchema);