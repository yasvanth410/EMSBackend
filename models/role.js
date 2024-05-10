const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Permission: {
    type: [String],
    required: true,
  },
  CreatedBy: {
    type: String,
  },
  CreatedDate: {
    type: String,
  },
  UpdatedBy: {
    type: String,
  },
  UpdatedDate: {
    type: String,
  },
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
});

module.exports = mongoose.model("role", roleSchema, "Roles");
