const Asset = require("../models/asset");

async function saveRole(args) {
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
      Description,
      Addon,
      IsWorkable,
      CreatedBy,
    } = args;
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
      Description: Description,
      Addon: Addon,
      IsWorkable: IsWorkable,
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

module.exports = saveRole;
