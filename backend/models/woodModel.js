const mongoose = require('mongoose');

//Schema definition
const Schema = mongoose.Schema;

//Wood log for user and amount withdrawn
const woodLogSchema = new Schema({
    user: {
        type: String,
        required: false
    },
    amountWithdrawn: {
        type: Number,
        required: true
    },
    updatedAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const woodModelSchema = new Schema({
    woodType: {
        type: String,
        required: true
    },
    woodThickness: {
        type: Number,
        required: true,
    },
    woodQuantity: {
        type: Number,
        required: true
    },
    woodLogs: [woodLogSchema]
}, {
        timestamps: true
});

//Compile model from schema
const woodModel = mongoose.model('woodModel', woodModelSchema);

module.exports = woodModel;