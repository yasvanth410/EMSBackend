const employeeInfo = `

type Employee{
    UserId:String
    FirstName:String
    LastName:String
    UserName:String
    Email:String
    Password:String
    Role:String
    CreatedBy:String
    UpdatedBy:String
    IsActive: Int
    IsDeleted: Int
}`;

const createEmployee = `
createEmployee( 
    UserId:String
    FirstName:String
    LastName:String
    UserName:String
    Email:String
    Password:String
    Role:String
    CreatedBy:String
    UpdatedBy:String
    IsActive: Int
    IsDeleted: Int
): Employee
`;

module.exports = {employeeInfo, createEmployee}