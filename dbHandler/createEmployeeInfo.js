const EmployeeInfo = require('../models/employeeInfo');
const DepartmentModel = require('../models/department');


async function saveEmployeeInfo(args){
    const { FirstName, MiddleName, LastName, EmployeeCode, Photo, Gender, Contact, Email, Location, dob, doj, doc, Department, SkillSet, Assets, ManagerId, Designation, CreatedBy, IsActive, IsDeleted} = args.input;
    const { CountryCode, Primary, Emergency } = Contact;
    // const { number:primaryNumber, internationalNumber:primaryInternationalNumber, nationalNumber:primaryNationalNumber, e164Number:primaryE164Number, countryCode: primaryCountryCode} = Primary
    // const { number:emergencyNumber, internationalNumber:emergencyInternationalNumber, nationalNumber:emergencyNationalNumber, e164Number:emergencyE164Number, countryCode: emergencyCountryCode} = Primary
    const { CompanyMail, PersonalMail} = Email;
    const { Flat, Area, Landmark, Pincode, City, State } = Location;
    const { EmployeeSkillsetId, PrimarySkillset, SecondarySkillset, SkillLevel, Experience, Certification} = SkillSet;
    const { CertificationName, CertificationDate } = Certification
    try {

        const departmentData = await DepartmentModel.findOne({DepartmentName: Department, IsDeleted: 0});
        console.log(departmentData.query.Schema.obj);
        if(departmentData){
            const date = new Date();
            const saveInfo = new EmployeeInfo({
                FirstName: FirstName,
                MiddleName: MiddleName,
                LastName: LastName,
                EmployeeCode: EmployeeCode,
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
                Department: departmentData._id,
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
                Assets: Assets,
                ManagerId: ManagerId,
                Designation: Designation,
                CreatedBy: args.Username,
                CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(), 
                IsActive: IsActive,
                IsDeleted: IsDeleted
            });
            console.log(saveInfo)
            const savedDate = await saveInfo.save();
            return savedDate; 
        }
        else{
            throw new Error("department not found");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = saveEmployeeInfo