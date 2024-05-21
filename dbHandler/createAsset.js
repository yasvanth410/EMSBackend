const Asset = require("../models/asset");
const EmployeeInfo = require('../models/employeeInfo');

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
      AssignTo,
      AssignDate,
      DischargeDate,
      Description,
      Addon,
      IsWorkable,
      CreatedBy,
    } = args;

    const employee = EmployeeInfo.findOne({Email: {comp}})

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
      AssignTo: AssignTo,
      AssignDate: AssignDate,
      DischargeDate: DischargeDate,
      Description: Description,
      Addon: Addon,
      IsWorkable: IsWorkable,
      CreatedBy: CreatedBy,
      CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    });
    // console.log(saveInfo)
    const savedDate = await saveInfo.save();
    if(!savedDate || savedDate.length === 0 ){
      savedDate.Message = ''
    }
    return savedDate;
  } catch (error) {
    throw error;
  }
}

module.exports = saveRole;
