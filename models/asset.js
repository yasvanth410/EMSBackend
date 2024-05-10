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
  },
  AssetTag: {
    type: String,
    required: true,
  },
  SerialNumber: {
    type: String,
    required: true,
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
});

module.exports = mongoose.model("asset", assetSchema, "AssetDetails");
