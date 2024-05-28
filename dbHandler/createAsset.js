const Asset = require("../models/asset");
const EmployeeInfo = require("../models/employeeInfo");

async function saveAsset(args) {
  // console.log(args);
  try {
    const {
      AssetName,
      AssetModel,
      AssetType,
      Memory,
      Processor,
      OperatingSystem,
      Warranty,
      AssetTag,
      SerialNumber,
      AssignTo,
      AssignDate,
      DischargeDate,
      AssetPurchaseDate,
      AssetStatus,
      Cost,
      Supplier,
      Description,
      Addon,
      IsWorkable,
      CreatedBy,
    } = args;

    const employeeInfoData = await EmployeeInfo.findOne({
      EmployeeCode: AssignTo,
    });

    if (employeeInfoData) {
      const date = new Date();
      const saveInfo = new Asset({
        AssetName: AssetName,
        AssetModel: AssetModel,
        AssetType: AssetType,
        Memory: Memory,
        Processor: Processor,
        OperatingSystem: OperatingSystem,
        Warranty: Warranty,
        AssetTag: AssetTag,
        SerialNumber: SerialNumber,
        AssignDate: AssignDate,
        DischargeDate: DischargeDate,
        AssetPurchaseDate: AssetPurchaseDate,
        AssetStatus: AssetStatus,
        Cost: Cost,
        Supplier: Supplier,
        Description: Description,
        Addon: Addon,
        IsWorkable: IsWorkable,
        CreatedBy: CreatedBy,
        CreatedDate:
          date.toLocaleDateString() + " " + date.toLocaleTimeString(),
      });
      // console.log(saveInfo)
      const savedData = await saveInfo.save();

      employeeInfoData.Assets.push(savedData._id);

      const updateEmployeeInfoData = await EmployeeInfo.findByIdAndUpdate(
        employeeInfoData._id,
        employeeInfoData
      );

      console.log(updateEmployeeInfoData);
      if (!savedData || savedData.length === 0) {
        savedData.Message = "Error in Create Asset.";
      }

      return savedData;
    } else {
      throw new Error("Employee not found");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = saveAsset;
