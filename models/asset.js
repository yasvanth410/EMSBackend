const mongoose = require("mongoose");
const Counter = require("./Counter");

const assetSchema = new mongoose.Schema({
  AssetModel: {
    type: String,
    required: true,
  },
  AssetType: {
    type: String,
    required: true,
    enum: ["Laptop", "Tablet", "Phone", "Monitor", "Mouse", "Keyboard"],
  },
  Memory: {
    type: String,
  },
  Processor: {
    type: String,
  },
  OperatingSystem: {
    type: String,
  },
  WarrantyStart: {
    type: String,
    required: true,
  },
  WarrantyExpire: {
    type: String,
    required: true,
  },
  AssetTag: {
    type: String,
    unique: true,
  },
  SerialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  AssignDate: {
    type: String,
  },
  DischargeDate: {
    type: String,
  },
  AssetPurchaseDate: {
    type: String,
  },
  AssetCondition: {
    type: String,
    enum: ["Fair", "Bad", "Good", "Damaged", "Repaired", "Sold"],
  },
  Cost: {
    type: String,
  },
  Vendor: {
    type: String,
  },
  Description: {
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

assetSchema.pre("save", function (next) {
  Counter.findOneAndUpdate(
    { _id: "IN1000" },
    { $inc: { AssetTag: 1 } },
    { new: true, upsert: true }
  )
    .then((counter) => {
      // console.log(this.AssetType);
      // console.log(counter);
      switch (this.AssetType) {
        case "Laptop":
          this.AssetTag = `IN-PA-L${counter.AssetTag}`;
          break;
        case "Tablet":
          this.AssetTag = `IN-PA-T${counter.AssetTag}`;
          break;
        case "Phone":
          this.AssetTag = `IN-PA-P${counter.AssetTag}`;
          break;
        case "Monitor":
          this.AssetTag = `IN-PA-M${counter.AssetTag}`;
          break;

        default:
          this.AssetTag = `IN-PA-O${counter.AssetTag}`;
          break;
      }
      next();
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = mongoose.model("asset", assetSchema, "AssetDetails");
