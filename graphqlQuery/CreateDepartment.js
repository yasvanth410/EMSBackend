const department = `
type Department{
    DepartmentName: String
    Description: String
    CreatedBy: String
    UpdatedBy: String
    IsActive: Int
    IsDeleted: Int
}

input DepartmentInput{
    DepartmentName: String
    Description: String
    CreatedBy: String
    UpdatedBy: String
    IsActive: Int
    IsDeleted: Int
}
`;

const createDepartment = `
    createDepartment(input: DepartmentInput):Department 
`;


module.exports = {department, createDepartment}