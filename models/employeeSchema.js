const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const employeeSchema = mongoose.Schema({
    UserId:{
        type: String,
        required: true,
        unique: true
    },
    FirstName:{
        type:String,
        required:true,
        validate: {
            validator: function (v) {
                const nameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
                return nameValid.test(v);
            },
            message: (props) => {
                `${props.value} should contains only alphabets and no white spaces before and after`
            }
        }
    },
    LastName:{
        type:String,
        required:true,
        validate: {
            validator: function (v) {
                const nameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
                return nameValid.test(v);
            },
            message: (props) => {
                `${props.value} should contains only alphabets and no white spaces before and after`
            }
        }
    },
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    Role: {
        type:String,
        required:true,
        enum:['user', 'admin']
    },
    CreatedBy: String,
    CreatedDate: String,
    UpdatedBy: String,
    UpdatedDate: String,
    IsActive: {
        type:Number,
        required:true,
        enum:[0,1],
        default:1 
    },
    IsDeleted:{
        type:Number,
        required:true,
        enum:[0,1],
        default:0
    }
});

employeeSchema.pre('save', async function(next){
    try{
        const generateHash = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.Password, generateHash);
        this.Password = hashedPassword;
        next()
    }catch(error){
        next(error);
    }
})
module.exports = mongoose.model('employee', employeeSchema, 'Employee');