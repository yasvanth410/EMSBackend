const Asset = require("../models/asset");
const EmployeeInfo = require("../models/employeeInfo");

async function saveAsset(args) {
  // console.log(args);
  try {
    const {
      AssetModel,
      AssetType,
      Memory,
      Processor,
      OperatingSystem,
      WarrantyStart,
      WarrantyExpire,
      SerialNumber,
      AssignTo,
      AssignDate,
      AssetPurchaseDate,
      AssetCondition,
      Cost,
      Vendor,
      Description,
      CreatedBy,
    } = args;

    const employeeInfoData = await EmployeeInfo.findOne({
      EmployeeCode: AssignTo,
    });

    const date = new Date();
    const saveInfo = new Asset({
      AssetModel: AssetModel,
      AssetType: AssetType,
      Memory: Memory,
      Processor: Processor,
      OperatingSystem: OperatingSystem,
      WarrantyStart: WarrantyStart,
      WarrantyExpire: WarrantyExpire,
      SerialNumber: SerialNumber,
      AssignDate: AssignDate,
      AssetPurchaseDate: AssetPurchaseDate,
      AssetCondition: AssetCondition,
      Cost: Cost,
      Vendor: Vendor,
      Description: Description,
      CreatedBy: CreatedBy,
      CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    });
    // console.log(saveInfo)
    const savedData = await saveInfo.save();
    if (employeeInfoData) {
      employeeInfoData.Assets.push(savedData._id);

      const updateEmployeeInfoData = await EmployeeInfo.findByIdAndUpdate(
        employeeInfoData._id,
        employeeInfoData
      );

      // console.log(updateEmployeeInfoData);
    }
    if (!savedData || savedData.length === 0) {
      savedData.Message = "Error in Create Asset.";
    }

    return savedData;
  } catch (error) {
    throw error;
  }
}

module.exports = saveAsset;
