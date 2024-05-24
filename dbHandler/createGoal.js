const Goal = require("../models/goal");
const EmployeeInfo = require("../models/employeeInfo");

async function saveGoal(args) {
  // console.log(args);
  try {
    const {
      GoalName,
      GoalDescription,
      Status,
      StartDate,
      TargetEndDate,
      Achieveddate,
      CertificateId,
      UserId,
      CreatedBy,
    } = args;

    const EmployeeInfoData = await EmployeeInfo.findById(UserId);

    if (EmployeeInfoData) {
      const date = new Date();
      const saveInfo = new Goal({
        GoalName: GoalName,
        GoalDescription: GoalDescription,
        Status: Status,
        StartDate: StartDate,
        TargetEndDate: TargetEndDate,
        Achieveddate: Achieveddate,
        CertificateId: CertificateId,
        UserId: EmployeeInfoData._id,
        CreatedBy: CreatedBy,
        CreatedDate:
          date.toLocaleDateString() + " " + date.toLocaleTimeString(),
      });
      // console.log(saveInfo)
      const savedDate = await saveInfo.save();
      if (!savedDate || savedDate.length === 0) {
        savedDate.Message = "";
      }
      return savedDate;
    } else {
      throw new Error("Goal cannot be created");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = saveGoal;
