const EmployeeInfo = require('../models/employeeInfo');

async function updateEmployeeById(_id, Username, input){
    try {
        const date  = new Date();
        input.UpdatedBy = Username,
        input.UpdatedDate = date.toLocaleDateString()+" "+date.toLocaleTimeString();
        const updateEmployee = await EmployeeInfo.findByIdAndUpdate(_id, input, {new: true, runValidators: true});
        if(!updateEmployee){
            throw new Error(`Employee not found with ${UserId}`);
        }
        return updateEmployee;
    } catch (error) {
        throw error;
    }
}

module.exports = updateEmployeeById