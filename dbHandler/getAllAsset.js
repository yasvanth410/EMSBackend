const Asset = require("../models/asset");
const EmployeeInfo = require("../models/employeeInfo");

async function getAsset() {
  try {
    const assets = await Asset.find({ IsDeleted: 0 });

    const employeeInfoData = await EmployeeInfo.find().populate("Assets");
    if (!assets || assets.length === 0) {
      throw new Error("Assets not found");
    }

    const assetEmployeeMap = {};

    employeeInfoData.forEach((employee) => {
      employee.Assets.forEach((asset) => {
        assetEmployeeMap[asset._id] =
          employee.FirstName +
          " " +
          employee.LastName +
          "-" +
          employee.EmployeeCode;
      });
    });

    const assetsWithEmployees = assets.map((asset) => ({
      ...asset.toObject(),
      AssignTo: assetEmployeeMap[asset._id] || null,
    }));
    // console.log(assetsWithEmployees);

    return assetsWithEmployees;
  } catch (error) {
    throw error;
  }
}

module.exports = getAsset;
