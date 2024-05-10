const Role = require("../models/role");

async function getOneRole(args) {
  try {
    const { _id } = args;
    const role = await Role.findOne({
      _id: _id,
      IsActive: 1,
      IsDeleted: 0,
    });
    if (!role || role.length === 0) {
      throw new Error("Role not found");
    }
    return role;
  } catch (error) {
    throw error;
  }
}

module.exports = getOneRole;
