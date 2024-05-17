const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  AssetName: {
    type: String,
    required: true,
  },
  AssetModel: {
    type: String,
    required: true,
  },
  AssetType: {
    type: String,
    required: true,
    enum: ["Laptop", "Mobile", "Keyboard", "Mouse", "Wifi Router"],
  },
  Memory: {
    type: String,
    required: true,
  },
  Processor: {
    type: String,
    required: true,
  },
  OperatingSystem: {
    type: String,
    required: true,
  },
  Warranty: {
    type: String,
    required: true,
    enum: [
      "1 Year",
      "2 Year",
      "3 Year",
      "4 Year",
      "5 Year",
      "6 Year",
      "7 Year",
    ],
  },
  AssetTag: {
    type: String,
    required: true,
    unique: true,
  },
  SerialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  AssignTo:{
    type: String,
  },
  Description: {
    type: String,
  },
  Addon: {
    type: String,
  },
  IsWorkable: {
    type: Number,
    enum: [0, 1],
    default: 1,
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
  Message:{
    type: String
  }
});

module.exports = mongoose.model("asset", assetSchema, "AssetDetails");
