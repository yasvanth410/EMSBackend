const EmployeeInfo = require('../models/employeeInfo');
const DepartmentModel = require('../models/department');

async function updateEmployeeById(_id, Username, input){
    // console.log(input)
    try {
        const date  = new Date();
        input.UpdatedBy = Username,
        input.UpdatedDate = date.toLocaleDateString()+" "+date.toLocaleTimeString();
        const departmentData = await DepartmentModel.findOne({DepartmentName: input.Department, IsDeleted: 0});
        input.Department = departmentData._id;
        const employeeInfoData = await EmployeeInfo.findOne({EmployeeCode: input.TeamLead, IsDeleted: 0});
        input.TeamLead = employeeInfoData._id;
        const employeeInfo = await EmployeeInfo.findOne({EmployeeCode: input.ManagerId, IsDeleted: 0});
        input.ManagerId = employeeInfo._id;
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