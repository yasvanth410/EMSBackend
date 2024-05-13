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
    DepartmentId: String
    DepartmentName: String
}
type Certification{
    CertificationName: String
    CertificationDate: String
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
    FirstName: String
    MiddleName: String
    LastName: String
    EmployeeCode: String
    UserId: String
    Photo: String
    Gender: String
    Contact : Contact
    Email: Email
    Location: Location
    dob: String
    doj: String
    doc: String
    Department: Department
    SkillSet: Skillset
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
    DepartmentId: String
    DepartmentName: String
}
input CertificationInput{
    CertificationName: String
    CertificationDate: String
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
    UserId: String
    Photo: String
    Gender: String
    Contact : ContactInput
    Email: EmailInput
    Location: LocationInput
    dob: String
    doj: String
    doc: String
    Department: DepartmentInput
    SkillSet: SkillsetInput
    ManagerId: String
    Designation: String
    CreatedBy: String
    UpdatedBy: String
    IsActive: Int
    IsDeleted: Int
}`;

const createEmployeeInfo = `
createEmployeeInfo( input: EmployeeInfoInput ): EmployeeInfo
`;

module.exports = {employeeInfoQuery, createEmployeeInfo}