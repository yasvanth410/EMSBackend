const Employee = require('../models/employeeSchema');

async function saveEmployee(args){
    try {
        const { UserId, FirstName, LastName, UserName, Email, Password, Role, CreatedBy, IsActive, IsDeleted} = args
        const saveEmployee = new Employee({
            UserId:UserId,
            FirstName:FirstName,
            LastName:LastName,
            UserName:UserName,
            Email:Email,
            Password: Password,
            Role:Role,
            CreatedBy:CreatedBy,
            CreatedDate: new Date().toLocaleDateString(),
            IsActive: IsActive,
            IsDeleted: IsDeleted
        });

        const savedEmployee  = saveEmployee.save();
        return savedEmployee;
    } catch (error) {
        // console.log(error);
        // next(error);
        return error;
    }
}

module.exports = { saveEmployee }