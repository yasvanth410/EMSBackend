const EmployeeInfo = require('../models/employeeInfo');
const DepartmentModel = require('../models/department')

async function updateEmployeeInfo(UserId, Username, input){
    // console.log(UserId)
    try {
        const date  = new Date();
        input.UpdatedBy = Username,
        input.UpdatedDate = date.toLocaleDateString()+" "+date.toLocaleTimeString();
        // input.Email.CompanyMail = await getEmployeeById[0].Email.CompanyMail
        const departmentData = await DepartmentModel.findOne({DepartmentName: input.Department, IsDeleted: 0});
        if(departmentData){
            input.Department = departmentData._id;
        }else{
            input.Department = null  
        }
        const employeeInfoData = await EmployeeInfo.findOne({EmployeeCode: input.TeamLead, IsDeleted: 0});
        if(employeeInfoData){
            input.TeamLead = employeeInfoData._id;
        }
        const employeeInfo = await EmployeeInfo.findOne({EmployeeCode: input.ManagerId, IsDeleted: 0});
        if(employeeInfo){
            input.ManagerId = employeeInfo._id;
        }
        const updateEmployee = await EmployeeInfo.findOneAndUpdate({UserId: UserId, IsActive: 1, IsDeleted:0}, input, {new: true, runValidators: true});
        if(!updateEmployee){
            throw new Error(`Employee not found with ${UserId}`);
        }
        return updateEmployee;
    } catch (error) {
        throw error;
    }
}

module.exports = updateEmployeeInfo