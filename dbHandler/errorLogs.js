const Errors = require('../models/errorLogs');

async function saveErrorLogs(sendErrors, req, res){
    const { ErrorName, StatusCode, Description, StackTrace, CreatedDate, IsDeleted } = sendErrors

    try {
        const saveErrors = new Errors({
            ErrorName: ErrorName,
            StatusCode: StatusCode,
            Description: Description,
            StackTrace: JSON.stringify(StackTrace),
            CreatedDate: CreatedDate,
            IsDeleted: IsDeleted
        });
    
        const savedLogs = await saveErrors.save();
        // console.log(savedLogs); 
    } catch (error) {
        console.log("Error: ", error);
    }
}

module.exports = saveErrorLogs