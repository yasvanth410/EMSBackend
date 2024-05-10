const Role = require("../models/role");

async function updateRole(args) {
  try {
    const { input } = args;
    const date = new Date();
    input.UpdatedDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    const role = await Role.findByIdAndUpdate(_id, input, {
      new: true,
    });
    if (!role || role.length === 0) {
      throw new Error("Role not found");
    }
    return role;
  } catch (error) {
    throw error;
  }
}

module.exports = updateRole;
