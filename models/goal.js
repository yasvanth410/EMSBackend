const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  GoalName: {
    type: String,
    required: true,
  },
  GoalDescription: {
    type: String,
  },
  Status: {
    type: String,
  },
  StartDate: {
    type: String,
  },
  TargetEndDate: {
    type: String,
  },
  Achieveddate: {
    type: String,
  },
  CertificateId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "certificate",
    },
  ],
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeInfo",
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

module.exports = mongoose.model("goal", goalSchema, "GoalDetails");
