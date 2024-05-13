const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
          const nameValid = /^[a-z]+(_[a-z]+)$/;
          return nameValid.test(v);
      },
      message: (props) => {
          `${props.value} should contains only lower letter and no white spaces`
      }
  }
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
