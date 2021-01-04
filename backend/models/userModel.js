const mongoose = require('mongoose');

//Schema definition
const Schema = mongoose.Schema;

const userModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subTeam: {
        type: String,
        required: true
    }
});

//Compile model from schema
const userModel = mongoose.model('userModel', userModelSchema);

module.exports = userModel;