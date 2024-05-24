const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  CertificateName: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  CompletedDate: {
    type: String,
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

module.exports = mongoose.model(
  "certificate",
  certificateSchema,
  "CertificateDetails"
);
