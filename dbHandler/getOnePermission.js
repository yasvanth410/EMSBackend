const Permission = require("../models/permission");

async function getOnePermission(args) {
  try {
    const { _id } = args;
    const permission = await Permission.findOne({
      _id: _id,
      IsActive: 1,
      IsDeleted: 0,
    });
    if (!permission || permission.length === 0) {
      throw new Error("Permission not found");
    }
    return permission;
  } catch (error) {
    throw error;
  }
}

module.exports = getOnePermission;
