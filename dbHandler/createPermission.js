const Permission = require('../models/permission');


async function savePermission(args){
    // console.log(args);
    try {
        const{Name, CreatedBy}= args
        const date = new Date();
        const saveInfo = new Permission({
            Name: Name,
            CreatedBy: CreatedBy,
            CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(), 
        });
        // console.log(saveInfo)
        const savedDate = await saveInfo.save();
        return savedDate; 
    } catch (error) {
        throw error;
    }
}

module.exports = savePermission