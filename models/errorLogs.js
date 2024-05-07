const mongoose = require('mongoose');

const storeErrors = new mongoose.Schema({
    ErrorName: {
        type: String,
    },
    StatusCode: {
        type: String
    },
    Description: {
        type: String
    },
    StackTrace: {
        type: String
    },
    Severity: {
        type: String
    },
    CreatedDate: {
        type: String
    },
    IsDeleted: {
        type: Number,
        enum: [0,1],
        default: 0
    }
});

module.exports = mongoose.model('errorHandle', storeErrors, 'ErrorLogs');