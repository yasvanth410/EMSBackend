const assetInfo = require("./createAsset");
const {employeeInfo} = require('./createEmployee');

const employeeInfoQuery = `

type Contact{
    CountryCode: String
    Primary: String
    Emergency: String
}
type Email{
    CompanyMail: String
    PersonalMail: String
}
type Location{
    Flat: String
    Area: String
    Landmark: String
    Pincode: String
    City: String
    State: String
}
type Department{
    _id: String
    DepartmentName: String
    Description: String
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}
type Certification{
    CertificationName: String
    CertificationDate: Date
}
type Skillset{
    EmployeeSkillsetId: String
    PrimarySkillset: [String]
    SecondarySkillset: [String]
    SkillLevel: String
    Experience: String
    Certification: Certification
}

type EmployeeInfo{
    _id: String
    FirstName: String
    MiddleName: String
    LastName: String
    EmployeeCode: String
    UserId:Employee 
    Photo: String
    Gender: String
    Contact : Contact
    Email: Email
    Location: Location
    dob: Date
    doj: Date
    doc: Date
    Department: Department
    SkillSet: Skillset
    Assets: [Asset]
    ManagerId: String
    Designation: String
    CreatedBy: String
    UpdatedBy: String
    IsActive: Int
    IsDeleted: Int
}


input ContactInput{
    CountryCode: String
    Primary: String
    Emergency: String
}
input EmailInput{
    CompanyMail: String
    PersonalMail: String
}
input LocationInput{
    Flat: String
    Area: String
    Landmark: String
    Pincode: String
    City: String
    State: String
}
input DepartmentInput{
    DepartmentName: String
    Description: String
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
}
input CertificationInput{
    CertificationName: String
    CertificationDate: Date
}
input SkillsetInput{
    EmployeeSkillsetId: String
    PrimarySkillset: [String]
    SecondarySkillset: [String]
    SkillLevel: String
    Experience: String
    Certification: CertificationInput
}

input EmployeeInfoInput{
    FirstName: String
    MiddleName: String
    LastName: String
    EmployeeCode: String
    Photo: String
    Gender: String
    Contact : ContactInput
    Email: EmailInput
    Location: LocationInput
    dob: Date
    doj: Date
    doc: Date
    Department: String
    SkillSet: SkillsetInput
    Assets: [String]
    ManagerId: String
    Designation: String
    CreatedBy: String
    UpdatedBy: String
    IsActive: Int
    IsDeleted: Int
}

${employeeInfo}
`;

const createEmployeeInfo = `
createEmployeeInfo(Username: String, input: EmployeeInfoInput ): EmployeeInfo
`;

module.exports = { employeeInfoQuery, createEmployeeInfo };
