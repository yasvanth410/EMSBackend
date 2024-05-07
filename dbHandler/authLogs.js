const AuthLogs = require('../models/authLogs');

async function addAuthLogs(authLogFields){
    const { UserId, UserName, Action, ActionMessage, CreatedDate, CreatedBy, Source, IsDeleted } = authLogFields
    try {
        const saveAuthLogs = new AuthLogs({
            UserId:UserId,
            UserName:UserName,
            Action:Action,
            ActionMessage:ActionMessage,
            CreatedDate:CreatedDate,
            CreatedBy:CreatedBy,
            Source: Source,
            IsDeleted:IsDeleted
        }) ;
        const saveLogs = saveAuthLogs.save();
        console.log("logs stored successfully");
    } catch (error) {
        console.log(`failed to save the logs ${error}`);
    }
}

module.exports = addAuthLogs