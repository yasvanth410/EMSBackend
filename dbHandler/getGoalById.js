const Goal = require("../models/goal");
const EmployeeInfo = require("../models/employeeInfo");

async function getGoalById(args) {
  const { UserId } = args;
  // console.log("Id:", UserId);
  try {
    const employeeData = await EmployeeInfo.findOne({
      UserId: UserId,
      IsActive: 1,
      IsDeleted: 0,
    });
    if(employeeData){
        // console.log(employeeData);
        const getGoals = await Goal.find({
          UserId: employeeData._id,
          IsActive: 1,
          IsDeleted: 0,
        }).populate("CertificateId UserId");
        if (!getGoals || getGoals.length === 0) {
          throw new Error("Goal not found!");
        }
        // console.log(getGoals);
        const filteredGoals = filterCompletedCertificates(getGoals);
        return filteredGoals;
    }else{
        throw new Error("Employee not found!");
    }
  } catch (error) {
    throw error;
  }
}

function filterCompletedCertificates(goals) {
  return goals.map((goal) => {
    const completedCertificates = goal.CertificateId.filter(
      (certificate) => certificate.CompletedDate
    );
    return {
      ...goal,
      CertificateId: completedCertificates,
      GoalName: goal.GoalName,
      GoalDescription: goal.GoalDescription,
      Status: goal.Status,
      StartDate: goal.StartDate,
      TargetEndDate: goal.TargetEndDate,
      Achieveddate: goal.Achieveddate,
      UserId: goal.UserId,
      CreatedBy: goal.CreatedBy,
      CreatedDate: goal.CreatedDate,
      UpdatedBy: goal.UpdatedBy,
      UpdatedDate: goal.UpdatedDate,
      IsActive: goal.IsActive,
      IsDeleted: goal.IsDeleted,
    };
  });
}

module.exports = getGoalById;
