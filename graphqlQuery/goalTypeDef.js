const goalInfo = `
type Goal{
    _id : String
    GoalName: String
    GoalDescription: String
    Status: String
    StartDate: String
    TargetEndDate: String
    Achieveddate: String
    CertificateId: [Certificate]
    UserId: EmployeeInfo
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}

input GoalInput{
    GoalName: String
    GoalDescription: String
    Status: String
    StartDate: String
    TargetEndDate: String
    Achieveddate: String
    CertificateId: [String]
    UserId: String
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}
`;

const createGoalInfo = `
createGoal(
    GoalName: String
    GoalDescription: String
    Status: String
    StartDate: String
    TargetEndDate: String
    Achieveddate: String
    CertificateId: [String]
    UserId: String
    CreatedBy: String
  ): Goal
  `;

const getGoalInfoById = `
goalInfoById(UserId:String):[Goal] 
`;

module.exports = { goalInfo, createGoalInfo, getGoalInfoById };
