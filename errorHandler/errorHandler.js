const saveErrorLogs = require('../dbHandler/errorLogs');

module.exports  = async(error, req, res, next)=>{
    error.StatusCode = error.StatusCode || 500;
    error.Status = error.Status || 'error';

    const date = new Date();

    const sendErrors = {
        ErrorName: error.name,
        StatusCode: error.StatusCode,
        Description: error.message,
        StackTrace: error.stack,
        CreatedDate: date.toLocaleDateString()+" "+date.toLocaleTimeString(),
        IsDeleted: 0
    }

    await saveErrorLogs(sendErrors, req, res);
}
