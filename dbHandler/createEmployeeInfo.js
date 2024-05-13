const EmployeeInfo = require('../models/employeeInfo');


async function saveEmployeeInfo(args){
    console.log(args);
    const { FirstName, MiddleName, LastName, EmployeeCode, UserId, Photo, Gender, Contact, Email, Location, dob, doj, doc, Department, SkillSet, ManagerId, Designation, CreatedBy, IsActive, IsDeleted} = args.input;
    const { CountryCode, Primary, Emergency } = Contact;
    // const { number:primaryNumber, internationalNumber:primaryInternationalNumber, nationalNumber:primaryNationalNumber, e164Number:primaryE164Number, countryCode: primaryCountryCode} = Primary
    // const { number:emergencyNumber, internationalNumber:emergencyInternationalNumber, nationalNumber:emergencyNationalNumber, e164Number:emergencyE164Number, countryCode: emergencyCountryCode} = Primary
    const { CompanyMail, PersonalMail} = Email;
    const { Flat, Area, Landmark, Pincode, City, State } = Location;
    const {DepartmentId, DepartmentName} = Department;
    const { EmployeeSkillsetId, PrimarySkillset, SecondarySkillset, SkillLevel, Experience, Certification} = SkillSet;
    const { CertificationName, CertificationDate } = Certification
    try {
        const date = new Date();
        const saveInfo = new EmployeeInfo({
            FirstName: FirstName,
            MiddleName: MiddleName,
            LastName: LastName,
            EmployeeCode: EmployeeCode,
            UserId: UserId,
            Photo: Photo,
            Gender: Gender,
            Contact: {
                CountryCode: CountryCode,
                Primary:Primary,
                Emergency:Emergency
            },
            Email: {
                CompanyMail: CompanyMail,
                PersonalMail: PersonalMail
            },
            Location: {
                Flat: Flat,
                Area: Area,
                Landmark: Landmark,
                Pincode: Pincode,
                City: City,
                State: State,
            },
            dob: dob,
            doj: doj,
            doc: doc,
            Department: {
                DepartmentId: DepartmentId,
                DepartmentName: DepartmentName
            },
            SkillSet: {
                EmployeeSkillsetId: EmployeeSkillsetId,
                PrimarySkillset: PrimarySkillset,
                SecondarySkillset: SecondarySkillset,
                SkillLevel: SkillLevel,
                Experience: Experience,
                Certification: {
                    CertificationName: CertificationName,
                    CertificationDate: CertificationDate
                }
            },
            ManagerId: ManagerId,
            Designation: Designation,
            CreatedBy: CreatedBy,
            CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(), 
            IsActive: IsActive,
            IsDeleted: IsDeleted
        });
        // console.log(saveInfo)
        const savedDate = await saveInfo.save();
        return savedDate; 
    } catch (error) {
        throw error;
    }
}

module.exports = saveEmployeeInfo