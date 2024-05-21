const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    DepartmentName: {
        type: String,
        required: true,
        unique:true
    },
    Description: {
        type: String
    },
    CreatedBy: String,
    CreatedDate: String,
    UpdatedBy: String,
    UpdatedDate: String,
    IsActive: {
      type: Number,
      enum: [0, 1],
      default: 1,
      required: true,
    },
    IsDeleted: {
      type: Number,
      enum: [0, 1],
      default: 0,
      required: true,
    },
})

module.exports = mongoose.model('department', departmentSchema, 'Department');