const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    _id: false,
    CountryCode: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const contactValid = /^\+.{2,}$/;
                return contactValid.test(v);
            },
            message: (props) => `${props.value} should start wit + sign`,
        },
    },
    Primary: {
        type: String,
       
        required: true,
        // validate: {
        //     validator: function (v) {
        //         const contactValid = /^\d{10}$/;
        //         return contactValid.test(v);
        //     },
        //     message: (props) => `${props.value} should contains only 10 digits`,
        // },
    },
    Emergency: {
        type: String,
        
        required: true,
        // validate: {
        //     validator: function (v) {
        //         const contactValid = /^\d{10}$/;
        //         return contactValid.test(v);
        //     },
        //     message: (props) => `${props.value} should contains only 10 digits`,
        // },
    }
});

const emailSchema = new mongoose.Schema({
    _id: false,
    CompanyMail: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const validEmail = /^[a-zA-Z0-9._-]+@emp.in$/;
                return validEmail.test(v);
            },
            message: (props) =>
                `${props.value} is not in valid formate eg: example@emp.in`,
        },
        unique: true
    },
    PersonalMail: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return validEmail.test(v);
            },
            message: (props) =>
                `${props.value} is not in valid formate eg: example@gmail.com`,
        },
        unique:true
    }
});

const locationSchema = new mongoose.Schema({
    _id: false,
    Flat: {
        type: String,
        required: true,
    },
    Area: {
        type: String,
        required: true,
    },
    Landmark: {
        type: String,
        required: true,
    },
    Pincode: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const contactValid = /^\d{6}$/;
                return contactValid.test(v);
            },
            message: (props) => `${props.value} is not a valid pincode`,
        },
    },
    City: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
});

const departmentSchema = new mongoose.Schema({
    _id: false,
    DepartmentId: {
        type: String,
        required: true
    },
    DepartmentName: {
        type: String,
        required: true
    }
});

const certificationSchema = new mongoose.Schema({
    _id: false,
    CertificationName: String,
    CertificationDate: String
})
const skillSetSchema = new mongoose.Schema({
    _id: false,
    EmployeeSkillsetId: {
        type: String,
        required: true
    },
    PrimarySkillset: {
        type: [String],
        required: true
    },
    SecondarySkillset: {
        type: [String],
        requred: true
    } ,
    SkillLevel: {
        type: String,
        required: true
    },
    Experience: {
        type: String,
        required: true
    },
    Certification: certificationSchema
});

const employeeInfoSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    EmployeeCode: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
        required:true
    },
    Gender: {
        type: String,
        required: true
    },
    Contact : contactSchema,
    Email: emailSchema,
    Location: locationSchema,
    dob: {
        type: String,
        required: true
    }, 
    doj: {
        type: String,
        required: true
    }, 
    doc: {
        type: String,
        required: true
    },
    Department: departmentSchema,
    SkillSet: skillSetSchema,
    
    ManagerId: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    CreatedBy: String,
    CreatedDate: String,
    UpdatedBy: String,
    UpdatedDate: String,
    IsActive: {
        type: Number,
        enum: [0,1],
        default: 1,
        required: true
    },
    IsDeleted: {
        type: Number,
        enum: [0,1],
        default: 0,
        required: true
    },
});


module.exports = mongoose.model("employeeInfo", employeeInfoSchema, "EmployeeInfo");