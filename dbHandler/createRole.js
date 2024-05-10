const Role = require('../models/role');


async function saveRole(args){
    console.log(args);
    try {
        const{Name, CreatedBy, Description, Permission}= args
        const date = new Date();
        const saveInfo = new Role({
            Name: Name,
            CreatedBy: CreatedBy,
            Description: Description,
            Permission: Permission,
            CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(), 
        });
        // console.log(saveInfo)
        const savedDate = await saveInfo.save();
        return savedDate; 
    } catch (error) {
        throw error;
    }
}

module.exports = saveRole