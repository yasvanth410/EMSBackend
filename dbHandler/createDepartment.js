const Department = require('../models/department');

async function createDepartment(args){
    // console.log(args)
    const {DepartmentName, Description, CreatedBy,  IsActive, IsDeleted} = args.input
    try{
        const date = new Date();
        const saveDepartment = new Department({
            DepartmentName: DepartmentName,
            Description: Description,
            CreatedBy: CreatedBy,
            CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(), 
            IsActive: IsActive,
            IsDeleted: IsDeleted
        })

        const savedData = await saveDepartment.save();
        return savedData;
    }catch(error){
        throw error;
    }
}

module.exports = createDepartment