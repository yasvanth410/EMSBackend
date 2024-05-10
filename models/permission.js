const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  Name: {
    type: String,
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

module.exports = mongoose.model("permission", permissionSchema, "Permissions");
