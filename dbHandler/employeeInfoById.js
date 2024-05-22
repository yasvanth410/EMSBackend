const EmployeeInfo = require('../models/employeeInfo');

async function getEmployeeInfo(args){
    const { UserId } = args
    // console.log("Id:", UserId);
    try {
     const getEmployeeById = await EmployeeInfo.find({UserId: UserId, IsActive: 1, IsDeleted: 0}).populate('Assets');
     if(!getEmployeeById || getEmployeeById.length===0){
        throw new Error("Employee not found")
     }
     return  getEmployeeById[0];
    } catch (error) {
        throw error;
    }
}

async function getAllEmployeesInfo(){
    try {
        const employeesInfo = await EmployeeInfo.find({IsActive:1, IsDeleted:0}).populate('Department');
        if(!employeesInfo || employeesInfo.length===0){
            throw new Error("No Employee found");
        }
        return employeesInfo
    } catch (error) {
        throw error;
    }
}

async function getAllManagers(){
    try {
        const designations = ["Chief Executive Officer", "Manager", "Product Manager", "Associate Product Manager"];
        const managerInfo = await EmployeeInfo.find({
            Designation: { $in: designations },
            IsActive: 1,
            IsDeleted: 0
          });
        if(!managerInfo || managerInfo.length===0){
            throw new Error("No Manager found");
        }
        return managerInfo;
    } catch (error) {
        throw error;
    }
}

module.exports = {getEmployeeInfo, getAllEmployeesInfo, getAllManagers}