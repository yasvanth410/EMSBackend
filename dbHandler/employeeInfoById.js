const EmployeeInfo = require('../models/employeeInfo');

async function getEmployeeInfo(args){
    const { UserId } = args
    try {
     const getEmployeeById = await EmployeeInfo.find({UserId: UserId, IsActive: 1, IsDeleted: 0});
     if(!getEmployeeById || getEmployeeById.length===0){
        throw new Error("Employee not found")
     }
     return  getEmployeeById[0];
    } catch (error) {
        throw error;
    }
}

module.exports = getEmployeeInfo