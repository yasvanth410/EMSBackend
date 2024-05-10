const Permission = require('../models/permission');

async function getPermission(){
    try {
     const permissions = await Permission.find();
     if(!permissions || permissions.length===0){
        throw new Error("Permissions not found")
     }
     return  permissions;
    } catch (error) {
        throw error;
    }
}

module.exports = getPermission