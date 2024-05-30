const Asset = require("../models/asset");
const EmployeeInfo = require("../models/employeeInfo");

async function getAsset() {
  try {
    const assets = await Asset.find({ IsDeleted: 0 });

    const employeeInfoData = EmployeeInfo.findOne({Assets: assets[0]._id})
    if (!assets || assets.length === 0) {
      throw new Error("Assets not found");
    }
    return assets;
  } catch (error) {
    throw error;
  }
}

module.exports = getAsset;
