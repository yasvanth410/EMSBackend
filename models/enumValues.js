const mongoose = require("mongoose");

const enumValuesSchema = new mongoose.Schema({
  AssetType: {
    type: [String],
    required: true,
  },
  Warranty: {
    type: [String],
    required: true,
  },
  Skillset: {
    type: [String],
    required: true,
  },
  SkillLevel: {
    type: [String],
    required: true,
  },
  Department: {
    type: [String],
    required: true,
  },
  Designation: {
    type: [String],
    required: true,
  },
  Role: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("enum", enumValuesSchema, "EnumValues");
