const EmployeeInfo = require('../models/employeeInfo');

async function updateEmployeeInfo(UserId, Username, input){
    // console.log(input)
    try {
        const date  = new Date();
        const getEmployeeById = await EmployeeInfo.find({_id: UserId, IsActive: 1, IsDeleted: 0});
        input.UpdatedBy = Username,
        input.UpdatedDate = date.toLocaleDateString()+" "+date.toLocaleTimeString();
        // input.Email.CompanyMail = await getEmployeeById[0].Email.CompanyMail
        const updateEmployee = await EmployeeInfo.findOneAndUpdate({_id: UserId, IsActive: 1, IsDeleted:0}, input, {new: true, runValidators: true});
        if(!updateEmployee){
            throw new Error(`Employee not found with ${UserId}`);
        }
        return updateEmployee;
    } catch (error) {
        throw error;
    }
}

module.exports = updateEmployeeInfo