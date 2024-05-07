const mongoose = require('mongoose');

const authLogs = mongoose.Schema({
    UserId: String,
    UserName: String,
    Action: String,
    ActionMessage: String,
    CreatedDate: String,
    CreatedBy: String,
    Source: String,
    IsDeleted: Number
});

module.exports = mongoose.model("authLogs", authLogs, "AuthLogs");