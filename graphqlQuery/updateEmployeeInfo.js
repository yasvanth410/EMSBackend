const updateEmployeeInfo = `
    updateEmployeeInfo(UserId: String, Username: String, input: EmployeeInfoInput): EmployeeInfo
`;

const updateEmployeeById = `
updateEmployeeInfoById(_id:String, Username: String, input: EmployeeInfoInput): EmployeeInfo
`;

module.exports = { updateEmployeeInfo, updateEmployeeById}