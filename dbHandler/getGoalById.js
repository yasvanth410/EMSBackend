const Goal = require("../models/goal");

async function getGoalById(args) {
  const { UserId } = args;
//   console.log("Id:", UserId);
  try {
    const getGoals = await Goal.find({
      UserId: UserId,
      IsActive: 1,
      IsDeleted: 0,
    }).populate("CertificateId UserId");
    if (!getGoals || getGoals.length === 0) {
      throw new Error("Goal not found!");
    }
    console.log(getGoals);
    return getGoals;
  } catch (error) {
    throw error;
  }
}

module.exports = getGoalById;
